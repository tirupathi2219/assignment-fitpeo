import React, {useState} from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-quartz.css";

const AgGridComponent = () => {
    // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
      // Column Definitions: Defines the columns to be displayed.
 const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);
 
    return (
        <div className="ag-theme-quartz"
        style={{height: 500}}>
            <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}/>

        </div>
    )
}
export default AgGridComponent