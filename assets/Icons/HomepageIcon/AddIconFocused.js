import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function AddIconFocused({ width, height }) {
  const AddIconFocused = `<svg
  width="20px"
  height="20px"
  viewBox="0 0 20 20"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>D1C33445-73F6-4715-BF41-980DCFECA7F0</title>
  <g
    id="Android-"
    stroke="none"
    stroke-width="1"
    fill="none"
    fill-rule="evenodd"
  >
    <g id="UI-KIT" transform="translate(-177.000000, -186.000000)">
      <g id="icons8-add_new" transform="translate(177.000000, 186.000000)">
        <path
          d="M20,2 L20,18 C20,19.1 19.1,20 18,20 L2,20 C0.9,20 0,19.1 0,18 L0,2 C0,0.9 0.9,0 2,0 L18,0 C19.1,0 20,0.9 20,2 Z"
          id="Path"
          fill="#3AD06B"
        ></path>
        <path
          d="M10,4 L10,16 M4,10 L16,10"
          id="Shape"
          stroke="#FFFFFF"
          fill="#FFFFFF"
        ></path>
      </g>
    </g>
  </g>
</svg>
`;

  const AddIconFocusedSvg = () => (
    <SvgXml
      xml={AddIconFocused}
      width={(width = normalize(20))}
      height={(height = normalize(20))}
    />
  );

  return <AddIconFocusedSvg />;
}
