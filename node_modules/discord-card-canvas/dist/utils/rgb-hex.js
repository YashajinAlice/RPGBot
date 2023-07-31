"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = void 0;
/**
 * Color conversion from rgb | rgba to hex
 * @param rgb rgb or rgba
 * @returns hex (with "#")
 */
const rgbToHex = (rgb) => {
    let matchColors = /(rgb|rgba)\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/;
    const match = matchColors.exec(rgb);
    if (match !== null) {
        return ('#' + ((1 << 24) | (match[2] << 16) | (match[3] << 8) | match[4]).toString(16).slice(1));
    }
    throw new Error('Bad Rgb');
};
exports.rgbToHex = rgbToHex;
