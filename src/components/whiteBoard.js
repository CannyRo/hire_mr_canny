'use client';
import React from "react";
import { useRef } from 'react';
import { interpolate, interpolateAll } from "flubber" ;
import * as d3 from "d3";// ES6

export function WhiteBorad() {

    const arrayShape01 = [
        "M 15.08 27 M 8.52 27.32 C 6.84 27.32 5.4 27.04 4.2 26.48 C 3 25.8933 2.08 25.1067 1.44 24.12 C 0.8 23.1333 0.48 22.0267 0.48 20.8 C 0.48 19.52 0.7867 18.4 1.4 17.44 C 2.04 16.48 3.04 15.7333 4.4 15.2 C 5.76 14.64 7.5333 14.36 9.72 14.36 H 15.44 V 18 H 10.4 C 8.9333 18 7.92 18.24 7.36 18.72 C 6.8267 19.2 6.56 19.8 6.56 20.52 C 6.56 21.32 6.8667 21.96 7.48 22.44 C 8.12 22.8933 8.9867 23.12 10.08 23.12 C 11.12 23.12 12.0533 22.88 12.88 22.4 C 13.7067 21.8933 14.3067 21.16 14.68 20.2 L 15.64 23.08 C 15.1867 24.4667 14.36 25.52 13.16 26.24 C 11.96 26.96 10.4133 27.32 8.52 27.32",
        "M 15.08 27 V 22.8 L 14.68 21.88 V 14.36 C 14.68 13.0267 14.2667 11.9867 13.44 11.24 C 12.64 10.4933 11.4 10.12 9.72 10.12 C 8.5733 10.12 7.44 10.3067 6.32 10.68 C 5.2267 11.0267 4.2933 11.5067 3.52 12.12 L 1.28 7.76 C 2.4533 6.9333 3.8667 6.2933 5.52 5.84 C 7.1733 5.3867 8.8533 5.16 10.56 5.16 C 13.84 5.16 16.3867 5.9333 18.2 7.48 C 20.0133 9.0267 20.92 11.44 20.92 14.72 V 27 H 15.08",
        "M 15.08 27 M 26.5675 27 V 5.48 H 32.5275 V 11.56 L 31.6875 9.8 C 32.3275 8.28 33.3542 7.1333 34.7675 6.36 C 36.1808 5.56 37.9008 5.16 39.9275 5.16 V 10.92 C 39.6608 10.8933 39.4208 10.88 39.2075 10.88 C 38.9942 10.8533 38.7675 10.84 38.5275 10.84 C 36.8208 10.84 35.4342 11.3333 34.3675 12.32 C 33.3275 13.28 32.8075 14.7867 32.8075 16.84 V 27 H 26.5675",
        "M 15.08 27 M 53.6016 35.08 C 51.5749 35.08 49.6149 34.8267 47.7216 34.32 C 45.8549 33.84 44.2949 33.1067 43.0416 32.12 L 45.5216 27.64 C 46.4282 28.3867 47.5749 28.9733 48.9616 29.4 C 50.3749 29.8533 51.7616 30.08 53.1216 30.08 C 55.3349 30.08 56.9349 29.5867 57.9216 28.6 C 58.9349 27.6133 59.4416 26.1467 59.4416 24.2 V 20.96 L 59.8416 15.56 L 59.7616 10.12 V 5.48 H 65.6816 V 23.4 C 65.6816 27.4 64.6416 30.3467 62.5616 32.24 C 60.4816 34.1333 57.4949 35.08 53.6016 35.08 Z M 52.6416 25.96 C 50.6416 25.96 48.8282 25.5333 47.2016 24.68 C 45.6016 23.8 44.3082 22.5867 43.3216 21.04 C 42.3616 19.4667 41.8816 17.64 41.8816 15.56 C 41.8816 13.4533 42.3616 11.6267 43.3216 10.08 C 44.3082 8.5067 45.6016 7.2933 47.2016 6.44 C 48.8282 5.5867 50.6416 5.16 52.6416 5.16 C 54.4549 5.16 56.0549 5.5333 57.4416 6.28 C 58.8282 7 59.9082 8.1333 60.6816 9.68 C 61.4549 11.2 61.8416 13.16 61.8416 15.56 C 61.8416 17.9333 61.4549 19.8933 60.6816 21.44 C 59.9082 22.96 58.8282 24.0933 57.4416 24.84 C 56.0549 25.5867 54.4549 25.96 52.6416 25.96 Z M 53.8816 20.84 C 54.9749 20.84 55.9482 20.6267 56.8016 20.2 C 57.6549 19.7467 58.3216 19.12 58.8016 18.32 C 59.2816 17.52 59.5216 16.6 59.5216 15.56 C 59.5216 14.4933 59.2816 13.5733 58.8016 12.8 C 58.3216 12 57.6549 11.3867 56.8016 10.96 C 55.9482 10.5067 54.9749 10.28 53.8816 10.28 C 52.7882 10.28 51.8149 10.5067 50.9616 10.96 C 50.1082 11.3867 49.4282 12 48.9216 12.8 C 48.4416 13.5733 48.2016 14.4933 48.2016 15.56 C 48.2016 16.6 48.4416 17.52 48.9216 18.32 C 49.4282 19.12 50.1082 19.7467 50.9616 20.2 C 51.8149 20.6267 52.7882 20.84 53.8816 20.84",
        "M 15.08 27 M 82.1694 27.32 C 79.716 27.32 77.556 26.84 75.6894 25.88 C 73.8494 24.92 72.4227 23.6133 71.4094 21.96 C 70.396 20.28 69.8894 18.3733 69.8894 16.24 C 69.8894 14.08 70.3827 12.1733 71.3694 10.52 C 72.3827 8.84 73.756 7.5333 75.4894 6.6 C 77.2227 5.64 79.1827 5.16 81.3694 5.16 C 83.476 5.16 85.3694 5.6133 87.0494 6.52 C 88.756 7.4 90.1027 8.68 91.0894 10.36 C 92.076 12.0133 92.5694 14 92.5694 16.32 C 92.5694 16.56 92.556 16.84 92.5294 17.16 C 92.5027 17.4533 92.476 17.7333 92.4494 18 H 74.9694 V 14.36 H 89.1694 L 86.7694 15.44 C 86.7694 14.32 86.5427 13.3467 86.0894 12.52 C 85.636 11.6933 85.0094 11.0533 84.2094 10.6 C 83.4094 10.12 82.476 9.88 81.4094 9.88 C 80.3427 9.88 79.396 10.12 78.5694 10.6 C 77.7694 11.0533 77.1427 11.7067 76.6894 12.56 C 76.236 13.3867 76.0094 14.3733 76.0094 15.52 V 16.48 C 76.0094 17.6533 76.2627 18.6933 76.7694 19.6 C 77.3027 20.48 78.036 21.16 78.9694 21.64 C 79.9294 22.0933 81.0494 22.32 82.3294 22.32 C 83.476 22.32 84.476 22.1467 85.3294 21.8 C 86.2094 21.4533 87.0094 20.9333 87.7294 20.24 L 91.0494 23.84 C 90.0627 24.96 88.8227 25.8267 87.3294 26.44 C 85.836 27.0267 84.116 27.32 82.1694 27.32",
        "M 15.08 27 M 109.804 5.16 C 111.51 5.16 113.03 5.5067 114.364 6.2 C 115.724 6.8667 116.79 7.9067 117.564 9.32 C 118.337 10.7067 118.724 12.4933 118.724 14.68 V 27 H 112.484 V 15.64 C 112.484 13.9067 112.097 12.6267 111.324 11.8 C 110.577 10.9733 109.51 10.56 108.124 10.56 C 107.137 10.56 106.244 10.7733 105.444 11.2 C 104.67 11.6 104.057 12.2267 103.604 13.08 C 103.177 13.9333 102.964 15.0267 102.964 16.36 L 101.564 9.64 C 102.337 8.2 103.444 7.0933 104.884 6.32 C 106.324 5.5467 107.964 5.16 109.804 5.16",
        "M 15.08 27 M 103 11 V 27 H 96.7238 V 5.48 H 102.684 V 11.44 L 103 11",
        "M 15.08 27 M 121.82 10.76 V 5.96 H 136.74 V 10.76 H 121.82",
        "M 15.08 27 M 133.18 27.32 C 130.647 27.32 128.673 26.68 127.26 25.4 C 125.847 24.0933 125.14 22.16 125.14 19.6 V 0.72 H 131.38 V 19.52 C 131.38 20.4267 131.62 21.1333 132.1 21.64 C 132.58 22.12 133.233 22.36 134.06 22.36 C 135.047 22.36 135.887 22.0933 136.58 21.56 L 138.26 25.96 C 137.62 26.4133 136.847 26.76 135.94 27 C 135.06 27.2133 134.14 27.32 133.18 27.32",
        "M 15.08 27 M 144.513 27.32 C 143.447 27.32 142.527 26.96 141.753 26.24 C 141.007 25.4933 140.633 24.5467 140.633 23.4 C 140.633 22.2533 141.007 21.3333 141.753 20.64 C 142.527 19.92 143.447 19.56 144.513 19.56 C 145.607 19.56 146.527 19.92 147.273 20.64 C 148.02 21.3333 148.393 22.2533 148.393 23.4 C 148.393 24.5467 148.02 25.4933 147.273 26.24 C 146.527 26.96 145.607 27.32 144.513 27.32"
    ];
    const arrayShape02 = [
        "M 11.68 27.32 C 9.1467 27.32 7.1733 26.68 5.76 25.4 C 4.3467 24.0933 3.64 22.16 3.64 19.6 V 0.72 H 9.88 V 19.52 C 9.88 20.4267 10.12 21.1333 10.6 21.64 C 11.08 22.12 11.7333 22.36 12.56 22.36 C 13.5467 22.36 14.3867 22.0933 15.08 21.56 L 16.76 25.96 C 16.12 26.4133 15.3467 26.76 14.44 27 C 13.56 27.2133 12.64 27.32 11.68 27.32",
        "M 11.68 27.32 M 0.32 10.76 V 5.96 H 15.24 V 10.76 H 0.32",
        "M 11.68 27.32 M 30.2788 27.32 C 27.8254 27.32 25.6654 26.84 23.7988 25.88 C 21.9588 24.92 20.5321 23.6133 19.5188 21.96 C 18.5054 20.28 17.9988 18.3733 17.9988 16.24 C 17.9988 14.08 18.4921 12.1733 19.4788 10.52 C 20.4921 8.84 21.8654 7.5333 23.5988 6.6 C 25.3321 5.64 27.2921 5.16 29.4788 5.16 C 31.5854 5.16 33.4788 5.6133 35.1588 6.52 C 36.8654 7.4 38.2121 8.68 39.1988 10.36 C 40.1854 12.0133 40.6788 14 40.6788 16.32 C 40.6788 16.56 40.6654 16.84 40.6388 17.16 C 40.6121 17.4533 40.5854 17.7333 40.5588 18 H 23.0788 V 14.36 H 37.2787 L 34.8788 15.44 C 34.8788 14.32 34.6521 13.3467 34.1988 12.52 C 33.7454 11.6933 33.1188 11.0533 32.3188 10.6 C 31.5188 10.12 30.5854 9.88 29.5188 9.88 C 28.4521 9.88 27.5054 10.12 26.6788 10.6 C 25.8788 11.0533 25.2521 11.7067 24.7988 12.56 C 24.3454 13.3867 24.1188 14.3733 24.1188 15.52 V 16.48 C 24.1188 17.6533 24.3721 18.6933 24.8788 19.6 C 25.4121 20.48 26.1454 21.16 27.0788 21.64 C 28.0388 22.0933 29.1588 22.32 30.4388 22.32 C 31.5854 22.32 32.5854 22.1467 33.4388 21.8 C 34.3188 21.4533 35.1188 20.9333 35.8388 20.24 L 39.1588 23.84 C 38.1721 24.96 36.9321 25.8267 35.4388 26.44 C 33.9454 27.0267 32.2254 27.32 30.2788 27.32",
        "M 11.68 27.32 M 66 10 C 67.6731 11.6 67.1131 12.2133 66.7131 13.04 C 66.3131 13.8667 66.1131 14.92 66.1131 16.2 V 27 H 59.8731 V 15.64 C 59.8731 13.9067 59.5131 12.6267 58.7931 11.8 C 58.0998 10.9733 57.0998 10.56 55.7931 10.56 C 54.8865 10.56 54.0731 10.7733 53.3531 11.2 C 52.6331 11.6 52.0731 12.2133 51.6731 13.04 C 51.2731 13.8667 51.0731 14.92 51.0731 16.2 V 27 H 44.8331 V 5.48 H 50.7931 V 11.36 L 49.6731 9.64 C 50.4198 8.1733 51.4731 7.0667 52.8331 6.32 C 54.2198 5.5467 55.7931 5.16 57.5531 5.16 C 59.5265 5.16 61.2465 5.6667 62.7131 6.68 C 64.2065 7.6667 65.1931 9.1867 65.6731 11.24 L 63.4731 10.64 L 66 10",
        "M 11.68 27.32 M 72.3931 5.16 C 74.0998 5.16 75.6065 5.5067 76.9131 6.2 C 78.2465 6.8667 79.2865 7.9067 80.0331 9.32 C 80.8065 10.7067 81.1931 12.4933 81.1931 14.68 V 27 H 74.9531 V 15.64 C 74.9531 13.9067 74.5931 12.6267 73.8731 11.8 C 73.1531 10.9733 72.1398 10.56 70.8331 10.56 C 69.9265 10.56 69.1131 10.7733 68.3931 11.2 C 67.6731 11.6 67.1131 12.2133 66.7131 13.04 C 66.3131 13.8667 66.1131 14.92 66.1131 16.2 V 27 H 59.8731 V 15.64 L 63.4731 10.64 C 64.1931 8.96 65.3398 7.6267 66.9131 6.64 C 68.5131 5.6533 70.3398 5.16 72.3931 5.16",
        "M 11.68 27.32 M 99.5063 27.32 C 97.6929 27.32 96.1063 26.92 94.7463 26.12 C 93.3863 25.32 92.3196 24.1067 91.5463 22.48 C 90.7996 20.8267 90.4263 18.7467 90.4263 16.24 C 90.4263 13.7067 90.7863 11.6267 91.5063 10 C 92.2263 8.3733 93.2663 7.16 94.6263 6.36 C 95.9863 5.56 97.6129 5.16 99.5063 5.16 C 101.533 5.16 103.346 5.6267 104.946 6.56 C 106.573 7.4667 107.853 8.7467 108.786 10.4 C 109.746 12.0533 110.226 14 110.226 16.24 C 110.226 18.5067 109.746 20.4667 108.786 22.12 C 107.853 23.7733 106.573 25.0533 104.946 25.96 C 103.346 26.8667 101.533 27.32 99.5063 27.32 M 98.4263 22.2 C 99.4663 22.2 100.386 21.96 101.186 21.48 C 102.013 21 102.666 20.32 103.146 19.44 C 103.653 18.5333 103.906 17.4667 103.906 16.24 C 103.906 14.9867 103.653 13.92 103.146 13.04 C 102.666 12.16 102.013 11.48 101.186 11 C 100.386 10.52 99.4663 10.28 98.4263 10.28 C 97.3863 10.28 96.4529 10.52 95.6263 11 C 94.7996 11.48 94.1463 12.16 93.6663 13.04 C 93.1863 13.92 92.9463 14.9867 92.9463 16.24 C 92.9463 17.4667 93.1863 18.5333 93.6663 19.44 C 94.1463 20.32 94.7996 21 95.6263 21.48 C 96.4529 21.96 97.3863 22.2 98.4263 22.2",
        "M 11.68 27.32 M 86.7863 34.76 V 5.48 H 92.7463 V 9.88 L 92.6263 16.28 L 93.0263 22.64 V 34.76 H 86.7863",
        "M 11.68 27.32 Z M 131 19 L 131 19 C 125.537 21.7333 125.843 21.2533 125.843 20.64 C 125.843 20.1333 125.603 19.76 125.123 19.52 C 124.67 19.2533 124.057 19.0533 123.283 18.92 C 122.51 18.7867 121.657 18.6533 120.723 18.52 C 119.817 18.3867 118.897 18.2133 117.963 18 C 117.03 17.76 116.177 17.4133 115.403 16.96 C 114.63 16.5067 114.003 15.8933 113.523 15.12 C 113.07 14.3467 112.843 13.3467 112.843 12.12 C 112.843 10.76 113.23 9.56 114.003 8.52 C 114.803 7.48 115.95 6.6667 117.443 6.08 C 118.937 5.4667 120.723 5.16 122.803 5.16 C 124.27 5.16 125.763 5.32 127.283 5.64 C 128.803 5.96 130.07 6.4267 131.083 7.04 L 129.003 11.48 C 127.963 10.8667 126.91 10.4533 125.843 10.24 C 124.803 10 123.79 9.88 122.803 9.88 C 121.417 9.88 120.403 10.0667 119.763 10.44 C 119.123 10.8133 118.803 11.2933 118.803 11.88 C 118.803 12.4133 119.03 12.8133 119.483 13.08 C 119.963 13.3467 120.59 13.56 121.363 13.72 C 122.137 13.88 122.977 14.0267 123.883 14.16 C 124.817 14.2667 125.75 14.44 126.683 14.68 C 127.617 14.92 128.457 15.2667 129.203 15.72 C 129.977 16.1467 130.603 16.7467 131.083 17.52 L 131 19",
        "M 11.68 27.32 Z M 121.643 27.32 C 119.803 27.32 118.03 27.1067 116.323 26.68 C 114.643 26.2267 113.31 25.6667 112.323 25 L 114.403 20.52 C 115.39 21.1333 116.55 21.64 117.883 22.04 C 119.243 22.4133 120.577 22.6 121.883 22.6 C 123.323 22.6 124.337 22.4267 124.923 22.08 C 125.537 21.7333 125.843 21.2533 125.843 20.64 C 125.843 20.1333 125.603 19.76 125.123 19.52 C 124.67 19.2533 124.057 19.0533 123.283 18.92 C 122.51 18.7867 121.657 18.6533 120.723 18.52 C 119.817 18.3867 118.897 18.2133 117.963 18 C 117.03 17.76 116.177 17.4133 115.403 16.96 C 127.617 14.92 128.457 15.2667 129.203 15.72 C 129.977 16.1467 130.603 16.7467 131.083 17.52 C 131.563 18.2667 131.803 19.2533 131.803 20.48 C 131.803 21.8133 131.403 23 130.603 24.04 C 129.803 25.0533 128.643 25.8533 127.123 26.44 C 125.63 27.0267 123.803 27.32 121.643 27.32",
        "M 11.68 27.32 M 138.013 27.32 C 136.947 27.32 136.027 26.96 135.253 26.24 C 134.507 25.4933 134.133 24.5467 134.133 23.4 C 134.133 22.2533 134.507 21.3333 135.253 20.64 C 136.027 19.92 136.947 19.56 138.013 19.56 C 139.107 19.56 140.027 19.92 140.773 20.64 C 141.52 21.3333 141.893 22.2533 141.893 23.4 C 141.893 24.5467 141.52 25.4933 140.773 26.24 C 140.027 26.96 139.107 27.32 138.013 27.32"
    ];

    const interpolators = interpolateAll(arrayShape01, arrayShape02);
    d3.selectAll("path")
    .data(interpolators)
    .transition()
    .attrTween("d", function(interpolator) { return interpolator; });

    const myCanvas = useRef(null);

    let word_01 = "M15.08 27V22.8L14.68 21.88V14.36C14.68 13.0267 14.2667 11.9867 13.44 11.24C12.64 10.4933 11.4 10.12 9.72 10.12C8.57333 10.12 7.44 10.3067 6.32 10.68C5.22667 11.0267 4.29333 11.5067 3.52 12.12L1.28 7.76C2.45333 6.93333 3.86667 6.29333 5.52 5.84C7.17333 5.38667 8.85333 5.16 10.56 5.16C13.84 5.16 16.3867 5.93333 18.2 7.48C20.0133 9.02667 20.92 11.44 20.92 14.72V27H15.08ZM8.52 27.32C6.84 27.32 5.4 27.04 4.2 26.48C3 25.8933 2.08 25.1067 1.44 24.12C0.8 23.1333 0.48 22.0267 0.48 20.8C0.48 19.52 0.786667 18.4 1.4 17.44C2.04 16.48 3.04 15.7333 4.4 15.2C5.76 14.64 7.53333 14.36 9.72 14.36H15.44V18H10.4C8.93333 18 7.92 18.24 7.36 18.72C6.82667 19.2 6.56 19.8 6.56 20.52C6.56 21.32 6.86667 21.96 7.48 22.44C8.12 22.8933 8.98667 23.12 10.08 23.12C11.12 23.12 12.0533 22.88 12.88 22.4C13.7067 21.8933 14.3067 21.16 14.68 20.2L15.64 23.08C15.1867 24.4667 14.36 25.52 13.16 26.24C11.96 26.96 10.4133 27.32 8.52 27.32ZM26.5675 27V5.48H32.5275V11.56L31.6875 9.8C32.3275 8.28 33.3542 7.13333 34.7675 6.36C36.1808 5.56 37.9008 5.16 39.9275 5.16V10.92C39.6608 10.8933 39.4208 10.88 39.2075 10.88C38.9942 10.8533 38.7675 10.84 38.5275 10.84C36.8208 10.84 35.4342 11.3333 34.3675 12.32C33.3275 13.28 32.8075 14.7867 32.8075 16.84V27H26.5675ZM53.6016 35.08C51.5749 35.08 49.6149 34.8267 47.7216 34.32C45.8549 33.84 44.2949 33.1067 43.0416 32.12L45.5216 27.64C46.4282 28.3867 47.5749 28.9733 48.9616 29.4C50.3749 29.8533 51.7616 30.08 53.1216 30.08C55.3349 30.08 56.9349 29.5867 57.9216 28.6C58.9349 27.6133 59.4416 26.1467 59.4416 24.2V20.96L59.8416 15.56L59.7616 10.12V5.48H65.6816V23.4C65.6816 27.4 64.6416 30.3467 62.5616 32.24C60.4816 34.1333 57.4949 35.08 53.6016 35.08ZM52.6416 25.96C50.6416 25.96 48.8282 25.5333 47.2016 24.68C45.6016 23.8 44.3082 22.5867 43.3216 21.04C42.3616 19.4667 41.8816 17.64 41.8816 15.56C41.8816 13.4533 42.3616 11.6267 43.3216 10.08C44.3082 8.50667 45.6016 7.29333 47.2016 6.44C48.8282 5.58667 50.6416 5.16 52.6416 5.16C54.4549 5.16 56.0549 5.53333 57.4416 6.28C58.8282 7 59.9082 8.13333 60.6816 9.68C61.4549 11.2 61.8416 13.16 61.8416 15.56C61.8416 17.9333 61.4549 19.8933 60.6816 21.44C59.9082 22.96 58.8282 24.0933 57.4416 24.84C56.0549 25.5867 54.4549 25.96 52.6416 25.96ZM53.8816 20.84C54.9749 20.84 55.9482 20.6267 56.8016 20.2C57.6549 19.7467 58.3216 19.12 58.8016 18.32C59.2816 17.52 59.5216 16.6 59.5216 15.56C59.5216 14.4933 59.2816 13.5733 58.8016 12.8C58.3216 12 57.6549 11.3867 56.8016 10.96C55.9482 10.5067 54.9749 10.28 53.8816 10.28C52.7882 10.28 51.8149 10.5067 50.9616 10.96C50.1082 11.3867 49.4282 12 48.9216 12.8C48.4416 13.5733 48.2016 14.4933 48.2016 15.56C48.2016 16.6 48.4416 17.52 48.9216 18.32C49.4282 19.12 50.1082 19.7467 50.9616 20.2C51.8149 20.6267 52.7882 20.84 53.8816 20.84ZM82.1694 27.32C79.716 27.32 77.556 26.84 75.6894 25.88C73.8494 24.92 72.4227 23.6133 71.4094 21.96C70.396 20.28 69.8894 18.3733 69.8894 16.24C69.8894 14.08 70.3827 12.1733 71.3694 10.52C72.3827 8.84 73.756 7.53333 75.4894 6.6C77.2227 5.64 79.1827 5.16 81.3694 5.16C83.476 5.16 85.3694 5.61333 87.0494 6.52C88.756 7.4 90.1027 8.68 91.0894 10.36C92.076 12.0133 92.5694 14 92.5694 16.32C92.5694 16.56 92.556 16.84 92.5294 17.16C92.5027 17.4533 92.476 17.7333 92.4494 18H74.9694V14.36H89.1694L86.7694 15.44C86.7694 14.32 86.5427 13.3467 86.0894 12.52C85.636 11.6933 85.0094 11.0533 84.2094 10.6C83.4094 10.12 82.476 9.88 81.4094 9.88C80.3427 9.88 79.396 10.12 78.5694 10.6C77.7694 11.0533 77.1427 11.7067 76.6894 12.56C76.236 13.3867 76.0094 14.3733 76.0094 15.52V16.48C76.0094 17.6533 76.2627 18.6933 76.7694 19.6C77.3027 20.48 78.036 21.16 78.9694 21.64C79.9294 22.0933 81.0494 22.32 82.3294 22.32C83.476 22.32 84.476 22.1467 85.3294 21.8C86.2094 21.4533 87.0094 20.9333 87.7294 20.24L91.0494 23.84C90.0627 24.96 88.8227 25.8267 87.3294 26.44C85.836 27.0267 84.116 27.32 82.1694 27.32ZM109.804 5.16C111.51 5.16 113.03 5.50667 114.364 6.2C115.724 6.86667 116.79 7.90667 117.564 9.32C118.337 10.7067 118.724 12.4933 118.724 14.68V27H112.484V15.64C112.484 13.9067 112.097 12.6267 111.324 11.8C110.577 10.9733 109.51 10.56 108.124 10.56C107.137 10.56 106.244 10.7733 105.444 11.2C104.67 11.6 104.057 12.2267 103.604 13.08C103.177 13.9333 102.964 15.0267 102.964 16.36V27H96.7238V5.48H102.684V11.44L101.564 9.64C102.337 8.2 103.444 7.09333 104.884 6.32C106.324 5.54667 107.964 5.16 109.804 5.16ZM133.18 27.32C130.647 27.32 128.673 26.68 127.26 25.4C125.847 24.0933 125.14 22.16 125.14 19.6V0.72H131.38V19.52C131.38 20.4267 131.62 21.1333 132.1 21.64C132.58 22.12 133.233 22.36 134.06 22.36C135.047 22.36 135.887 22.0933 136.58 21.56L138.26 25.96C137.62 26.4133 136.847 26.76 135.94 27C135.06 27.2133 134.14 27.32 133.18 27.32ZM121.82 10.76V5.96H136.74V10.76H121.82ZM144.513 27.32C143.447 27.32 142.527 26.96 141.753 26.24C141.007 25.4933 140.633 24.5467 140.633 23.4C140.633 22.2533 141.007 21.3333 141.753 20.64C142.527 19.92 143.447 19.56 144.513 19.56C145.607 19.56 146.527 19.92 147.273 20.64C148.02 21.3333 148.393 22.2533 148.393 23.4C148.393 24.5467 148.02 25.4933 147.273 26.24C146.527 26.96 145.607 27.32 144.513 27.32Z";
    let word_02 = "M11.68 27.32C9.14667 27.32 7.17333 26.68 5.76 25.4C4.34667 24.0933 3.64 22.16 3.64 19.6V0.72H9.88V19.52C9.88 20.4267 10.12 21.1333 10.6 21.64C11.08 22.12 11.7333 22.36 12.56 22.36C13.5467 22.36 14.3867 22.0933 15.08 21.56L16.76 25.96C16.12 26.4133 15.3467 26.76 14.44 27C13.56 27.2133 12.64 27.32 11.68 27.32ZM0.32 10.76V5.96H15.24V10.76H0.32ZM30.2788 27.32C27.8254 27.32 25.6654 26.84 23.7988 25.88C21.9588 24.92 20.5321 23.6133 19.5188 21.96C18.5054 20.28 17.9988 18.3733 17.9988 16.24C17.9988 14.08 18.4921 12.1733 19.4788 10.52C20.4921 8.84 21.8654 7.53333 23.5988 6.6C25.3321 5.64 27.2921 5.16 29.4788 5.16C31.5854 5.16 33.4788 5.61333 35.1588 6.52C36.8654 7.4 38.2121 8.68 39.1988 10.36C40.1854 12.0133 40.6788 14 40.6788 16.32C40.6788 16.56 40.6654 16.84 40.6388 17.16C40.6121 17.4533 40.5854 17.7333 40.5588 18H23.0788V14.36H37.2787L34.8788 15.44C34.8788 14.32 34.6521 13.3467 34.1988 12.52C33.7454 11.6933 33.1188 11.0533 32.3188 10.6C31.5188 10.12 30.5854 9.88 29.5188 9.88C28.4521 9.88 27.5054 10.12 26.6788 10.6C25.8788 11.0533 25.2521 11.7067 24.7988 12.56C24.3454 13.3867 24.1188 14.3733 24.1188 15.52V16.48C24.1188 17.6533 24.3721 18.6933 24.8788 19.6C25.4121 20.48 26.1454 21.16 27.0788 21.64C28.0388 22.0933 29.1588 22.32 30.4388 22.32C31.5854 22.32 32.5854 22.1467 33.4388 21.8C34.3188 21.4533 35.1188 20.9333 35.8388 20.24L39.1588 23.84C38.1721 24.96 36.9321 25.8267 35.4388 26.44C33.9454 27.0267 32.2254 27.32 30.2788 27.32ZM72.3931 5.16C74.0998 5.16 75.6065 5.50667 76.9131 6.2C78.2465 6.86667 79.2865 7.90667 80.0331 9.32C80.8065 10.7067 81.1931 12.4933 81.1931 14.68V27H74.9531V15.64C74.9531 13.9067 74.5931 12.6267 73.8731 11.8C73.1531 10.9733 72.1398 10.56 70.8331 10.56C69.9265 10.56 69.1131 10.7733 68.3931 11.2C67.6731 11.6 67.1131 12.2133 66.7131 13.04C66.3131 13.8667 66.1131 14.92 66.1131 16.2V27H59.8731V15.64C59.8731 13.9067 59.5131 12.6267 58.7931 11.8C58.0998 10.9733 57.0998 10.56 55.7931 10.56C54.8865 10.56 54.0731 10.7733 53.3531 11.2C52.6331 11.6 52.0731 12.2133 51.6731 13.04C51.2731 13.8667 51.0731 14.92 51.0731 16.2V27H44.8331V5.48H50.7931V11.36L49.6731 9.64C50.4198 8.17333 51.4731 7.06667 52.8331 6.32C54.2198 5.54667 55.7931 5.16 57.5531 5.16C59.5265 5.16 61.2465 5.66667 62.7131 6.68C64.2065 7.66667 65.1931 9.18667 65.6731 11.24L63.4731 10.64C64.1931 8.96 65.3398 7.62667 66.9131 6.64C68.5131 5.65333 70.3398 5.16 72.3931 5.16ZM99.5063 27.32C97.6929 27.32 96.1063 26.92 94.7463 26.12C93.3863 25.32 92.3196 24.1067 91.5463 22.48C90.7996 20.8267 90.4263 18.7467 90.4263 16.24C90.4263 13.7067 90.7863 11.6267 91.5063 10C92.2263 8.37333 93.2663 7.16 94.6263 6.36C95.9863 5.56 97.6129 5.16 99.5063 5.16C101.533 5.16 103.346 5.62667 104.946 6.56C106.573 7.46667 107.853 8.74667 108.786 10.4C109.746 12.0533 110.226 14 110.226 16.24C110.226 18.5067 109.746 20.4667 108.786 22.12C107.853 23.7733 106.573 25.0533 104.946 25.96C103.346 26.8667 101.533 27.32 99.5063 27.32ZM86.7863 34.76V5.48H92.7463V9.88L92.6263 16.28L93.0263 22.64V34.76H86.7863ZM98.4263 22.2C99.4663 22.2 100.386 21.96 101.186 21.48C102.013 21 102.666 20.32 103.146 19.44C103.653 18.5333 103.906 17.4667 103.906 16.24C103.906 14.9867 103.653 13.92 103.146 13.04C102.666 12.16 102.013 11.48 101.186 11C100.386 10.52 99.4663 10.28 98.4263 10.28C97.3863 10.28 96.4529 10.52 95.6263 11C94.7996 11.48 94.1463 12.16 93.6663 13.04C93.1863 13.92 92.9463 14.9867 92.9463 16.24C92.9463 17.4667 93.1863 18.5333 93.6663 19.44C94.1463 20.32 94.7996 21 95.6263 21.48C96.4529 21.96 97.3863 22.2 98.4263 22.2ZM121.643 27.32C119.803 27.32 118.03 27.1067 116.323 26.68C114.643 26.2267 113.31 25.6667 112.323 25L114.403 20.52C115.39 21.1333 116.55 21.64 117.883 22.04C119.243 22.4133 120.577 22.6 121.883 22.6C123.323 22.6 124.337 22.4267 124.923 22.08C125.537 21.7333 125.843 21.2533 125.843 20.64C125.843 20.1333 125.603 19.76 125.123 19.52C124.67 19.2533 124.057 19.0533 123.283 18.92C122.51 18.7867 121.657 18.6533 120.723 18.52C119.817 18.3867 118.897 18.2133 117.963 18C117.03 17.76 116.177 17.4133 115.403 16.96C114.63 16.5067 114.003 15.8933 113.523 15.12C113.07 14.3467 112.843 13.3467 112.843 12.12C112.843 10.76 113.23 9.56 114.003 8.52C114.803 7.48 115.95 6.66667 117.443 6.08C118.937 5.46667 120.723 5.16 122.803 5.16C124.27 5.16 125.763 5.32 127.283 5.64C128.803 5.96 130.07 6.42667 131.083 7.04L129.003 11.48C127.963 10.8667 126.91 10.4533 125.843 10.24C124.803 10 123.79 9.88 122.803 9.88C121.417 9.88 120.403 10.0667 119.763 10.44C119.123 10.8133 118.803 11.2933 118.803 11.88C118.803 12.4133 119.03 12.8133 119.483 13.08C119.963 13.3467 120.59 13.56 121.363 13.72C122.137 13.88 122.977 14.0267 123.883 14.16C124.817 14.2667 125.75 14.44 126.683 14.68C127.617 14.92 128.457 15.2667 129.203 15.72C129.977 16.1467 130.603 16.7467 131.083 17.52C131.563 18.2667 131.803 19.2533 131.803 20.48C131.803 21.8133 131.403 23 130.603 24.04C129.803 25.0533 128.643 25.8533 127.123 26.44C125.63 27.0267 123.803 27.32 121.643 27.32ZM138.013 27.32C136.947 27.32 136.027 26.96 135.253 26.24C134.507 25.4933 134.133 24.5467 134.133 23.4C134.133 22.2533 134.507 21.3333 135.253 20.64C136.027 19.92 136.947 19.56 138.013 19.56C139.107 19.56 140.027 19.92 140.773 20.64C141.52 21.3333 141.893 22.2533 141.893 23.4C141.893 24.5467 141.52 25.4933 140.773 26.24C140.027 26.96 139.107 27.32 138.013 27.32Z";
    let word_03 = "M12.56 32.32C10.1067 32.32 7.94667 31.84 6.08 30.88C4.24 29.92 2.81333 28.6133 1.8 26.96C0.786667 25.28 0.28 23.3733 0.28 21.24C0.28 19.08 0.773333 17.1733 1.76 15.52C2.77333 13.84 4.14667 12.5333 5.88 11.6C7.61333 10.64 9.57333 10.16 11.76 10.16C13.8667 10.16 15.76 10.6133 17.44 11.52C19.1467 12.4 20.4933 13.68 21.48 15.36C22.4667 17.0133 22.96 19 22.96 21.32C22.96 21.56 22.9467 21.84 22.92 22.16C22.8933 22.4533 22.8667 22.7333 22.84 23H5.36V19.36H19.56L17.16 20.44C17.16 19.32 16.9333 18.3467 16.48 17.52C16.0267 16.6933 15.4 16.0533 14.6 15.6C13.8 15.12 12.8667 14.88 11.8 14.88C10.7333 14.88 9.78667 15.12 8.96 15.6C8.16 16.0533 7.53333 16.7067 7.08 17.56C6.62667 18.3867 6.4 19.3733 6.4 20.52V21.48C6.4 22.6533 6.65333 23.6933 7.16 24.6C7.69333 25.48 8.42667 26.16 9.36 26.64C10.32 27.0933 11.44 27.32 12.72 27.32C13.8667 27.32 14.8667 27.1467 15.72 26.8C16.6 26.4533 17.4 25.9333 18.12 25.24L21.44 28.84C20.4533 29.96 19.2133 30.8267 17.72 31.44C16.2267 32.0267 14.5067 32.32 12.56 32.32ZM8 7.72L13.4 1.96H20.12L12.88 7.72H8ZM40.1944 10.16C41.901 10.16 43.421 10.5067 44.7544 11.2C46.1144 11.8667 47.181 12.9067 47.9544 14.32C48.7277 15.7067 49.1144 17.4933 49.1144 19.68V32H42.8744V20.64C42.8744 18.9067 42.4877 17.6267 41.7144 16.8C40.9677 15.9733 39.901 15.56 38.5144 15.56C37.5277 15.56 36.6344 15.7733 35.8344 16.2C35.061 16.6 34.4477 17.2267 33.9944 18.08C33.5677 18.9333 33.3544 20.0267 33.3544 21.36V32H27.1144V10.48H33.0744V16.44L31.9544 14.64C32.7277 13.2 33.8344 12.0933 35.2744 11.32C36.7144 10.5467 38.3544 10.16 40.1944 10.16ZM65.6069 32.32C63.1535 32.32 60.9935 31.84 59.1269 30.88C57.2869 29.92 55.8602 28.6133 54.8469 26.96C53.8335 25.28 53.3269 23.3733 53.3269 21.24C53.3269 19.08 53.8202 17.1733 54.8069 15.52C55.8202 13.84 57.1935 12.5333 58.9269 11.6C60.6602 10.64 62.6202 10.16 64.8069 10.16C66.9135 10.16 68.8069 10.6133 70.4869 11.52C72.1935 12.4 73.5402 13.68 74.5269 15.36C75.5135 17.0133 76.0069 19 76.0069 21.32C76.0069 21.56 75.9935 21.84 75.9669 22.16C75.9402 22.4533 75.9135 22.7333 75.8869 23H58.4069V19.36H72.6069L70.2069 20.44C70.2069 19.32 69.9802 18.3467 69.5269 17.52C69.0735 16.6933 68.4469 16.0533 67.6469 15.6C66.8469 15.12 65.9135 14.88 64.8469 14.88C63.7802 14.88 62.8335 15.12 62.0069 15.6C61.2069 16.0533 60.5802 16.7067 60.1269 17.56C59.6735 18.3867 59.4469 19.3733 59.4469 20.52V21.48C59.4469 22.6533 59.7002 23.6933 60.2069 24.6C60.7402 25.48 61.4735 26.16 62.4069 26.64C63.3669 27.0933 64.4869 27.32 65.7669 27.32C66.9135 27.32 67.9135 27.1467 68.7669 26.8C69.6469 26.4533 70.4469 25.9333 71.1669 25.24L74.4869 28.84C73.5002 29.96 72.2602 30.8267 70.7669 31.44C69.2735 32.0267 67.5535 32.32 65.6069 32.32ZM80.1613 32V10.48H86.1213V16.56L85.2813 14.8C85.9213 13.28 86.9479 12.1333 88.3613 11.36C89.7746 10.56 91.4946 10.16 93.5213 10.16V15.92C93.2546 15.8933 93.0146 15.88 92.8013 15.88C92.5879 15.8533 92.3613 15.84 92.1213 15.84C90.4146 15.84 89.0279 16.3333 87.9613 17.32C86.9213 18.28 86.4013 19.7867 86.4013 21.84V32H80.1613ZM107.195 40.08C105.169 40.08 103.209 39.8267 101.315 39.32C99.4486 38.84 97.8886 38.1067 96.6353 37.12L99.1153 32.64C100.022 33.3867 101.169 33.9733 102.555 34.4C103.969 34.8533 105.355 35.08 106.715 35.08C108.929 35.08 110.529 34.5867 111.515 33.6C112.529 32.6133 113.035 31.1467 113.035 29.2V25.96L113.435 20.56L113.355 15.12V10.48H119.275V28.4C119.275 32.4 118.235 35.3467 116.155 37.24C114.075 39.1333 111.089 40.08 107.195 40.08ZM106.235 30.96C104.235 30.96 102.422 30.5333 100.795 29.68C99.1953 28.8 97.902 27.5867 96.9153 26.04C95.9553 24.4667 95.4753 22.64 95.4753 20.56C95.4753 18.4533 95.9553 16.6267 96.9153 15.08C97.902 13.5067 99.1953 12.2933 100.795 11.44C102.422 10.5867 104.235 10.16 106.235 10.16C108.049 10.16 109.649 10.5333 111.035 11.28C112.422 12 113.502 13.1333 114.275 14.68C115.049 16.2 115.435 18.16 115.435 20.56C115.435 22.9333 115.049 24.8933 114.275 26.44C113.502 27.96 112.422 29.0933 111.035 29.84C109.649 30.5867 108.049 30.96 106.235 30.96ZM107.475 25.84C108.569 25.84 109.542 25.6267 110.395 25.2C111.249 24.7467 111.915 24.12 112.395 23.32C112.875 22.52 113.115 21.6 113.115 20.56C113.115 19.4933 112.875 18.5733 112.395 17.8C111.915 17 111.249 16.3867 110.395 15.96C109.542 15.5067 108.569 15.28 107.475 15.28C106.382 15.28 105.409 15.5067 104.555 15.96C103.702 16.3867 103.022 17 102.515 17.8C102.035 18.5733 101.795 19.4933 101.795 20.56C101.795 21.6 102.035 22.52 102.515 23.32C103.022 24.12 103.702 24.7467 104.555 25.2C105.409 25.6267 106.382 25.84 107.475 25.84ZM125.083 32V10.48H131.323V32H125.083ZM128.203 7.48C127.056 7.48 126.123 7.14667 125.403 6.48C124.683 5.81333 124.323 4.98666 124.323 4C124.323 3.01333 124.683 2.18667 125.403 1.52C126.123 0.853331 127.056 0.519998 128.203 0.519998C129.35 0.519998 130.283 0.839998 131.003 1.48C131.723 2.09333 132.083 2.89333 132.083 3.88C132.083 4.92 131.723 5.78667 131.003 6.48C130.31 7.14667 129.376 7.48 128.203 7.48ZM147.794 32.32C145.341 32.32 143.181 31.84 141.314 30.88C139.474 29.92 138.048 28.6133 137.034 26.96C136.021 25.28 135.514 23.3733 135.514 21.24C135.514 19.08 136.008 17.1733 136.994 15.52C138.008 13.84 139.381 12.5333 141.114 11.6C142.848 10.64 144.808 10.16 146.994 10.16C149.101 10.16 150.994 10.6133 152.674 11.52C154.381 12.4 155.728 13.68 156.714 15.36C157.701 17.0133 158.194 19 158.194 21.32C158.194 21.56 158.181 21.84 158.154 22.16C158.128 22.4533 158.101 22.7333 158.074 23H140.594V19.36H154.794L152.394 20.44C152.394 19.32 152.168 18.3467 151.714 17.52C151.261 16.6933 150.634 16.0533 149.834 15.6C149.034 15.12 148.101 14.88 147.034 14.88C145.968 14.88 145.021 15.12 144.194 15.6C143.394 16.0533 142.768 16.7067 142.314 17.56C141.861 18.3867 141.634 19.3733 141.634 20.52V21.48C141.634 22.6533 141.888 23.6933 142.394 24.6C142.928 25.48 143.661 26.16 144.594 26.64C145.554 27.0933 146.674 27.32 147.954 27.32C149.101 27.32 150.101 27.1467 150.954 26.8C151.834 26.4533 152.634 25.9333 153.354 25.24L156.674 28.84C155.688 29.96 154.448 30.8267 152.954 31.44C151.461 32.0267 149.741 32.32 147.794 32.32ZM164.709 32.32C163.642 32.32 162.722 31.96 161.949 31.24C161.202 30.4933 160.829 29.5467 160.829 28.4C160.829 27.2533 161.202 26.3333 161.949 25.64C162.722 24.92 163.642 24.56 164.709 24.56C165.802 24.56 166.722 24.92 167.469 25.64C168.215 26.3333 168.589 27.2533 168.589 28.4C168.589 29.5467 168.215 30.4933 167.469 31.24C166.722 31.96 165.802 32.32 164.709 32.32Z";
    
    return(
        // <canvas ref={myCanvas}>
        //     Désolé, votre navigateur ne prend pas en charge &lt;canvas&gt;.
        // </canvas>
        <svg width="180" height="42" viewBox="0 0 180 42"></svg>
    )
}