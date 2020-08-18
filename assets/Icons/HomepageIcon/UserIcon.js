import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function UserIcon({ width, height }) {
  const UserIcon = `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>DFC2FA2A-F96D-48A7-A0D1-CB976F0A0CA2</title>
    <g id="Android-" stroke="#4D4D4D" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-321.000000, -186.000000)" fill="#FFF">
            <g id="icons8-user" transform="translate(321.000000, 186.000000)">
                <path d="M10,0 C8.21367206,0 6.56303696,0.952994584 5.66987298,2.5 C4.77670901,4.04700537 4.77670901,5.95299463 5.66987298,7.5 C6.56303696,9.04700542 8.21367206,10 10,10 C11.7863279,10 13.436963,9.04700542 14.330127,7.5 C15.223291,5.95299463 15.223291,4.04700537 14.330127,2.5 C13.436963,0.952994584 11.7863279,0 10,0 Z M20,20 L0,20 L0,18.125 C0,15.71 6.05125,13.75 10,13.75 C13.94875,13.75 20,15.71 20,18.125 L20,20 Z" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>
`;

  const UserIconSvg = () => (
    <SvgXml
      xml={UserIcon}
      width={(width = normalize(20))}
      height={(height = normalize(20))}
    />
  );

  return <UserIconSvg />;
}
