// # ENV IMPORTS
const apiImg = import.meta.env.VITE_API_THEMOVIEDB_POSTERSURL;


// UTILITY
const nullImg = apiImg + 'null';


// COMPONENT EXPORT

export default function Card({ keyRoot, img, id, title, original_title, vote, description }) {
    return <>
        <div className="Card" key={keyRoot + id}>

            {img !== nullImg ? <img src={img} alt="" /> :
                <div className="imgNull">
                    <h3>{title}</h3>
                    <p>{description}</p>

                </div>
            }

            <div className="cardHoover debug">
                <h3>{title}</h3>
                <p>{original_title}</p>
                <p>{vote}</p>
                <p>{description}</p>
            </div>
        </div>
    </>
}