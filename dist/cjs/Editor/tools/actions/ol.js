"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tool_1 = tslib_1.__importDefault(require("../tool"));
var Ol = function () {
    return react_1.default.createElement(tool_1.default, { icon: 'list-ol', title: 'OL', onClick: function () { return document.execCommand('insertOrderedList', false, 'true'); } });
};
exports.default = Ol;
//# sourceMappingURL=ol.js.map