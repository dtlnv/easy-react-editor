"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Hr = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'minus', title: 'HR', onClick: function () { return document.execCommand('insertHorizontalRule', false, 'true'); } });
};
exports.default = Hr;
//# sourceMappingURL=hr.js.map