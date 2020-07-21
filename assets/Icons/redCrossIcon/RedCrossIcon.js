import React from "react";
import { SvgXml } from "react-native-svg";

export default function RedCrossIcon() {

    const RedCrossIcon =`<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>B42B4EAE-E15B-4E29-9E50-9440EE15BC90</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1.1-Log-in" transform="translate(-331.000000, -311.000000)" stroke="#FC0107">
            <g id="icons8-cancel" transform="translate(331.000000, 311.000000)">
                <path d="M6.5,0.5 C3.1862915,0.5 0.5,3.1862915 0.5,6.5 C0.5,9.8137085 3.1862915,12.5 6.5,12.5 C9.8137085,12.5 12.5,9.8137085 12.5,6.5 C12.5,3.1862915 9.8137085,0.5 6.5,0.5 Z" id="Path"></path>
                <path d="M8.5,4.5 L4.5,8.5 M8.5,8.5 L4.5,4.5" id="Shape" stroke-linecap="square"></path>
            </g>
        </g>
    </g>
</svg>
`;

    const RedCrossIconSvg = () => <SvgXml xml={RedCrossIcon} width="13px" height="13px"  />;

    return <RedCrossIconSvg />;
}
