import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home(props) {

  return (
    <div id="home">
      <div className="home">
        <div className="div1">
          <div className="">
            <div className="New-songs">
              <h3>New Songs</h3>
              <li  id="get" onClick={(e) => props.routeChange(e.target.innerText)}>
                <Link to="/songs">Srivalli</Link>
              </li>
              <li  id="get" onClick={(e) => props.routeChange(e.target.innerText)}>
                <Link to="/songs">Pyaar Karte Ho Na</Link>
              </li>
              <li  id="get" onClick={(e) => props.routeChange(e.target.innerText)}>
                <Link to="/songs">Yaad Na Aaye</Link>
              </li>
              <li  id="get" onClick={(e) => props.routeChange(e.target.innerText)}>
                <Link to="/songs">Dhokha</Link>
              </li>
              <li  id="get" onClick={(e) => props.routeChange(e.target.innerText)}>
                <Link to="/songs">Rait Zara Sia</Link>
              </li>
            </div>
          </div>
          <div className="">
            <div className="New-updates" id="v">
              <h3>Movies</h3>
              <li>
                Pushpa
              </li>
              <li>
                Baahubali
              </li>
              <li>
                Dangal
              </li>
              <li>
                5 idiots
              </li>
              <li>
                Fifty Shades of Grey
              </li>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="">
            <div className="New-songs">
              <h3>Singers</h3>
              <li>
                Kishore Kumar
              </li>
              <li>
                Kumar Sanu
              </li>
              <li>
                Lata Mangeshkar
              </li>
              <li>
                Asha Bhosale
              </li>
              <li>
                Udit Narayan
              </li>
            </div>
          </div>
          <div className="">
            <div className="New-updates">
              <h3>Old Collection</h3>
              <li>
                Kuch Toh Log Kahenge – Amar Prem
              </li>
              <li>
                Jab Zero DIya Mere Bharat Ne – Purab aur Paschim
              </li>
              <li>
                Kabhi Kabhie Mere Dil Mein – Kabhie Kabhie
              </li>
              <li>
                Aaj Na chodenge – Kati Patang
              </li>
              <li>
                Mere Dil Me Aaj Kya Hai – Daag.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
