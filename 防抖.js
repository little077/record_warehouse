const fn = (f,wait=300)=>{
    let timer = null
    return function(...agrs){
        if(timer){
            clearTimeout(timer)
        }else{
            timer = setTimeout(()=>{
            f.apply(this,args)
            },wait)
        }
    }
}
