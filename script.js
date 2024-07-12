let timing=document.querySelector("#time");


let update=()=>{
    let locateTime=new Date();
    let hours=locateTime.getHours();
    let minutes=locateTime.getMinutes();
    let seconds=locateTime.getSeconds();
    let CurrentTime=locateTime.toLocaleTimeString('en-US',{
        hour: '2-digit', minute: '2-digit', second:'2-digit'
    });

    timing.innerText=CurrentTime;
    
}

update();
setInterval(update,1000);