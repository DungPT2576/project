import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login/login.jsx';
import Register from './Register/register.jsx';
import CarList from './CarList/CarList.jsx';
import SellCar from './SellCar/SellCar.jsx';
import Review from './Review/Review.jsx';
import teslaImage from './CarList/pic/teslaS.jpg';
import bmwImage from './CarList/pic/bmwi8.jpg';
import audiImage from './CarList/pic/audi_etron.jpg';
import eventImage1 from './assets/event1.jpg';
import eventImage2 from './assets/event2.jpg';
import eventImage3 from './assets/event3.jpg';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2938/2938630.png" 
            alt="Logo" 
            className="icon"
          />
          <h1 className="site-title">Dung's Auto</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/CarList/CarList">Car List</Link>
            <Link to="/Review/Review">Reviews</Link>
            <Link to="/SellCar/SellCar">Sell Car</Link>
            <Link to="/Login/login">Sign in</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CarList/CarList" element={<CarList />} />
          <Route path="/Review/Review" element={<Review />} />
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Register/register" element={<Register />} />
          <Route path="/SellCar/SellCar" element={<SellCar />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const popularCars = [
    { id: 1, name: 'Tesla Model S', price: '$80,000', image: teslaImage },
    { id: 2, name: 'BMW i8', price: '$120,000', image: bmwImage },
    { id: 3, name: 'Audi e-tron', price: '$75,000', image: audiImage },
  ];

  const events = [
    { id: 1, title: 'Gumball 3000', description: 'Lễ hội xe hơi lớn nhất 2024', image: eventImage1 },
    { id: 2, title: 'Car Colection', description: 'The top 10 automotive events of 2019 – Egzostive', image: eventImage2 },
    { id: 3, title: 'New Gen Car', description: 'Los Angeles motor show 2022 review', image: eventImage3 },
  ];

  return (
    <>
      <section className="explore">
        <div className="featured-car">
          <img 
            src="https://images.hdqwalls.com/download/mclaren-lambo-ferrari-458-super-car-showdown-4k-r8-1920x1080.jpg" 
            alt="Featured Car" 
            className="featured-img"
          />
          <div className="featured-info">
            <h3>New Car Release</h3>
            <p>
              Corrupt politicians, frenzied nationalists, and other warmongering 
              forces constantly jeopardize the thin veneer of peace between 
              neighboring countries Ostania and Westalis.
            </p>
          </div>
        </div>
      </section>

      <section className="new-releases">
        <h2>Popular categories</h2>
        <div className="car-grid">
          {popularCars.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} className="car-img" />
              <div className="car-info">
                <h4>{car.name}</h4>
                <p>{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-square">
            <img src={events[0].image} alt={events[0].title} className="event-img" />
            <div className="event-info">
              <h3>{events[0].title}</h3>
              <p>{events[0].description}</p>
            </div>
          </div>
          <div className="event-rectangles">
            <div className="event-rectangle">
              <img src={events[1].image} alt={events[1].title} className="event-img" />
              <div className="event-info">
                <h3>{events[1].title}</h3>
                <p>{events[1].description}</p>
              </div>
            </div>
            <div className="event-rectangle">
              <img src={events[2].image} alt={events[2].title} className="event-img" />
              <div className="event-info">
                <h3>{events[2].title}</h3>
                <p>{events[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;