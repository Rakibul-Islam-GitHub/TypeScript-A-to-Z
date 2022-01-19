function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(5, 12));



// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
}
);