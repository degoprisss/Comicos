
function ResidentInfo({name, origin, status, episodio}) {
    let epi = episodio.length
    return (
        <div className="containerLocation col-sm-10 col-lg-6">
            <div>
                <h2 className="title">Characters</h2>
                <h3 className="values">Name: {name} </h3> 
                <h3 className="values">Origin: {origin} </h3>
                <h3 className='value'>Status: {status} </h3>    
                <h3 className='value'>Episodios: {epi} </h3>      
            </div>
        </div>

    )

}

export default ResidentInfo;