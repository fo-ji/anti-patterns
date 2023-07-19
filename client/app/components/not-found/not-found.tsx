import Image from 'next/image';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Image
        src="/logo.png"
        alt="Anti-Patterns"
        width={240}
        height={68}
        priority
      />
      <h2>お探しのページが見つかりませんでした</h2>
    </div>
  );
};
