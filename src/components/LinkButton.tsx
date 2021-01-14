import Icon from 'assets/icons';
import clsx from 'clsx';
import React from 'react';
import { useRouter } from 'next/router';

export default React.forwardRef(function LinkButton(
  props: {
    icon?: string;
    isActive?: boolean;
    title?: string;
    onClick?: () => void;
    href?: string;
    activeByRoute?: boolean;
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
      flex items-center justify-center 
      focus:outline-none focus:ring-2 focus:ring-green focus:ring-inset
      `,
        isActive ? 'bg-green-light' : 'bg-green-dark'
      )}
      ref={ref}
    >
      <Icon name={props.icon} className="mr-2" />
      {props.title}
    </a>
  );
});
