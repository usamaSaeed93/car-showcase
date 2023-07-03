import axios from 'axios';


export const getCars=async (carMake:string,carModal:string)=>{
  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?modal=corolla',
    params: {model: carModal , make:carMake || ""},
    headers: {
      'X-RapidAPI-Key': "538ade6eefmsh16448dfc43f6e45p1a22abjsn47ddeca3466b",
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };
    try {
        const response = await axios.request(options);
     return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const calculateRent=(milage:number ,year:number)=>{
 if(year>1990 && year<2000)
 return milage*270;
 else if(year>2000 && year<2010)
 return milage*350;
 else(year>2010)
 return milage*500;
}





  export async function getCarImages(carName:string) {
    const accessKey = 'gvKl3Ey-wjJkO85-JXI4YeeCMrKixffXAliefJyQ4ho';
    const url = `https://api.unsplash.com/search/photos?query=${carName}&client_id=${accessKey}`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
  
      if (data.results.length > 0) {
      return data;
      } else {
        console.log('No results found.');
      }
    } catch (error) {
      console.error('Error:');
    }
  }
  
