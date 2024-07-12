import React from 'react';

export default function Search ({modal}) {
    
    return (
        <div className='search_container'>
            <form action="" className='form_search'>
                <input type="text" placeholder='Entrer votre recherche'/>
                <button type="button" onClick={modal}>Q</button>
            </form>
        </div>
    );
};

