const express = require("express")
const router = express.Router();

const rp = require("request-promise");

router.post("/search", (req, res)=>{
    let search = req.body.search;
    console.log(search);
    rp({ 
        uri:`https://api.yelp.com/v3/businesses/search?term=${search.term}&limit=5&latitude=${search.geo.lat}&longitude=${search.geo.long}`,
        headers:{
            "Authorization": "Bearer B5-nmx8iC-beG_hsFkXLlvmVR4d4hXZ1h29cJo33dh8zaqFO4c4DnMFdMnMT46OMO_AHuPZL3rPlTjldj0AZNY7NKWL_2g8_AEOtezEq-MZvmAweT609iLSTqt7MWnYx"
        },
        json: true
    }).then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;