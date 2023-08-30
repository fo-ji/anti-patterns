import { CategoriesList } from '@/features/categories';
import { testData } from '@/testing/test-data';
import { render, screen } from '@/testing/test-utils';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('Categories List', () => {
  const urls = testData.categories.map((category) => ({
    url: `/categories/${category.id}`,
    name: category.name,
  }));
  test.each(urls)('$url では $name がカレントになっている', ({ url, name }) => {
    mockUsePathname.mockImplementation(() => url);
    render(<CategoriesList categories={testData.categories} />);
    const link = screen.getByRole('link', { name });
    expect(link).toHaveAttribute('aria-current', 'page');
  });
});
