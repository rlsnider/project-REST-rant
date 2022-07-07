const React = require('react')
const Def = require('./default')
//Create a home stub function 

function home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

//Export 
module.exports = home