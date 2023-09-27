import { TagInfo } from '@/features/tags';
import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

describe('Tag Info', () => {
  it('should render the tag info', async () => {
    appRender(<TagInfo tag={testData.tags[0]} relatedArticleSize={1} />);

    const head = screen.queryByRole('heading', {
      name: `# ${testData.tags[0]['name']}`,
    });

    expect(head).toBeInTheDocument();
  });

  it('should render the no data message if the data does not exist', async () => {
    appRender(<TagInfo tag={null} relatedArticleSize={0} />);

    const noDataMessage = screen.getByRole('heading', {
      name: /表示するデータがありません/i,
    });

    const head = screen.queryByRole('heading', {
      name: `# ${testData.tags[0]['name']}`,
    });

    expect(noDataMessage).toBeInTheDocument();
    expect(head).not.toBeInTheDocument();
    expect(head).toBeNull();
  });
});
