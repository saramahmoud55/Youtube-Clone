import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'326ac91afdmsh646fae9dae87018p110e91jsn6624d1384c2e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  
  export const FetcFromAPI=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options)
   return data;
  }
  