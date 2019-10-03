document.getElementById("submitButton").addEventListener("click", function () {
    let numAssets = document.getElementById("asset").value;
    let table;
    let row1, row2, row3, row4;
    let cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8;
    let header;
    console.log(numAssets)
    for (let i = 0; i < numAssets; i++) {
        table = document.createElement("TABLE");
        table.setAttribute("id", `myTable${i}`);
        table.setAttribute("class", "table table-striped")
        document.body.appendChild(table);

        header = table.createTHead();
        row1 = header.insertRow(0);
        row2 = table.insertRow(0);

        cell1 = row2.insertCell(0)
        cell2 = row2.insertCell(1)
        cell1.innerHTML = "Asset Name";
        cell2.innerHTMl = "Asset Type";
        //cell3.innerHTML = "Tasks";
        //cell4.innerHTML = "Task Quantity"
        

         cell3 = row1.insertCell(0);
         cell4 = row1.insertCell(1);
         cell3.innerHTML = `NEW CELL${i}`;
         cell4.innerHTML = `NEW CELL${i}`;

        document.body.appendChild(document.createElement("myBR"));
        document.body.appendChild(document.createElement("myBR"));
    }

});