const fs = require('fs');
const files = fs.readdirSync('./public/product img');
let items = [];
const regex = /^P([0-9]+)(\(([^)]+)\))?\.(JPG|jpg)$/i;

files.sort((a, b) => {
    const na = parseInt(a.match(regex)[1]);
    const nb = parseInt(b.match(regex)[1]);
    return na - nb;
}).forEach(f => {
    const match = f.match(regex);
    if (match) {
        const num = parseInt(match[1]);
        if (num >= 11 && num <= 35) {
            let name = match[3] ? match[3] : "Ceylon Tea " + num;
            items.push(`            {
                id: "ceylon-tea-${num}",
                name: "${name}",
                price: "$15",
                img: "/product img/${f}",
                desc: "Premium quality from our private estate"
            }`);
        }
    }
});
console.log(',' + '\n' + items.join(",\n"));
