// This component will be used to display individual link items:
//  1. Display the link details (title, URL, description, tags).
//  2. Provide a way to edit or delete the link.
//  3. An edit button to navigate to the form with prefilled data.
//  4. A delete button to remove the link.

import React from 'react';

import Link from '../types/Link';

interface Link{
    id : string;
    title : string;
    url : string;
    description : string;
    tags : string[];
}