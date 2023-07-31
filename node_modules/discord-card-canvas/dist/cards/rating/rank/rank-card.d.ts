import { Canvas } from 'canvas';
import { BackgroundRankColor, Color, FontResolvable, TextCard, UserStatus } from '../../../interface/card.interface';
export interface RankCardParams {
    /**
     * User's nickname
     */
    nicknameText: TextCard;
    /**
     * The user's current level
     */
    currentLvl: number;
    /**
     * The user's current rank
     */
    currentRank: number;
    /**
     * The user's current experience
     */
    currentXP: number;
    /**
     * Required experience to the next level
     */
    requiredXP: number;
    /**
     * User status
     */
    userStatus: UserStatus;
    /**
     * The color of the current experience number; Default: '#0CA7FF'
     */
    currentXPColor?: Color;
    /**
     * The color of the required experience number; Default: '#7F8384'
     */
    requiredXPColor?: Color;
    /**
     * URL to the background image (1000x250 px)
     */
    backgroundImgURL?: string;
    /**
     * Background color; Default: '#0CA7FF' | 'bubbles'
     */
    backgroundColor?: BackgroundRankColor;
    /**
     * URL to the avatar user image
     */
    avatarImgURL?: string;
    /**
     * The color of the circle behind the avatar; Default: '#0CA7FF'
     */
    avatarBackgroundColor?: Color;
    /**
     * Whether the circle behind the avatar is enabled; Default: True
     */
    avatarBackgroundEnable?: boolean;
    /**
     * The color of the progress bar
     */
    progressBarColor?: Color;
    /**
     * Default font. Applies if a specific font is not selected in the TextCard object; Default: 'Nunito'
     */
    fontDefault?: FontResolvable;
    /**
     * Default text color. Applies if a specific text color is not selected in the Text Card object; Default: '#0CA7FF'
     */
    colorTextDefault?: Color;
    /**
     * Text before the level number; Default: 'LVL'
     */
    lvlPrefix?: TextCard;
    /**
     * Text before the rank number; Default: 'RANK'
     */
    rankPrefix?: TextCard;
}
type OptionsDraw = {
    /**
     * Objects (name) that will only be drawn
     * @remark only: "background" | "nickname" | "avatarBorder" | "avatar" | "rank" | "lvl" | "progressBar" | xp
     */
    only?: string[];
    /**
     * Sets show, the image size should be resized so that it fits the canvas
     * @remark default 'fill'
     */
    objectFit?: 'fill' | 'cover';
};
export declare class RankCardBuilder {
    nicknameText: TextCard;
    currentLvl: number;
    currentRank: number;
    currentXP: number;
    requiredXP: number;
    userStatus: UserStatus;
    backgroundImgURL?: string;
    backgroundColor: BackgroundRankColor;
    avatarImgURL?: string;
    avatarBackgroundColor: Color;
    avatarBackgroundEnable: boolean;
    fontDefault: FontResolvable;
    colorTextDefault: Color;
    progressBarColor: Color;
    currentXPColor: Color;
    requiredXPColor: Color;
    lvlPrefix?: TextCard;
    rankPrefix?: TextCard;
    constructor(params: RankCardParams);
    /**
     * Sets the background color of this card (if no background image is selected)
     * @param backgroundColor Background color
     */
    setBackgroundColor(backgroundColor: BackgroundRankColor): this;
    /**
     * URL to the background image
     * @remark Image size 1000x250px
     * @param backgroundImgURL URL to the background image
     */
    setBackgroundImgURL(backgroundImgURL: string): this;
    /**
     * Sets the avatar image of this card
     * @param avatarImgURL URL to the avatar user image
     */
    setAvatarImgURL(avatarImgURL: string): this;
    /**
     * Sets the color of the circle behind the avatar
     * @param avatarBackgroundColor The color of the circle behind the avatar
     */
    setAvatarBackgroundColor(avatarBackgroundColor: Color): this;
    /**
     * Sets the circle behind the avatar
     * @param avatarBackgroundEnable Whether the circle behind the avatar is enabled
     */
    setAvatarBackgroundEnable(avatarBackgroundEnable: boolean): this;
    /**
     * Sets the default font
     * @param fontDefault Default font
     */
    setFontDefault(fontDefault: FontResolvable): this;
    /**
     * Sets the default text color
     * @param colorTextDefault Default text color
     */
    setColorTextDefault(colorTextDefault: Color): this;
    /**
     * Sets the text before the level number
     * @param lvlPrefix Text before the level number
     */
    setLvlPrefix(lvlPrefix: TextCard): this;
    /**
     * Sets the text before the rank number
     * @param rankPrefix Text before the rank number
     */
    setRankPrefix(rankPrefix: TextCard): this;
    /**
     * Sets the user's nickname
     * @param nicknameText User's nickname
     */
    setNicknameText(nicknameText: TextCard): this;
    /**
     * Sets the user's current level
     * @param currentLvl The user's current level
     */
    setCurrentLvl(currentLvl: number): this;
    /**
     * Sets the user's current rank
     * @param currentRank The user's current rank
     */
    setCurrentRank(currentRank: number): this;
    /**
     * Sets the user's current experience
     * @param currentXP The user's current experience
     */
    setCurrentXP(currentXP: number): this;
    /**
     * Sets the required experience to the next level
     * @param requiredXP Required experience to the next level
     */
    setRequiredXP(requiredXP: number): this;
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
