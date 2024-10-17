import restaurants from '../../../data/restaurants.json';

export async function GET() {
    return new Response(JSON.stringify(restaurants), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}