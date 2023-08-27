import React from 'react';
import { Bold, Hr, Italic, Ol, Redo, StrikeThrough, Ul, Underline, Undo } from './tools';
import './styles/tools.css';
export var defaultTools = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'UL', 'OL', 'HR'];
var Toolbar = function (_a) {
    var _b = _a.tools, tools = _b === void 0 ? defaultTools : _b;
    return (React.createElement("div", { id: 'ere-toolbar' },
        (tools === null || tools === void 0 ? void 0 : tools.includes('Undo')) && React.createElement(Undo, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Redo')) && React.createElement(Redo, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Bold')) && React.createElement(Bold, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Italic')) && React.createElement(Italic, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('StrikeThrough')) && React.createElement(StrikeThrough, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('Underline')) && React.createElement(Underline, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('UL')) && React.createElement(Ul, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('OL')) && React.createElement(Ol, null),
        (tools === null || tools === void 0 ? void 0 : tools.includes('HR')) && React.createElement(Hr, null)));
};
export default Toolbar;
//# sourceMappingURL=toolbar.js.map