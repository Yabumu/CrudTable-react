import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import { Table } from "./components/Table";

function App(){
  const [modalOpen, setModalOpen]= useState(false);

  const [rows, setRows] =useState( [
    { no:"1", name:"you", status:"live" },
    { no:"2", name:"youn", status:"draft" },
    { no:"3", name:"youg", status:"error" },
  ]);
  const [rowToEdit, setRowToEdit]=useState(null)
  const handleDeleteRow =(targetIndex) => {
    setRows(rows,filter((_, idx) => idx !== targetIndex))
  };
  const handleEditRow = (idx) =>{
    setRowToEdit(idx);

    setModalOpen(true);
  }


  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow ]) :
    setRows(rows.map((currRow, idx) => {
      if(idx !== rowToEdit) return currRow;
      return newRow;
    }))
  }


  return( 
    <div className="App">
    <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
    <button className="btn" onClick={()=> setModalOpen(true)}>
    Add
    </button>
    {modalOpen && (
    <Modal 
      closeModal={()=>{
      setModalOpen(false);
      setRowToEdit(null);
    }}
    onSubmit={handleSubmit}
    defaultValue={rowToEdit !== null && rows [rowToEdit]}
     />
    )} 
  </div>



  );

}

export default App;
