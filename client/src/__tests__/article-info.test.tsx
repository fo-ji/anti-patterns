import { ArticleInfo } from '@/features/articles';
import { testData } from '@/testing/test-data';
import { render, screen } from '@/testing/test-utils';

describe('Article Info', () => {
  it('should render the article info', async () => {
    render(<ArticleInfo article={testData.articleWithRelations[0]} />);

    const article = screen.queryByRole('article');

    expect(article).toBeInTheDocument();
  });

  it('should render the no data message if the data does not exist', async () => {
    render(<ArticleInfo />);

    const noDataMessage = screen.getByRole('heading', {
      name: /表示するデータがありません/i,
    });

    const article = screen.queryByRole('article');

    expect(noDataMessage).toBeInTheDocument();
    expect(article).not.toBeInTheDocument();
    expect(article).toBeNull();
  });
});
