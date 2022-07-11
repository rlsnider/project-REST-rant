//import required 
const React = require('react')
const Def = require('./default')

//create stub 
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )      
}

//export stub
module.exports = error404