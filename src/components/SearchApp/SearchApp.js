import React from 'react';
import './SearchApp.css';

const SearchApp = (props) => {

    return (
        <form className='form' onKeyPress={e => props.onKeyDown(e)}>
            <label htmlFor='inputbarItem'></label>
            <div className="searchbar">
                <i className="fa fa-search searchIcon"></i>
                <input type="text" placeholder="Type here the city..." className="bar" name="inputbar" id="inputbar" autoComplete="off"></input>
            </div>
        </form>
    );
}

export default SearchApp;