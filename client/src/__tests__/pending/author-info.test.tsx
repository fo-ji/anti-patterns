import { AuthorInfo } from '@/features/articles';
import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

describe('Author Info', () => {
  it('should render the author info', async () => {
    appRender(<AuthorInfo article={testData.articleWithRelations[0]} />);

    const list = screen.queryByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('should render the no data message if the data does not exist', async () => {
    appRender(<AuthorInfo />);

    const noDataMessage = screen.getByRole('heading', {
      name: /表示するデータがありません/i,
    });

    const list = screen.queryByRole('list');

    expect(noDataMessage).toBeInTheDocument();
    expect(list).not.toBeInTheDocument();
    expect(list).toBeNull();
  });
});
