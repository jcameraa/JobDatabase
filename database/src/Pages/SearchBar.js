import React from "react";
import Octicon, { Search } from '@primer/octicons-react'

const SearchBar = () => {
    return (
        <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-text1">
                    <Octicon icon={Search} size='small' ariaLabel='GitHub' />
                </span>
            </div>
            <input className="form-control my-0 py-1" type="text" placeholder="Search Jobs" aria-label="Search" />
        </div>
    );
}

export default SearchBar;