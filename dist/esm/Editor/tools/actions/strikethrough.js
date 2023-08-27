import React from 'react';
import Tool from '../tool';
var StrikeThrough = function () {
    return (React.createElement(Tool, { icon: 'strikethrough', title: 'StrikeThrough', onClick: function () { return document.execCommand('strikeThrough', false, 'true'); } }));
};
export default StrikeThrough;
//# sourceMappingURL=strikethrough.js.map