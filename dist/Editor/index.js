'use client';
import React from 'react';
import Toolbar from './toolbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles/editor.css';
library.add(fas);
var EasyReactEditor = function (_a) {
    var text = _a.text, setText = _a.setText, _b = _a.placeholder, placeholder = _b === void 0 ? 'Type text here...' : _b, tools = _a.tools;
    var defaultText = React.useState(text)[0];
    var ref = React.useRef(null);
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
    return (React.createElement("div", { id: 'ereditor' },
        React.createElement("div", { className: 'ere-content', contentEditable: true, suppressContentEditableWarning: true, dangerouslySetInnerHTML: { __html: defaultText }, "data-placeholder": placeholder, ref: ref, onPaste: clearEditor, onInput: saveText }),
        React.createElement(Toolbar, { tools: tools })));
};
export default EasyReactEditor;
//# sourceMappingURL=index.js.map