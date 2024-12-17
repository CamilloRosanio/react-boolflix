// COMPONENT EXPORT

export default function Card({ keyRoot, id, title, original_title, vote }) {
    return <>
        <div className="Card debug" key={keyRoot + id}>
            poster

            <div className="cardHoover debug">
                <h3>{title}</h3>
                <p>{original_title}</p>
                <p>{vote}</p>
            </div>
        </div>
    </>
}