const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
          <main>
            <div>
              <h1>REST-rant</h1>
                <div className="row container">
                <img id="chia" src="/images/brenda-godinez-MsTOg6rhRVk-unsplash (1).jpg" alt="Chia Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                     </div>
                
                <img id="food" src="/images/anantha-krishnan-6Ra0Xe90qac-unsplash.jpg" alt="Food" />
        
                    <div>
                        Photo by <a href="AUTHOR_LINK">Anantha Krishnan</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
            </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
    
</main>

        </Def>
    )
}

module.exports = home