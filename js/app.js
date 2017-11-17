$(document).foundation()
{

	$("#parttwoGFXoneVid").mouseenter(function(){
    	$("#parttwoGFXoneVid").velocity({opacity: 0.5},{duration:400,delay:0});
	});
	$("#parttwoGFXoneVid").mouseleave(function(){
    	$("#parttwoGFXoneVid").velocity({opacity: 1},{duration:400,delay:0});
	});


	$("#parttwoGFXoneVid").click(function(){
		console.log("click");

		$('html, body').animate({ scrollTop: $('.parttwo').offset().top }, 'slow');

    	$("#projectonePage").velocity({opacity: 1},{duration:300,delay:0});
	
		$("#projectonePage").css('pointer-events','auto');
		$("body").css('overflow-y','hidden');
	});

	$("#projectoneVidone").click(function(){
		console.log("click");

    	$("#projectonePage").velocity({opacity: 0},{duration:100,delay:0});
		$("#projectonePage").css('pointer-events','none');
		$("body").css('overflow-y','scroll');
	});



	$("#partthreeGFXoneVid").click(function(){
		console.log("click 34");

		$('html, body').animate({ scrollTop: $('.partthree').offset().top }, 'slow');

    	$("#labonePage").velocity({opacity: 1},{duration:300,delay:0});
	
		$("#labonePage").css('pointer-events','auto');
		$("body").css('overflow-y','hidden');
	});

	$(".close").click(function(){
		console.log("click");

    	$("#labonePage").velocity({opacity: 0},{duration:100,delay:0});
		$("#labonePage").css('pointer-events','none');
		$("body").css('overflow-y','scroll');
	});






/* MENU OFFSCREEN  **********************************/
/****************************************************/

	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	function openNav() {
		/*document.getElementById("openSidenav").style.opacity = "0";
	    document.getElementById("mySidenav").style.width = "100%";
	    document.getElementById("fullpage").style.marginLeft = "100%";*/

	    $('#openSidenav').velocity({
    			opacity: 0
			},{
				duration: 200
		});
/*
	    $('#mySidenav')
	    .velocity({
	    		left: "100px"
	    	},{
	    		duration: 1
	    	}
	    )
*/
		document.getElementById("mySidenav").style.left = "0%";

	    setTimeout(function() {
		    $('#mySidenav').velocity({
    			opacity: 1
			},{
				duration: 600	
		    });
		}, 50);
	    
		/*
		$('#fullpage').velocity({
    			width: "100%"
			},{
				duration: 200
		});
		*/
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);

	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	function closeNav() {
		document.getElementById("openSidenav").style.opacity = "1";
	    
		$('#mySidenav')
	    .velocity({
    			opacity: 0
			},{
				duration: 400
			}
		)
		.velocity({
	    		left: "100%"
	    	},{
	    		duration: 0,
	    		delay: 200
	    	}
	    );

	    document.getElementById("mySidenav").style.opacity = "0";
	    /*document.getElementById("fullpage").style.marginLeft = "0%";
		*/

		$.fn.fullpage.setAllowScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
	} 



	var lastPos={};
	var raised = false;

	function butterflyHover() {
	
		
		
			if(!raised){
				/*
				$('.GFXoneoneStencil')
			    .velocity({
		    			
		    			scale: 1.01
					},{
						duration: 400
					}
				);
				$('.GFXoneone')
			    .velocity({
		    		
		    			scale: 1
					},{
						duration: 400
					}
				);*/

				

			    $('.GFXoneoneStencilShade')
				.velocity({
			    		opacity: 0.4,
			    		scale: 0.999,

			    	},{
			    		duration: 900,
			    		delay: 20
			    	}
			    );

			    $('.GFXoneoneStencilShade').on('mousemove',function(e){
					var e = window.event;
				
					if (typeof(lastPos.x)!='undefined'){
						var dX =lastPos.x - e.clientX;
						var dY =lastPos.y - e.clientY;

							//check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
				        if (Math.abs(dX) > Math.abs(dY) && dX > 0) {
				        	//left
				        	$('.GFXoneoneStencilShade').
							velocity({
									right: "+=dX%"
								},{
									duration: 1000
							});
				       	} else if (Math.abs(dX) > Math.abs(dY) && dX < 0) {
				       		//right
				       		$('.GFXoneoneStencilShade').
							velocity({
									left: "+=calc(dX/100)%"
								},{
									duration: 1000
							});
				       	} else if (Math.abs(dY) > Math.abs(dX) && dY > 0) {
				       		//up
				       	} else if (Math.abs(dY) > Math.abs(dX) && dY < 0) {
				        	//down
				        }

					}else{
						lastPos = {
							x : e.clientX,
							y : e.clientY
						}
					};
		 
				});

			}

	    raised = true;
	}

	function butterflyReset() {
			if(raised){
				/*
				$('.GFXoneoneStencil')
			    .velocity({
		    			
		    			scale: 1.01
					},{
						duration: 400
					}
				);
				$('.GFXoneone')
			    .velocity({
		    		
		    			scale: 1
					},{
						duration: 400
					}
				);*/

			    $('.GFXoneoneStencilShade')
				.velocity({
			    		opacity: 0,
			    		scale: 1
			    	},{
			    		duration: 700,
			    		delay: 200
			    	}
			    );
			}

	    raised = false;
	}



}