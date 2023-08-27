import React from 'react';
import Tool from '../tool';
var Bold = function () {
    return React.createElement(Tool, { icon: 'bold', title: 'Bold', onClick: function () { return document.execCommand('bold', false, 'true'); } });
};
export default Bold;
//# sourceMappingURL=bold.js.map