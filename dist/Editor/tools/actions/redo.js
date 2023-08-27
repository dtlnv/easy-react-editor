import React from 'react';
import Tool from '../tool';
var Redo = function () {
    return React.createElement(Tool, { icon: 'arrow-rotate-right', title: 'Redo', onClick: function () { return document.execCommand('redo', false, 'true'); } });
};
export default Redo;
//# sourceMappingURL=redo.js.map