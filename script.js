let balance = 10000;
let pin = 5854;
let depositAmount = 0;
let withdrawAmount = 0;

function validatePIN() {
    const pinInput = document.getElementById('pinInput').value;
    if (pinInput == pin) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('atmInterface').style.display = 'block';
        document.getElementById('userName').innerText = 'User';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid PIN. Please try again.';
    }
}

function showBalance() {
    hideAllSections();
    document.getElementById('balance').style.display = 'block';
    document.getElementById('balanceAmount').innerText = balance;
}

function showDeposit() {
    hideAllSections();
    document.getElementById('deposit').style.display = 'block';
}

function showWithdraw() {
    hideAllSections();
    document.getElementById('withdraw').style.display = 'block';
}

function showReceipt() {
    hideAllSections();
    document.getElementById('receipt').style.display = 'block';
    document.getElementById('receiptBalance').innerText = balance;
    document.getElementById('receiptDeposit').innerText = depositAmount;
    document.getElementById('receiptWithdraw').innerText = withdrawAmount;
}

function depositMoney() {
    const amount = parseInt(document.getElementById('depositAmount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        depositAmount += amount;
        alert('Deposit successful!');
    } else {
        alert('Please enter a valid amount.');
    }
    document.getElementById('depositAmount').value = '';
}

function withdrawMoney() {
    const amount = parseInt(document.getElementById('withdrawAmount').value);
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            withdrawAmount += amount;
            alert('Withdrawal successful!');
        } else {
            document.getElementById('withdrawMessage').innerText = 'Insufficient balance.';
        }
    } else {
        alert('Please enter a valid amount.');
    }
    document.getElementById('withdrawAmount').value = '';
}

function exitATM() {
    hideAllSections();
    document.getElementById('atmInterface').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('pinInput').value = '';
    document.getElementById('loginMessage').innerText = '';
}

function hideAllSections() {
    document.getElementById('balance').style.display = 'none';
    document.getElementById('deposit').style.display = 'none';
    document.getElementById('withdraw').style.display = 'none';
    document.getElementById('receipt').style.display = 'none';
}
