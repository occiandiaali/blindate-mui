import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Loader, PointerLockControls } from '@react-three/drei';

import Floor from '../components/Floor.jsx';
import Lights from '../components/Light.jsx';

const BasicScene = ({ children }) => (
  <section style={{ width: '78vw', height: '70vh' }}>
    <Canvas shadows camera={{ fov: 50 }}>
      <Lights />

      <Physics gravity={[0, -9.8, 0]}>
        {children}

        <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
      </Physics>

      <PointerLockControls />
    </Canvas>
    <Loader />
  </section>
);

export default BasicScene;
