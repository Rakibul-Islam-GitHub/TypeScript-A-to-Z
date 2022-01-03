//  inference 
const names = ['Jhon', 'Jane', 'Doe'];
const dates = [new Date(), new Date()];

// directly mentioned the type
const marks:number[] = [92,85,98,91];

const id: string[][] = [];

//  inference 
const myName = names[0];
const yourName = names.pop();


// working with 'map'
names.map(
  (name: string): string => {
    return name.toLowerCase()
  }
);

// multiple types
const orderDates: (Date | string)[] = [];
orderDates.push('2030-10-10');
orderDates.push(new Date());
