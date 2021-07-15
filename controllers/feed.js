exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id:'1',
                title:'First Post',
                content:'This is the first Post',
                imageUrl:'../images/bdd.jpg',
                creator:{
                    name:'Pita'
                },
                createdAt:new Date()
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
            _id: new Date().toISOString(),
            title: title,
            content: content,
            creator:{name:'Pita'},
            createdAt:new Date()
        }
    })
}