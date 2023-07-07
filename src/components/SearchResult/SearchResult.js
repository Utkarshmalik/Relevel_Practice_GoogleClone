import { Link } from "react-router-dom";


/*

Image, heytperlink , decription URL , heading 

 "kind": "customsearch#result",
            "title": "Lectures - Eberly Center - Carnegie Mellon University",
            "link": "https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/lectures.html",
            "displayLink": "www.cmu.edu",
            "snippet": "Of course, lectures work best when they are in service of the appropriate learning objectives, such as: To transmit cutting-edge information which supplements ...",
            "pagemap": {
                "metatags": [
                    {
                        "msapplication-tilecolor": "#9f0000",
                        "og:type": "website",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "author": "Carnegie Mellon University",
                        "og:title": "Lectures - Eberly Center - Carnegie Mellon University",
                        "og:url": "https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/lectures.html",
                        "msapplication-tileimage": "//www.cmu.edu/favicon-144.png",
                        "og:description": "Lectures"
                    }
                ]
            }

*/
function SearchResult({item}){

    console.log(item);

    const heading = item.title;
    const displayLink = item.displayLink;
    const image = item.pagemap.metatags[0]['og:image'];
    console.log(item.pagemap.metatags[0]);
    const description = item.snippet;
    const url = item.link;

    return <div className="d-flex flex-column">

        <div>
            <img className="m-3" src={image} height={"50px"} />
            
            <Link to={`${url}`}>
                {displayLink}
            </Link> 

        </div>

         <div>
            <h3> {heading} </h3>
        </div>

         <div>
            <p className="fw-bolder">  {description} </p>
        </div>

        <hr/>

    </div>
}

export default SearchResult;