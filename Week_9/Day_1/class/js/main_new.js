function insertRow() {
    var table = document.getElementById('sampleTable');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = 'Row' + (rowCount + 1) + ' cell1';
    cell2.innerHTML = 'Row' + (rowCount + 1) + ' cell2';
}