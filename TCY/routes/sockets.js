exports.show = function(req, res){

    io.sockets.on('connection', function(socket){
        socket.emit('newstwo', {hello: 'chuandadexiaoyu'});
        socket.on('my other event two', function(data){
            console.log(data);
//				socket.emit('news', {hello: 'world'});
        });
    });
    res.render("socketcopy",{title: "Hello chuandadexiaoyu!!"});

}