/*  ;(function(){	
	var navi=navigator.appVersion.match(/MSIE\s(8.0)/);
	if(navi&&navi[1]<9){
		alert("你的浏览器太古老，请使用现代浏览器");
		location.href="html/error1.html";
	}
})(); */
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
			content1.show("blind");
			$("#content2").hide();
			setTimeout(
				function(){
					$("div.c1 h5").each(function(idx){$(this).fadeIn({duration:500*idx})});	
					$("#fixnav").fadeIn(3000);},
			2500);
			$("#c2_p p").css("display","none");
		}	
				
	}) 
 $("#btn2").on('click',
	function(){
		var content1=$("#content1");					
		if(content1.css("display")!=="none"){
			content1.hide("blind");
			$("#content2").show("blind");			
			$("div.c1 h5").hide();
			$("#c2_p p").eq(0).delay(1000).show("blind",{direction:"left",duration:500},
				function(){$(this).next().show("blind",{direction:"right",duration:500},
					function(){$(this).next().show("blind",{direction:"left",duration:500},
						function(){$(this).next().show("blind",{direction:"right",duration:500}
						)}
					)}
				)}
			)
		}		
	}) 
	$("#btn-demo").on('click',function(){$("#fixdemo").toggle("explode")});

