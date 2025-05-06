// filepath: /home/rua/01.Webdev/01.HTML5/06.Project/03.Project03-ReactRouter/remix-recipes/app/root.tsx
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import {Link} from 'react-router-dom';
import "./app.css";
import classNames from "classnames";
import { DiscoverIcon, HomeIcon, RecipeBookIcon, SettingsIcon } from "./components/icons/icon.component";
import type React from "react";

// Combine Layout and App structure
export default function AppLayout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <Meta />
        <Links />
      </head>
      <body className='md:flex md:h-screen'> 
        <nav className="bg-primary text-white">
          <ul className="flex md:flex-col">
            <AppNavLink to="/"><HomeIcon /></AppNavLink>
            <AppNavLink to="/discover"><DiscoverIcon /></AppNavLink>
            <AppNavLink to="/app"><RecipeBookIcon /></AppNavLink>
            <AppNavLink to="/settings"><SettingsIcon /></AppNavLink>
          </ul>
        </nav>
        <div className='p-4'>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

type AppNavLinkProps = {
  children: React.ReactNode;
  to: string
};

function AppNavLink ({children, to}: AppNavLinkProps) {
  return (
    <li className='w-16'>
      <NavLink to={to} reloadDocument>
        {({isActive}) => {
          return (
            <div className = {classNames('py-4 flex justify-center hover:bg-primary-light',
              {
                "bg-primary-light": isActive
              }
          )}
          >
              {children}
            </div>
          ); 
        }}
      </NavLink>
    </li>
  )
}