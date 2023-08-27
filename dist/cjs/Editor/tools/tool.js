"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Tool = function (_a) {
    var icon = _a.icon, title = _a.title, rest = tslib_1.__rest(_a, ["icon", "title"]);
    return (react_1.default.createElement("div", tslib_1.__assign({ className: 'ere-tool', title: title, onMouseDown: function (e) {
            e.preventDefault();
            var element = document === null || document === void 0 ? void 0 : document.querySelector('#ereditor .ere-content');
            if (element && typeof element.focus === 'function') {
                element.focus();
            }
        } }, rest), icon && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon })));
};
exports.default = Tool;
//# sourceMappingURL=tool.js.map