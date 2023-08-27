"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Bold = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'bold', title: 'Bold', onClick: function () { return document.execCommand('bold', false, 'true'); } });
};
exports.default = Bold;
//# sourceMappingURL=bold.js.map