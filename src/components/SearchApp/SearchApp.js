import React from 'react';
import './SearchApp.css';

const SearchApp = (props) => {

    return (
        <div className="searchbar">
            <i class="fa fa-search searchIcon"></i>
            <input type="text" placeholder="Type here the city..." className="bar"></input>
        </div>
    );
}

export default SearchApp;