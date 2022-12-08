import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieData from '../Data/MovieData.js';

export default function Requests({index, item}){
    let [result, setResult ] = useState([]);
        //Below 5020 fixed :lenght of array returned from ../DataMovieData
        //OMDb api returns only a single result provided an ImdbID or MovieName. Multiple results are returned only in
        //case if we provide a string 'Movie Name' and each result array item conatins
        //that 'Movie Name' as substring. Then results looks same.
        //To remove that i used an array of random movie names to pull data.

        const baseUrl = 'http://www.omdbapi.com/?apikey=65a45f03&s=';
        let random = Math.floor(Math.random() * (5020 - 1)) + 1;
        let rest = MovieData[random].split(/(?=[A-Z])/);
        let restUrl = rest.join("%20"); 
        const url = `${baseUrl}${restUrl}`;
        useEffect(()=>{
            const apiResponse = async() => {
                await axios.get(url)
                .then(res=>setResult(res.data.Search[0]))
                .catch(error => console.log(`Error:${error}`))
            }    
            apiResponse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

    return(
        <ion-card>
            <ion-card-header>
              <ion-card-title>{result.Title?[result.Title]:"Movie not Avilalble on OMDb"}</ion-card-title>
              <ion-card-subtitle>{[result.Year]}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <img 
                src={[result.Poster]} 
                alt="Img Not available for this movie on OMDb" 
                width="100%"/>
            </ion-card-content>
        </ion-card>  
    )
}