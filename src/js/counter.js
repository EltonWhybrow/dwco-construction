export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}



// let mul = (a, b) => a * b;

// let expectedValue = 10;
// let actalValue = mul(2, 10);

// if (expectedValue === actalValue) {
//   console.log('>>>SUCCESS>>>');
// }
// else {
//   throw new Error('ERROR is found!')
// }

// console.log('>>>LOG>>>', mul(1, 7));

