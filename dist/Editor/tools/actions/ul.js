import React from 'react';
import Tool from '../tool';
var Ul = function () {
    return React.createElement(Tool, { icon: 'list', title: 'UL', onClick: function () { return document.execCommand('insertUnorderedList', false, 'true'); } });
};
export default Ul;
//# sourceMappingURL=ul.js.map