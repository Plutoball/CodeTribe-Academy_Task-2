import React from 'react';
import { LinkForm } from './components/LinkForm';
import { LinkItem } from './components/LinkItem';
import { LinkList } from './components/LinkList';
import { SearchBar } from './components/SearchBar';

import { getLinks} from './storage';
import { Link } from './types/Link';

const [links, setLinks] = React.useState<Link[]>(getLinks()); // initialse or load links from local storage into React state.

const App: React.FC = () => {
    return (
        <div className='LinksVault'>
            <h1>Links Vault</h1>
            <p>Store and manage important links</p>
            {/* Components for managing links */}
            <LinkForm />
            <SearchBar />
            <LinkList />
        </div>
    );
};

export default App;