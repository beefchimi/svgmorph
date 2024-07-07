import {roundNumber} from 'beeftools';

import {Shape, type Anchor} from './Shape.ts';

type Config = ConstructorParameters<typeof Shape>;
// type BezierCurves = [left: number, right: number];
type QuadCurves = [x: number, y: number];

export class Blob extends Shape {
  public readonly curves: QuadCurves[];

  static quadraticAnchor(
    [startX, startY]: Anchor,
    [endX, endY]: Anchor,
    radius = 0,
  ) {
    // Mid-point of line
    const midX = (endX + startX) * 0.5;
    const midY = (endY + startY) * 0.5;

    // Angle of perpendicular
    const theta = Math.atan2(endY - startY, endX - startX) - Math.PI / 2;

    // Distance of control point from mid-point of line
    // TODO: This needs to be variable (or intelligently determined).
    const offset = radius;

    // Location of invisible control point
    const quadX = midX + offset * Math.cos(theta);
    const quadY = midY + offset * Math.sin(theta);

    const result: QuadCurves = [roundNumber(quadX, 4), roundNumber(quadY, 4)];

    // Taken from:
    // https://stackoverflow.com/questions/49274176/how-to-create-a-curved-svg-path-between-two-points
    return result;
  }

  constructor(...config: Config) {
    super(...config);

    const lastAnchorIndex = this.anchors.length - 1;

    this.curves = this.anchors.map((anchor, index, source) => {
      const endIndex = index === lastAnchorIndex ? 0 : index + 1;

      // TODO: Figure out the correct radius to pass.
      const attempt = 100 / 3;

      return Blob.quadraticAnchor(anchor, source[endIndex], attempt);
    });
  }

  public get pathData() {
    // Repeat the first anchor point as the final anchor.
    const closedShape = [...this.anchors, this.anchors[0]];

    const data = closedShape
      .map((pair, index) => {
        const curveData = index > 0 ? this.curves[index - 1] : undefined;

        const curve = curveData?.join(',');
        const line = pair.join(',');

        return curve ? `${curve} ${line}` : line;
      })
      .join(' Q');

    return `M${data}Z`;
  }
}
