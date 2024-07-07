import {arrayOfLength, clamp, roundNumber} from 'beeftools';

export type Anchor = [x: number, y: number];

export class Shape {
  static readonly MIN_SIZE = 99;
  static readonly MAX_SIZE = 9999;
  static readonly MIN_POINTS = 4;
  static readonly MAX_POINTS = 44;

  public readonly equidistant: boolean;
  public readonly size: number;
  public readonly points: number;
  public readonly radius: number;
  public readonly anchors: Anchor[];

  constructor(configSize = 0, configPoints = 0, configEquidistant = false) {
    this.size = clamp(Shape.MIN_SIZE, Math.trunc(configSize), Shape.MAX_SIZE);

    this.points = clamp(
      Shape.MIN_POINTS,
      Math.trunc(configPoints),
      Shape.MAX_POINTS,
    );

    this.radius = Math.round(this.size / 2);

    this.equidistant = configEquidistant;
    console.log('Shape > equidistant', this.equidistant);

    this.anchors = arrayOfLength(this.points).map((index) => {
      const xCos = this.radius * Math.cos((2 * Math.PI * index) / this.points);
      const ySin = this.radius * Math.sin((2 * Math.PI * index) / this.points);

      const x = roundNumber(this.radius + xCos, 4);
      const y = roundNumber(this.radius + ySin, 4);

      return [x, y];
    });
  }

  public get pathData() {
    const data = this.anchors.map((pair) => pair.join(',')).join(' L');
    return `M${data}Z`;
  }

  public get viewBox() {
    const coordinates = [0, 0, this.size, this.size];
    return coordinates.join(' ');
  }
}
