const myWorker = new Worker("worker.js");
myWorker.addEventListener("message",e=>{
    console.log(e.data)
})