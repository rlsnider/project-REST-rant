const React = require('react')
const Def = require('./default')
//Create a home stub function 

function home(){
    return (
        <Def>
            <main>
               
                <h1>HOME</h1>
                <a href ="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

//Export 
module.exports = home