import React from 'react';

export default async function RestaurantPage({ params }) {
    const { id } = params;
    const response = await fetch(`http://localhost:3000/api/restaurants`);
    const restaurants = await response.json();
    const restaurant = restaurants.find(restaurant => restaurant.id === id);

    if (!restaurant) return <div>Restaurant non trouvé</div>

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Location: {restaurant.location}</p>
        </div>
    );
}