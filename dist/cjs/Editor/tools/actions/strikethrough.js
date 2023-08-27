"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var StrikeThrough = function () {
    return (react_1.default.createElement(tool_1.default, { icon: 'strikethrough', title: 'StrikeThrough', onClick: function () { return document.execCommand('strikeThrough', false, 'true'); } }));
};
exports.default = StrikeThrough;
//# sourceMappingURL=strikethrough.js.map