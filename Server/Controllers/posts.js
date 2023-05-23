import postMessage from "../Models/postMessage.js"

export const getPost = async (req,res)=>{
     const post = await postMessage.find();
    res.status(200).json(post)
}
export const createPost = async (req,res)=>{
    const body = req.body;
    const newPost = new postMessage(body);
    await newPost.save();
    res.status(201).json(newPost)
}