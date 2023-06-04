async function searchTime() {
    const selectedYear = document.getElementById("yearSelect").value; // Получаем выбранный год
    let selectedMonth = document.getElementById("monthSelect").value; // Получаем выбранный месяц
    
    // Если месяц не выбран (None), установите selectedMonth в null
    if (selectedMonth === "12") {
      selectedMonth = null;
    }

    try {
      const response = await axios.get("/api/messages"); // Получаем все сообщения из API
      const data = response.data;
  
      // Фильтруем данные по выбранному году и, если выбран, по месяцу
      const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        const conditionYear = itemDate.getFullYear() == selectedYear;
        const conditionMonth = selectedMonth ? itemDate.getMonth() == selectedMonth : true;
        return conditionYear && conditionMonth;
      });
  
      // Выводим количество совпадений
      const count = filteredData.length;
      const countElement = document.getElementById("count");
      countElement.innerText = count;

      // Подготовка и построение графика
      let chartData;
      if (selectedMonth) {
        chartData = countOccurrencesByCity(filteredData);
      } else {
        chartData = countOccurrencesByMonth(filteredData);
      }
      renderChart(chartData, !selectedMonth);
    } catch (error) {
      console.error(error);
    }


}
function countOccurrencesByCity(data) {
    const countByCity = {};
    for (const item of data) {
      const city = item.city2_english;
      if (countByCity[city]) {
        countByCity[city]++;
      } else {
        countByCity[city] = 1;
      }
    }
    return countByCity;
  }
  
// Подсчет количества совпадений по месяцам
function countOccurrencesByMonth(data) {
  const countByMonth = Array(12).fill(0);
  for (const item of data) {
    const itemDate = new Date(item.date);
    const month = itemDate.getMonth();
    countByMonth[month]++;
  }
  return countByMonth;
}

// Отображение графика
function renderChart(data, isByMonth) {
  let chartLabels;
  if (isByMonth) {
    chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  } else {
    chartLabels = Object.keys(data);
  }

  // Если график уже был создан, удаляем его перед созданием нового
  if (chartInstance) {
    chartInstance.destroy();
  }
function countOccurrencesByCity(data) {
  const countByCity = {};
  for (const item of data) {
    const city = item.city2_english;
    if (countByCity[city]) {
      countByCity[city]++;
    } else {
      countByCity[city] = 1;
    }
  }
  return countByCity;
}

  // Создаем график с использованием Chart.js
  const ctx = document.getElementById("chart").getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartLabels,
      datasets: [
        {
            label: "Number of alerts",
            data: Object.values(data),
            backgroundColor: "rgba(0, 0, 139, 0.2)", // dark blue with opacity
            borderColor: "rgba(0, 0, 139, 1)", // dark blue
            borderWidth: 1,
        },
    ],
    },
    options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: "#ffffff" // White color
              }
          },
          x: {
              ticks: {
                  color: "#ffffff" // White color
              }
          },
      },
      plugins: {
          legend: {
              labels: {
                  color: '#ffffff' // White color
              }
          }
      }
  }
  
  });
}

let chartInstance = null; // Add this line at the top of your script

document.addEventListener('DOMContentLoaded', (event) => {
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // To prevent the form from being submitted if your button is inside a form
    searchTime();
  });
});
console.log(filteredData);
console.log(chartData);