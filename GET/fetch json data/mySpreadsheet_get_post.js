const id = "12SBhc8FEAM8ZxLMNODcJaxBUnyNzEILyPn9Xw_0GgrE/"; // copied from my spreadsheet url
const base = "https://docs.google.com/spreadsheets/d/";
const query = "SELECT *"
const url = "https://docs.google.com/spreadsheets/d/12SBhc8FEAM8ZxLMNODcJaxBUnyNzEILyPn9Xw_0GgrE/gviz/tq?tqx=out:csv&sheet=Sheet%201&tq=SELECT%20*";
const output = document.querySelector(".output");

function getData() {
    const tq = "gviz/tq?tqx=out:json";
    const endPoint = `${base}${id}${tq}`;
    console.log(endPoint);

    fetch(endPoint).then(res => res.text())
        .then(response => {
            console.log(response);
            let temp = response.replace('/*O_o*/', '');
            temp = temp.replace('google.visualization.Query.setResponse(', '');
            temp = temp.replace(');', '');
            console.log(temp);
            const jsonData = JSON.parse(temp);
            console.log(jsonData);
            outputData(jsonData.table);


        })

}

getData()

function outputData(data) {
    console.log(data);
    const arr = [];
    const arr2 = [];

    data.cols.forEach(col => {
        console.log(col.label);
        if (col.label) {
            arr2.push(col.label)
        }
    })
    arr.push(arr2) /// adding column headings to the array

    data.rows.forEach(row => {
        console.log("row.c", row.c);
        const holder = [];

        // row.c.forEach(cell=>{
        //     if(cell != null){
        //         holder.push(cell.v);
        //     }
        // })

        for (let x = 0; x < arr2.length; x++) {
            const val = (row.c[x] == null) ? "" : row.c[x].v;
            holder.push(val)
        }
        arr.push(holder)


    })
    addtoPage(arr);
    console.log('arr:', arr);

}

function addtoPage(data) {
    // console.log("data: ",data);
    data.forEach((vals, index) => {
        console.log("vals: ", vals);
        const main = document.createElement('div');
        if (vals[3] == true) {
            main.style.backgroundColor = 'green';
        } else {
            main.style.backgroundColor = 'red';
        }
        if (index == 0) {
            main.style.backgroundColor = 'brown';
            main.style.fontSize = '1.2em';
        }
        vals.forEach(val => {
            // console.log("val: " ,val);
            const span = document.createElement('span');
            let spacer = val == '' ? '-' : val;
            span.textContent = spacer;
            span.style.border = '1px solid #ddd';
            span.style.width = '25%';
            span.style.display = 'inline-block';


            main.append(span);
        })
        output.append(main)

    })

}