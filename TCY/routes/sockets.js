exports.show = function(req, res){

    io.sockets.on('connection', function(socket){
        setInterval(function(){
                socket.emit('newstwo', {hello: 'chuandadexiaoyu'})}
            , 5000);
        socket.on('my other event two', function(data){
            console.log(data);
//				socket.emit('news', {hello: 'world'});
        });
    });
    res.render("socketcopy",{title: "Hello chuandadexiaoyu!!"});

}