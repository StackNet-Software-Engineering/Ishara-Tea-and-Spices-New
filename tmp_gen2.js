const fs = require('fs');
const files = fs.readdirSync('./public/product img');

function generateSection(prefix) {
    let items = [];
    const filtered = files.filter(f => f.startsWith(prefix));

    // Attempt numerical sort if possible
    filtered.sort((a, b) => {
        const numA = parseInt((a.match(/\d+/) || [0])[0]);
        const numB = parseInt((b.match(/\d+/) || [0])[0]);
        return numA - numB;
    });

    filtered.forEach((f, idx) => {
        let name = "Product";
        const match = f.match(/\(([^)]+)\)/);
        if (match && match[1]) {
            name = match[1];
        } else {
            name = prefix + " Item " + (idx + 1);
        }

        items.push(`            {
                id: "${prefix.toLowerCase()}-item-${idx + 1}",
                name: "${name}",
                price: "$10",
                img: "/product img/${f}",
                desc: "100% Authentic Sri Lankan"
            }`);
    });
    return `        items: [\n${items.join(",\n")}\n        ]`;
}

console.log("=== SPICES ===");
console.log(generateSection("S"));

console.log("=== HERBAL ===");
console.log(generateSection("H"));

console.log("=== OP ===");
console.log(generateSection("OP"));
