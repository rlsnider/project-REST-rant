const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
          <main>
              <h1>REST-rant</h1>
            
                <div className="gallery" >
                    <img id="chia" src="/images/brenda-godinez-MsTOg6rhRVk-unsplash (1).jpg" alt="Chia Fruit Shake" />
                    <div className="desc">
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <div className="gallery">
                    <img id="food" src="/images/anantha-krishnan-6Ra0Xe90qac-unsplash.jpg" alt="Food" />
                    <div className="desc">
                        Photo by <a href="AUTHOR_LINK">Anantha Krishnan</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
        )
        }

module.exports = home