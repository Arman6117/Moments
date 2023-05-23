export const errorHandler = async( err,req,res,next) =>{
    // console.log(err);1
    return res.status(500).json({message:err.message})
}