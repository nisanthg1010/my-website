
const express=require('express')
let router=express.Router();

router.get("/",(req,res)=>
    {
        res.send("User Information");
    });
router.get("/newuser",(req,res)=>
        {
            res.send("New user added");
        });
router.get("/deleteuser",(req,res)=>
            {
                res.send("User deleted");
            });
router.route("/:id")
    .get((req, res) => {
        res.send("User id is: " + req.params.id);
    })
    .put((req, res) => {
        res.send("User id " + req.params.id + " updated");
    })
    .delete((req, res) => {
        res.send("User id " + req.params.id + " deleted");
    });

module.exports = router;           