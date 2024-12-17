// COMPONENT EXPORT

export default function CardsList({ keyRoot, sectionTitle, children }) {

    return <>
        <div className="container" key={keyRoot}>
            <div className="resultSection">
                <h2 className="debug">{sectionTitle}</h2>

                <div className="List">
                    {children}
                </div>
            </div>
        </div>
    </>
}