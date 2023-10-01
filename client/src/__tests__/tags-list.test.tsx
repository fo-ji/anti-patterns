import { TagsList } from '@/features/tags';
import { testData } from '@/testing/test-data';
import { appRender, screen, within } from '@/testing/test-utils';

describe('Tags List', () => {
  it('should render the tags list', async () => {
    appRender(<TagsList tags={testData.tags} />);

    const list = screen.queryByRole('list');

    expect(list).toBeInTheDocument();
    expect(within(list as HTMLElement).getAllByRole('listitem')).toHaveLength(
      2,
    );
  });
});
