import { CONFIG } from 'src/config-global';

import { MembersView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Members - ${CONFIG.appName}`}</title>

      <MembersView />
    </>
  );
}
