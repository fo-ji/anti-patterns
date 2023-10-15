import { ArticlesList } from '@/features/articles';
import { testData } from '@/testing/test-data';
import { appRender, screen, within } from '@/testing/test-utils';

describe('Articles List', () => {
  it('should render the articles list', async () => {
    appRender(<ArticlesList articles={testData.articles} />);

    const list = screen.queryByRole('list');

    expect(list).toBeInTheDocument();
    expect(within(list as HTMLElement).getAllByRole('listitem')).toHaveLength(
      1,
    );
  });

  it('should render the no data message if the data does not exist', async () => {
    appRender(<ArticlesList articles={[]} />);

    const noDataMessage = screen.getByRole('heading', {
      name: /表示するデータがありません/i,
    });

    const list = screen.queryByRole('list');

    expect(noDataMessage).toBeInTheDocument();
    expect(list).not.toBeInTheDocument();
    expect(list).toBeNull();
  });
});
