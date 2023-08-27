import { __assign, __rest } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
var Tool = function (_a) {
    var icon = _a.icon, title = _a.title, rest = __rest(_a, ["icon", "title"]);
    return (React.createElement("div", __assign({ className: 'ere-tool', title: title, onMouseDown: function (e) {
            e.preventDefault();
            var element = document === null || document === void 0 ? void 0 : document.querySelector('#ereditor .ere-content');
            if (element && typeof element.focus === 'function') {
                element.focus();
            }
        } }, rest), icon && React.createElement(FontAwesomeIcon, { icon: icon })));
};
export default Tool;
//# sourceMappingURL=tool.js.map