import React from 'react';
import Tool from '../tool';
var Italic = function () {
    return React.createElement(Tool, { icon: 'italic', title: 'Italic', onClick: function () { return document.execCommand('italic', false, 'true'); } });
};
export default Italic;
//# sourceMappingURL=italic.js.map