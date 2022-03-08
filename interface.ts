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
