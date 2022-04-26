import Icon from 'assets/icons';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

export default React.forwardRef(function LinkButton(
  props: {
    icon?: string;
    isActive?: boolean;
    title?: string;
    onClick?: () => void;
    href?: string;
    activeByRoute?: boolean;
    iconWith?: string;
    iconHeight?: string;
  },
  ref: any
) {
  const router = useRouter();

  const isActive = props.activeByRoute
    ? router.pathname === props.href
    : props.isActive;

  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className={clsx(
        `
      py-3 px-4 
      text-white 
      text-base
      font-ubuntu
      flex items-center justify-start sm:justify-center 
      focus:outline-none focus:ring-2 focus:ring-green focus:ring-inset
      `,
        isActive ? 'bg-green-light' : 'bg-green-dark'
      )}
      ref={ref}
    >
      <Icon
        name={props.icon}
        className="w-10 mr-2"
        width={props.iconWith || '1.5rem'}
      />
      {props.title}
    </a>
  );
});
