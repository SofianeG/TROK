import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function ArrowIcon({ width, height }) {
  const ArrowIcon = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>BF855D7C-CF90-4DA3-869B-7D2032BBAC16</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-117.000000, -19.000000)">
            <g id="Group-3" transform="translate(117.000000, 19.000000)">
                <rect id="Rectangle-7" x="0.506475043" y="0.409019367" width="23.04" height="23.04"></rect>
                <polygon id="arrow" fill="#FFFFFF" points="8.23194675 11.0968233 13.2770919 6.05167816 12 4.77458628 4.77458628 12 12 19.2254137 13.2770919 17.9483218 8.23194675 12.9031767 19.2254137 12.9031767 19.2254137 11.0968233"></polygon>
            </g>
        </g>
    </g>
</svg>
`;

  const ArrowIconSvg = () => (
    <SvgXml
      xml={ArrowIcon}
      width={(width = normalize(22))}
      height={(height = normalize(22))}
    />
  );

  return <ArrowIconSvg />;
}
