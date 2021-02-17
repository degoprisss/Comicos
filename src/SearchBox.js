import React, { useState } from "react";

function SearchBox({ handleSearchTerm }) {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="containerSearch">
            <input type="text" id="button" className="input" value={searchTerm}
                placeholder='Busque por medio de id'
                onChange={(e) => {
                    const value = e.target.value;
                    setSearchTerm(value.toLowerCase());
                }} />
            <button className="formControl" id="button"
                onClick={() => handleSearchTerm(searchTerm, setSearchTerm)}>
                Search</button>
        </div>
    )
}

export default SearchBox;