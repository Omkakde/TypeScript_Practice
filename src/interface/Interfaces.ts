interface Car {
    brand: string;
    model: string;
    year?: number;//optional
    readonly Engine:string; //  read-only property 
  }
  
  const myCar: Car = {
    brand: "Tata",
    model: "Harrier",
    Engine:"h204"// Cannot be re declare
  };
  
  console.log(myCar);
  console.log(myCar.brand);
  console.log(myCar.model);
  myCar.brand='BMW';

  console.log(myCar.brand);