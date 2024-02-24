
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./SW.js")
    .then(() => {
      console.log("registered");
    })
    .catch((err) => console.log(err));
}else{
    console.log("does not support service worker");
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    Notification.requestPermission().then((p)=>{
        console.log(p)
        if(p === "granted"){
            let n = new Notification("ex",{
                body:"welcome to our website",
                tag:"wlc"
            })
        }
    })
})


let noti ;
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === "hidden"){
        noti = new Notification("",{
            body:"come back again",
            tag:"VS"
        })
    }else{
        noti.close()
    }
})