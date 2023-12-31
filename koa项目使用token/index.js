const fs= require("fs")
const path = require("path")
const koa = require("koa")
const Router = require("koa-router")
const jwt  = require("jsonwebtoken")


const app = new koa()
const router = new Router({})
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,"./keys/private.key"))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,"./keys/public.key"))

app.use(router.routes())
//登陆接口
router.post("/login",(ctx,next)=>{
  const user = {id:7,name:"little077"};
  const token = jwt.sign(user,PRIVATE_KEY,{
    //过期时间，单位：秒
    expiresIn:1000,
    //加密算法
    algorithm:"RS256"
  });
  ctx.body = token;
})
//验证接口
router.post("/verfiy",(ctx,next)=>{
  const authorization = ctx.header.authorization;
  const token = authorization.replace("Bearer ","")
  try{
    const result = jwt.verify(token,PUBLIC_KEY,{
    algorithms:["RS256"],
    })
    ctx.body = result
  }catch(e){
    ctx.status = 404
    ctx.body = "验证失败"
  }
})




app.listen(3001,()=>{
  console.log("服务跑在3001端口上")
})
