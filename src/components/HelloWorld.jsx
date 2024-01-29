
export const  HelloWorld = ({user,id, title='Hola Mundo'}) => {

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