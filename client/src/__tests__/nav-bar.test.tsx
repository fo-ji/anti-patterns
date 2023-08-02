import { NavBar } from '@/components/nav-bar';
import { render, screen } from '@/testing/test-utils';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('@/components/nav-bar/nav-bar.tsx', () => {
  test.each([
    { url: '/', name: 'ホーム' },
    { url: '/ranking', name: 'ランキング' },
  ])('$url では $name がカレントになっている', ({ url, name }) => {
    mockUsePathname.mockImplementation(() => url);
    render(<NavBar />);
    const link = screen.getByRole('link', { name });
    expect(link).toHaveAttribute('aria-current', 'page');
  });
});
