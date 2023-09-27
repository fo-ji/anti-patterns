import type { ReactElement } from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import { AppProvider } from '@/providers/app';

// renders the app within the app provider
export const appRender = (ui: ReactElement) => {
  return render(ui, {
    // MEMO: next@13.4.12以下なら動くが最新はエラーが出る
    // wrapper: AppProvider,
  });
};

export * from '@testing-library/react';
export { userEvent };
