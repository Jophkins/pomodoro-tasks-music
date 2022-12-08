import React, {useEffect, useState} from 'react';

import styles from './Timer.module.scss';

const PomodoroTimer = () => {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isShortBreak, setIsShortBreak] = useState(true)

  let interval = null;

  const startTimer = () => {
    interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = isBreak ? 24 : (isShortBreak ? 1 : 2);
          let seconds = 59

          setSeconds(seconds);
          setMinutes(minutes);
          setIsBreak(!isBreak);
        }
      } else {
        setSeconds(seconds - 1);
      }

    }, 1000);
  }

  const timerPauseHandler = () => {
    clearInterval(interval);
    setIsTimerOn(!isTimerOn);
  }

  const shortBreakHandler = () => {
    setIsShortBreak(true);
  }

  const longBreakHandler = () => {
    setIsShortBreak(false);
  }

  const resetTimer = () => {
    clearInterval(interval);
    setIsTimerOn(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  }

  useEffect(() => {
    if (isTimerOn) {
      startTimer();
    }
  }, [isTimerOn, seconds]);




  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className={styles.pomodoro}>
      <div className={styles.pomodoroWrapper}>
        <div className={styles.pomodoroWrapperTopBtn}>
          <button onClick={shortBreakHandler} className={isShortBreak ? styles.active : null}>Short Break</button>
          <button onClick={longBreakHandler} className={isShortBreak ? null : styles.active}>Long Break</button>
        </div>
        <div className={styles.pomodoroWrapperSession}>{isBreak ? 'Break time! Next session starts in:' : 'Session'}</div>
        <div className={styles.pomodoroWrapperTimer}>{timerMinutes}:{timerSeconds}</div>
        <div className={styles.pomodoroWrapperControls}>
          <button onClick={timerPauseHandler}>{isTimerOn ? 'Pause' : 'Start'}</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
