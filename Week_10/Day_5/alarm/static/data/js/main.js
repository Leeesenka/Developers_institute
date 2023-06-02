async function searchTime() {
    const startDate = document.getElementById("startDate").value; // Получаем выбранную начальную дату
    const endDate = document.getElementById("endDate").value; // Получаем выбранную конечную дату
  
    try {
      const response = await axios.get("/api/messages"); // Получаем все сообщения из API
      const data = response.data;
      // Фильтруем данные по промежутку дат
      const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });
  
      // Выводим количество совпадений
      const count = filteredData.length;
      const countElement = document.getElementById("count");
      countElement.innerText = count;
  
      // Выводим список городов и дат
      const citiesElement = document.getElementById("cities");
      citiesElement.innerHTML = ""; // Очищаем содержимое элемента перед выводом новых данных
  
      filteredData.forEach(item => {
        const city = item.city2_english;
        const date = item.date;
        const cityElement = document.createElement("p");
        cityElement.innerText = `${city} (${date})`;
        citiesElement.appendChild(cityElement);
      });
  
      // Построение графика
      const chartData = countOccurrencesByCity(filteredData);
      renderChart(chartData);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Подсчет количества совпадений по городам
  function countOccurrencesByCity(data) {
    const countByCity = {};
    console.log(countByCity)
    for (const item of data) {
      const city = item.city2_english;
      countByCity[city] = (countByCity[city] || 0) + 1;
    }
    return countByCity;
  }
  
  // Отображение графика
  function renderChart(data) {
    const chartLabels = Object.keys(data);
    const chartData = Object.values(data);
  
    // Создаем график с использованием Chart.js
    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "Количество совпадений",
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
          },
        },
      },
    });
  }
  
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchTime);
  