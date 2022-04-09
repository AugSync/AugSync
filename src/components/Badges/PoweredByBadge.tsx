import clsx from 'clsx';

export default function PoweredByBadge({
  languages,
  containerStyle,
}: {
  languages: string;
  containerStyle?: string;
}) {
  return (
    <div className={clsx('px-3 bg-green-dark', containerStyle)}>
      <p className="text-base text-right text-white font-ubuntu,">
        {languages}
      </p>
    </div>
  );
}
