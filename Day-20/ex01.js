const students = [
    { name: 'Nguyen Van A', score: 9 },
    { name: 'Tran Thi B', score: 7 },
    { name: 'Le Van C', score: 5 },
    { name: 'Pham Thi D', score: 3 },
    { name: 'Doan Van E', score: 10 },
    { name: 'Hoang Thi F', score: 6 },
];
function findHighestLowest(students) {
    let highest = students[0];
    let lowest = students[0];
    for (const student of students) {
        if (student.score > highest.score) {
            highest = student;
        }
        if (student.score < lowest.score) {
            lowest = student;
        }
    }
    return { highest, lowest };
}
function groupStudents(students) {
    const output = {
        group: {
            A: [],
            B: [],
            C: [],
            D: []
        }
    };
    for (const student of students) {
        let band;
        if (student.score >= 8) {
            band = "A";
        } else if (student.score >= 6) {
            band = "B";
        } else if (student.score >= 4) {
            band = "C";
        } else {
            band = "D";
        }
        output.group[band].push(student);
    }

    return output;
}

const highestLowest = findHighestLowest(students);
const groupedStudents = groupStudents(students);

const highest = highestLowest.highest;
const lowest = highestLowest.lowest;
const group = groupedStudents.group;

console.log({
    highest: highest,
    lowest: lowest,
    groups: group
});



