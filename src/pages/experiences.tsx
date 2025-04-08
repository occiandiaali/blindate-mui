import { CONFIG } from 'src/config-global';

import { ExperiencesView } from 'src/sections/experiences/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Experiences - ${CONFIG.appName}`}</title>

      <ExperiencesView />
    </>
  );
}
