import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import Icon from 'assets/icons';
import { PoweredByBadge } from 'components/Badges';
import { IProject } from 'lib/dato-cms-service';
import MarkDown from 'components/MarkDown';
import { capitalize } from 'lodash';
import Link from 'next/link';

export default function Project({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Hero
        alt={project.openGraph.alt}
        responsiveImage={project.openGraph.responsiveImage}
      />
      <article className="flex-auto w-full p-7 sm:w-4/5  my-masonry-grid_max-width">
        <h1 className="text-2xl text-left font-play text-blue">
          {project.title}
        </h1>
        <h2 className="mt-4 text-lg text-left font-ubuntu text-orange-dark">
          {project.seo.description}
        </h2>
        <div className="flex flex-row flex-wrap mt-4">
          {project.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/portfolio?search=${capitalize(tag.title)}`}
              className="mb-4 mr-3"
              passHref
            >
              <PoweredByBadge languages={capitalize(tag.title)} />
            </Link>
          ))}
        </div>

        <div className="inline-block px-6 py-4 bg-green">
          <div className="flex flex-col items-center sm:flex-row">
            <a
              href={project.seeInOperationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-4 cursor-pointer sm:mb-0"
            >
              <Icon name="play" width="2.5rem" />
              <p className="ml-4 mr-6 text-lg font-play text-orange">
                See in operation
              </p>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
            >
              <Icon name="github" width="2.5rem" />
              <p className="ml-4 text-lg font-play text-blue">
                Github Repository
              </p>
            </a>
          </div>
        </div>
        <MarkDown content={project.content} />
      </article>
      <Footer />
    </div>
  );
}
