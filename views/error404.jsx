const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      
      <Def>
          <main>
              <div>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                  <img  id ="errorDog"src="/images/error404.jpg"/>
                  <div>
                    Image by <a href="https://makemyinspiration.com">Ramona Snider</a>
                  </div>
                </div>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404