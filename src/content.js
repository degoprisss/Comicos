import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Imagen from './Imagen.js'
import ResidentInfo from './ResidentInfo.js'

const Content = (props) => {
    const [dataCharacter, setDataCharacters] = useState(undefined);
    const [renderImage, setRenderImagen] = useState(undefined)
    useEffect(() => {
        let newArray = [];
        if (props != undefined) {
            for (let index = 0; index < props.length; index++) {
                axios(props[index])
                    .then((data) => {
                        newArray.push(data)
                        setDataCharacters(newArray);
                    })
            }
        }

    }, [props]);



    useEffect(() => {
        console.log(dataCharacter)
        let render;
        if (dataCharacter != undefined) {
            render = dataCharacter.map((value, index) => (
                <div className="containerMajor" key={index}>
                    <div className="container col-lg-5 col-md-9">
                        <Imagen url={value.data.image} />
                        <div className="containerLocation col-sm-10 col-lg-6">
                            {/* <LocationContainer location={dataLocation}/> */}
                            <ResidentInfo name={value.data.name} origin={value.data.origin.name} />
                        </div>
                    </div>
                </div>
            )
            )
            
        }
        setRenderImagen(render)

    }, [props, dataCharacter])

    useEffect(() => {
        console.log(renderImage);
    }, [renderImage])

    return (
        <div>
            {renderImage === undefined ? 'Error' : renderImage}
        </div>
    )
}

export default Content;