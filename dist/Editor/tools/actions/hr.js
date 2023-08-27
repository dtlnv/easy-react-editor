import React from 'react';
import Tool from '../tool';
var Hr = function () {
    return React.createElement(Tool, { icon: 'minus', title: 'HR', onClick: function () { return document.execCommand('insertHorizontalRule', false, 'true'); } });
};
export default Hr;
//# sourceMappingURL=hr.js.map