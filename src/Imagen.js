function Imagen(props) {
    console.log(props.url)
    return (
    <div className="containerImagen col-lg-5 col-sm-12 col-md-5">
         <img src={props.url} alt='Imagen' className="imagen"/>
    </div>
    )
}

export default Imagen;