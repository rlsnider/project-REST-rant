const React = require('react')
const Def = require('../default')

function comments(props) {
    return(
        
            <main>
                <h1>Add Comment</h1>
                <form key={comments} method="POST" action={`/places/${props.id}/rant`} name="comments">
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="rant" name="rant" value="rant" />
                        <label htmlFor="rant">This is a rant</label><br />
                        <input type="checkbox" id="rave" name="rave" value="rave" />
                        <label htmlFor="rave">This is a rave</label><br /><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <input className="form-control" type="number" id="stars" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content"></label>
                        <textarea defaultValue="Write your comments here." name="message" rows="10" cols="60"></textarea>
                        <br /><br />
                    </div>
                    <div>
                        <input className="btn btn-primary" type="submit" value="Add Comment" />
                    </div>
                </form>
            </main>
    
    )
    
}

module.exports = comments