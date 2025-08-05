// This is a Local storage ile that will stare or save links.

// Uses getLinks(): Link[] to fetch and parse JSON / returns empty array.

// Uses saveLinks(links: Link[]): void to convert array elements into strings  + store them.

import { Link } from '../types'; //is definde in types.ts

function getLinks() : Link[] {
    const links = localStorage.getItem('links');//Get links form local storage.
    return links ? JSON.parse((links)) : []; //return empty array
}

function saveLinks(links: Link[]) : void{
    localStorage.setItem('links', JSON.stringify (links)); // convert and save links into local storage.
}

export { getLinks, saveLinks };