import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function HouseIcon({ width, height }) {
  const HouseIcon = `<svg
  width="24px"
  height="22px"
  viewBox="0 0 24 22"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>93B181AC-BD12-4BE5-AFA3-CFD4CD67AF55</title>
  <defs>
    <filter id="filter-1">
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0 0 0 0 0.372549 0 0 0 0 0.372549 0 0 0 0 0.372549 0 0 0 1.000000 0"
      ></feColorMatrix>
    </filter>
  </defs>
  <g
    id="Android-"
    stroke="none"
    stroke-width="1"
    fill="none"
    fill-rule="evenodd"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g
      id="icons8-person_at_home"
      transform="translate(-31.000000, -147.000000)"
      filter="url(#filter-1)"
    >
      <g transform="translate(32.000000, 148.000000)">
        <polyline id="Path" stroke="#5F5F5F" points="0 8 11 0 22 8"></polyline>
        <polyline
          id="Path"
          stroke="#5F5F5F"
          points="20 7 20 20 2 20 2 7"
        ></polyline>
      </g>
    </g>
  </g>
</svg>
`;

  const HouseIconSvg = () => (
    <SvgXml
      xml={HouseIcon}
      width={(width = normalize(24))}
      height={(height = normalize(22))}
    />
  );

  return <HouseIconSvg />;
}
