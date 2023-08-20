const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("expenseamount");
const expenseList = document.getElementById("expense-list");

expenseForm.addEventListener("submit", addExpense);

function addExpense(event) {
  event.preventDefault();

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description && amount) {
    const expense = {
      id: new Date().getTime(), // Unique ID for each expense
      description,
      amount,
    };

    addExpenseToList(expense);
    saveExpense(expense);

    descriptionInput.value = "";
    amountInput.value = "";
  }
}

function addExpenseToList(expense) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${expense.description}</span>
        <span>$${expense.amount.toFixed(2)}</span>
        <button class="edit-btn" data-id="${expense.id}">Edit</button>
        <button class="delete-btn" data-id="${expense.id}">Delete</button>
    `;
  expenseList.appendChild(li);

  const editButton = li.querySelector(".edit-btn");
  const deleteButton = li.querySelector(".delete-btn");

  editButton.addEventListener("click", editExpense);
  deleteButton.addEventListener("click", deleteExpense);
}

function saveExpense(expense) {
  let expenses = getExpensesFromStorage();
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getExpensesFromStorage() {
  return JSON.parse(localStorage.getItem("expenses") || "[]");
}

function loadExpenses() {
  const expenses = getExpensesFromStorage();
  expenses.forEach(addExpenseToList);
}

function editExpense(event) {
  const expenseId = event.target.getAttribute("data-id");
  const expenses = getExpensesFromStorage();
  const expenseToEdit = expenses.find(
    (expense) => expense.id.toString() === expenseId
  );

  if (expenseToEdit) {
    descriptionInput.value = expenseToEdit.description;
    amountInput.value = expenseToEdit.amount.toFixed(2);

    deleteExpenseFromStorage(expenseToEdit);
  }
}

function deleteExpense(event) {
  const expenseId = event.target.getAttribute("data-id");
  const expenses = getExpensesFromStorage();
  const expenseToDelete = expenses.find(
    (expense) => expense.id.toString() === expenseId
  );

  if (expenseToDelete) {
    deleteExpenseFromStorage(expenseToDelete);
  }

  event.target.parentElement.remove();
}

function deleteExpenseFromStorage(expense) {
  const expenses = getExpensesFromStorage();
  const updatedExpenses = expenses.filter((exp) => exp.id !== expense.id);
  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
}

loadExpenses();
