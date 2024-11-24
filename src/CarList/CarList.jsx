import React, { useState } from 'react';
import './CarList.css';
import teslaImage from './pic/teslaS.jpg';
import bmwImage from './pic/bmwi8.jpg';
import teslaY from './pic/teslaY.jpg';
import audiImage from './pic/audi_etron.jpg';
import ford2021 from './pic/ford2021.jpg';
import audiq5 from './pic/audiq5.jpg';
import bmwi5 from './pic/bmwi5.jpg';
import merc300 from './pic/merc300.jpg';
import fordse from './pic/fordse.jpg';
import mer2025 from './pic/mer2025.jpg';
import audi2025 from './pic/audi2025.jpg';
import teslaX from './pic/teslaX.jpg';
import { FaCalendarAlt, FaDollarSign, FaChargingStation, FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { Rate } from 'antd';

function CarList() {
  const [filter, setFilter] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [passengerCapacity, setPassengerCapacity] = useState('');
  const [priceLimit, setPriceLimit] = useState(200000);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const cars = [
    { id: 1, name: 'Tesla Model S', year: 2020, price: 80000, brand: 'Tesla', fuelType: 'Electricity', passengerCapacity: 5, image: teslaImage, rating: 4.5, status: 'New' },
    { id: 2, name: 'BMW i8', year: 2019, price: 120000, brand: 'BMW', fuelType: 'Diesel', passengerCapacity: 4, image: bmwImage, rating: 4.7, status: 'Used' },
    { id: 3, name: 'Audi e-tron', year: 2021, price: 75000, brand: 'Audi', fuelType: 'Electricity', passengerCapacity: 5, image: audiImage, rating: 4, status: 'Used'},
    { id: 4, name: 'Tesla Model Y', year: 2024, price: 44630, brand: 'Tesla', fuelType: 'Electricity', passengerCapacity: 4, image: teslaY, rating: 5, status: 'New'},
    { id: 5, name: 'Ford Bronco Sport Badlands', year: 2021, price: 38500, brand: 'Ford', fuelType: 'Diesel', passengerCapacity: 5, image: ford2021, rating: 4.5, status: 'Used'},
    { id: 6, name: 'Audi Q5', year: 2024, price: 68125, brand: 'Audi', fuelType: 'Diesel', passengerCapacity: 5, image: audiq5, rating: 4.5, status: 'New'},
    { id: 7, name: 'BMW i5', year: 2024, price: 74115, brand: 'BMW', fuelType: 'Electricity', passengerCapacity: 4, image: bmwi5, rating: 5, status: 'Used'},
    { id: 8, name: 'Mercedes-Benz C300', year: 2024, price: 57952, brand: 'Mercedes', fuelType: 'Diesel', passengerCapacity: 4, image: merc300, rating: 4, status: 'Used'},
    { id: 9, name: 'Ford Edge SE', year: 2023, price: 35219, brand: 'Ford', fuelType: 'Diesel', passengerCapacity: 5, image: fordse, rating: 4, status: 'Used'},
    { id: 10, name: '2025 Mercedes-Benz AMG CLA 35', year: 2025, price: 61035, brand: 'Mercedes', fuelType: 'Diesel', passengerCapacity: 4, image: mer2025, rating: 5, status: 'New'},
    { id: 11, name: 'Audi A5 Sportback', year: 2025, price: 59175, brand: 'Audi', fuelType: 'Electricity', passengerCapacity: 4, image: audi2025, rating: 4.6, status: 'New'},
    { id: 12, name: 'Tesla Model X', year: 2023, price: 71250, brand: 'Tesla', fuelType: 'Electricity', passengerCapacity: 4, image: teslaX, rating: 4, status: 'Used'},
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(filter.toLowerCase()) &&
    (selectedYear ? car.year === parseInt(selectedYear) : true) &&
    (selectedBrand ? car.brand === selectedBrand : true) &&
    (fuelType ? car.fuelType.toLowerCase() === fuelType.toLowerCase() : true) &&
    (passengerCapacity ? car.passengerCapacity === parseInt(passengerCapacity) : true) &&
    car.price <= priceLimit &&
    (selectedStatus !== 'All' ? car.status === selectedStatus : true)
  );

  const carsPerPage = 6;
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="car-list-container">
      <div className="filter-section">
        <h2>Filter</h2>
        <div className="filter-group status-group">
          <h3>Status</h3>
          {['All', 'New', 'Used'].map(status => (
            <label key={status}>
              <input 
                type="radio" 
                name="status" 
                value={status} 
                checked={selectedStatus === status}
                onChange={() => handleStatusChange(status)}
              />
              {status}
            </label>
          ))}
        </div>
        <input 
          type="text" 
          placeholder="Search cars..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="filter-group">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {[2021, 2022, 2023, 2024, 2025].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <select 
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {['Tesla', 'BMW', 'Audi', 'Ford', 'Mercedes'].map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
        <select 
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="">Fuel Type</option>
          <option value="Electricity">Electricity</option>
          <option value="Diesel">Diesel</option>
        </select>
        </div>
        <div className="filter-group">
        <input 
          type="number" 
          placeholder="Passenger Capacity" 
          value={passengerCapacity}
          onChange={(e) => setPassengerCapacity(e.target.value)}
        />
        </div>
        <div className="filter-group">
          <label className='price-slider'>Price Limit: ${priceLimit}</label>
          <input 
            type="range" 
            min="0" 
            max="200000" 
            value={priceLimit} 
            onChange={(e) => setPriceLimit(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="car-list-section">
        <ul className="car-list">
          {carsToDisplay.length > 0 ? (
            carsToDisplay.map(car => (
              <li key={car.id} className="car-item">
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-info">
                  <h2>{car.name}</h2>
                  <p className="car-price">{car.price}<FaDollarSign /></p>
                  <div className="car-details">
                    <p><FaCalendarAlt /> {car.year}</p>
                    <p><FaChargingStation /> {car.fuelType}</p>
                    <p><IoPeople /> {car.passengerCapacity}</p>
                    <p>{car.status}</p>
                  </div>
                  <hr />
                  <div className="car-rating">
                  <Rate allowHalf defaultValue={car.rating} />
                  </div>
                  <button className="detail-button">Detail</button>
                </div>
              </li>
            ))
          ) : (
            <li className="no-results">No cars match your criteria.</li>
          )}
        </ul>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarList;