import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function NotificationIcon({ width, height }) {
  const NotificationIcon = `<svg width="23px" height="28px" viewBox="0 0 23 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>B0354A6E-0C01-42D8-8A77-F6DD6A2B119D</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2.1-Home-Page" transform="translate(-337.000000, -34.000000)" stroke="#FFFFFF">
            <g id="icons8-notification" transform="translate(338.219497, 35.000000)">
                <path d="M8.65555556,3.01348195 C5.42277778,3.57354463 3.33333333,5.99018419 3.33333333,9.64154569 C3.33333333,18.137983 0,17.8228424 0,19.1912604 C0,21.4382521 5,22 10,22 C15,22 20,21.4382521 20,19.1912604 C20,17.8228424 16.6666667,18.137983 16.6666667,9.64154569 C16.6666667,5.99018419 14.5433333,3.53141354 11.265,3" id="Path"></path>
                <path d="M10,0 C9.00588745,0 8.2,0.759169337 8.2,1.69565217 C8.2,2.63213501 9.00588745,3.39130435 10,3.39130435 C10.9941125,3.39130435 11.8,2.63213501 11.8,1.69565217 C11.8,0.759169337 10.9941125,0 10,0 L10,0 Z M12.751,22.0451739 C12.9112,22.391087 13,22.7726087 13,23.173913 C13,24.7350435 11.6572,26 10,26 C8.3428,26 7,24.7350435 7,23.173913 C7,22.7991739 7.0774,22.4413913 7.2184,22.1141304" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>
`;

  const NotificationIconSvg = () => (
    <SvgXml
      xml={NotificationIcon}
      width={(width = normalize(23))}
      height={(height = normalize(28))}
    />
  );

  return <NotificationIconSvg />;
}
