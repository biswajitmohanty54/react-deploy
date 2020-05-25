import React from 'react';
import '../css/Avatar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Avatarlist =(props) => {
    return(
        <div className="col-3">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Front-end"/>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

const Avatar = () => {

    const avatarlistarry =[
        {
            id : 1,
            name : "Biswajit",
            work : "Web developer"
        },
        {
            id : 2,
            name : "Mark",
            work : "Web designer"
        },
        {
            id : 3,
            name : "John",
            work : "Java developer"
        },
        {
            id : 4,
            name : "David",
            work : "React developer"
        }
    ]

    const avatatlistcard = avatarlistarry.map( (avatarcard, i) => {
        return <Avatarlist id={avatarlistarry[i].name} name={avatarlistarry[i].name} work={avatarlistarry[i].work} />
    } )

    return(
        <div className="container">
            <h1 className="text-center">Welcome to react</h1>
            <div className="row">
                {avatatlistcard}
            </div>
            <button className="btn btn-primary" variant="primary">Submit</button>
        </div>
    )
}

export default Avatar;