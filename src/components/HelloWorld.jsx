
import PropTypes from 'prop-types';

export const  HelloWorld = ({user,id, title}) => {

    //const name='Pepe';
    console.log(title);

    return  (
          <>
                <div>{title}</div>
                <h1>{user.name} con edad {user.edad}</h1>
                <h1>que tal {JSON.stringify(user)} con el id {id + 10}</h1>
          </>

    )
}

HelloWorld.PropTypes={
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object.isRequired
}