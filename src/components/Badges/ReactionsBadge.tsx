import Icon from 'assets/icons';
import clsx from 'clsx';

export default function ReactionsBadge({
  reactions,
  containerStyle,
}: {
  reactions: number;
  containerStyle?: string;
}) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between w-auto h-auto px-3 ml-2 bg-orange-light',
        containerStyle
      )}
    >
      <Icon name="face" />
      <p className="ml-2 text-base text-white font-ubuntu">{reactions}</p>
    </div>
  );
}
