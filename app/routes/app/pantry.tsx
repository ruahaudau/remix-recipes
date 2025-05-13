import { PrismaClient, type PantryShelf } from '@prisma/client';
import { type LoaderFunction } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async (args) => {
    const db = new PrismaClient();
    const shelves = await db.pantryShelf.findMany();
    return {shelves};
}

export default function Pantry() {
    const data2 = useLoaderData() as { shelves: PantryShelf[] };
    return (
        <div>
            <h1>Welcome to Pantry Page</h1>
            <ul>
                {data2.shelves.map((shelf:PantryShelf) => (
                    <li key={shelf.id}>{shelf.name}</li>
                ))}
            </ul>
        </div>
    )
}