import clsx from 'clsx';

export default function PoweredByBadge({
  languages,
  containerStyle,
}: {
  languages: string;
  containerStyle?: string;
}) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between w-auto h-auto px-3 bg-green-dark',
        containerStyle
      )}
    >
      <p className="text-base text-white font-ubuntu">{languages}</p>
    </div>
  );
}
