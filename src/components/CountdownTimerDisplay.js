import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const RenderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to trigger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      {remainingTime !== 0 ? (
        <div key={remainingTime} className={`time${isTimeUp ? "up" : ""}`}>
          {remainingTime}
        </div>
      ) : (
        <div className="drawdown">Drawdown</div>
      )}
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

function CountdownTimerDisplay(props) {
  let { timeElapsed, recipeInstructions, isPlaying } = props;
  const instructionIntervals = Object.keys(recipeInstructions);

  let NextTiming = instructionIntervals.filter(
    (interval) => interval > timeElapsed
  )[0];

  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          size={200}
          duration={isNaN(NextTiming) ? 0 : NextTiming}
          colors={["#1c62ed"]}
          // ["#004777", "#F7B801", "#A30000", "#A30000"]
          // colorsTime={[10, 6, 3, 0]}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default CountdownTimerDisplay;
