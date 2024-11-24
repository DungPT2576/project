import React, { useState } from 'react';
import './SellCar.css';
import { FaDollarSign } from "react-icons/fa";

function SellCar() {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    carTitle: '',
    status: 'new',
    brand: '',
    year: '',
    passengerCapacity: '',
    fuelType: 'diesel',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCars([...cars, formData]);
    setFormData({
      carTitle: '',
      status: 'new',
      brand: '',
      year: '',
      passengerCapacity: '',
      fuelType: 'diesel',
      price: '',
      description: '',
      image: null,
    });
  };

  const handleDelete = (index) => {
    const newCars = cars.filter((_, i) => i !== index);
    setCars(newCars);
  };

  const handleEdit = (index) => {
    const carToEdit = cars[index];
    setFormData(carToEdit);
    handleDelete(index);
  };

  return (
    <div className="sell-car-container">
      <h1 className="sell-car-title">Sell Your Car</h1>
      <form className="sell-car-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="carTitle">Car Title</label>
            <input type="text" id="carTitle" name="carTitle" value={formData.carTitle} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange} required>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="passengerCapacity">Passenger Capacity</label>
            <input type="number" id="passengerCapacity" name="passengerCapacity" value={formData.passengerCapacity} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select id="fuelType" name="fuelType" value={formData.fuelType} onChange={handleChange} required>
            <option value="diesel">Diesel</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="car-list">
        <h2 className='CarSaleTitle'>Cars for Sale</h2>
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <div className="car-item-left">
              {car.image && <img className='imageSell' src={URL.createObjectURL(car.image)} alt={car.carTitle} />}
              <h3>{car.carTitle}</h3>
              <p className="car-item-price">{car.price}<FaDollarSign /></p>
            </div>
            <div className="car-item-right">
              <p>Status: {car.status}</p>
              <p>Brand: {car.brand}</p>
              <p>Year: {car.year}</p>
              <p>Passenger Capacity: {car.passengerCapacity}</p>
              <p>Fuel Type: {car.fuelType}</p>
              <p>Description: {car.description}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellCar;