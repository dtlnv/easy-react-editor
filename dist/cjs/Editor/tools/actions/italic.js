"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Italic = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'italic', title: 'Italic', onClick: function () { return document.execCommand('italic', false, 'true'); } });
};
exports.default = Italic;
//# sourceMappingURL=italic.js.map