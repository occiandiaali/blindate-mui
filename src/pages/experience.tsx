import { CONFIG } from 'src/config-global';

import { ExperienceView } from 'src/sections/experience/view';

// ---------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Room - ${CONFIG.appName}`}</title>
      <ExperienceView />
    </>
  );
}
