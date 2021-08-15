import Icon from 'assets/icons';

export default function ReactionsBadge({ reactions }: { reactions: number }) {
  return (
    <div className="flex items-center justify-between w-auto h-auto p-4 ml-2 bg-orange-light">
      <Icon name="face" />
      <p className="ml-2 text-base text-white font-ubuntu">{reactions}</p>
    </div>
  );
}
