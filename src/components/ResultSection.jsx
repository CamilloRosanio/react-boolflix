// COMPONENTS IMPORT
import Card from "./Card";


// COMPONENT EXPORT

export default function CardsList({ sectionTitle }) {
    return <>
        <div className="container">
            <div className="resultSection">
                <h2 className="debug">{sectionTitle}</h2>

                <div className="List">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    </>
}