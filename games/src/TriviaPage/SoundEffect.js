import React from 'react';

const SoundButton = ({ soundFile, label }) => {
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <button onClick={playSound}>
      {label}
    </button>
  );
};

export default SoundButton;