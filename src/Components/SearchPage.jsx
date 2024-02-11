import React, { useEffect, useState } from 'react'
import "./SearchPage.css"
import fetchOriginAndDestination from '../Service/fetchOriginAndDestination'
import getBusByRoute from '../Service/getBusByRoute'
import AvailableBuses from './AvailableBuses'
import {DatePicker} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import moment from 'moment';
import { addDays } from 'date-fns'




const SearchPage = () => {

    const [origin,setOrigin] = useState('');
    const [filteredOriginOptions,setFilteredOriginOptions] = useState([])
    const [destination,setDestination] = useState('');
    const [filteredDestinationOptions,setFilteredDestinationOptions] = useState([])
    const [originOptions,setOriginOptions] = useState([]);
    const [destinationOptions,setDestinationOptions] = useState([]);
    const[bus,setbus]=useState([]);
    const[isLoaded,setIsLoaded] = useState(false);
    const[dateValue,setDateValue] = useState(dayjs(moment(new Date()).format('MM-DD-YYYY', moment.ISO_8601)));
    const[error,setError] = useState('');

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
        console.log(origin);
        if(origin === '' || destination === '') 
        {setError("Both Origin and Destination is required to proceed")
        return;
    }
        if(origin===destination){
            return setError("Both Origin and destination cannot be same");
        }
        try {
            const response  = await getBusByRoute(origin, destination)
            setbus(response.data)
            setIsLoaded(true)
        } catch (error) {
            console.error('Error in fetching bus data:', error);
        }
        
    }

    const handleOriginInputChange = (event) => {
        setError('')
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
        setError('')
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
                <DatePicker 
                    value={dateValue}
                    onChange={(date)=>{setDateValue(moment(date).format('MM-DD-YYYY', moment.ISO_8601))}}  
                    minDate={dayjs(new Date())}   
                    maxDate={dayjs(addDays(new Date(),20))}     
                    views={['year', 'day']}    
                    />
                    <button className='today-button' onClick={(e)=>{
                        e.preventDefault();
                        setDateValue(dayjs(new Date()))}
                        }>
                        Today</button>
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
        <div className='available-buses-wrapper'>
            {error && <div className='formed no-value-error'>{error}</div>}
        {isLoaded && <AvailableBuses buses={bus} />}
        </div>
    </div>
  )
}

export default SearchPage