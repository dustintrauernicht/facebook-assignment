window.addEventListener("load", function() {
	var modalshow = document.getElementsByClassName("modal")[0]
	var modaltitle = document.getElementsByClassName("modal__title")[0]
	var modalbody = document.getElementsByClassName("modal__body")[0]
	var toplike = document.getElementsByClassName("action action--like")[0];
	toplike.addEventListener("click", function() {
		var toplikes = document.querySelectorAll("div.post__info span")[0];
		if (toplikes.innerHTML == "28 likes" && toplike.text == "Like") {
			toplikes.innerHTML = "29 likes";
			toplike.text = "Unlike";
		} else {
			toplikes.innerHTML = "28 likes";
			toplike.text = "Like";
		}
	});
	var nameclick = document.querySelectorAll("div.media__info a");
	for (var i = 0; i < nameclick.length; i++) {
		var name_instance = nameclick[i];
		name_instance.addEventListener("click", function() {
			if (this.text == "Name 1") {
				modalshow.style.display = "inline"
				modaltitle.innerHTML = "Name 1"
				modalbody.innerHTML = "Friends: Probably 0"
			} else {
				modalshow.style.display = "none"
			}
		});
	}
	var replyclick = document.getElementsByClassName("comment__info");
	for (var i = 0; i < replyclick.length; i++) {
		replyclick[i].childNodes[3].addEventListener("click", function() {
			replies = this.parentNode.parentNode.childNodes[5]
			if (replies.style.display == "none") {
				replies.style.display = "block"
			} else {
				replies.style.display = "none"
			}
		});
	}
	var commentclick = document.getElementsByClassName("action action--comment")[0];
	commentclick.addEventListener("click", function() {
		var commentbox = document.querySelectorAll("div.media__info textarea")[5]
		commentbox.focus();
	});
	var shareclick = document.getElementsByClassName("action action--share")[0];
	shareclick.addEventListener("click", function() {
		modalshow.style.display = "inline"
		modaltitle.innerHTML = "Share Name 1's post"
		modalbody.innerHTML = "Hello World!"
	});
	var modalclose = document.getElementsByClassName("modal__close")[0]
	modalclose.addEventListener("click", function() {
		modalshow.style.display = "none"
	});
	window.addEventListener("click", function() {
		if (event.target == modalshow) {
			modalshow.style.display = "none";
		}
	});



	// when the page loads, give these insrructionss to every submit button:
	// 	 when you are clicked, do this:
	// 		find your textarea and alert() if its blank
	// 		else ______ if it's not blank.


	// var every_submit_button = document.getElementsByClassName....

	// for (var i = every_submit_button.length - 1; i >= 0; i--) {
	// 	every_submit_button[i].addEventListener("click", function(event){
	// 		var textarea = event.target.siblingparentn????

	// 		if textarea.value ???
	// 		else
	// 	})
	// }



	var submitbutton = document.getElementsByTagName("form")
	for (var i = 0; i < submitbutton.length; i++) {
		submitbutton[i].childNodes[3].addEventListener("click", function() {
			var commentmessage = document.querySelector("textarea")
			if (commentmessage.value == "") {
				alert("Add a comment")
			} else {
				var newdiv = document.createElement("div");
				var newcomment = document.createTextNode("comment text!");
				newdiv.appendChild(newcomment); //add the text node to the newly created div. 
				// add the newly created element and its content into the DOM 
				var currentDiv = document.getElementsByClassName("commentForm media");
				document.div.insertBefore(newdiv, currentDiv);
			}
		});
	}
	var comment = document.getElementsByClassName("comment media")[1]
	var commentclone = comment.cloneNode(true)
	document.getElementsByClassName("comment__info")[6].appendChild(commentclone)
});