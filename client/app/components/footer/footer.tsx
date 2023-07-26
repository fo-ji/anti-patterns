import { Link } from '../link';

export const Footer = () => {
  return (
    <footer className="flex h-14 items-center justify-center px-4 py-2 text-secondary">
      Powered by <Link href="/">Anti Patterns</Link>
    </footer>
  );
};
