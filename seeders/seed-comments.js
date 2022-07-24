const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: "Whine and Dine" })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Wino Grandma',
        rant: false,
        stars: 2.5,
        content: "The wine wasn't bad. It was an up grade to my Ripple. But I don't think I had enough wine, because the food was grose."
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()

