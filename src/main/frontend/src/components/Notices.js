import React, { useState, useEffect, SetList } from "react";
import axios from "axios";

function Notice() {
    const [pp, SetList]=useState([]);
    useEffect(()=>{
          axios.get("/board").then((response)=>{
            SetList(response.data)
          })
    },[])
    return (
        <div className ="row">
             {
                 pp.map(function(a, i){
                     return(
                        <div>
                            <div> {pp[i].id} </div>
                            <div> {pp[i].title} </div>
                            <div> {pp[i].author} </div>
                            <div> {pp[i].board_date} </div>
                            <div> {pp[i].recommend} </div>
                        </div>
                     )
                 })
             }
        </div>
    );
}
export default Notice;