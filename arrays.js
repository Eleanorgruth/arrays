var students = ["Sam", "Sydney", "Tamika", "Tom", "Gabi"];
var testScores = [80, 85, 90, 92, 99];
var present = [true, true, true, true, false]
console.log(students);
console.log(testScores);
console.log(present);

// expected output: ["Sam", "Sydney", "Tamika", "Tom"]
students.pop();
console.log(students);

// expected output: [80, 85, 90, 92, 99, 100]
testScores.push(100);
console.log(testScores);

//expected output: [true, true, true, false]
present.shift();
console.log(present);

//demonstrating index position.
// The index postion is the element number in an array. Counting starts at 0.
// expected output: "Sam 80 true" Sam's index position in the array is 0.

console.log(students[0], testScores[0], present[0])

//expected output: "Sydney 85 true"
console.log(students[1], testScores[1], present[1])
