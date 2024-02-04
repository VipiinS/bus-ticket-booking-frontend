import React, { useEffect, useState } from 'react'
import "./SearchPage.css"
import axios from 'axios';
import fetchOriginAndDestination from '../Service/fetchOriginAndDestination'

const SearchPage = () => {
    const [origin,setOrigin] = useState('');
    const [filteredOriginOptions,setFilteredOriginOptions] = useState([])
    const [destination,setDestination] = useState('');
    const [filteredDestinationOptions,setFilteredDestinationOptions] = useState([])
    const [originOptions,setOriginOptions] = useState([]);
    const [destinationOptions,setDestinationOptions] = useState([]);

    useEffect(() => {
        const fetchRoutes = async ()=>{
            try{
                const { origin, destination } = await fetchRoutes();
                setOriginOptions(origin);
                setDestinationOptions(destination);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchRoutes();        
    },[])  
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(origin===destination){
            return console.log("Both destination and origin should not be the same");
        }
    }

    const handleOriginInputChange = (event) => {
        // console.log(event.target.value);
        setFilteredDestinationOptions([]);
        const inputValue = event.target.value;
        setOrigin(inputValue);
        setFilteredOriginOptions(originOptions.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        ));
        console.log(filteredOriginOptions);
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
        console.log(filteredOriginOptions);
    };

    const handleDestinationSelect = (option) => {
        setDestination(option);
        setFilteredDestinationOptions([]);
    };


  return (
    <div className='wrapper'>
        <div className='form-wrapper'>
            <form className='formed'
            onSubmit={(e)=>handleSubmit(e)}>
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
                    <button className='search-button'type='submit'>Search</button>
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
    </div>
  )
}

export default SearchPage