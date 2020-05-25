import React from 'react'

// function Greet(){
//     return <h1>Hello Biswajit</h1>
// }

const Greet = (props) => {
return (
    <div>
        <h1>Hello {props.name} {props.lastName}</h1>
        {props.children}
    </div>
)
}
export default Greet;