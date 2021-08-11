import React from 'react';
import './SearchApp.css';

const SearchApp = (props) => {

    return (
        <div className="searchbar">
            <input type="text" placeholder="Enter country..." className="bar"></input>
            <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
        </div>
    );
}

export default SearchApp;