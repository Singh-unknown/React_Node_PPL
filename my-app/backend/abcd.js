var http = require('http');
var fs = require('fs');
var events = require('events');
http.createServer(function(req, res){
	res.writeHead(200,{'content-Type':'text/html'});
	res.write("HELLO!!!!<br><br>");
/*	fs.readFile('hello.txt', function(err, fd){
		if(err)
		{
			console.log("There is an error occured while reading a file");
		}else{
			
			res.write("Look below there is the file:--");
			res.write(fd.toString());
		}
	});
		if(err){
	fs.readFile('hii.txt', function(err, fd){
			console.log("There is an error occured in the second file");
		}else{
			res.write("there is also a another file:--");
			res.write(fd.toString());
			res.end();
		}
	});
*/
	/*
	var eventEmitter = new events.EventEmitter();
	var eventHandler = function connected(){
		res.write("Connection Succesful");
		eventEmitter.emit("data_received");
	}
	eventEmitter.on('connection',eventHandler);
	
	eventEmitter.on('data_received', function(){
		res.write("----DOne----");
		
	});
	eventEmitter.emit("connection");
	*/
	
	// create bufferDepth
	
	/*
	var buf1 = new Buffer(256);
	var len =buf1.write("HELLO WORLD!!");
	res.write(buf1.toString(undefined,1,5));
	res.write("lenght is:--"+ len);
	res.write("<br>");
	
	res.write('jjjj');
	res.write("<br>");
	var v1= new Buffer("Tutorials point!!--");
	var v2= new Buffer("W3schools..!!");
	var v3= Buffer.concat([v1,v2]);
	res.write(v3+"<br>");
	var v4 = v1.slice(0,8);
	res.write(v4+'<br>');
	var v5= Buffer.compare(v1,v2);
	res.write(v5);
	
	*/
	/*
var data = '';
var readstream = fs.createReadStream('hello.txt');
readstream.setEncoding('UTF8');
readstream.on('data', function(chunk){
	data += chunk;
});
readstream.on('end', function(){
	res.write('<br><br>'+data+'<br>');
});
readstream.on('error', function(err){
	console.log(err);

	//res.end();
	});
*/
// write stream 

/* 
var data = 'Simply Easy Task';
var writestream = fs.createWriteStream('output.txt');
writestream.write(data,'UTF8');
writestream.end();
writestream.on('finish', function(){
	res.write("Write Completed!!");
});
writestream.on('error', function(err){
	console.log(err);
	//res.end();
});
*/

/*
var vr = fs.createWriteStream("pp.txt");
var vr1 = fs.createReadStream("output.txt");
vr1.pipe(vr);

*/
/*
var buf = new Buffer(1024);
fs.open('hii.txt','r+', function(err, fd){
	if(err){
		console.log("error");
	}else{
		res.write("we Reached<br>");
		fs.read(fd, buf, 0, buf.length, 0, function(err,byte){
			if(err){ console.log("error at read");
			} else {
				res.write(buf.slice(0,byte));
				
				fs.close(fd, function(err){
					if(err){ console.log("there is error");
					} else{
						res.end();
					}
					
			});
			}
		});
	}
});
*/
function foo()
{
	res.write("Function is worked");
	res.end();
}
var t = setTimeout(foo, 1000);

	//res.end();
}).listen(8081);
console.log("http://127.0.0.1:8081/");
/*
fs.open('hello.txt', 'r+', function(err, fd){
	if(err){
		console.log("error");
	}else{
		console.log("opened");
	}
});
*/

// use of stats
/*fs.stat('hello.txt', function(err, stats){
	if(err){
		console.log("error");
	}else {
		console.log(stats);
		console.log(" is File ??"+stats.isFile());
	}
});
*/

// read and write file
/*
fs.writeFile('in.txt','Simply Easy Learning!', function(err){
	if(err){
		console.log("error");
	}else{
		console.log("File Created!!!!");
		fs.readFile('in.txt', function(err, fd){
		if(err){
console.log("Error Occured While Read file");
		}else {
			console.log(fd.toString());
		}		
	});
	}
});
*/
/*fs.mkdir('/',function(err){
	if(err){ console.log("error");
	}
	else{
		console.log("cretaed");
	}
});

*/




