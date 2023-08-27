import React from 'react';
import Tool from '../tool';
var Underline = function () {
    return React.createElement(Tool, { icon: 'underline', title: 'Underline', onClick: function () { return document.execCommand('underline', false, 'true'); } });
};
export default Underline;
//# sourceMappingURL=underline.js.map