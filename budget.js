let budgetCount = document.getElementById('budgetCount');
let expenseList = document.getElementById('expenseItems');
function addBudget() {
  let income = document.getElementById("incomeInput").value;
  budgetCount.appendChild(document.createTextNode(` $${income}`));
}
function addExpense() {
  let expenseName = document.getElementById('expenseName').value;
  let expenseCost = document.getElementById('expenseCost').value;
  let expenseType = document.getElementById('expenseType').value;
  let liNode = document.createElement("LI");
  liNode.appendChild(document.createTextNode(`Service: ${expenseName} Cost:$${expenseCost} Type: ${expenseType}`))
  expenseList.appendChild(liNode);
}
