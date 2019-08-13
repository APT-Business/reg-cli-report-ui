import React from 'react';

export type Props = React.ComponentProps<'svg'>;

export const CloseIcon: React.FC<Props> = ({ fill, ...rest }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <path
      d="M12.8068 12.0001L19.2592 5.54677C19.482 5.32388 19.482 4.96155 19.2592 4.73867C19.0363 4.51578 18.674 4.51578 18.4512 4.73867L11.9989 11.192L5.54652 4.73867C5.32367 4.51578 4.96139 4.51578 4.73854 4.73867C4.5157 4.96155 4.5157 5.32388 4.73854 5.54677L11.1909 12.0001L4.73854 18.4535C4.5157 18.6764 4.5157 19.0387 4.73854 19.2616C4.85054 19.3736 4.99682 19.4285 5.1431 19.4285C5.28938 19.4285 5.43566 19.3725 5.54766 19.2616L12 12.8082L18.4523 19.2616C18.5643 19.3736 18.7106 19.4285 18.8569 19.4285C19.0032 19.4285 19.1495 19.3725 19.2615 19.2616C19.4843 19.0387 19.4843 18.6764 19.2615 18.4535L12.8091 12.0001H12.8068Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54766 19.2616C5.43566 19.3725 5.28938 19.4285 5.1431 19.4285C4.99682 19.4285 4.85054 19.3736 4.73855 19.2616C4.5157 19.0387 4.5157 18.6764 4.73855 18.4535L11.1909 12.0001L4.73855 5.54676C4.5157 5.32388 4.5157 4.96155 4.73855 4.73866C4.96139 4.51578 5.32367 4.51578 5.54652 4.73866L11.9989 11.192L18.4512 4.73866C18.674 4.51578 19.0363 4.51578 19.2592 4.73866C19.482 4.96155 19.482 5.32388 19.2592 5.54676L12.8068 12.0001H12.8091L19.2615 18.4535C19.4843 18.6764 19.4843 19.0387 19.2615 19.2616C19.1495 19.3725 19.0032 19.4285 18.8569 19.4285C18.7106 19.4285 18.5643 19.3736 18.4523 19.2616L12 12.8082L5.54766 19.2616ZM12 13.6165L5.94963 19.6678C5.72733 19.8879 5.43519 20 5.1431 20C4.85366 20 4.55944 19.8907 4.3345 19.6657C3.8885 19.2197 3.8885 18.4955 4.3345 18.0494L10.3828 12.0001L4.3345 5.95088C3.8885 5.50481 3.8885 4.78062 4.3345 4.33455C4.7805 3.88848 5.50457 3.88848 5.95056 4.33455L11.9989 10.3838L18.0472 4.33455C18.4931 3.88848 19.2172 3.88848 19.6632 4.33455C20.1092 4.78062 20.1092 5.50481 19.6632 5.95088L13.6161 11.999L19.6655 18.0494C20.1115 18.4955 20.1115 19.2197 19.6655 19.6657L19.6634 19.6678C19.4411 19.8879 19.149 20 18.8569 20C18.5675 20 18.2732 19.8907 18.0483 19.6657L12 13.6165Z"
      fill={fill}
    />
  </svg>
);