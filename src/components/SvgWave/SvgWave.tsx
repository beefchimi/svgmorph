import {useCallback, useEffect, useRef, useState} from 'react';

import {svgWavePath, svgWaveMaxIndex} from './paths.ts';
import {getPathIndex} from './utilities.ts';

import styles from './SvgWave.module.css';

export interface SvgWaveProps {
  id: string;
  animate?: boolean;
}

const ANIMATION_INTERVAL_DURATION = 210;

export function SvgWave({id, animate = false}: SvgWaveProps) {
  const [baselinePath, setBaselinePath] = useState(svgWavePath.baseline[0]);
  const baselinePreviousIndex = useRef(0);

  const [backgroundPath, setBackgroundPath] = useState(
    svgWavePath.background[0],
  );
  const backgroundPreviousIndex = useRef(0);

  const [foregroundPath, setForegroundPath] = useState(
    svgWavePath.foreground[0],
  );
  const foregroundPreviousIndex = useRef(0);

  const waveAnimation = useCallback(() => {
    const baselineIndex = getPathIndex(
      svgWaveMaxIndex.baseline,
      baselinePreviousIndex.current,
    );

    baselinePreviousIndex.current = baselineIndex;
    setBaselinePath(svgWavePath.baseline[baselineIndex]);

    const backgroundIndex = getPathIndex(
      svgWaveMaxIndex.background,
      backgroundPreviousIndex.current,
    );

    backgroundPreviousIndex.current = backgroundIndex;
    setBackgroundPath(svgWavePath.background[backgroundIndex]);

    const foregroundIndex = getPathIndex(
      svgWaveMaxIndex.foreground,
      foregroundPreviousIndex.current,
    );

    foregroundPreviousIndex.current = foregroundIndex;
    setForegroundPath(svgWavePath.foreground[foregroundIndex]);
  }, []);

  // TODO: Should use `useInterval()` from my `react-hooks` package.
  // Even better, once we have a `useAnimationInteral()`, use that.
  useEffect(() => {
    let intervalId = 0;

    if (animate) {
      intervalId = window.setInterval(
        waveAnimation,
        ANIMATION_INTERVAL_DURATION,
      );
    } else {
      window.clearInterval(intervalId);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [animate, waveAnimation]);

  return (
    <svg
      id={id}
      className={styles.SvgWave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 568"
    >
      <path
        id={`${id}-Baseline`}
        className={styles.Baseline}
        d={baselinePath}
      />

      <path
        id={`${id}-BackgroundTop`}
        className={styles.BackgroundTop}
        d={backgroundPath}
      />
      <path
        id={`${id}-BackgroundBottom`}
        className={styles.BackgroundBottom}
        d={backgroundPath}
      />

      <path
        id={`${id}-ForegroundTop`}
        className={styles.ForegroundTop}
        fill="currentColor"
        d={foregroundPath}
      />
      <path
        id={`${id}-ForegroundBottom`}
        className={styles.ForegroundBottom}
        fill="currentColor"
        d={foregroundPath}
      />
    </svg>
  );
}
