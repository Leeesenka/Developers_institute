let chartInstance = null; 

async function searchCity() {
  const city2 = document.getElementById("city2").value.toLowerCase();

  try {
    const response = await axios.get(`/api/messages`);
    const data = response.data;
 
    const filteredData = data.filter(item => item.city2_english.toLowerCase().includes(city2));

    const count = filteredData.length;
    const countElement = document.getElementById("count");
    countElement.innerText = count;

    const citiesElement = document.getElementById("cities");
    citiesElement.innerHTML = "";

    filteredData.forEach(item => {
      const city = item.city2_english;
      const cityElement = document.createElement("p");
      cityElement.innerText = city;
      citiesElement.appendChild(cityElement);
    });

    const chartData = countOccurrencesByDate(filteredData);
    renderChart(chartData);
  } catch (error) {
    console.error(error);
  }
}

function countOccurrencesByDate(data) {
  const countByDate = {};
  for (const item of data) {
    const date = item.date;
    countByDate[date] = (countByDate[date] || 0) + 1;
  }
  return countByDate;
}


function renderChart(data) {
  const chartLabels = Object.keys(data);
  const chartData = Object.values(data);

  const ctx = document.getElementById("chart").getContext("2d");


  if (chartInstance) {
    chartInstance.destroy();
  }

  
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: "Number of alerts",
          data: chartData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
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


const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchCity);
