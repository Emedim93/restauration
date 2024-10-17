import React from 'react';
import { useEffect, useState } from 'react';
import RestaurantCard from './components/RestaurantCard';
import ToggleThemeButton from './components/ToggleThemeButton';

export default function home() {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <div>
      <ToggleThemeButton />
      <h1>Bienvenue à la découverte des restaurants de Paris</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}