// $(document).ready(tableDataRender);

$(document).ready(init);

function init() {
  $('.runReportBtn').on('click', tableDataRender);
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

/*
//function employeeBonus() {
  for (let person of employees) {
    function newEmployeeProfile(person);
    console.log(newObj);
  }
}
*/

// let person;
let employeeBonusReport = [];

// person = employees[0];
// console.log(person);

let percentage;

function calculateBonusPercentage(person) {
  if (person.reviewRating <= 2) {
    // check for review rating
    percentage = 0;
  } else if (person.reviewRating === 3) {
    percentage = 0.04;
  } else if (person.reviewRating === 4) {
    percentage = 0.06;
  } else {
    percentage = 0.1;
  } // end check
}

// function takes employee object from for of loop to determine employee bonus breakdown
function newEmployeeProfile(person) {
  // create new object
  let newObj = {};
  // assigns original employee property name value to newObj property value
  newObj.name = person.name;
  // determine bonus percentage by employee
  calculateBonusPercentage(person);
  // determine special cases
  // if employee has been with company for more than 15 years (4 digit employeeNumber)
  if (person.employeeNumber.length === 4) {
    percentage += 0.05;
    if (percentage > 0.13) {
      // left off here
      percentage = 0.13;
    }
  }

  newObj.bonusPercentage = percentage;
  newObj.totalBonus = person.annualSalary * percentage;
  let grossTotal = parseInt(person.annualSalary) + parseInt(newObj.totalBonus);
  if (grossTotal > 65000 && newObj.bonusPercentage != 0) {
    newObj.bonusPercentage -= 0.01;
  }
  newObj.totalBonus = Math.round(
    newObj.bonusPercentage * parseInt(person.annualSalary)
  );
  newObj.totalCompensation =
    parseInt(person.annualSalary) + parseInt(newObj.totalBonus);
  employeeBonusReport.push(newObj);
  return newObj; // newObj = {name: Atticus, bonusPercentage: #}
}

// console.log(newEmployeeProfile(person));
// console.log(newEmployeeProfile(employees[2]));
// console.log(employeeBonusReport);

//testing purposes
for (let person of employees) {
  // loop of employees
  console.log(newEmployeeProfile(person));
}
// console.log(employeeBonusReport); // after newEmployeeProfile

// render table to DOM ent loop and employeeBonusReport[] object keys and key properties
function tableDataRender(event) {
  $(`.js-table-body`).empty();
  for (let i = 0; i < employeeBonusReport.length; i++) {
    const individualEmployee = employeeBonusReport[i];
    $(`.js-table-body`).append(`
      <tr>
      <td>${individualEmployee.name}</td>
      <td>${individualEmployee.bonusPercentage}</td>
      <td>${individualEmployee.totalBonus}</td>
      <td>${individualEmployee.totalCompensation}</td>
      </tr>
      `);
  }
}

console.table(employeeBonusReport);
