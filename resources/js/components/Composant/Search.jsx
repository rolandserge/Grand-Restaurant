import React from 'react';
import "../../Styles/Search.css"

const Search = ({modal}) => {
    return (
        <div className='search_container'>
            <form action="" className='form_search'>
                <input type="text" placeholder='Entrer votre recherche'/>
                <button type="button" onClick={modal}>Q</button>
            </form>
        </div>
    );
};

export default Search;
