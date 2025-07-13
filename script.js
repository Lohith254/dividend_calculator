document.getElementById("dividendForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const perSharePrice = parseFloat(document.getElementById("perSharePrice").value);
  const exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
  const investmentGBP = parseFloat(document.getElementById("investmentGBP").value);
  const dividendPerShare = parseFloat(document.getElementById("dividendPerShare").value);
  const taxEUR = parseFloat(document.getElementById("taxEUR").value);

  // Convert GBP to EUR
  const totalValueEUR = investmentGBP / exchangeRate;
  const numberOfShares = totalValueEUR / perSharePrice;
  const dividendEarnedEUR = numberOfShares * dividendPerShare;
  const netDividendGBP = (dividendEarnedEUR - taxEUR) * exchangeRate;

  document.getElementById("results").innerHTML = `
    <p><strong>Converted Investment (EUR):</strong> €${totalValueEUR.toFixed(2)}</p>
    <p><strong>Number of Shares:</strong> ${numberOfShares.toFixed(4)}</p>
    <p><strong>Total Dividends (EUR):</strong> €${dividendEarnedEUR.toFixed(2)}</p>
    <p><strong>Tax Deducted (EUR):</strong> €${taxEUR.toFixed(2)}</p>
    <p><strong>Net Dividend (GBP):</strong> £${netDividendGBP.toFixed(2)}</p>
  `;
});