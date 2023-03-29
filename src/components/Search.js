import React from "react";

const Search = (props) => {
    return (
        <input className="width" value={props.value} onChange={(event) => props.setSearch(event.target.value)} placeholder="Type to search"></input>
    );
};
export default Search;