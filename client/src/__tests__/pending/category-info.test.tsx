import { CategoryInfo } from '@/features/categories';
import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

describe('Category Info', () => {
  it('should render the category info', async () => {
    appRender(<CategoryInfo category={testData.categories[0]} />);

    const head = screen.queryByRole('heading', {
      name: testData.categories[0]['name'],
    });

    expect(head).toBeInTheDocument();
  });

  it('should render the no data message if the data does not exist', async () => {
    appRender(<CategoryInfo category={null} />);

    const noDataMessage = screen.getByRole('heading', {
      name: /表示するデータがありません/i,
    });

    const head = screen.queryByRole('heading', {
      name: testData.categories[0]['name'],
    });

    expect(noDataMessage).toBeInTheDocument();
    expect(head).not.toBeInTheDocument();
    expect(head).toBeNull();
  });
});
