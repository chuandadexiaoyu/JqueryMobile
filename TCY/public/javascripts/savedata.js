function savedata(result){
    if(typeof(Storage)!="undefined"){
        console.log("web storage supports");
        localStorage.result = JSON.stringify(result);
        console.log(localStorage.result);
    }else{
        console.log("web storage not supports");
    }
}