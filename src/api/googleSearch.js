import axios from "axios"

const BASEURL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = "AIzaSyByKufiucuq2nD6V6b5oMzWTLJto29A4Rc";
const cx= "b6541865403e64676";



export const getResults =  async (query)=>{

    const fullURL =  `${BASEURL}?key=${API_KEY}&cx=${cx}&q=${query}`;

    const response = await axios.get(fullURL);

    return response.data;

}