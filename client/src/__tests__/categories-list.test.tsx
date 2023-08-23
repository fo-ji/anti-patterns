import { CategoriesList } from '@/features/categories';
import { render, screen } from '@/testing/test-utils';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('Categories List', () => {
  test.each([
    { url: '/categories/lifestyle', name: '暮らし' },
    { url: '/categories/work', name: '仕事' },
    { url: '/categories/learn', name: '学び' },
    { url: '/categories/love', name: '恋愛' },
    { url: '/categories/tech', name: 'テクノロジー' },
  ])('$url では $name がカレントになっている', ({ url, name }) => {
    mockUsePathname.mockImplementation(() => url);
    render(<CategoriesList />);
    const link = screen.getByRole('link', { name });
    expect(link).toHaveAttribute('aria-current', 'page');
  });
});
