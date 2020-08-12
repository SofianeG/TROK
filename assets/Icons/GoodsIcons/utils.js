import React from "react";
import { SvgXml } from "react-native-svg";

export default function utils() {
  const utils = `<svg width="38px" height="37px" viewBox="0 0 38 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>EE7C8EA6-A15B-4EE4-AD75-99E77EECE938</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-1596.000000, -505.000000)" stroke="#FFFFFF">
            <path d="M1598,534.5 L1634,534.5 M1634,541.5 L1598,541.5 M1598,527.5 L1634,527.5 M1603.5,527 L1603.5,513 M1615,513 L1599,513 C1597.895,513 1597,512.104232 1597,510.998284 L1597,508.001716 C1597,506.895768 1597.895,506 1599,506 L1611.744,506 C1611.964,506 1612.178,506.072062 1612.352,506.206177 L1615.608,508.702316 C1615.855,508.891478 1616,509.185731 1616,509.496997 L1616,511.999142 C1616,512.551616 1615.552,513 1615,513 Z" id="Shape"></path>
        </g>
    </g>
</svg>`;

  const utilsSvg = () => <SvgXml xml={utils} width="60%" height="60%" />;

  return <utilsSvg />;
}
