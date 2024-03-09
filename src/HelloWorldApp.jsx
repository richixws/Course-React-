
import PropTypes from 'prop-types';
import {Title} from './components/Title';
import { UserDetils } from './components/UserDetails';
import { Book } from './components/Book';


export const  HelloWorldApp = ({user,id, title, book}) => {

    //const name='Pepe';
    console.log(title);

    return  (
          <>
                <Title  title={title}/>
                <UserDetils user={user} id={id} />
                <Book book={book} />
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