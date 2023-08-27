"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var toolbar_1 = tslib_1.__importDefault(require("./toolbar"));
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./styles/editor.css");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var EasyReactEditor = function (_a) {
    var text = _a.text, setText = _a.setText, _b = _a.placeholder, placeholder = _b === void 0 ? 'Type text here...' : _b, tools = _a.tools;
    var defaultText = react_1.default.useState(text)[0];
    var ref = react_1.default.useRef(null);
    var clearEditor = function () {
        setTimeout(function () {
            if (ref.current) {
                var elements = ref.current.querySelectorAll('*');
                elements.forEach(function (element) {
                    element.removeAttribute('style');
                });
            }
        });
    };
    var saveText = function () {
        setTimeout(function () {
            if (ref.current) {
                setText(ref.current.innerHTML);
            }
        });
    };
    return (react_1.default.createElement("div", { id: 'ereditor' },
        react_1.default.createElement("div", { className: 'ere-content', contentEditable: true, suppressContentEditableWarning: true, dangerouslySetInnerHTML: { __html: defaultText }, "data-placeholder": placeholder, ref: ref, onPaste: clearEditor, onInput: saveText }),
        react_1.default.createElement(toolbar_1.default, { tools: tools })));
};
exports.default = EasyReactEditor;
//# sourceMappingURL=index.js.map