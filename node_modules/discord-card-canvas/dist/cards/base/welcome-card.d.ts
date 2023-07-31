import { TextCard } from '../../interface/card.interface';
import { BaseCardBuilder, BaseCardParams } from './base-card';
export interface UserParams extends BaseCardParams {
    avatarImgURL: string;
    nicknameText: TextCard;
}
export declare class WelcomeBuilder extends BaseCardBuilder {
    constructor(params: UserParams);
}
export declare class LeaveBuilder extends BaseCardBuilder {
    constructor(params: UserParams);
}
