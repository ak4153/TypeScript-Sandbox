function createDiv(ob) {
    var dv = document.createElement('div');
    var p = document.createElement('p');
    var code = document.createElement('code');
    p.innerText = ob.name + 29;
    var props = ob.properties.map(function (prop) {
        var prgrph = document.createElement('p');
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
var Drinks;
(function (Drinks) {
    Drinks[Drinks["COFFEE"] = 0] = "COFFEE";
    Drinks[Drinks["TEA"] = 1] = "TEA";
    Drinks[Drinks["BEER"] = 2] = "BEER";
})(Drinks || (Drinks = {}));
var object = {
    name: 'alex',
    value: 29,
    properties: ['<p>gym</p>', '<p>sleep</p>', '<p>code</p>'],
    nest: { nest2: { nest3: { nest4: 'gold' } } },
    role: ['admin', 1337],
    drinks: Drinks.BEER
};
console.log(object.drinks); //2
document.getElementById('root').appendChild(createDiv(object));
