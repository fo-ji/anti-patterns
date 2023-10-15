import { Link } from '../link';

export const Footer = () => {
  return (
    <footer className="border-t-basic-dark flex h-14 items-center justify-center border-t px-4 py-2">
      Powered by <Link href="/">Anti Patterns</Link>
    </footer>
  );
};
