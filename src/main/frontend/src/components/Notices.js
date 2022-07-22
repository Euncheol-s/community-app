import React, { useState, useEffect } from "react";
import Axios from "axios";

function Notice() {
    const [pp, setUser]=useState("");
    useEffect(()=>{
          Axios.post("/api/board").then((response)=>{
            if(response.data){
                console.log(response.data)
                setUser(response.data)
            }else{
                alert("failed to");
            }
          });
    },[]);
    return (
       <div>
           <div className ="row">
               <table className="table table-striped table-bordered">
                   <tbody>
                       <tr>
                           <td> {pp.id} </td>
                           <td> {pp.title} </td>
                           <td> {pp.author} </td>
                           <td> {pp.board_date} </td>
                           <td> {pp.recommend} </td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
    );
}
export default Notice;