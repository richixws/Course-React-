
import PropTypes from 'prop-types';
import {Title} from './components/Title';

export const  HelloWorldApp = ({user,id, title,book}) => {

    //const name='Pepe';
    console.log(title);

    return  (
          <>
                <Title  title='Hola mundo!'/>
                <h1>{user.name} con edad {user.edad}</h1>
                <h1>que tal {JSON.stringify(user)} con el id {id + 10}</h1>
                <div>{book}</div>
          </>

    )
}   

HelloWorldApp.propTypes={
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object.isRequired,
}

HelloWorldApp.defaultProps={
    title:'hola Mundo por defecto',
    book:'UML got a gota'
}