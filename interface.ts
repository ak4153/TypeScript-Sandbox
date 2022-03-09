//interface

interface Painter {
  name: string;
}

//adding more properties
interface Vangogh extends Painter {
  ear: boolean;
}

function getVangogh(): Vangogh {
  return { name: 'vangogh', ear: false };
}
const vangogh = getVangogh();

vangogh.ear;
vangogh.name;

//literal interface

interface Options {
  width: number;
}

function setWidth(width: Options | 'auto') {
  console.log(width);
}

setWidth('auto');
setWidth({ width: 100 });

interface ReturnOnly01 {
  option: number;
}
function return01(option: ReturnOnly01): 1 | 0 {
  return option.option === 100 ? 1 : 0;
}
