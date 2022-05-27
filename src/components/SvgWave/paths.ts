export const svgWavePath = {
  baseline: [
    `
      M0,284
      C0,282.5 1,281 3,281
      L460,278
      C460,278 996,268 1000,268
      C1004,268 1540,278 1540,278
      L1997,281
      C1999,281 2000,282.5 2000,284
      C2000,285.5 1999,287 1997,287
      L1540,290
      C1540,290 1004,300 1000,300
      C996,300 460,290 460,290
      L3,287
      C1,287 0,285.5 0,284
      Z
    `,
    `
      M0,284
      C0,282.5 1,281 3,281
      L400,278
      C400,278 990,220 1000,220
      C1010,220 1600,278 1600,278
      L1997,281
      C1999,281 2000,282.5 2000,284
      C2000,285.5 1999,287 1997,287
      L1600,290
      C1600,290 1010,348 1000,348
      C990,348 400,290 400,290
      L3,287
      C1,287 0,285.5 0,284
      Z
    `,
    `
      M0,284
      C0,282.5 1,281 3,281
      L480,260
      C480,260 900,240 1000,240
      C1100,240 1520,260 1520,260
      L1997,281
      C1999,281 2000,282.5 2000,284
      C2000,285.5 1999,287 1997,287
      L1520,308
      C1520,308 1100,328 1000,328
      C900,328 480,308 480,308
      L3,287
      C1,287 0,285.5 0,284
      Z
    `,
  ],
  foreground: ['', '', '', '', '', ''],
  background: [
    `
      M80,284
      C270,288 300,288 310,288
      C320,288 500,292 540,292
      C580,292 730,296 770,300
      C810,304 940,308 1000,308
      C1060,308 1190,304 1230,300
      C1270,296 1420,292 1460,292
      C1500,292 1680,288 1690,288
      C1700,288 1730,288 1920,284
      H80
      Z
    `,
    `
      M80,284
      C270,298 300,298 310,298
      C320,298 530,318 540,318
      C550,318 730,328 770,338
      C810,348 940,368 1000,368
      C1060,368 1190,348 1230,338
      C1270,328 1420,318 1460,318
      C1500,318 1680,298 1690,298
      C1700,298 1730,298 1920,284
      H80
      Z
    `,
    `
      M80,284
      C205,307 252,320 286,342
      C344,381 423,368 491,390
      C560,412 629,444 698,432
      C766,422 834,368 903,390
      C972,412 1040,508 1109,528
      C1178,550 1221,496 1289,476
      C1358,454 1408,470 1461,470
      C1579,470 1535,356 1920,284
      H80
      Z
    `,
    `
      M80,284
      C215,304 203,382 316,356
      C428,330 516,442 583,396
      C649,349 740,390 789,364
      C838,338 946,369 1015,401
      C1083,433 1152,487 1221,481
      C1289,476 1322,426 1359,393
      C1396,360 1530,284 1633,334
      C1736,384 1826,304 1920,284
      H80
      Z
    `,
    `
      M80,284
      C125,308 158,372 176,393
      C246,464 334,382 403,412
      C472,443 540,508 608,520
      C677,530 746,488 814,460
      C882,434 951,472 1020,444
      C1088,417 1157,328 1226,343
      C1294,360 1354,426 1431,466
      C1628,574 1620,364 1920,284
      H80
      Z
    `,
    `
      M80,284
      C363,346 332,492 515,492
      C614,490 702,394 803,406
      C851,412 899,444 947,444
      C995,444 1043,412 1091,380
      C1139,348 1187,316 1235,316
      C1283,316 1331,348 1379,390
      C1427,433 1460,472 1523,497
      C1635,536 1739,316 1920,284
      H80
      Z
    `,
  ],
};

export const svgWaveMaxIndex = {
  baseline: svgWavePath.baseline.length - 1,
  foreground: svgWavePath.foreground.length - 1,
  background: svgWavePath.background.length - 1,
};
