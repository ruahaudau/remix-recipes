import {Link, Outlet, useLoaderData} from "react-router";

export function loader () {
    return { 
        message: 'Hello, I am the Loader Object',
        date: new Date(),
    };
};

export default function Settings() {
    const data = useLoaderData()
    return (
        <div>
            <h1>Settings</h1>
            <p>This is Settings Page</p>
            <p>Mess from Loader: {data.message}</p>
            <p>Today is: {data.date.toString()}</p>
            <nav>
                <Link to='app'>App</Link>
                <Link to='profile'>Profile</Link>
            </nav>
            <Outlet />
        </div>
        
    )
}