const students = [
    { name: 'Nguyen Van A', score: 9 },
    { name: 'Tran Thi B', score: 7 },
    { name: 'Le Van C', score: 5 },
    { name: 'Pham Thi D', score: 3 },
    { name: 'Doan Van E', score: 10 },
    { name: 'Hoang Thi F', score: 6 },
];

function analyzeStudents(students) {
    let highest = students[0];
    let lowest = students[0];
    const groups = { A: [], B: [], C: [], D: [] };
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.score > highest.score) {
            highest = student;
        }
        if (student.score < lowest.score) {
            lowest = student;
        }

        if (student.score >= 8) {
            groups.A.push(student);
        } else if (student.score >= 6) {
            groups.B.push(student);
        } else if (student.score >= 4) {
            groups.C.push(student);
        } else {
            groups.D.push(student);
        }
    }
    return {
        highest,
        lowest,
        group: groups,
    };
}
const result = analyzeStudents(students);
console.log(result);




