import React from "react";
import { SvgXml } from "react-native-svg";

export default function EyeIcon() {

    const EyeIcon =`<svg width="23px" height="15px" viewBox="0 0 23 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>7552141C-6868-414D-BD31-0620CC6EC667</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1.1-Log-in" transform="translate(-295.000000, -310.000000)" fill="#888787" fill-rule="nonzero">
            <g id="icons8-eye" transform="translate(295.000000, 310.000000)">
                <path d="M22.9728728,7.056 C22.9728728,7.056 18.4751812,0 11.4996126,0 C4.524044,0 0.0263523882,7.056 0.0263523882,7.056 L1.20090079e-07,7.908 C-0.000774822959,7.908 3.74898082,15 11.4996126,15 C19.2502444,15 23.0000001,7.908 23.0000001,7.908 L22.9728728,7.056 Z M11.4996126,12.75 C8.50321835,12.75 6.07417035,10.3995 6.07417035,7.5 C6.07417035,4.6005 8.50321835,2.25 11.4996126,2.25 C14.4960068,2.25 16.9250548,4.6005 16.9250548,7.5 C16.9250548,10.3995 14.4960068,12.75 11.4996126,12.75 Z" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>
`;

    const EyeIconSvg = () => <SvgXml xml={EyeIcon} width="23px" height="15px"  />;

    return <EyeIconSvg />;
}

