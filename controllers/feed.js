exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                title:'First Post',
                content:'This is the first Post',
                imageUrl:'../images/bdd.jpg'
            }
        ]
    })
}
exports.createPost = (req, res, next) => {
    const title=req.body.title
    const content = req.body.content
    
    //create post in the db
    res.status(201).json({
        message: 'Post created Successfully',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}