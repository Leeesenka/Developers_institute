async function searchTime() {
  const startDate = new Date(document.getElementById("startDate").value); 
  const endDate = new Date(document.getElementById("endDate").value); 


  if (endDate < startDate) {
      alert("The end date cannot be earlier than the start date!!");
      return;
  }

    try {
      const response = await axios.get("/api/messages"); 
      const data = response.data;
    
      const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });
  
     
      const count = filteredData.length;
      const countElement = document.getElementById("count");
      countElement.innerText = count;
  
     
      const citiesElement = document.getElementById("cities");
      citiesElement.innerHTML = ""; 
  
      filteredData.forEach(item => {
        const city = item.city2_english;
        const date = item.date;
      
        const cityRow = document.createElement("tr"); 
        const cityData = document.createElement("td");  
        cityData.innerText = `${city} (${date})`; 
        cityRow.appendChild(cityData); 
      
        citiesElement.appendChild(cityRow);  
      });
      
  
     
      const chartData = countOccurrencesByCity(filteredData);
      renderChart(chartData);
    } catch (error) {
      console.error(error);
    }
  }
  
 
  function countOccurrencesByCity(data) {
    const countByCity = {};
    console.log(countByCity)
    for (const item of data) {
      const city = item.city2_english;
      countByCity[city] = (countByCity[city] || 0) + 1;
    }
    return countByCity;
  }
  let myChart = null;
  
  function renderChart(data) {
    const chartLabels = Object.keys(data);
    const chartData = Object.values(data);
  
   
    const ctx = document.getElementById("chart").getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
  
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "Number of alerts",
            data: chartData,
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
  document.addEventListener('DOMContentLoaded', (event) => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function(event) {
      event.preventDefault();
      searchTime();
    });
  });
  
  
  