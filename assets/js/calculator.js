let returnChartInstance = null; // Инициализация переменной для хранения экземпляра графика возврата
let incomeChartInstance = null; // Инициализация переменной для хранения экземпляра графика доходности

// Обработчик события загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  // Массив идентификаторов входных элементов
  const inputs = [
    "principal",
    "annualContribution",
    "contributionFrequency",
    "dividendYield",
    "dividendTaxRate",
    "reinvestDividends",
    "stockPriceAppreciation",
    "calculationYears",
    "dividendFrequency",
  ];

  // Добавляем обработчики событий для каждого входного элемента
  inputs.forEach((id) => {
    const element = document.getElementById(id);
    if (element.type === "checkbox" || element.tagName === "SELECT") {
      // Если элемент является чекбоксом или выпадающим списком
      element.addEventListener("change", calculateReturns); // Добавляем обработчик изменения
    } else {
      element.addEventListener("input", calculateReturns); // Добавляем обработчик ввода
    }
  });

  // Используем select2 для элемента contributionFrequency
  $("#contributionFrequency").on("select2:select", function (e) {
    calculateReturns(); // Пересчитываем данные при изменении значения
  });

  // Используем select2 для элемента dividendFrequency
  $("#dividendFrequency").on("select2:select", function (e) {
    calculateReturns(); // Пересчитываем данные при изменении значения
  });

  calculateReturns(); // Вызываем calculateReturns() при загрузке страницы
});

// Функция для расчета данных
function calculateReturns() {
  const principal = parseFloat(document.getElementById("principal").value);
  const annualContribution = parseFloat(
    document.getElementById("annualContribution").value
  );
  const contributionFrequency = document.getElementById(
    "contributionFrequency"
  ).value;

  const dividendYield =
    parseFloat(document.getElementById("dividendYield").value) / 100;
  const dividendTaxRate =
    parseFloat(document.getElementById("dividendTaxRate").value) / 100;
  const reinvestDividends =
    document.getElementById("reinvestDividends").checked;
  const stockPriceAppreciation =
    parseFloat(document.getElementById("stockPriceAppreciation").value) / 100;
  const calculationYears = parseInt(
    document.getElementById("calculationYears").value
  );

  let contributionAmount = annualContribution;

  // Учитываем частоту взносов
  if (contributionFrequency === "month") {
    contributionAmount /= 12; // Раз в месяц
  } else if (contributionFrequency === "quarter") {
    contributionAmount /= 4; // Раз в квартал
  } else if (contributionFrequency === "half-year") {
    contributionAmount /= 2; // Раз в полгода
  }

  let totalPrincipal = principal;
  let totalContributions = 0;
  let totalDividends = 0;

  const annualData = [];
  const monthlyIncomeData = [];
  const breakdownData = [];
  let cumulativeReturnPercent = 0;
  let totalGrowth = 0;

  for (let year = 1; year <= calculationYears; year++) {
    let yearDividends = 0;
    let yearDividendsTax = 0;
    let yearGrowth = 0;
    let yearBalanceStart = totalPrincipal;
    let yearContributions = 0;

    let period = 0;
    const dividendFrequency =
      document.getElementById("dividendFrequency").value;
    if (dividendFrequency === "year") {
      period = 1; // Ежегодно
    } else if (dividendFrequency === "quarter") {
      period = 4; // Ежеквартально
    } else if (dividendFrequency === "half-year") {
      period = 2; // Раз в полгода
    } else {
      period = 12; // Ежемесячно
    }

    for (let i = 0; i < period; i++) {
      const dividends = (totalPrincipal * dividendYield) / period;
      yearDividends += dividends;
      const tax = dividends * dividendTaxRate; // Рассчитать налог на дивиденды
      yearDividendsTax += tax;
      totalDividends += dividends - tax;
      if (reinvestDividends) {
        totalPrincipal += dividends;
      }
      totalPrincipal += contributionAmount;
      yearContributions += contributionAmount;
      totalContributions += contributionAmount;
    }

    totalPrincipal *= 1 + stockPriceAppreciation;

    if (!reinvestDividends) {
      yearGrowth =
        totalPrincipal -
        yearBalanceStart -
        yearContributions +
        yearDividendsTax;
    } else {
      yearGrowth =
        totalPrincipal -
        yearBalanceStart -
        yearContributions -
        yearDividends +
        yearDividendsTax;
    }

    totalGrowth += yearGrowth;

    const yearReturn = totalPrincipal - yearBalanceStart - yearContributions;
    const yearReturnPercent = ((yearReturn / yearBalanceStart) * 100).toFixed(
      2
    );

    cumulativeReturnPercent += parseFloat(yearReturnPercent);

    annualData.push({
      principal,
      contributions: totalContributions,
      dividends: totalDividends,
      growth: yearGrowth,
    });

    monthlyIncomeData.push(totalDividends / (year * period));

    breakdownData.push({
      year: year,
      balance: yearBalanceStart.toFixed(2),
      annualDividends: yearDividends.toFixed(2),
      dividendTax: yearDividendsTax.toFixed(2),
      growth: yearGrowth.toFixed(2),
      newBalance: totalPrincipal.toFixed(2),
      return: yearReturn.toFixed(2),
      returnPercent: yearReturnPercent + "%",
    });
  }

  const totalReturnPercent =
    ((totalPrincipal - principal - totalContributions) /
      (principal + totalContributions)) *
    100;
  document.getElementById("totalReturn").innerText =
    totalReturnPercent.toFixed(2) + "%";

  const averageReturnPercent = (
    cumulativeReturnPercent / calculationYears
  ).toFixed(2);
  document.getElementById("averageYearlyReturn").innerText =
    averageReturnPercent + "%";

  document.getElementById("principalBreakdown").innerText =
    principal.toFixed(2);
  document.getElementById("contributionsBreakdown").innerText = (
    annualContribution * calculationYears
  ).toFixed(2);
  document.getElementById("dividendsBreakdown").innerText =
    totalDividends.toFixed(2);

  document.getElementById("growthBreakdown").innerText = totalGrowth.toFixed(2);

  const newBalance = breakdownData[breakdownData.length - 1].newBalance;
  const integerPart = Math.floor(newBalance);
  const fractionalPart = (newBalance - integerPart).toFixed(2);

  document.getElementById("integer").innerText = integerPart;
  document.getElementById("fractional").innerText = fractionalPart.slice(1);

  renderChart(annualData);
  renderIncomeChart(monthlyIncomeData);
  renderBreakdownTable(breakdownData);
}

// Функция для отображения таблицы разбивки данных
function renderBreakdownTable(data) {
  const table = `
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Balance</th>
                <th>Annual Dividends</th>
                <th>Dividend Tax</th>
                <th>Growth</th>
                <th>New Balance</th>
                <th>Return</th>
                <th>Return %</th>
            </tr>
        </thead>
        <tbody>
            ${data
              .map(
                (row) => `
                <tr>
                    <td>${row.year}</td>
                    <td>${row.balance}</td>
                    <td>${row.annualDividends}</td>
                    <td>${row.dividendTax}</td>
                    <td>${row.growth}</td>
                    <td>${row.newBalance}</td>
                    <td>${row.return}</td>
                    <td>${row.returnPercent}</td>
                </tr>
            `
              )
              .join("")}
        </tbody>
    </table>
  `;
  document.getElementById("breakdownTable").innerHTML = table;
}

// Функция для отображения графика данных
function renderChart(data) {
  const ctx = document.getElementById("returnChart").getContext("2d");

  if (returnChartInstance) {
    returnChartInstance.destroy();
  }

  const labels = data.map((_, i) => `${i + 1}`);
  const principalData = data.map((d) => d.principal);
  const contributionsData = data.map((d) => d.contributions);
  const dividendsData = data.map((d) => d.dividends);
  const growthData = data.map((d) => d.growth);

  returnChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Principal",
          data: principalData,
          backgroundColor: "#5570FF",
          borderRadius: 8,
        },
        {
          label: "Contributions",
          data: contributionsData,
          backgroundColor: "#3D56D7",
          borderRadius: 8,
        },
        {
          label: "Dividends",
          data: dividendsData,
          backgroundColor: "#65A2FF",
          borderRadius: 8,
        },
        {
          label: "Growth",
          data: growthData,
          backgroundColor: "#91CAFF",
          borderRadius: 8,
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        },
      },
    },
  });
}

function renderIncomeChart(data) {
  const ctx = document.getElementById("incomeChart").getContext("2d");

  if (incomeChartInstance) {
    incomeChartInstance.destroy();
  }

  const labels = data.map((_, i) => `${i + 1}`);

  incomeChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Average Monthly Income",
          data: data,
          backgroundColor: "#5570FF",
          borderColor: "#5570FF",
          borderRadius: 8,
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            // text: 'Year'
          },
        },
        y: {
          title: {
            display: true,
            text: "Average Monthly Income",
          },
        },
      },
    },
  });
}
