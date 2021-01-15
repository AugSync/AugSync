// section -> label
const sectionLabelMap = {
  'Core Changes': 'core',
  'Feature Changes': 'feature',
  'Bug fixes': 'bug',
};

const fallbackSection = 'Misc Changes';

// --------------------------------------------------

const prNumberRegex = /\(#([-0-9]+)\)/;

const getCommitPullRequest = async (commit, github) => {
  const match = prNumberRegex.exec(commit.title);

  console.log(JSON.stringify({ match, commitTitleL: commit.title }), null, 2);

  if (!match) {
    return null;
  }

  const number = parseInt(match[1], 10);

  console.log(JSON.stringify({ number, commitTitleL: commit.title }), null, 2);

  if (!number) {
    return null;
  }

  const { data } = await github.connection.pullRequests.get({
    owner: github.repoDetails.user,
    repo: github.repoDetails.repo,
    number,
  });

  console.log(
    JSON.stringify({ prData: data, commitTitleL: commit.title }),
    null,
    2
  );

  return data;
};

const getSectionForPullRequest = (pullRequest) => {
  const { labels } = pullRequest;

  // sections defined first will take priority
  for (const [section, label] of Object.entries(sectionLabelMap)) {
    if (labels.some((prLabel) => prLabel.name === label)) {
      return section;
    }
  }

  return null;
};

const groupByLabels = async (commits, github) => {
  // Initialize the sections object with empty arrays
  const sections = Object.keys(sectionLabelMap).reduce((sections, section) => {
    sections[section] = [];
    return sections;
  }, {});
  console.log(JSON.stringify({ firstSections: sections }), null, 2);
  sections.__fallback = [];

  for (const commit of commits) {
    const pullRequest = await getCommitPullRequest(commit, github);

    console.log(
      JSON.stringify({ commitTitle: commit.title, pullRequest }),
      null,
      2
    );

    if (pullRequest) {
      const section = getSectionForPullRequest(pullRequest);

      if (section) {
        // Add the change to the respective section
        sections[section].push({
          title: pullRequest.title,
          number: pullRequest.number,
        });

        continue;
      }

      // No section found, add it to the fallback section
      sections.__fallback.push({
        title: pullRequest.title,
        number: pullRequest.number,
      });

      continue;
    }

    // No Pull Request found, add it to the fallback section but without the number
    sections.__fallback.push({
      title: commit.title,
    });
  }

  return sections;
};

function cleanupPRTitle(title) {
  if (title.startsWith('[Docs] ')) {
    return title.replace('[Docs] ', '');
  }

  return title;
}

const buildChangelog = (sections, authors) => {
  let text = '';

  for (const section in sections) {
    const changes = sections[section];

    // No changes in this section? Don't render it
    if (changes.length === 0) {
      continue;
    }

    const title = section === '__fallback' ? fallbackSection : section;
    text += `### ${title}\n\n`;

    for (const change of changes) {
      const numberText = change.number != null ? `: #${change.number}` : '';

      text += `- ${cleanupPRTitle(change.title)}${numberText}\n`;
    }

    text += '\n';
  }

  if (authors.size > 0) {
    text += '### Credits \n\n';
    text += 'Huge thanks to ';

    let index = 1;
    authors.forEach((author) => {
      // GitHub links usernames if prefixed with @
      text += `@${author}`;

      const penultimate = index === authors.size - 1;
      const notLast = index !== authors.size;

      if (penultimate) {
        // Oxford comma is applied when list is bigger than 2 names
        if (authors.size > 2) {
          text += ',';
        }

        text += ' and ';
      } else if (notLast) {
        text += ', ';
      }

      index += 1;
    });

    text += ' for helping!';
    text += '\n';
  }

  return text;
};

module.exports = async (markdown, metadata) => {
  const { commits, authors, githubConnection, repoDetails } = metadata;

  const github = { connection: githubConnection, repoDetails };

  const sections = await groupByLabels(commits.all, github);
  console.log(JSON.stringify(sections, null, 2));
  const changelog = buildChangelog(sections, authors);
  console.log(changelog);

  return changelog;
};
