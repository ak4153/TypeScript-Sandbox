interface div {
  dv: HTMLDivElement;
}

function createDiv(ob: obj): HTMLDivElement {
  const dv = document.createElement('div');
  const p = document.createElement('p');
  const code = document.createElement('code');
  p.innerText = ob.name + 29;
  const props = ob.properties.map((prop) => {
    const prgrph = document.createElement('p');
    prgrph.innerText = prop;
    dv.appendChild(prgrph);
  });

  p.style.color = ob.nest.nest2.nest3.nest4;
  dv.style.display = 'flex';
  dv.style.flexDirection = 'column';
  dv.style.justifyContent = 'center';
  dv.style.alignItems = 'center';
  dv.style.border = '2px solid black';
  code.innerText = ob.role[0];

  dv.appendChild(p);

  dv.appendChild(code);
  return dv;
}

enum Drinks {
  COFFEE,
  TEA,
  BEER,
}

interface obj {
  name: string;
  value: number;
  properties: string[];
  nest: { nest2: { nest3: { nest4: string } } };
  role: [string, number];
  drinks: Drinks;
}

var object: obj = {
  name: 'alex',
  value: 29,
  properties: ['<p>gym</p>', '<p>sleep</p>', '<p>code</p>'],
  nest: { nest2: { nest3: { nest4: 'gold' } } },
  role: ['admin', 1337],
  drinks: Drinks.BEER,
};
console.log(object.drinks); //2
document.getElementById('root').appendChild(createDiv(object));
