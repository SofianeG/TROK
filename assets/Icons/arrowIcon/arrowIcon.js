import React from "react";
import { SvgXml } from "react-native-svg";

export default function arrowIcon() {

    const arrowIcon =`<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>D94CB404-EA13-450C-A1E8-DF585F828A9C</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-115.000000, -20.000000)">
            <g id="Group-3" transform="translate(115.000000, 20.000000)">
                <rect id="Rectangle-7" x="0.506475043" y="0.409019367" width="23.04" height="23.04"></rect>
                <polygon id="arrow" fill="#FFFFFF" points="8.23194675 11.0968233 13.2770919 6.05167816 12 4.77458628 4.77458628 12 12 19.2254137 13.2770919 17.9483218 8.23194675 12.9031767 19.2254137 12.9031767 19.2254137 11.0968233"></polygon>
            </g>
        </g>
    </g>
</svg>`;

    const arrowIconSvg = () => <SvgXml xml={arrowIcon} width="60%" height="60%"  />;

    return <arrowIconSvg />;
}
