"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTools = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tools_1 = require("./tools");
require("./styles/tools.css");
exports.defaultTools = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'UL', 'OL', 'HR'];
var Toolbar = function (_a) {
    var _b = _a.tools, tools = _b === void 0 ? exports.defaultTools : _b;
    return (react_1.default.createElement("div", { id: 'ere-toolbar' },
        (tools === null || tools === void 0 ? void 0 : tools.includes('Undo')) && react_1.default.createElement(tools_1.Undo, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Redo')) && react_1.default.createElement(tools_1.Redo, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Bold')) && react_1.default.createElement(tools_1.Bold, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Italic')) && react_1.default.createElement(tools_1.Italic, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('StrikeThrough')) && react_1.default.createElement(tools_1.StrikeThrough, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Underline')) && react_1.default.createElement(tools_1.Underline, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('UL')) && react_1.default.createElement(tools_1.Ul, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('OL')) && react_1.default.createElement(tools_1.Ol, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('HR')) && react_1.default.createElement(tools_1.Hr, null)));
};
exports.default = Toolbar;
//# sourceMappingURL=toolbar.js.map