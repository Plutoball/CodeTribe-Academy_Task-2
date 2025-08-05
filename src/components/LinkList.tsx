//This component will be used to :
//  1. recieve a filtered list of links from the parent component (links array).
//  2. maps to LinkItem component to display each link.

import React from 'react';
import { LinkItem } from './LinkItem';
import { Link } from '../types/Link';

interface LinkListProps {
    links : Link[];
}

export const LinkList : React.FC<LinkListProps> = ({ links }) => {
    return (
        <div className = 'link-list'>
            {
                links.map((link) => (
                    <LinkItem key={link.id} link={link} />
                ))
            } 
        </div>
    );
};