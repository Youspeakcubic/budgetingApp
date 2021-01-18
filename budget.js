let budgetCount = document.getElementById("budgetCount");
let expenseList = document.getElementById("expenseItems");
let budgetTable = document.getElementById("tableBudget");
let expenseCounter = document.getElementById("expenseCounter");
let netFlow = document.getElementById("netFlow");
let income;
let expCounter = 0;
function addBudget() {
  income = document.getElementById("incomeInput").value;
  if (!income) {
  } else {
    budgetCount.innerHTML = "";
    budgetTable.innerHTML ="";
    budgetCount.appendChild(document.createTextNode(`Budget: $${income}`));
    budgetTable.appendChild(document.createTextNode(`Budget: $${income}`));
    document.getElementById("incomeInput").value = "";
  }
}
function addExpense() {
  expenseCounter.innerHTML = "";
  let expense = [
    document.getElementById("expenseName").value,
    document.getElementById("expenseType").value,
    document.getElementById("expenseCost").value
  ];
  income = income - expense[2];
  if (!expense[0] || !expense[1]) {
    expenseCost.placeholder = "Please enter a value";
    expenseName.placeholder = "please enter a value";
  } else {
    let row = expenseList.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = `${expense[0]}`;
    cell2.innerHTML = `${expense[1]}`;
    cell3.innerHTML = `$${expense[2]}`;
    cell4.innerHTML = `Budget: $${income}`;
    expenseName.value = "";
    expenseCost.value = "";
    expCounter++;
    expenseCounter.appendChild(document.createTextNode(`#${expCounter} expenses`));
    netFlow.appendChild(document.createTextNode(`$${income}`));
  }
}
