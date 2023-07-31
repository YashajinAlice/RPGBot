"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveBuilder = exports.WelcomeBuilder = void 0;
const base_card_1 = require("./base-card");
class WelcomeBuilder extends base_card_1.BaseCardBuilder {
    constructor(params) {
        if (!params.mainText)
            params.mainText = { content: 'WELCOME' };
        if (!params.avatarBorderColor)
            params.avatarBorderColor = '#0CA7FF';
        if (!params.colorTextDefault)
            params.colorTextDefault = '#0CA7FF';
        if (!params.backgroundColor)
            params.backgroundColor = { background: '#FFFFFF', waves: '#0CA7FF' };
        super(params);
    }
}
exports.WelcomeBuilder = WelcomeBuilder;
class LeaveBuilder extends base_card_1.BaseCardBuilder {
    constructor(params) {
        if (!params.mainText)
            params.mainText = { content: 'LEAVE' };
        if (!params.avatarBorderColor)
            params.avatarBorderColor = '#F44336';
        if (!params.colorTextDefault)
            params.colorTextDefault = '#F44336';
        if (!params.backgroundColor)
            params.backgroundColor = { background: '#FFFFFF', waves: '#F44336' };
        super(params);
    }
}
exports.LeaveBuilder = LeaveBuilder;
