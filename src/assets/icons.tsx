import { Facebook, Twitter, Github, LinkedIn } from 'assets/socialMediaIcons';

export interface IconProps {
  name?: string;
  color?: string;
  className?: string;
  width?: string;
  height?: string;
}

export function Home(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '21'}
      fill="none"
      viewBox="0 0 24 21"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M4 21c-2.21 0-4-1.296-4-2.896V8.452a.71.71 0 01.007-.096H0c0-.556.305-1.09.848-1.483L9.172.848c1.562-1.13 4.094-1.13 5.656 0l8.324 6.025c.543.393.848.927.848 1.483h-.007a.708.708 0 01.007.096v9.652c0 1.6-1.79 2.896-4 2.896H4zm8.943-18.787l8.39 6.074v9.817c0 .533-.597.966-1.333.966h-4v-4.826c0-1.6-1.79-2.896-4-2.896s-4 1.296-4 2.896v4.826H4c-.736 0-1.333-.433-1.333-.966V8.287l8.39-6.074c.52-.377 1.365-.377 1.886 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Document(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '22'}
      fill="none"
      viewBox="0 0 24 22"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M0 3.483c0-1.74 1.79-3.15 4-3.15h10.667C19.82.333 24 3.624 24 7.683v10.5c0 1.74-1.79 3.15-4 3.15H4c-2.21 0-4-1.41-4-3.15v-14.7zm13.333-1.05H4c-.736 0-1.333.47-1.333 1.05v14.7c0 .58.597 1.05 1.333 1.05h16c.736 0 1.333-.47 1.333-1.05v-10.5h-8v-5.25zm7.446 3.15C19.922 4.04 18.149 2.882 16 2.538v3.045h4.779zM5.333 8.5h5.334V6.458H5.333V8.5zm0 4.083h13.334v-2.041H5.333v2.041zm13.334 4.084H5.333v-2.042h13.334v2.042z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Folder(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '21'}
      fill="none"
      viewBox="0 0 24 21"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M4 0a2 2 0 00-2 2v1c0 .057.002.113.007.168A3.001 3.001 0 000 6v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3h-9.126A4.002 4.002 0 008 0H4zm5.732 3A2 2 0 008 2H4v1h5.732zM3 5a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1H3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '22'}
      fill="none"
      viewBox="0 0 24 22"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M.013 2.304c0-.81.597-1.466 1.333-1.466h21.32c.737 0 1.334.656 1.334 1.466v16.602c0 1.62-1.194 2.932-2.667 2.932H2.667C1.194 21.838 0 20.525 0 18.906V2.779c0-.07.004-.138.013-.205v-.27zm2.654 3.26v13.342h18.666V5.565l-6.504 7.152c-1.563 1.717-4.095 1.717-5.657 0L2.667 5.564zm2.096-1.841h14.474l-6.294 6.92a1.25 1.25 0 01-1.886 0l-6.294-6.92z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Back(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '21'}
      fill="none"
      viewBox="0 0 24 21"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M19.636 21C22.046 21 24 19.29 24 17.182V3.818C24 1.71 22.046 0 19.636 0H4.364C1.954 0 0 1.71 0 3.818v13.364C0 19.29 1.954 21 4.364 21h15.272zM4.364 19.09h15.272c1.205 0 2.182-.854 2.182-1.908V3.818c0-1.054-.977-1.909-2.182-1.909H4.364c-1.205 0-2.182.855-2.182 1.91v13.363c0 1.054.977 1.909 2.182 1.909zm6.037-4.54l1.542-1.35-1.994-1.745h8.222v-1.91H9.949L11.943 7.8l-1.542-1.35-4.629 4.05 4.629 4.05z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={props.color || '#C2862F'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.27273 3.63636H32.7273C34.7356 3.63636 36.3636 5.26442 36.3636 7.27273V32.7273C36.3636 34.7356 34.7356 36.3636 32.7273 36.3636H7.27273C5.26442 36.3636 3.63636 34.7356 3.63636 32.7273V7.27273C3.63636 5.26442 5.26442 3.63636 7.27273 3.63636ZM0 7.27273C0 3.25611 3.25611 0 7.27273 0H32.7273C36.7438 0 40 3.25611 40 7.27273V32.7273C40 36.7438 36.7438 40 32.7273 40H7.27273C3.25611 40 0 36.7438 0 32.7273V7.27273ZM16.3635 27.8729L27.2726 20L16.3635 12.127V27.8729Z"
      />
    </svg>
  );
}

function Flag(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '24'}
      fill="none"
      viewBox="0 0 24 24"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M0 24h3V10.667h9v2.666h12V2.667H13.5V0H0v24zM12 2.667H3V8h10.5v2.667H21V5.333h-9V2.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function Face(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.width || '24'}
      fill="none"
      viewBox="0 0 24 24"
      className={props.className}
    >
      <path
        fill={props.color || '#F4F4F4'}
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2.4a9.6 9.6 0 009.6-9.6A9.6 9.6 0 0012 2.4 9.6 9.6 0 002.4 12a9.6 9.6 0 009.6 9.6zM8.4 10.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm8.4 2.4a4.8 4.8 0 01-9.6 0h9.6zm-1.2-2.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default function Icon(props: IconProps) {
  switch (props.name) {
    case 'home':
      return <Home {...props} />;
    case 'document':
      return <Document {...props} />;
    case 'folder':
      return <Folder {...props} />;
    case 'mail':
      return <Mail {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'github':
      return <Github {...props} />;
    case 'linked-in':
      return <LinkedIn {...props} />;
    case 'back':
      return <Back {...props} />;
    case 'play':
      return <Play {...props} />;
    case 'flag':
      return <Flag {...props} />;
    case 'face':
      return <Face {...props} />;
    default:
      return <Home {...props} />;
  }
}
