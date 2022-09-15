//DOM LOADER
$('body').append('<div id="loader" class="loader"><img src="loader.svg" alt="loader" class="loader-svg"></div>')

//DOM LOADED
$(document).ready(function() {
	//REMOVE LOADER
	$("#loader").remove()
	$("#page").css("display", "block")

	//=========VARIABLES==========
	let isContentEditable = false
	const loader = $("#loader")

	const sbar = $("#nav-bar")
	const sbarBtn = $("#nav-btn")
	const sbarConfigure = $("#configure")
	const sbarObjective = $("#objective")
	const sbarSkills = $("#skills")
	const sbarExperience = $("#experience")
	const sbarEducation = $("#education")
	const sbarSave = $("#save")
	const sbarPrint = $("#print")
	const sbarDownload = $("#download")

	let myName = "DEFAULT"
	const myImage = $("#my-image")

	const popupNotify = $("#popup-notofication")
	const popupText = $("#popup-text")

	const fadeSpeed = 700
	const scrollSpeed = 700
	//PAGE LOADING

	//AVATAR
	var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".file-upload").on('change', function(){
        readURL(this);
    })
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    })
	
	//SIDEBAR
	function initUserInfo() {
		const cvFullName = $("#cv-fullname").html(myName)
	}

	//SIDEBAR 
	function toggleSidebar() {
		$(".button").toggleClass("active")
		$("main").toggleClass("move-to-right")
		$(".sidebar-item").toggleClass("active")
	  }
	
	  $(".button").on("click tap", function() {
		toggleSidebar()
	  })
	
	  $(document).keyup(function(e) {
		if (e.keyCode === 27) {
		  toggleSidebar()
		}
	  })

	  //SIDEBAR CONTENT EDITABLE

	  //CHANGE EDITABLE STATE
	  function setContentEditableState() {
		const contentEditable = "contenteditable"
		isContentEditable = !isContentEditable
		let editableElements = $(".content-editable")
		
		$(editableElements).attr(contentEditable, isContentEditable)

		if(isContentEditable)
		 	showNotification("Edit Enabled")
		else showNotification("Edit Disabled")	
	}

	/**SIDEBAR LISTENERS */
	  $(sbarObjective).on("click tap", function() {
		scrollTo(this)
	  })
	  $(sbarSkills).on("click tap", function() {
		scrollTo(this)
	  })
	  $(sbarEducation).on("click tap", function() {
		scrollTo(this)
	  })
	  $(sbarExperience).on("click tap", function() {
		scrollTo(this)
	  })
	  //CONFIGURE CV
	  $("#configure").on("click tap", function() {
		setContentEditableState()
	  })
	  //PRINT CV
	  $("#print").on("click tap", function() {
		toggleSidebar()
		window.print()
	  })

	  /*POPUPS*/
	  function showNotification(text){
		$(popupText).html(text)
		$(popupNotify).css("display", "flex")
		setTimeout(() => {
			$(popupNotify).fadeOut(fadeSpeed)
		}, 1500);
	}

	/*SCROLL VIEW*/
	function scrollTo(element){
		let target = $(element).offset();
		$('html, body').animate({
			scrollTop: target.top
		}, scrollSpeed);
	}

	/*DOWNLOAD CODE*/
	function downloadFile(file) {
		// CREATE THE LINK AND SET URL USING `createObjectURL`
		const link = document.createElement("a");
		link.style.display = "none";
		link.href = URL.createObjectURL(file);
		link.download = file.name;
	  
		// NEEDS TO BE ADDED TO BE CLICKABLE
		document.body.appendChild(link);
		link.click();
	  
		// TO MAKE THIS WORK ON FIREFOX NEED A TIMEOUT
		setTimeout(() => {
		  URL.revokeObjectURL(link.href);
		  link.parentNode.removeChild(link);
		}, 0);
	  }
	  
	  // DYNAMICALLY CREATE A FILE
	  const myFile = new File([`${new Date()}: TestFile!`], "my_code.txt");
	  

	  //RUN
	  //initSidebarElements()

})
