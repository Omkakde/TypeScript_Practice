var tuple = ["Hello", 42];
console.log(tuple);
tuple.push('Pune');
console.log(tuple);
// tuple[2]=23; give error bcz second position is Pune as string only can add string
//Error
// let tuple2: readonly [string, number] = ["Hello", 42];
// tuple2.push("Pune"); // Error: Property 'push' does not exist on type 'readonly [string, number]'
