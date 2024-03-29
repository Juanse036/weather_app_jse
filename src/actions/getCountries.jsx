export default async function getCountries({textsearch}){

  const API_KEY = import.meta.env.VITE_API_KEY

  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',          
      }
  };
  
  let data = {}
  let error = false;
  
  await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${textsearch}`, options)
      .then(response => response.json())
      .then(async(response) => {             
              data = response                
              error = false;    
      })
      .catch(err => {
          error = true;
      });      
      return {data: data, error:error}
}