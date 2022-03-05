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
              <li
                id="get"
                onClick={(e) => props.routeChange(e.target.innerText)}
              >
                <Link to="/songs">Srivalli</Link>
              </li>
              <li
                id="get"
                onClick={(e) => props.routeChange(e.target.innerText)}
              >
                <Link to="/songs">Pyaar Karte Ho Na</Link>
              </li>
              <li
                id="get"
                onClick={(e) => props.routeChange(e.target.innerText)}
              >
                <Link to="/songs">Yaad Na Aaye</Link>
              </li>
              <li
                id="get"
                onClick={(e) => props.routeChange(e.target.innerText)}
              >
                <Link to="/songs">Dhokha</Link>
              </li>
              <li
                id="get"
                onClick={(e) => props.routeChange(e.target.innerText)}
              >
                <Link to="/songs">Rait Zara Sia</Link>
              </li>
            </div>
          </div>
          <div className="">
            <div className="New-updates" id="v">
              <h3>Old Collection</h3>
              <li>Kuch Toh Log Kahenge – Amar Prem</li>
              <li>Jab Zero DIya Mere Bharat Ne – Purab aur Paschim</li>
              <li>Kabhi Kabhie Mere Dil Mein – Kabhie Kabhie</li>
              <li>Aaj Na chodenge – Kati Patang</li>
              <li>Mere Dil Me Aaj Kya Hai – Daag.</li>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="">
            <div className="New-songs">
              <h3>Singers</h3>
              <details>
                <summary>Kishore Kumar</summary>
              </details>
              <details>
                <summary>Kumar Sanu</summary>
              </details>
              <details>
                <summary>Lata Mangeshkar</summary>
              </details>
              <details>
                <summary>Asha Bhosale</summary>
              </details>
              <details>
                <summary>Udit Narayan</summary>
              </details>
            </div>
          </div>
          <div className="">
            <div className="New-updates">
              <h3>Movies</h3>
              <details>
                <summary>Pushpa</summary>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Srivalli</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Saami Saami</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Oo Bolega Ya Oo Oo Bolega</Link>
                </li>
              </details>
              <details>
                <summary>Gehraiyaan</summary>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Srivalli</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Saami Saami</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Oo Bolega Ya Oo Oo Bolega</Link>
                </li>
              </details>
              <details>
                <summary>Gangubai Kathiawadi</summary>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Srivalli</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Saami Saami</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Oo Bolega Ya Oo Oo Bolega</Link>
                </li>
              </details>
              <details>
                <summary>Love Hostel</summary>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Srivalli</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Saami Saami</Link>
                </li>
                <li
                  id="get"
                  onClick={(e) => props.routeChange(e.target.innerText)}
                >
                  <Link to="/songs">Oo Bolega Ya Oo Oo Bolega</Link>
                </li>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
