"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Redo = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'arrow-rotate-right', title: 'Redo', onClick: function () { return document.execCommand('redo', false, 'true'); } });
};
exports.default = Redo;
//# sourceMappingURL=redo.js.map