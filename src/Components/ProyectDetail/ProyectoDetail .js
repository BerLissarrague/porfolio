import React from 'react';

 const ProyectoDetail = (props) => {
    return (
        <div className="d-flex flex-row flex-wrap justify-content-around">

            <div className="jumbotron w-75" >
                <h1 className="display-4 mb-3">{props.name}!</h1>
                <p className="lead p-2">{props.description}</p>
                <hr className="my-4" />
                <p>{props.descriptions}</p>
                <p className="lead">
                  <a href={props.url}> <button className="btn btn-primary btn-lg" >Ir a la pagina</button></a>
                </p>
            </div>
        </div>

    )
}

export default ProyectoDetail ;