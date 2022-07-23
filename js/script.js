//DOM LOADER
$('body').append('<div id="loader" class="loader"><img src="loader.svg" alt="loader" class="loader-svg"></div>')

//DOM LOADED
$(document).ready(function() {
	//REMOVE LOADER
	$("#loader").remove()
	$("#page").css("display", "block")
	//=========VARIABLES==========
	const loader = $("#loader")
	const sbar = $("#nav-bar")
	const sbarBtn = $("#nav-btn")
	let myName = "DEFAULT"
	const myImage = $("#my-image")

	//PAGE LOADING
	
	//SIDEBAR
	function initUserInfo() {
		const cvFullName = $("#cv-fullname").html(myName)
	}

	//SIDEBAR EVENTS
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

	  //PRINT CV
	  $("#print").on("click tap", function() {
		toggleSidebar()
		window.print()
	  })

	  //RUN
	  //initSidebarElements()

})
