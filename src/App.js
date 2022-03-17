import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  const [person, setPerson] = useState("");
  const [Pseats, setPSeats] = useState("");

  let arr = [];

  const seats = document.querySelectorAll(".row .seat:not(.sold)");

  const ticketPrice = 10;

  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map((seat) =>
      [...seats].indexOf(seat)
    );

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    if (selectedSeatsCount > 7) {
      alert("You can book at max 7 seats at a time");
      return false;
    }

    setCount(selectedSeatsCount);
    setTotal(selectedSeatsCount * ticketPrice);

    return true;
  }

  const submit = (e) => {
    const username = e.target.username.value;
    setPerson(username);
    e.target.username.value = "";

    if (username === "") {
      alert("Please provide a username");
      return;
    }

    const seatsToBook = document.querySelectorAll(".row .seat.selected");

    let str = "";

    seatsToBook.forEach((seat) => {
      str += seat.id + " ";
      seat.classList.remove("selected");
      seat.classList.add("sold");
    });

    setPSeats(str);
    const atr = document.getElementById("showWindow");
    atr.style.display = "flex";

    console.log(atr);

    setCount(0);
    setTotal(0);
    e.preventDefault();
  };

  const handleClick = (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");
      const ok = updateSelectedCount();
      if (!ok) {
        e.target.classList.toggle("selected");
      } else {
        arr.push(e.target);
      }
    }
  };
  var ch = "a";

  var idx = 0;

  const giveID = () => {
    const id = ch + idx;
    idx++;

    if (idx === 7) {
      idx = 0;
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }

    return id;
  };

  const handleBtn = () => {
    const atr = document.getElementById("showWindow");
    atr.style.display = "none";
  };

  return (
    <div>
      <div className="movie-container">
        <form onSubmit={(e) => submit(e)}>
          <label htmlFor="username">Enter User Name : </label>
          <input type="text" name="username" />
          <br />
          <button type="submit">Book Tickets</button>
        </form>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat sold"></div>
          <small>Sold</small>
        </li>
      </ul>
      <div className="container" onClick={handleClick}>
        <div id="showWindow">
          Name : {person}
          <br />
          Seats Booked : {Pseats}
          <br />
          <div>
            <button onClick={handleBtn}>Close</button>
          </div>
        </div>
        <div className="screen"></div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat sold" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat sold" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>

        <div className="row">
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
          <div className="seat" id={giveID()}></div>
        </div>
      </div>

      <p className="text">
        You have selected {count} seat for a price of Rs {total}
      </p>
    </div>
  );
}

export default App;
