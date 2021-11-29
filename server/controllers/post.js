import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    //if everything work then a 200 code will show 
    try { 
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    //if everything does not work then a 404 error will show
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
