const express= require('express');
const router = express()
console.log("daasasdasdda")
router.use(express.json())
router.get('/', function (req, res){
    //监听这个路径，方法是get。
    res.send('hello world')
})

router.post('/', (req,res) =>{
    res.json(req.body)
})
// router.listen(20000)