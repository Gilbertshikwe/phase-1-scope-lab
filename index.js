// Write your solution in this file!

var customerName = "bob";
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
  return customerName
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Somebody";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Somebody else";
}

