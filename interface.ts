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
