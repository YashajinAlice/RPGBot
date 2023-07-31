import { Canvas } from 'canvas';
import { BackgroundBaseColor, TextCard } from '../../interface/card.interface';
export interface InfoCardParams {
    /**
     * Background color (if no background image is selected)
     */
    backgroundColor?: BackgroundBaseColor;
    /**
     * URL to the background image (1000x200 px)
     */
    backgroundImgURL?: string;
    /**
     * The main text on the card
     */
    mainText?: TextCard;
}
type OptionsDraw = {
    /**
     * Sets show, the image size should be resized so that it fits the canvas
     * @remark default 'fill'
     */
    objectFit?: 'fill' | 'cover';
};
export declare class InfoCardBuilder {
    backgroundColor: BackgroundBaseColor;
    backgroundImgURL?: string;
    mainText?: TextCard;
    constructor(params?: InfoCardParams);
    /**
     * Sets the background color of this card (if no background image is selected)
     * @param backgroundColor Background color
     */
    setBackgroundColor(backgroundColor: BackgroundBaseColor): this;
    /**
     * URL to the background image
     * @remark Image size 1000x200px
     * @param backgroundImgURL URL to the background image
     */
    setBackgroundImgURL(backgroundImgURL: string): this;
    /**
     * Sets the main text (for example, "Info")
     * @param mainText The main text on the card
     */
    setMainText(mainText: TextCard): this;
    /**
     * Draws the content on the created canvas
     * @param ctx The context of the created canvas
     * @param canvasWidth Width of the created canvas
     * @param canvasHeight Height of the created canvas
     * @param options Additional options
     */
    draw(ctx: any, canvasWidth: number, canvasHeight: number, options?: OptionsDraw): Promise<void>;
    /**
     * Builds a Canvas with the specified parameters
     */
    build(options?: OptionsDraw): Promise<Canvas>;
}
export {};
