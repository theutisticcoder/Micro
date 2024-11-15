var cork = document.getElementById("cork");
var lens = 0;

var a = 0;
var b = 0;
for(var i = 0; i < 10; i++){
	for(var x = 0; x < 10; x++){
	cork = cork.cloneNode();
		cork.classList.add("cork");
		cork.src = "cork.jpeg";
		cork.style.height = "10vh";
		cork.style.width = "10vh";
		cork.style.left = x*10 + "vh";
		cork.style.top = i*10 + "vh";
		cork.style.position = "absolute";
		cork.style.zIndex = "5";
		document.getElementById("slide1").appendChild(cork)
	if(x % 2 === 0){
		if(i % 2 === 0){
		cork.style.rotate = "0 0 1 180deg";
	}	
		else{
		cork.style.rotate = "0 0 1 90deg";
	}
}
	else{
		if(i % 2 === 0){
		cork.style.rotate = "0 0 1 270deg";
	}	
		else{
		cork.style.rotate = "0 0 1 0deg";
	}
}
	}
}
document.getElementById("slide1").style.scale = "0.02 0.02 0.02";
document.getElementById("reset").onclick = ()=> {
	
	document.getElementById("slide1").style.scale = "0.02 0.02 0.02";
	a = 0;
	b = 0;
	lens = 0;
}
		document.getElementById("slide1").style.filter = `blur(${document.getElementById("fine").value}px)`;
document.getElementById("zoom40").onclick = ()=> {
	lens = 1;
	document.getElementById("slide1").style.scale = "0.8 0.8 0.8";

}
document.getElementById("zoom300").onclick = ()=> {
	lens = 2;
	document.getElementById("slide1").style.scale = "6 6 6";

}
document.getElementById("zoom1000").onclick = ()=> {
	lens = 3;
	document.getElementById("slide1").style.scale = "20 20 20";

}
document.getElementById("zoom5000").onclick = ()=> {
	lens = 4;
	document.getElementById("slide1").style.scale = "100 100 100";
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.style.imageRendering = "sharp-edges";
	})
}
document.getElementById("orig").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "cork.jpeg";
	})
	}

}
document.getElementById("corm").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "corm.webp";
	})
	}

}
document.getElementById("diatom").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "diatoms.jpg";
	})

}
}
document.getElementById("liver").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "liver.jpg";
	})

}
}
document.getElementById("leaf").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "leaf.jpeg";
	})

}
}
document.getElementById("pollen").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "pollen.jpg";
	})

}
}
document.getElementById("pond").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "pond.png";
	})

}
}
document.getElementById("flu").onclick = ()=> {
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = "flue.jpg";
	})

}
}
document.getElementById("coarse").onchange = ()=> {
		if(lens != 1){
			alert("Oh No! It broke. Try to only use this knob on the lowest level of magnification!");
			location.reload();
		}
	else{
		document.getElementById("slide1").style.filter = `blur(${document.getElementById("coarse").value / 3}px)`;
	}
};
document.getElementById("fine").onchange = ()=> {
		if(lens < 2){
			alert("It's better practice to use this knob when you have higher levels of magnification.");
			document.getElementById("fine").value = 0;
		}
	else{
		document.getElementById("slide1").style.filter = `blur(${document.getElementById("fine").value}px)`;
	}
};
document.onkeydown = (e)=> {
	if(e.key == "ArrowUp"){
		e.preventDefault();
		a+= 5;
		document.getElementById("slide1").style.translate = `${b}px ${a}px 0px`;
	}
	if(e.key == "ArrowDown"){
		e.preventDefault();
		a-= 5;
		document.getElementById("slide1").style.translate = `${b}px ${a}px 0px`;
	}
	if(e.key == "ArrowRight"){
		e.preventDefault();
		b+= 5;
		document.getElementById("slide1").style.translate = `${b}px ${a}px 0px`;
	}
	if(e.key == "ArrowLeft"){
		e.preventDefault();
		b-= 5;
		document.getElementById("slide1").style.translate = `${b}px ${a}px 0px`;
	}
};
var myimage, link;
document.getElementById("save").onclick = ()=> {
	   html2canvas(document.getElementById("lens"), {backgroundColor: null}).then( function (canvas) {
             myimage = canvas.toDataURL("image/png", 1.0);
             link = document.createElement("a");
    link.download = prompt("Choose a file name")+".png";
    link.href = "data: " + myimage;
					document.body.appendChild(link)
    link.click();
        });
    }
var files;
function change(e){
	files = document.getElementById("custom").files;
	console.log(files[0]);
	if(lens != 0){
		alert("Do not change slides when you are zoomed in.")
		location.reload();
	}
	else{
	Array.from(document.getElementsByClassName("cork")).forEach(c=> {
		c.src = URL.createObjectURL(files[0]);
	})

}
}
var video;
var cam = 0;
document.getElementById("cam").onclick = ()=> {
	cam++;
	if(cam % 2==0){
		document.getElementById("vid").remove();
		document.getElementById("slide1").style.transform = "";
		Array.from(document.getElementsByClassName("cork")).forEach(c=> {
			c.hidden = false;
		})
	}
	else{
	navigator.mediaDevices
	.getUserMedia({video: true, audio: false})
	.then((stream) => {
		video = document.createElement("video");
		video.srcObject = stream;
		video.id = "vid";
		video.style.position = "absolute";
		video.style.zIndex = "12"
		video.style.height = "500px";
		video.style.width = "500px";
		video.autoplay = true;
		document.getElementById("slide1").appendChild(video);
		document.getElementbyId("slide1").style.transform = "scale3d(50,50,50)";
		Array.from(document.getElementsByClassName("cork")).forEach(c=> {
			c.hidden = true;
		})
	})
	.catch((err) => {
	});
	}
}