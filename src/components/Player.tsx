import { useState, useRef, LegacyRef } from 'react';

export default function Player() {
  const playerNameInput = useRef<HTMLInputElement>();

  const [playerName, setPlayerName] = useState<string>('');

  function handleClick() {
    setPlayerName(playerNameInput.current!.value)
    playerNameInput.current!.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameInput as LegacyRef<HTMLInputElement>} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
