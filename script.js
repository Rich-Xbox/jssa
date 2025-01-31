let soz = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let Bor = [];
let YoQ = [];

soz.forEach(soZ => {
    if (soZ.toLowerCase().includes('n')) {
        Bor.push(soZ);
    } else {
        YoQ.push(soZ);
    }
});

console.log("'n' harfi bor so'zlar:", Bor);
console.log("'n' harfi yo'q so'zlar:", YoQ);
