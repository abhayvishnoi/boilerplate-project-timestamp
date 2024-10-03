exports.tService=async (req,res,next)=>{
    
    date=new Date(req.params.date)

    res.json(
        {
            unix:Date.parse(req.params.date), 
            utc:date.toUTCString()
        }
    )
    next()
}