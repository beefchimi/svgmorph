import {useMemo} from 'react';

// import {Shape} from './Shape.ts';
import {Blob} from './Blob.ts';

export interface SvgBlobProps {
  id?: string;
  size?: number;
  points?: number;
}

// const maxIncrement = safeSize / safePoints;
// const min = index * maxIncrement;
// const x = randomFloat(min, min + maxIncrement);
// const y = randomFloat(min, min + maxIncrement);

/*
const diamond = `
  M50,0
  L100,50
  L50,100
  L0,50

  L50,0
  Z
`;

const circle = `
  M50,0
  C77.61,0 100,22.39 100,50
  C100,77.61 77.61,100 50,100
  C22.39,100 0,77.61 0,50

  C0,22.39 22.39,0 50,0
  Z
`;

const generated = `
  M100,50
  L50,100
  L0,50
  L50,0
  Z
`;
*/

export function SvgBlob({id, size, points}: SvgBlobProps) {
  /*
  const shapeInstance = useMemo(() => {
    return new Shape(size, points);
  }, [size, points]);
  */

  const blobInstance = useMemo(() => {
    return new Blob(size, points);
  }, [size, points]);

  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={blobInstance.viewBox}
    >
      <path d={blobInstance.pathData} />
    </svg>
  );
}
