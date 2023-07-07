
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
const Search =()=>{

    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate();

    const onSearchFieldChange=(e)=>{
        setSearchValue(e.target.value);
    }

    const onSearchSubmit=(e)=>{
        e.preventDefault();
       navigate(`/search?query=${searchValue}`);
    }

    return <div style={{flex:4}}>

        <div className='m-2'>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height={"130px"}/>
        </div>
        <SearchBar searchValue={searchValue} onSearchFieldChange={onSearchFieldChange} onSearchSubmit={onSearchSubmit} />
      </div>


}

export default Search;