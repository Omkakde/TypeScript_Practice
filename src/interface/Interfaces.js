var myCar = {
    brand: "Tata",
    model: "Harrier",
    Engine: "h204" // Cannot be re declare
};
console.log(myCar);
console.log(myCar.brand);
console.log(myCar.model);
myCar.brand = 'BMW';
console.log(myCar.brand);
