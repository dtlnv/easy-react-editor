"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Ul = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'list', title: 'UL', onClick: function () { return document.execCommand('insertUnorderedList', false, 'true'); } });
};
exports.default = Ul;
//# sourceMappingURL=ul.js.map