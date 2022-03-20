"use strict";
//interface
function getVangogh() {
    return { name: 'vangogh', ear: false };
}
const vangogh = getVangogh();
vangogh.ear;
vangogh.name;
function setWidth(width) {
    console.log(width);
}
setWidth('auto');
setWidth({ width: 100 });
function return01(option) {
    return option.option === 100 ? 1 : 0;
}
