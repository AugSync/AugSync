import { Facebook, Twitter, Github, LinkedIn } from 'assets/socialMediaIcons';

export interface IconProps {
  name?: string;
  color?: string;
  className?: string;
}

export function Home(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
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
      width="24"
      height="22"
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
      width="24"
      height="21"
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
      width="24"
      height="22"
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
    default:
      return <Home {...props} />;
  }
}
