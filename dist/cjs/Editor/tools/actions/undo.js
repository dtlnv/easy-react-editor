"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Undo = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'arrow-rotate-left', title: 'Undo', onClick: function () { return document.execCommand('undo', false, 'true'); } });
};
exports.default = Undo;
//# sourceMappingURL=undo.js.map