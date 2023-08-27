import React from 'react';
import Tool from '../tool';
var Undo = function () {
    return React.createElement(Tool, { icon: 'arrow-rotate-left', title: 'Undo', onClick: function () { return document.execCommand('undo', false, 'true'); } });
};
export default Undo;
//# sourceMappingURL=undo.js.map