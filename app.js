// grab buttons

const carBtn = document.getElementById("car_btn");
const mowBtn = document.getElementById("mow_btn");
const pullBtn = document.getElementById("pull_btn");

// grab hold of task area

const taskCarWash = document.getElementById("task_carwash");
const taskCarWashCost = document.getElementById("task_carwash_cost");
const taskMowLawn = document.getElementById("task_mow_lawn");
const taskMowLawnCost = document.getElementById("task_mow_lawn_cost");
const taskPullWeeds = document.getElementById("task_pullweeds");
const taskPullWeedsCost = document.getElementById("pullweeds_cost");
const totalInvoice = document.getElementById("total_invoice");
const invoiceResult = document.getElementById("invoice_result");

const totalCost = [];
let sum = 0;

carBtn.addEventListener("click", function () {
  taskCarWash.textContent = "Wash car";
  taskCarWashCost.textContent = 10;
  totalCost.push(10);
});

mowBtn.addEventListener("click", function () {
  taskMowLawn.textContent = "Mow lawn";
  taskMowLawnCost.textContent = 20;
  totalCost.push(20);
});

pullBtn.addEventListener("click", function () {
  taskPullWeeds.textContent = "Pull weeds";
  taskPullWeedsCost.textContent = 30;
  totalCost.push(30);
  console.log(totalCost);
});

totalInvoice.addEventListener("click", function () {
  for (let i = 0; i < totalCost.length; i++) {
    sum += totalCost[i];
    console.log(sum);
    invoiceResult.textContent = "£" + sum;
  }
});
