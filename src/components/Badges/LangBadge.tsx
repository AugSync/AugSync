import Icon from 'assets/icons';
import clsx from 'clsx';

export default function LangBadge({
  lang,
  containerStyle,
}: {
  lang: string;
  containerStyle?: string;
}) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between w-auto h-auto px-3 bg-green-dark',
        containerStyle
      )}
    >
      <Icon name="flag" />
      <p className="ml-2 text-base text-white font-ubuntu">{lang}</p>
    </div>
  );
}
