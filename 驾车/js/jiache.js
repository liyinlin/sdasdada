$(function(){
	$('.route_all_start .change_top').click(function(){
		$('.route_all_start .city_cun').css('display','block');
		$('.route_all_start .change_top_rt').css('display','block');
		$('.route_all_dest .change_top_rt').css('display','none');
		$('.route_all_dest .city_cun').hide();
		
	});
	$('.route_all_dest .change_top').click(function(){
		$('.route_all_dest .city_cun').css('display','block');
		$('.route_all_dest .change_top_rt').css('display','block');
		$('.route_all_start .change_top_rt').css('display','none');
		$('.route_all_start .city_cun').hide();
	});
	$('.change_top_rt').click(function(){
		$(".city_switch_box").show();
	})
});
$(function(){
	$(".bpgd").each(function(){
		$(".bpgd > a").click(function(){
			$(this).addClass('bpgdal').removeClass('bpgd_a').siblings().removeClass('bpgdal').addClass('bpgd_a');
			
		})
//		$(".bpgd > a").hover(function(){
//			console.log(1)
//					$(".bpgd > a").css('background','#C6DCFF');
//				},function(){
//					$(".bpgd > a").css('background','#ccc');
//				})
	})
	$(".pub_beg").hover(function(){
		$(this).css({'background':'#f5f5f5','cursor':'pointer'});
		$(this).children(".pub_beg_rt").css('background-position','-147px -56px');
		$(this).children(".pub_last_rt").css('background-position','-67px -56px');
	},function(){
		$(this).css('background','#fff');
		$(this).children(".pub_beg_rt").css('background-position','-147px -35px');
		$(this).children(".pub_last_rt").css('background-position','-67px -35px');
	})
});
$(function(){
	$('.route_all_start .change_top').click(function(){
		$('.route_all_start .beg_con').css('display','block');
		$('.route_all_start .change_top_rt').css('display','block');
		$('.route_all_dest .change_top_rt').css('display','none');
		$('.route_all_dest .beg_con').hide();
		
	});
	$('.route_all_dest .change_top').click(function(){
		$('.route_all_dest .beg_con').css('display','block');
		$('.route_all_dest .change_top_rt').css('display','block');
		$('.route_all_start .change_top_rt').css('display','none');
		$('.route_all_start .beg_con').hide();
	});
	$('.change_top_rt').click(function(){
		$(".city_switch_box").show();
	})
});