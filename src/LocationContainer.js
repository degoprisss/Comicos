

function LocationContainer({name, type, dimension}) {

    return (
        <div>
            <h2 className="title">Location</h2>
            <h3 className="values">Name: {name} </h3>
            <h3 className="values">Type: {type} </h3>
            <h3 className="values">Dimen: {dimension} </h3>
        </div>
    )
}

export default LocationContainer;