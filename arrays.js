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
