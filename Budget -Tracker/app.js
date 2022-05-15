const budgetFeedback = document.querySelector(".budget-feedback");
const expenseFeedback = document.querySelector(".expense-feedback");
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const budgetAmount = document.getElementById("budget-amount");
const expenseAmount = document.getElementById("expense-amount");
const balance = document.getElementById("balance");
const balanceAmount = document.getElementById("balance-amount");
const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-input");
const amountInput = document.getElementById("amount-input");
const expenseList = document.getElementById("expense-list");
const itemList = [];
const itemID = 0;
const expense = document.getElementById("expense");
const budget = document.getElementById("budget");

//submit events for budget and expense form

budgetForm.addEventListener("submit", budgetUpdate);
expenseForm.addEventListener("submit", expenseUpdate);

function budgetUpdate(e) {
  e.preventDefault();
  const budgetInput = document.getElementById("budget-input").value;

  budget.innerText = `$ ${budgetInput}`;
  balance.innerText = `$ ${budgetInput}`;
}

function expenseUpdate(e) {
  e.preventDefault();

  const curExpenseValue = expense.innerText.substring(
    2,
    expense.innerText.length
  );
 
  const curBudget = budget.innerText.substring(2, budget.innerText.length);
  console.log(curBudget);

  const expInput = amountInput.value;
  const expNow = parseInt(expInput) + parseInt(curExpenseValue);
  expense.innerText = `$ ${expNow}`;
  balance.innerText = `$ ${parseInt(curBudget - expNow)}`;

  const div = document.createElement("div");

  const text = `<div class="expense">
<div class="expense-item d-flex justify-content-between align-items-baseline">

 <h6 class="expense-title mb-0 text-uppercase list-item">- ${expenseInput.value}</h6>
 <h5 class="expense-amount mb-0 list-item">${amountInput.value}</h5>

 <div class="expense-icons list-item">

 
 </div>
</div>

</div>`;
  div.innerHTML = text;
  expenseList.appendChild(div);
}
