//$(".bus_clik").each(function(i){
//	$('.bus_clik .metro_con').eq(i).click(function(){
//		$(".bus_lose").eq(i).toggle();
//})
//	})
//	

	$('.bus_clik').click(function(){
		$(this).children(".bus_lose").toggle();
		$(this).siblings().children(".bus_lose").hide();
})
	$(function(){
	
		$(".diver_con_con").each(function(i){
			var s=true;
			$('.diver_con_con').eq(i).click(function(){
//				alert(i)
			
		if(s){
			$(".diver_con_con .details").eq(i).show();
			$(".diver_con_con .diver_con_rt").eq(i).css('background-position','-20px -54px');
			s=!s;
		}else{
			$(".diver_con_con .details").eq(i).hide();
			$(".diver_con_con .diver_con_rt").eq(i).css('background-position','-20px -61px');
			s=!s;
		}
		
		
})
		})
	
	});
	
$(function(){
		var ss=true;
	$(".diver_tit_rt").click(function(){
	
		if (ss) {
			$(".routeAllRouteListFx").removeClass("routeAllRouteListFx").addClass('routeAllRouteListFx_open');
			$('.diver_con_con').children('.details').show();
			$('.diver_con_con').children('.diver_con_rt').css({'background-position':'-20px -54px'});
			ss=!ss;
		} else{
			$(".routeAllRouteListFx_open").removeClass("routeAllRouteListFx_open").addClass('routeAllRouteListFx');
			$('.diver_con_con').children('.details').hide();
			$('.diver_con_con').children('.diver_con_rt').css({'background-position':'-20px -61px'});
			ss=!ss;
		}
	})
});
$(function(){
	$(window).load(function(){
		var sh=$(window).height();
	
		var hh=$(".header").height()+1;
	
		
		var ch=sh-hh;
		
		$(".con_le").height(ch);
		var conhs=$(".con_le").height();
		var conh=$(".con_le_top").height();
		
		var rh=conhs-conh-10;
		
		
		$(".list_container").height(rh);
		$(".routeShowList_scroll").height(rh);
		$(".cc").height(rh);
	})
		
})
$(function(){
	$(".jia_jiahao").click(function(){
		$(".bus_qh").hide();
		$(".addrout").show();
		$(".delet").click(function(){
			$(".bus_qh").show();
		$(".addrout").hide();
		})
	})
	
	
})
