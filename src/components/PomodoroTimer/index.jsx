import React, {useContext, useEffect, useState} from 'react';
import timerEndSound from '../../assets/sounds/timer-end-01.wav';
import breakEndSound from '../../assets/sounds/break-end-01.wav';

import styles from './Timer.module.scss';
import {Context} from "../../pages/PomodorkoApp";
import locale from "../../utils/locale";

const PomodoroTimer = () => {

  const language = useContext(Context);

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isShortBreak, setIsShortBreak] = useState(true)

  let interval = null;

  const intervalRef = React.useRef(null);

  const startTimer = React.useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes((prev) => prev - 1);
        } else {
          let minutes = isBreak ? 24 : (isShortBreak ? 4 : 14);
          let seconds = 59;

          isBreak ? new Audio(breakEndSound).play() : new Audio(timerEndSound).play();

          setSeconds(seconds);
          setMinutes(minutes);
          setIsBreak(!isBreak);
        }
      } else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);
  }, [seconds, minutes, isBreak, isShortBreak]);

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

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isTimerOn, seconds, startTimer]);


  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className={styles.pomodoro}>
      <div className={styles.pomodoroWrapper}>
        <div className={styles.pomodoroWrapperTopBtn}>
          <button onClick={shortBreakHandler} className={isShortBreak ? styles.active : null}>{locale[language.locale].timer.short}</button>
          <button onClick={longBreakHandler} className={isShortBreak ? null : styles.active}>{locale[language.locale].timer.long}</button>
        </div>
        <div className={styles.pomodoroWrapperSession}>{isBreak ? locale[language.locale].timer.breakTime : locale[language.locale].timer.session}</div>
        <div className={styles.pomodoroWrapperTimer}>{timerMinutes}:{timerSeconds}</div>
        <div className={styles.pomodoroWrapperControls}>
          <button onClick={timerPauseHandler}>{isTimerOn ? locale[language.locale].timer.pause : locale[language.locale].timer.start}</button>
          <button onClick={resetTimer}>{locale[language.locale].timer.reset}</button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
