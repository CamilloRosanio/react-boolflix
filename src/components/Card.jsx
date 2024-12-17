// # ENV IMPORTS
const apiImg = import.meta.env.VITE_API_THEMOVIEDB_POSTERSURL;


// UTILITY
const nullImg = apiImg + 'null';
import { useState } from 'react';


// COMPONENT EXPORT

export default function Card({ keyRoot, img, id, title, original_title, vote, language, description, country }) {

    // FORMAT SERIES COUNTRY TO FLAG
    const countryToFlag = (country) => {
        return `https://flagsapi.com/${country}/flat/64.png`;
    };

    return <>
        <div className="Card" key={keyRoot + id}>

            {img !== nullImg ? <img src={img} alt="" /> :
                <div className="imgNull">
                    <h3>{title}</h3>
                    <p className="stars">{vote}</p>
                    {/* COUNTRY FLAG */}
                    {country ?
                        <>
                            <h4>Original language:</h4>
                            <img src={countryToFlag(country)} className='flag'></img>
                        </>
                        : <p>{'Original language: ' + language}</p>}
                </div>
            }

            <div className="cardHover">
                <h3>{title}</h3>
                <div className="itemInfo">
                    <p className="stars">{vote}</p>
                    <div className="subSection">
                        <h4>Original title:</h4>
                        <p>{original_title}</p>
                    </div>
                    <div className="subSection">
                        {/* COUNTRY FLAG */}
                        {country ?
                            <>
                                <h4>Original language:</h4>
                                <img src={countryToFlag(country)} className='flag'></img>
                            </>

                            :
                            <>
                                <h4>Original language:</h4>
                                <p>{language}</p>
                            </>
                        }
                    </div>
                    <div className="subSection">
                        <h4>Description:</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}