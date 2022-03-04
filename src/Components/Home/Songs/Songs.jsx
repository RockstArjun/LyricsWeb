import React from "react";
import "./Songs.css";
import Data from './Songs.json';

export default function Songs(props) {
    console.log(props.name)
  return (
    <div id="songs">
        {Data.map(data => {
            return (
                props.name === data.name && 
                <div className="songs">
                    <h2 key={data.id}>{data.name}</h2>
                    <p key={data.id}>{data.lyrics}</p>
                </div>
                
            )
        })}
    </div>
  );
}
