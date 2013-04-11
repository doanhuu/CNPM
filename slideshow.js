  var imageList = new Array;
	imageList[0] = new Image;imageList[0].src = "Phone/Phone13.png";
	imageList[1] = new Image;imageList[1].src = "Phone/Phone14.png";
			function slideShow() {
			   var imageNumber = Math.floor(Math.random() * imageList.length);
			   document.image_name.src = imageList[imageNumber].src;
			   document.x1.value_image_number.value =  imageNumber;
			   window.setTimeout("slideShow(" + imageNumber + ")",800);
			}
