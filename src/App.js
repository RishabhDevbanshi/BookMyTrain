import './App.css';
import {useState} from 'react';

function App() {

  let [count,setCount] = useState(0);
  let [total , setTotal] = useState(0);

  const seats = document.querySelectorAll(".row .seat:not(.sold)");

  const ticketPrice = 10;

  function updateSelectedCount() {
    console.log(count);
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;

    if(selectedSeatsCount > 7)
    {
      alert('You can book at max 7 seats at a time');
      return false;
    }
    
    setCount(selectedSeatsCount);
    setTotal(selectedSeatsCount * ticketPrice);

    return true;
  }

  const handleClick = (e)=>{
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");
      const ok = updateSelectedCount();
      if(!ok)
        e.target.classList.toggle('selected');
    }
  }

  return (
    <div>
      <div className="movie-container">
      <label> Enter Username : </label>
      <input type="text" name="username" id="username" />
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
    <div className="container" onClick = {handleClick} >
      <div className="screen"></div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat sold"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
    </div>

    <p className="text">
      You have selected {count} seat for a price of Rs {total}</p>
    </div>
  );
}

export default App;
