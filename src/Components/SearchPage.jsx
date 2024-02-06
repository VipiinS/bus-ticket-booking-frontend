import React, { useEffect, useState } from 'react'
import "./SearchPage.css"
import fetchOriginAndDestination from '../Service/fetchOriginAndDestination'
import getBusByRoute from '../Service/getBusByRoute'
import AvailableBuses from './AvailableBuses'

const SearchPage = () => {
    const [origin,setOrigin] = useState('');
    const [filteredOriginOptions,setFilteredOriginOptions] = useState([])
    const [destination,setDestination] = useState('');
    const [filteredDestinationOptions,setFilteredDestinationOptions] = useState([])
    const [originOptions,setOriginOptions] = useState([]);
    const [destinationOptions,setDestinationOptions] = useState([]);
    const[bus,setbus]=useState([]);

    useEffect(() => {
        const fetchRoutes = async ()=>{
            try{
                const { origin, destination } = await fetchOriginAndDestination();
                setOriginOptions(origin);
                setDestinationOptions(destination);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchRoutes();        
    },[])  

    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(origin===destination){
            return console.log("Both destination and origin should not be the same");
        }
        try {
            console.log(origin,destination);
            setbus(await getBusByRoute(origin, destination))
        } catch (error) {
            console.error('Error in fetching bus data:', error);
        }
        
    }

    const handleOriginInputChange = (event) => {
        setFilteredDestinationOptions([]);
        const inputValue = event.target.value;
        setOrigin(inputValue);
        setFilteredOriginOptions(originOptions.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        ));
    };

    const handleOriginSelect = (option) => {
        setOrigin(option);
        setFilteredOriginOptions([]);
    };
    const handleDestinationInputChange = (event) => {
        setFilteredOriginOptions([])
        const inputValue = event.target.value;
        setDestination(inputValue);
        setFilteredDestinationOptions(destinationOptions.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        ));
    };

    const handleDestinationSelect = (option) => {
        setDestination(option);
        setFilteredDestinationOptions([]);
    };


  return (
    <div className='wrapper'>
        <div className='form-wrapper'>
            <form className='formed'
            onSubmit={(e)=>handleSubmit()}>
                <div className='search-group'>
                    <input 
                    className='input-fields' 
                    type='text' 
                    placeholder='Origin'
                    value={origin}
                    onChange={handleOriginInputChange}/>
                </div>
                <div className='search-group'>
                    <input className='input-fields' 
                    type='text'
                    placeholder='Destination'
                    value={destination}
                    onChange={handleDestinationInputChange}/>
                </div>
                <div  className='search-group last-row'>
                    <input className='input-fields' type='text' placeholder='Passengers'/>
                </div>
                <div className='button-group'>
                    <button className='search-button' type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>
                </div>
            </form>
            <div className='options-menu'>
                {origin && filteredOriginOptions.map((place,index)=>{
                    return <div className="options" key={index} onClick={()=>handleOriginSelect(place)}>{place}</div>
                })
                }
            </div>
            <div className='options-menu'>
                {destination && filteredDestinationOptions.map((place,index)=>{
                    return <div className="options" key={index} onClick={()=>handleDestinationSelect(place)}>{place}</div>
                })
                }
            </div>
        </div>
        <div>
            <AvailableBuses/>
        </div>
    </div>
  )
}

export default SearchPage