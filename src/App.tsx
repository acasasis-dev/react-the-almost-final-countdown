import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';
import TimerChallengeProps from './interfaces/TimerChallengeProps';

function App() {
  const challenges: TimerChallengeProps[] = [
    {title: "Easy", targetTime: 1},
    {title: "Not Easy", targetTime: 5},
    {title: "Getting tough", targetTime: 10},
    {title: "Pros only", targetTime: 15}
  ]

  return (
    <>
      <Player />
      <div id="challenges">
        {challenges.map(challenge => {
          return <TimerChallenge title={challenge.title} targetTime={challenge.targetTime} />
        })}
      </div>
    </>
  );
}

export default App;
