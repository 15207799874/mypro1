setTimeout(
	function(){
		$("div.c1 h5").each(function(idx){$(this).fadeIn({duration:500*idx})});	
		$("#fixnav").fadeIn(3000);
	},
2500);
 $("#btn1").on('click',
	function(){
		var content1=$("#content1");				
		if(content1.css("display")=="none"){
			$("#content1").show("blind");
			setTimeout(
				function(){
					$("div.c1 h5").each(function(idx){$(this).fadeIn({duration:500*idx})});	
					$("#fixnav").fadeIn(3000);},
			2500);
		}	
				
	}) 
 $("#btn2").on('click',
	function(){
		var content1=$("#content1");				
		if(content1.css("display")!=="none"){
			$("#content1").hide("blind");
			$("div.c1 h5").hide();
		}				
	}) 