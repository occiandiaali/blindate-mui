import { useState, useEffect } from 'react';

/*****************
 * Player Controls
 ****************/
export const usePlayerControls = () => {
    
    const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false });
    
    useEffect(() => {
      const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump' };
      const moveFieldByKey = (key: string | number) => keys[key as keyof typeof keys];
    const handleKeyDown = (e: { code: any; }) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e: { code: any; }) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
