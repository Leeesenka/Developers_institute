// function insertRow() {
//     var table = document.getElementById('sampleTable');

//     var rowCount = table.rows.length;

//     var row = table.insertRow(rowCount);

//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = 'Row' + (rowCount + 1) + ' cell1';
//     cell2.innerHTML = 'Row' + (rowCount + 1) + ' cell2';
// }

// function insertRow() {
//     var table = document.getElementById('sampleTable');
//     var rowCount = table.rows.length;

//     var row = document.createElement('tr');

//     var cell1 = document.createElement('td');
//     cell1.textContent = 'Row' + (rowCount + 1) + ' cell1';
//     row.appendChild(cell1);

//     var cell2 = document.createElement('td');
//     cell2.textContent = 'Row' + (rowCount + 1) + ' cell2';
//     row.appendChild(cell2);

//     table.appendChild(row);
// }


// function insertRow(){
//     let tbody = document.getElementById('sampleTable').firstElementChild;
//     let row = tbody.firstElementChild;
//     const rownum = tbody.children.length;
//     const newRow = row.cloneNode(true);
//     newRow.firstElementChild.innerText = 'Row${rownum+1} cell1';
//     newRow.lastElementChild.innerText = 'Row${rownum+1} cell2';
 
//     table.appendChild(newRow)

// }