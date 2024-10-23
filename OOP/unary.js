let num = 1 
let doub = num++
// let x = 2 +num

// console.log(doub)

// Ternary Operator
let voteAge;
let message;

// console.log(voteAge ? "You can drive" : "You cannot drive");

// let authenticated;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');

let locked = 1;
let canChange = locked != 1;
console.log(canChange)

// redirect to nextURL here
// console.log(nextURL); // '/admin'

class Circle {
  constructor(radius) {
      this.radius = radius;
  }
  set diameter(value) {
      this.radius = value / 2;
      console.log('SET ', value);
  }
  get diameter() {
      return this.radius * 2;
  }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
  diameter: 200
});

let cloneCircle2 = {
  ...circle
};
