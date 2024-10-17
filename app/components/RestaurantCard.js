import Link from 'next/link';

const RestaurantCard = ({ restaurant }) => (
    <div className="restaurant-card">
        <h2>{restaurant.name}</h2>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Location: {restaurant.location}</p>
        <Link href={`/restaurants/${restaurant.id}`}>En savoir plus</Link>
    </div>
)

export default RestaurantCard;
