async function searchTime() {
    const selectedYear = document.getElementById("yearSelect").value; 
    let selectedMonth = document.getElementById("monthSelect").value; 
    

    if (selectedMonth === "12") {
      selectedMonth = null;
    }

    try {
      const response = await axios.get("/api/messages"); 
      const data = response.data;
 
      const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        const conditionYear = itemDate.getFullYear() == selectedYear;
        const conditionMonth = selectedMonth ? itemDate.getMonth() == selectedMonth : true;
        return conditionYear && conditionMonth;
      });
  
    
      const count = filteredData.length;
      const countElement = document.getElementById("count");
      countElement.innerText = count;

    
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
  

function countOccurrencesByMonth(data) {
  const countByMonth = Array(12).fill(0);
  for (const item of data) {
    const itemDate = new Date(item.date);
    const month = itemDate.getMonth();
    countByMonth[month]++;
  }
  return countByMonth;
}


function renderChart(data, isByMonth) {
  let chartLabels;
  if (isByMonth) {
    chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  } else {
    chartLabels = Object.keys(data);
  }

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

 
  const ctx = document.getElementById("chart").getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartLabels,
      datasets: [
        {
            label: "Number of alerts",
            data: Object.values(data),
            backgroundColor: "rgba(0, 0, 139, 0.2)", 
            borderColor: "rgba(0, 0, 139, 1)",
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

let chartInstance = null; 

document.addEventListener('DOMContentLoaded', (event) => {
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    searchTime();
  });
});
console.log(filteredData);
console.log(chartData);