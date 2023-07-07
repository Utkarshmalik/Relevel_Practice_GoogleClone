import SearchResult from "../SearchResult/SearchResult";


const SearchResults=({results})=>{

    return <div>

        {
        results.items.map((item)=>{
            return <SearchResult item={item}/>
        })
       }

    </div>

}


export default SearchResults;
