const balance = document.getElementById('balance');
const money_plus = document.getElementById('deposit');
const money_minus = document.getElementById('loan');
const list = document.getElementById('list');
const form = document.getElementById('form');
const custname = document.getElementById('custname');
const reco = document.getElementById('reco');
///////////////////////////////////////////////////////

var AccountsDatabase;
var AccountsData;
function getFromServer(){
  $.getJSON('https://583d562a-3646-4c43-ae04-47aff88479b3.mock.pstmn.io/database', function(database) {      
    AccountsDatabase = database;
  });
  setTimeout(delayAccountsData(),1000);
}

// Add transactions to DOM list
function addTransactionDOM(account) {
  const account_item = document.createElement('li');
  account_item.classList.add('plus');
  account_item.innerHTML = `
  ${account.first_name} ${account.last_name} - 
  ${account.fi_name}  <span> 
  $ ${account.account_balance}</span> `
  list.appendChild(account_item);
}

// Update the balance, deposit and loan
function updateValues() {

  const bal = AccountsData.map(account => account.account_balance);

  const total_balance = bal.reduce((acc, item) => (acc += item), 0).toFixed(2);

  money_plus.innerText = `$${total_balance}`;

}
function filterTransaction(e) {
  e.preventDefault();  //to prevent form from submitting and refreshing the page
  list.innerHTML = '';
  reco.innerHTML = '';
  AccountsData = AccountsDatabase.filter(account => account.first_name == custname.value);  
  AccountsData.forEach(addTransactionDOM);
  updateValues(); 
}
// delay AccountsData
function delayAccountsData() {
  AccountsData = AccountsDatabase;
}
function init() {
  getFromServer();
  list.innerHTML = '';
  reco.innerHTML = '';
  AccountsData.forEach(addTransactionDOM);
  updateValues();
}

// init();
form.addEventListener('submit', filterTransaction);
