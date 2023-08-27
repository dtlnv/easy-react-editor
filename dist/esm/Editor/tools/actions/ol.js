import React from 'react';
import Tool from '../tool';
var Ol = function () {
    return React.createElement(Tool, { icon: 'list-ol', title: 'OL', onClick: function () { return document.execCommand('insertOrderedList', false, 'true'); } });
};
export default Ol;
//# sourceMappingURL=ol.js.map