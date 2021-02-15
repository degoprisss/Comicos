
function ResidentInfo(pName, pOrigin) {
    // console.log(name.name)
    // console.log(origin.origin)
    // console.log(image.image)
    return (
        <div className="containerLocation col-sm-10 col-lg-6">
            <div>
                <h2 className="title">Characters</h2>
                <h3 className="values">Name: {pName.name} </h3>
                <h3 className="values">Origin: {pOrigin.origin} </h3>
                <h3 className="values">#Episodios: 40</h3>
            </div>
        </div>

    )

}

export default ResidentInfo;