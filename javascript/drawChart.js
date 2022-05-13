const covidChart = (countries, cases, ref) => {
  const chart = new Chart(ref, {
    type: 'line',
    data: {
      labels: countries,
      datasets: cases,
    },
    options: {
      legend: { display: false },
      responsive: true,
      maintainAspectRatio: true,
    },
  });
  return chart;
};
