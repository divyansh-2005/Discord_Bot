import ShortUniqueId from "short-unique-id";
import URL from "../model/url.js";

async function createShortURL(req,res){
    const body = req.body
    if(!body.url) return res.status(404).json("No url Found");

    const uid = new ShortUniqueId({ length: 5 });
    const shortId = uid.rnd(); 

    await URL.create({
        shortId: shortId,
        redirectURL : body.url,
        visitHistory : [],
        createdBy: body.username
    })

    return res.json({status:"shortId created" , shortId: shortId})
}

async function getOrignalURL(req,res){
    const shortId = req.params.shortId;
    if(!shortId) return res.status(404).json("short Id not found")
    
    const result = await URL.findOneAndUpdate(
        {shortId},
        {$push:{visitHistory:{timestamp: Date.now()}}}
    )

    return res.redirect(result.redirectURL)
}

async function getURLsCreatedByUser(req,res){
     
}

export  {
    createShortURL,
    getOrignalURL
}