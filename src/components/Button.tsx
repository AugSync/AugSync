import Icon from 'assets/icons';
import clsx from 'clsx';

export default function Button(props: {
  icon?: string;
  isActive?: boolean;
  title?: string;
}) {
  return (
    <button
      className={clsx(
        `
      py-3 px-4 
      text-white 
      text-base
      flex items-center justify-center 
      focus:outline-none focus:ring-2 focus:ring-green focus:ring-inset
      `,
        props.isActive ? 'bg-green-light' : 'bg-green-dark'
      )}
    >
      <Icon name={props.icon} className="mr-2" />
      {props.title}
    </button>
  );
}
