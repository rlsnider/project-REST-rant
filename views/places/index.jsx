//require imports
const React = require('react')
const Def = require('../default')

//create stub
function index (data){
    let placesFormatted = data.places.map((place)=>{
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES TO RANT AND RAVE ABOUT</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}
//export 
module.exports = index
