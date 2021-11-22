import { IconProps } from 'assets/icons';

export function Facebook(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '18'}
      height={props.width || '32'}
      fill="none"
      viewBox="0 0 18 32"
      {...props}
    >
      <path
        fill={props.color || '#42C2B3'}
        className={props.className}
        d="M4.33 31.833h6.667v-13.35h6.006l.66-6.633h-6.666V8.5c0-.92.746-1.667 1.666-1.667h5V.167h-5A8.333 8.333 0 004.33 8.5v3.35H.997l-.66 6.633H4.33v13.35z"
      ></path>
    </svg>
  );
}

export function Twitter(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '20'}
      height={props.width || '30'}
      fill="none"
      viewBox="0 0 20 30"
      {...props}
    >
      <path
        fill={props.color || '#42C2B3'}
        className={props.className}
        fillRule="evenodd"
        d="M3.333 0a3.333 3.333 0 013.334 3.333v5h10a3.333 3.333 0 110 6.667h-10v3.333a5 5 0 005 5h5a3.333 3.333 0 110 6.667h-5C5.223 30 0 24.777 0 18.333v-15A3.333 3.333 0 013.333 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Github(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '40'}
      height={props.width || '40'}
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={props.color || '#42C2B3'}
        className={props.className}
        fillRule="evenodd"
        d="M20 0C8.95 0 0 8.95 0 20c0 8.85 5.725 16.325 13.675 18.975 1 .175 1.375-.425 1.375-.95 0-.475-.025-2.05-.025-3.725C10 35.225 8.7 33.075 8.3 31.95c-.225-.575-1.2-2.35-2.05-2.825-.7-.375-1.7-1.3-.025-1.325 1.575-.025 2.7 1.45 3.075 2.05 1.8 3.025 4.675 2.175 5.825 1.65.175-1.3.7-2.175 1.275-2.675-4.45-.5-9.1-2.225-9.1-9.875 0-2.175.775-3.975 2.05-5.375-.2-.5-.9-2.55.2-5.3 0 0 1.675-.525 5.5 2.05 1.6-.45 3.3-.675 5-.675 1.7 0 3.4.225 5 .675 3.825-2.6 5.5-2.05 5.5-2.05 1.1 2.75.4 4.8.2 5.3 1.275 1.4 2.05 3.175 2.05 5.375 0 7.675-4.675 9.375-9.125 9.875.725.625 1.35 1.825 1.35 3.7 0 2.675-.025 4.825-.025 5.5 0 .525.375 1.15 1.375.95C34.275 36.325 40 28.825 40 20 40 8.95 31.05 0 20 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '40'}
      height={props.width || '40'}
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={props.color || '#42C2B3'}
        className={props.className}
        d="M20 0C8.956 0 0 8.956 0 20s8.956 20 20 20 20-8.956 20-20S31.044 0 20 0zm-5.812 30.234h-4.87V15.58h4.87v14.654zM11.753 13.58h-.032c-1.634 0-2.691-1.125-2.691-2.531 0-1.438 1.089-2.532 2.755-2.532s2.692 1.094 2.724 2.532c0 1.406-1.058 2.531-2.756 2.531zm19.999 16.655h-4.87v-7.84c0-1.97-.706-3.313-2.468-3.313-1.346 0-2.147.906-2.5 1.781-.128.313-.16.75-.16 1.189v8.183h-4.87s.064-13.279 0-14.654h4.87v2.075c.648-.998 1.806-2.419 4.39-2.419 3.205 0 5.608 2.095 5.608 6.596v8.402z"
      ></path>
    </svg>
  );
}
