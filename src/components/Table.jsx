import React from 'react'
import "./Table.css"
// import  {BsfillTrashFill,BsfillPencilFill } from "react-icon/bs"

export const Table = ({rows, deleteRow, editRow }) => {
  
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th className="xpand">Name</th>
            <th>Ststus</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody >
          {
          rows.map((row, idx) => {
            const statusText = row.status.charAt(0).toUpperCase() + row.ststus.slice(1);
            return <tr key={idx}>
              <td>{row.no}</td>
              <td className="xpand">{row.name}</td>
              <td>
              <span className={'label label-${row.status}'}>
                {statusText}
                </span>
              </td>
              <td>
            <span className="action">
              {/* <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)}  / >
               <BsFillPencilFill className="edit-btn" onClick={() => deleteRow(idx)} />   */}
              </span>
          </td>

            </tr>
          })
          }
          
        </tbody>
      </table>
    </div>
  
}
