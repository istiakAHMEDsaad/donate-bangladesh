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
