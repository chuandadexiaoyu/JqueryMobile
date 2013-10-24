function savedata(result){
    if(typeof(Storage)!="undefined"){
        console.log("web storage supports");

        localStorage.result =  result;

//        var x = JSON.parse(localStorage.result);
        console.log("The result has saved into localStorage.result");
    }else{
        console.log("web storage not supports");
    }
}