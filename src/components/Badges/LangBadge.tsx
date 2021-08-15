import Icon from 'assets/icons';

export default function LangBadge({ lang }: { lang: string }) {
  return (
    <div className="flex items-center justify-between w-auto h-auto p-4 bg-green-dark">
      <Icon name="flag" />
      <p className="ml-2 text-base text-white font-ubuntu">{lang}</p>
    </div>
  );
}
