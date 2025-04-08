//import { useState } from 'react';
import { Sky } from '@react-three/drei';
import { useParams, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Iconify } from 'src/components/iconify';

import BaseBox from '../ui/BaseBox';
import BasicScene from '../ui/BaseScene';
import BaseCharacter from '../ui/BaseCharacter';
import ThreeModel from '../components/ThreeModel';

// -----------------------------

export function ExperienceView() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  //   const newRoom = '';

  //   if (!newRoom) {
  //     return <p>{`The room ID ${roomId} appears to be invalid..`}</p>;
  //   }
  return (
    <>
      {/* <button onClick={() => navigate(-1)}>back</button> */}
      <Box
        sx={{
          mb: 5,
          ml: 5,
          display: 'flex',
          alignItems: 'center',
          zIndex: 99,
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          Exit
        </Button>
      </Box>
      <p style={{ marginLeft: '6px', fontWeight: 'bold' }}>Room: {roomId}</p>
      <BasicScene>
        <BaseBox text={false} position={[0, 0.5, 0]} args={[2, 1, 2]} color="red" />
        <BaseBox text={false} position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="orange" />
        <BaseBox text={false} position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />

        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="pink" />

        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, -5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, 10]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, 5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, -5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, -10]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, 5]} />
        <Sky />
      </BasicScene>
    </>
  );
}
