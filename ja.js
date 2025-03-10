const score1 = parseFloat(prompt("Enter Score 1:"));
const score2 = parseFloat(prompt("Enter Score 2:"));
const score3 = parseFloat(prompt("Enter Score 3:"));
const score4 = parseFloat(prompt("Enter Score 4:"));
const score5 = parseFloat(prompt("Enter Score 5:"));

const total = score1 + score2 + score3 + score4 + score5;
const average = total / 5;

var grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}

document.write(`
    <tr><td class="table-dark">Score 1</td><th class="table-secondary">${score1}</th></tr>
    <tr><td class="table-dark">Score 2</td><th class="table-secondary">${score2}</th></tr>
    <tr><td class="table-dark">Score 3</td><th class="table-secondary">${score3}</th></tr>
    <tr><td class="table-dark">Score 4</td><th class="table-secondary">${score4}</th></tr>
    <tr><td class="table-dark">Score 5</td><th class="table-secondary">${score5}</th></tr>
    <tr><td class="table-dark">Total</td><th class="table-secondary">${total}</th></tr>
    <tr><td class="table-dark">Average</td><th class="table-secondary">${average.toFixed(2)}</th></tr>
    <tr><td class="table-dark">Grade</td><th class="table-secondary">${grade}</th></tr>
`);