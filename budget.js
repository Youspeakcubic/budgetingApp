let budgetCount = document.getElementById('budgetCount');
let expenseList = document.getElementById('expenseItems');
let budgetTable = document.getElementById('tableBudget');
let income;
function addBudget() {
  income = document.getElementById("incomeInput").value;
  if (!income) {

  } else {
    budgetCount.innerHTML = "";
    budgetCount.appendChild(document.createTextNode(`Budget: $${income}`));

  }
}
function addExpense() {
  let expense =[
    document.getElementById('expenseName').value ,
    document.getElementById('expenseCost').value,
    document.getElementById('expenseType').value
 ];
if (!expense[0] || !expense[1] ) {
    expenseCost.placeholder = "Please enter a value";
    expenseName.placeholder = "please enter a value";
  } else {
    let row = expenseList.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = `${expense[0]}`;
    cell2.innerHTML = `$${expense[1]}`;
    cell3.innerHTML = `${expense[2]}`;
    expenseName.value = "";
    expenseCost.value = "";
    return `${income}` - `${expenseCost}`
    console.log(`${income}`);
  }
}
