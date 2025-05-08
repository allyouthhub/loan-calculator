function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value);
  const years = parseFloat(document.getElementById('years').value);
  const currency = document.getElementById('currency').value;

  const resultSection = document.getElementById('result');

  if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
    alert('Please fill in all fields with valid numbers.');
    return;
  }

  // Currency symbols map
  const symbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$"
  };

  const symbol = symbols[currency] || "";

  const principal = amount;
  const monthlyInterest = interest / 100 / 12;
  const totalPayments = years * 12;

  const x = Math.pow(1 + monthlyInterest, totalPayments);
  const monthly = (principal * x * monthlyInterest) / (x - 1);

  const totalPayment = monthly * totalPayments;
  const totalInterest = totalPayment - principal;

  document.getElementById('monthly-payment').textContent = `Monthly Payment: ${symbol}${monthly.toFixed(2)}`;
  document.getElementById('total-payment').textContent = `Total Payment: ${symbol}${totalPayment.toFixed(2)}`;
  document.getElementById('total-interest').textContent = `Total Interest: ${symbol}${totalInterest.toFixed(2)}`;
  resultSection.style.display = 'block';
}
