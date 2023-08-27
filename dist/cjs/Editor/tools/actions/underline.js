"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Underline = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'underline', title: 'Underline', onClick: function () { return document.execCommand('underline', false, 'true'); } });
};
exports.default = Underline;
//# sourceMappingURL=underline.js.map