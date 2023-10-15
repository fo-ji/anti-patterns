import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export const Error = () => {
  return (
    <div className="m-auto flex items-center gap-2">
      <ExclamationCircleIcon className="h-5 w-5" />
      <p>Error</p>
    </div>
  );
};
