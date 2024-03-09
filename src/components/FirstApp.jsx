import PropTypes, { number, string } from 'prop-types';

export const FirstApp=({title,subtitle,name})=>{

    if(!title){
        console.log("el titulo no existe");
        alert()
    }

    return (
        <>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>{name}</p>

         
        
        </>
    )
}

FirstApp.propTypes={
    title:string.isRequired,
    subtitle:number.isRequired
}

FirstApp.defaultProps={
    title:'no hay titulos',
    subtitle:'no hay subtitulo',
    name:'fernando herrera'

}



