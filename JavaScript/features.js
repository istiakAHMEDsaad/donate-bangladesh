// ! Donation button content selector
document.addEventListener('DOMContentLoaded', function () {
  const donationButton = document.getElementById('donate-btn');
  const historyButton = document.getElementById('history-btn');

  const donateSection = document.getElementById('donate-section');
  const historySection = document.getElementById('history-section');

  // Handle donation button
  donationButton.addEventListener('click', function () {
    donationButton.classList.add('myLime', 'border-none');
    donationButton.classList.remove('border');

    historyButton.classList.add('bg-white', 'border');
    historyButton.classList.remove('myLime', 'border-none');

    donateSection.classList.remove('hidden');
    historySection.classList.add('hidden');
  });

  // Handle history button
  historyButton.addEventListener('click', function () {
    historyButton.classList.add('myLime', 'border-none');
    historyButton.classList.remove('border');

    donationButton.classList.add('bg-white', 'border');
    donationButton.classList.remove('myLime', 'border-none');

    donateSection.classList.add('hidden');
    historySection.classList.remove('hidden');    
  });
});


// ! Noakhali donation input field
function noakhaliDonation(id) {
  const noakhaliDonationInput = document.getElementById(id).value;
  const noakhaliDonationInputNumber = parseFloat(noakhaliDonationInput);
  return noakhaliDonationInputNumber;
}
// Noakhali donation amount
function noakhaliDonationAmount(id){
  const noakhaliDonationBalance = document.getElementById(id).innerText;
  const noakhaliDonationBalanceNumber = parseFloat(noakhaliDonationBalance);
  return noakhaliDonationBalanceNumber;
}


// ! Feni donation input field
function feniDonation(id) {
  const feniDonationInput = document.getElementById(id).value;
  const feniDonationInputNumber = parseFloat(feniDonationInput);
  return feniDonationInputNumber;
}
// Feni donation amount
function feniDonationAmount(id){
  const feniDonationBalance = document.getElementById(id).innerText;
  const feniDonationBalanceNumber = parseFloat(feniDonationBalance);
  return feniDonationBalanceNumber;
}

// ! Quota movement input field
function quotaMovement(id) {
  const quotaMovementInput = document.getElementById(id).value;
  const quotaMovementInputNumber = parseFloat(quotaMovementInput);
  return quotaMovementInputNumber;
}
// Quota donation amount
function quotaDonationAmount(id){
  const quotaDonationBalance = document.getElementById(id).innerText;
  const quotaDonationBalanceNumber = parseFloat(quotaDonationBalance);
  return quotaDonationBalanceNumber;
}

// ! Total balance
function totalBalance(id){
  const allBalance = document.getElementById(id).innerText;
  const allBalanceNumber = parseFloat(allBalance);
  return allBalanceNumber;
}

/* noakhaliDonation('noakhali-input'); //noakhali-donate-button
noakhaliDonationAmount('noakhali-balance');

feniDonation('feni-input'); //feni-donate-button
feniDonationAmount('feni-balance');

quotaMovement('quota-input'); //quota-donate-button
quotaDonationAmount('quota-balance'); */


// ?Noakhali
document.getElementById('noakhali-donate-button').addEventListener('click', function(event){
  event.preventDefault();
  if(isNaN(noakhaliDonation('noakhali-input')) || noakhaliDonation('noakhali-input') <= 0){
    alert('Please insert a valid number please😥');
    return;
  }else if( totalBalance('main-balance') <= 0 ||  noakhaliDonation('noakhali-input') > totalBalance('main-balance') ){
    alert('Insufficient balance 😫');
    return;
  }
  else{
    const totalSum = noakhaliDonation('noakhali-input') + noakhaliDonationAmount('noakhali-balance');
    document.getElementById('noakhali-balance').innerText = totalSum;
    const totalSubs = totalBalance('main-balance') - noakhaliDonation('noakhali-input');
    document.getElementById('main-balance').innerText = totalSubs;
  }
});

// ?Feni
document.getElementById('feni-donate-button').addEventListener('click', function(event){
  event.preventDefault();
  if(isNaN(feniDonation('feni-input')) || feniDonation('feni-input') <= 0){
    alert('Please insert a valid number please😥');
    return;
  }else if( totalBalance('main-balance') <= 0 ||  feniDonation('feni-input') > totalBalance('main-balance') ){
    alert('Insufficient balance 😫');
    return;
  }
  else{
    const totalSum = feniDonation('feni-input') + feniDonationAmount('feni-balance');
    document.getElementById('feni-balance').innerText = totalSum;
    const totalSubs = totalBalance('main-balance') - feniDonation('feni-input');
    document.getElementById('main-balance').innerText = totalSubs;
  }
});

// ?Quota
document.getElementById('quota-donate-button').addEventListener('click', function(event){
  event.preventDefault();
  if(isNaN(quotaMovement('quota-input')) || quotaMovement('quota-input') <= 0){
    alert('Please insert a valid number please😥');
    return;
  }else if( totalBalance('main-balance') <= 0 ||  quotaMovement('quota-input') > totalBalance('main-balance') ){
    alert('Insufficient balance 😫');
    return;
  }
  else{
    const totalSum = quotaMovement('quota-input') + quotaDonationAmount('quota-balance');
    document.getElementById('quota-balance').innerText = totalSum;
    const totalSubs = totalBalance('main-balance') - quotaMovement('quota-input');
    document.getElementById('main-balance').innerText = totalSubs;
  }
});