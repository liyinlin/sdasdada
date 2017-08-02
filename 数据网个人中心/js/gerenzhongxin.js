$(function() {
	$(".clearfloat label").click(function() {
		$(this).addClass("addclass").siblings().removeClass("addclass");
	})
});
$(function() {

	$(".xiangxi").click(function(e) {
		e.stopPropagation();

		$(".dizhi_bot").html(' ');

		$(document).click(function(e) {
			var wenben = $(".xiangxi").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".dizhi_bot").html('请输入详细地址');
			}
		})

	})

});
$(function() {

	$(".mima").click(function(e) {
		e.stopPropagation();

		$(".dizhi_mima").html(' ');

		$(document).click(function(e) {
			var wenben = $(".mima").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".dizhi_mima").html('请输入原密码');
			}
		})

	})

});
$(function() {

	$(".mimas").click(function(e) {
		e.stopPropagation();

		$(".dizhi_mimas").html(' ');

		$(document).click(function(e) {
			var wenben = $(".mimas").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".dizhi_mimas").html('请输入新密码');
			}
		})

	})

});
$(function() {

	$(".mimass").click(function(e) {
		e.stopPropagation();

		$(".dizhi_mimass").html(' ');

		$(document).click(function(e) {
			var wenben = $(".mimass").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".dizhi_mimass").html('请确认新密码');
			}
		})

	})

});
$(function() {

	$(".juti").click(function(e) {
		e.stopPropagation();

		$(".dizhi_bots").html(' ');

		$(document).click(function(e) {
			var wenben = $(".juti").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".dizhi_bots").html('请输入详细地址');
			}
		})

	})

});
//$(function() {
//	$(".bianji").click(function(event) {
//		event.stopPropagation();
//		var n = $(".sxk_con input").length;
//		$(".sxk_con input").removeAttr('disabled', 'disabled');
//		$(".sxk_con input").css('border', '1px solid #ccc');
//		$(".sxk_con input").focus();
//		$(".sxk_con input").blur(function() {
//			$(this).attr('disabled', 'disabled');
//			$(this).css('border', 'none');
//		});
//		//				$(document).click(function(event) {
//		//				event.stopPropagation();
//		//				$(".sxk_con input").attr('disabled','disabled');
//		//				$(".sxk_con input").css('border','none');
//		//				})
//	})
//
//});
$(function() {
	$(".shanchu").click(function(e) {
		e.stopPropagation();
		$(".sxk_con").remove();
	})

})
$(function() {
	$(window).load(function() {
		if($.browser.msie) {
			$(".juti").css('vertical-align', 'text-bottom');
			$(".se_sbt").css('vertical-align', 'text-bottom');
			$(".se_sbts").css('vertical-align', 'text-bottom');
			$(".search").css('margin-top', '10px');
			$(".sbt_sousuo").css('vertical-align', 'auto');
			$(".sbt_sousuo_ri").css('vertical-align', 'auto');
		}

	})

})

$(function() {

	$(".shurudidian").click(function(e) {
		e.stopPropagation();

		$(".shuru").html(' ');

		$(document).click(function(e) {
			var wenben = $(".shurudidian").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".shuru").html('请输入地点');
			}
		})

	})

});
$(function() {

	$(".shurudizhi").click(function(e) {
		e.stopPropagation();

		$(".dizhi").html(' ');

		$(document).click(function(e) {
			var wenben = $(".shurudizhi").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".dizhi").html('请输入地点');
			}
		})

	})

});
$(function() {

	$(".sbt_sousuo_le").click(function(e) {
		e.stopPropagation();

		$(".biaohui_bot").html(' ');

		$(document).click(function(e) {
			var bwenben = $(".sbt_sousuo_le").val();
			if(bwenben == "") {
				e.stopPropagation();
				$(".biaohui_bot").html('输入标会名称');
			}
		})

	})

});
$(function() {

	$(".pho").hover(function() {
		$(".pho_shanchu").show();
		$(".queding").click(function(){
			$(".pho").remove();
			$(".tanchuang").hide();
			$(".xmlb_cons").hide();
		})
		$(".quxiaos").click(function() {
					$(".tanchuang").hide();
					$(".xmlb_cons").hide();
			})

	},function(){
		$(".pho_shanchu").hide();
	})

});
$(function() {

	$(".pho_shanchu").click(function() {
		$(".tanchuang2").show();
		$(".xmlb_con").show();
		$(".queding").click(function(){
			$(".pho").remove();
			$(".tanchuang2").hide();
			$(".xmlb_con").hide();
		})
		$(".quxiaos").click(function() {
					$(".tanchuang2").hide();
					$(".xmlb_con").hide();
			})

	})

});
$(function() {
	$(".bniaohui_tit").each(function(){
		$(".bniaohui_tit li").mouseover(function(){
			var x=$(this).index();
			$(this).addClass("addbiaohui").siblings().removeClass('addbiaohui');
//			$(this).children(".biaohui_del").show();
            $(".biaohui_del").eq(x).show();
		})
		$(".bniaohui_tit li").mouseout(function(){
			var x=$(this).index();
			$(this).removeClass('addbiaohui');
			 $(".biaohui_del").eq(x).hide();
		})
	})
});
//$(function() {
//	$(".biaohui_del").click(function(){
//		$(this).parents(".bniaohui_tit_top").remove();
//	})
//});
//$(function() {
//	$(".xiugai").click(function(){
//		$(".cunzhen").removeAttr('disabled', 'true');
//		$(".cunzhen").css('border','1px solid #ccc ');
//		$(".jutidizhi").removeAttr('disabled', 'true');
//		$(".jutidizhi").css("border","1px solid #ccc");
//	})
//});
$(function() {

	$(".makedidian").click(function() {
			$(location).attr('href', 'wodedidian_tianjiadidian.html');

	});
	$(".choose").click(function() {
			$(location).attr('href', 'wodedidian_txuanzedidian.html');

	});
});


$(function() {
	$(".bniaohui_tit_top").each(function(q){
	$(".bniaohui_tit_top .biaohui_del").eq(q).click(function(){
			$(".tanchuang2").show();
			$(".xmlb_con").show();
		$(".queding").click(function(){
			$(".bniaohui_tit_top").eq(q).remove();
			$(".tanchuang2").hide();
			$(".xmlb_con").hide();
		})
		$(".quxiaos").click(function() {
					$(".tanchuang2").hide();
					$(".xmlb_con").hide();
		})
		
});
});
});
