import axios from 'axios';


export const getBusByRoute = async (BusOrigin,BusDestination) => {
    try {

        const url = `http://localhost:8080/open/searchByRoute?pickup=${BusOrigin}&destination=${BusDestination}`;
        const response = await axios.get(url);
        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
        throw error; 
    }
}
  
  export default getBusByRoute;