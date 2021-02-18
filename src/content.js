import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Imagen from './Imagen.js'
import ResidentInfo from './ResidentInfo.js'
import LocationContainer from './LocationContainer.js'


const Content = ({dat, dataLoca}) => {
    const [dataCharacter, setDataCharacters] = useState(undefined);
    const [renderImage, setRenderImagen] = useState(undefined)
    
    useEffect(() => {
        let newArray = [];
        if (dat != undefined) {
        dat.map((value) => {
            axios(`${value}`)
            .then((data) => {
                newArray.push(data)
                setDataCharacters(newArray)
            })
        })
    }
    }, [dat, dataLoca])

    useEffect(() => {
        
        let render;
        if (dataCharacter != undefined) {
            render = dataCharacter.map((value, index) => (
                <div className="containerMajor" key={index}>
                    <div className="container col-lg-5 col-md-9">
                        <Imagen url={value.data.image} />
                        <div className="containerLocation col-sm-10 col-lg-6">
                            <LocationContainer name={dataLoca.name} type={dataLoca.type} dimension={dataLoca.dimension}/>
                            <ResidentInfo name={value.data.name} origin={value.data.origin.name}
                                episodio={value.data.episode} status={value.data.status}/>
                        </div>
                    </div>
                </div>
            )
            )

        }
        setRenderImagen(render)

    }, [dat, dataCharacter, dataLoca])


    return (
        <div>
            {renderImage === undefined ? 'Error6' : renderImage}
        </div>
    )
}

export default Content;