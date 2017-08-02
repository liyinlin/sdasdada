$(".view").mouseenter(function() {

	$(".view .v_down").show();

});
$(".view").mouseleave(function() {

	$(".view .v_down").hide();

});
$(".tool").mouseenter(function() {

	$(".tool .v_down").show();

});
$(".tool").mouseleave(function() {

	$(".tool .v_down").hide();

});
$(function() {
	$(".close").click(function(event) {

		$(".sou").val(' ');

	});
	$(".sou").click(function(event) {
		event.stopPropagation();
		$(this).val('');
		$(document).click(function() {
			var wenben = $(".sou").val();
			if(wenben == "") {
				$(".sou").val('请输入要搜索的关键字');
			}

		});

	});

	$(".pwd").click(function(event) {
		event.stopPropagation();

		if($(".di_wenzi").html('请输入密码')) {
			$(".di_wenzi").html('');
		}
		$(document).click(function() {
			var wenbenw = $(".pwd").val();
			if(wenbenw == "") {
				$(".di_wenzi").html('请输入密码');
			}
		});

	});
	$(".bus_left").click(function(event) {
		event.stopPropagation();
		$(this).val('');
		$(document).click(function() {
			var wenbens = $(".bus_left").val();
			if(wenbens == "") {
				$(".bus_left").val('请输入起点');
			}
		});

	});
	$(".bus_rt").click(function(event) {
		event.stopPropagation();
		$(this).val('');
		$(document).click(function() {
			var wenbenss = $(".bus_rt").val();
			if(wenbenss == "") {
				$(".bus_rt").val('请输入终点');
			}
		});

	});
	$(".car_left").click(function(event) {
		event.stopPropagation();
		$(this).val('');
		$(document).click(function() {
			var wenbens = $(".car_left").val();
			if(wenbens == "") {
				$(".car_left").val('请输入起点');
			}
		});

	});
	$(".car_rt").click(function(event) {
		event.stopPropagation();
		$(this).val('');
		$(document).click(function() {
			var wenbenss = $(".car_rt").val();
			if(wenbenss == "") {
				$(".car_rt").val('请输入终点');
			}
		});

	});

});

$(function() {
	var h = $(window).height();
	if((screen.width == 1920)) {
		//	$(".con_le").height(h);
		$(".map").height(h - 135);
		$(".con_le").height(h - 102);
		$(".gd").height(700);
		if($.browser.msie) {

			$(".waibu").height(575);
			$(".wjs").height(575);
		} else if($.browser.mozilla) {
			$(".gd").height(690);
			$(".waibu").height(560);
			$(".wjs").height(555);
		} else {
			$(".waibu").height(610);
			$(".wjs").height(610);
		}

		$(".bus_out").height('100%');
		$(".bus_out").css('overflow-y', 'hidden');
		//		$(".jianjie_con").css('line-height','30px');
	} else if((screen.width == 1366)) {
		//	$(".con_le").height(h);
		$(".map").height(h - 135);
		$(".con_le").height(h - 102);
		$(".gd").height(400);
		if($.browser.msie) {
			$(".waibu").height(270);
			$(".bus_out").height(450);
			$(".wjs").height(270);

		} else if($.browser.mozilla) {

			$(".waibu").height(270);
			$(".wjs").height(270);
			$(".bus_out").height(430);
		} else {
			$(".bus_out").height(450);
			$(".waibu").height(280);
			$(".wjs").height(280);
		}

		$(".allbus").height(700);

		//		$(".jianjie_con").css('line-height','15px');
	} else if((screen.width < 1360)) {
		//	$(".con_le").height(h);
		$(".map").height(h - 140);
		$(".con_le").height(h - 102);
		$(".gd").height(400);
		if($.browser.msie) {
			$(".waibu").height(250);
			$(".bus_out").height(420);
			$(".wjs").height(250);

		} else {
			$(".bus_out").height(450);
			$(".waibu").height(295);
			$(".wjs").height(390);
		}
		$(".jianjie_con").css('line-height', '15px');
	}
});
//$(function() {
//	var h = $(window).height();
//	var he=$(".header").height();
//	var hei=h-he;
//	if((screen.width == 1920)) {
//		//	$(".con_le").height(h);
//		$(".map").height(hei+139);
//		$(".con_le").height(hei+170);
//		$(".gd").height(700);
//		$(".waibu").height(615);
//		$(".wjs").height(615);
//		$(".bus_out").height('100%');
//		$(".bus_out").css('overflow-y','hidden');
////		$(".jianjie_con").css('line-height','30px');
//	} else if((screen.width == 1366)) {
//		//	$(".con_le").height(h);
//		$(".map").height(hei+139);
//		$(".con_le").height(hei+170);
//		$(".gd").height(400);
//		$(".bus_out").height(450);
//		$(".allbus").height(700);
//		$(".wjs").height(280);
//		$(".waibu").height(280);
////		$(".jianjie_con").css('line-height','15px');
//	}
//	else if((screen.width <=1360)) {
//		//	$(".con_le").height(h);
//		$(".map").height(hei+139);
//		$(".con_le").height(hei+170);
//		$(".gd").height(400);
//		$(".bus_out").height(450);
//		$(".wjs").height(280);
//		$(".waibu").height(280);
//		$(".jianjie_con").css('line-height','15px');
//	}
//});
$(function() {
	$(".lifl").click(function() {
		$(".fl_con").show();
		$(".city_cun").show();
		$(".cun_jieshao").show();
		$(".sc_dowan").hide();
		$(".bus_list").show();

		//		$("#mapDiv1").hide();
		$("#mapDiv").show();
		$(this).addClass("libg").siblings().removeClass("libg");
	});
	//	$(".lisc").click(function() {
	//		$(".fl_con").hide();
	//		$(".city_cun").hide();
	//		$(".cun_jieshao").hide();
	//		$(".bus_list").hide();
	//		$(".sc_dowan").show();
	////		$("#mapDiv1").show();
	//		$("#mapDiv").show();
	//		$(this).addClass("libg").siblings().removeClass("libg");
	//	});
});

$(function() {
	var con = document.getElementById("tanchuang");
	$(".login").click(function() {
		$(".tanchuang").show();
		$(".xmlb_cons").show();
		//		parent.zhezhaoshow();
		setInterval(function() {
			var pmw = document.documentElement.clientWidth || document.body.clientWidth;
			var pmh = document.documentElement.clientHeight || document.body.clientHeight;
			con.style.left = (pmw - con.offsetWidth) / 2 + 'px';
			con.style.top = (pmh - con.offsetHeight) / 2 + 'px';
		}, 1);

	})
	$(".aqcl_title2 i").click(function() {
		$(".tanchuang").hide();
		$(".xmlb_cons").hide();
		//		parent.zhezhaohide();
	})
});
$(function() {
	$(".l_cha").click(function(event) {
		event.stopPropagation();
		$(".user").val('');
		$(document).click(function() {
			var wenben = $(".user").val();
			if(wenben == "") {
				$(".user").val('请输入用户名');
			}
		})
	});
	$(".l_cha2").click(function(event) {
		event.stopPropagation();
		$(".di_wenzi").html('');
		$(document).click(function() {
			var wenben = $(".pwd").val();
			if(wenben == "") {
				$(".di_wenzi").html('请输入密码');
			}
		})
	});
	$(".login_sbt").click(function() {
		$(".dl").hide();
		$(".grax").hide();
		$(".tanchuang").hide();
		$(".xmlb_cons").hide();
		$(".sc_denglu").hide();
		$(".sc_hide").show();
	});
});
$(function() {
	$(".fo").click(function() {
		$(this).addClass("addc").siblings().removeClass("addc");
		$(this).children("a").addClass("addcl");
		$(this).siblings().children("a").removeClass("addcl");
		$(".sousuo1").show();
		$(".sousuo2").hide();
		$(".sousuo3").hide();
		$(".search_cun").css('background', 'url(img/dingwei.png)');
		$(".search_bus").css('background', 'url(img/bus.png)');
		$(".search_car").css('background', 'url(img/car.png)');
	});
	$(".bus").click(function() {
		$(this).addClass("addc").siblings().removeClass("addc");
		$(this).children("a").addClass("addcl");
		$(this).siblings().children("a").removeClass("addcl");
		$(".sousuo2").show();
		$(".sousuo1").hide();
		$(".sousuo3").hide();
		$(".search_cun").css('background', 'url(img/dingweis.png)');
		$(".search_bus").css('background', 'url(img/addbus.png)');
		$(".search_car").css('background', 'url(img/car.png)');
	});
	$(".car").click(function() {
		$(this).addClass("addc").siblings().removeClass("addc");
		$(this).children("a").addClass("addcl");
		$(this).siblings().children("a").removeClass("addcl");
		$(".sousuo3").show();
		$(".sousuo2").hide();
		$(".sousuo1").hide();
		$(".search_cun").css('background', 'url(img/dingweis.png)');
		$(".search_bus").css('background', 'url(img/bus.png)');
		$(".search_car").css('background', 'url(img/addcar.png)');
	});
});
$(function() {
	var i = true;

	$(".shouqi").click(function() {
		if(i) {
			$(".con_le").hide();
			$(".shouqi").html(">");
			$(".shouqi").css("left", "0");
			$(".all_path").css("left", "10px");
			$(".city_switch_box").css("left", "10px");
			i = !i;
		} else {
			$(".con_le").show();
			$(".shouqi").html("<");
			$(".shouqi").css("left", "365px");
			$(".all_path").css("left", "400px");
			$(".city_switch_box").css("left", "390px");
			i = !i;
		}

	});

});
$(function() {
	$(".all_path").hover(function() {
		$(".pub_path1").show();

		$(".allp").css("width", "212px");
	}, function() {
		$(".pt").hide();
		$(".pt2").hide();
		$(".allp").css("width", "70px");
	});

});
$(function() {
	var a = true;
	$(".city_title").click(function() {
		$(".city_down").toggle();
		if(a) {
			$(".city_title i").css('background-position', '-41px -44px');
			a = !a;
		} else {
			$(".city_title i").css('background-position', '-53px -42px');
			a = !a;
		}
	});

});
$(function() {
	$(".all_path").hover(function() {
		$(".pub_path1").show();

		$(".allp").css("width", "212px");
	}, function() {
		$(".pt").hide();
		$(".pt2").hide();
		$(".allp").css("width", "70px");
	});

});
$(function() {
	
	$(".city_down_to").each(function(x) {
		var s = true;
		$(this).click(function(event) {
			event.stopPropagation();
			event.preventDefault();
			if(s) {
				$(this).children(".city_erji").show();
				$(".city_down li i").eq(x).css('background-image', 'url(img/county2.png)');
				s = !s;

			} else {
				$(this).children(".city_erji").hide();
				$(".city_down li i").eq(x).css('background-image', 'url(img/county1.png)');
				s = !s;

			}
		});
	})

});
//城市下拉列表
$(function() {
	$(".city").click(function(event) {
		//		event.stopPropagation();
		$(".city_switch_box").toggle();
		//		$(document).click(function(){
		//		$(".tool .v_down").hide();
		//		$(".view .v_down").hide();
		//		$(".city_switch_box").hide();

		//})
	});

	$(".city_list_province_right a").each(function(i) {
		$(this).click(function() {
			var ht = $(".city_list_province_right a").eq(i).html();
			$("#city").html(ht);
			$(".dq").html(ht);
			$(".city_switch_box").hide();
		})
	});
	$(".hot_city a").each(function(i) {
		$(this).click(function() {
			var ht = $(".hot_city a").eq(i).html();
			$("#city").html(ht);
			$(".dq").html(ht);
			$(".city_switch_box").hide();
		})
	});
	$(".city_close").click(function() {
		$(".city_switch_box").hide();
	});
	$(".switch_city").click(function() {
		$(".province_choose").show();
		$(".province_chooses").hide();
		$(".city_list").show();
		$(".citylist").hide();
		$(this).addClass("hover");
		$(".switch_country").removeClass("hover");
	});
	$(".switch_country").click(function() {
		$(this).addClass("hover");
		$(".switch_city").removeClass("hover");
		$(".province_choose").hide();
		$(".province_chooses").show();
		$(".city_list").hide();
		$(".city_lists").hide();
		$(".citylist").show();
	});
	$(".sf").click(function() {
		$(".province_choose").show();
		$(".city_list").show();
		$(".city_lists").hide();
		$(this).addClass("hover");
		$(".pinyin").removeClass("hover");
	});
	$(".pinyin").click(function() {
		$(this).addClass("hover");
		$(".sf").removeClass("hover");

		$(".city_list").hide();
		$(".city_lists").show();
	});
	$(".dz").click(function() {
		$(".province_chooses").show();
		$(".citylist").show();
		$(".citylistss").hide();
		$(this).addClass("hover");
		$(".szm").removeClass("hover");
	});
	$(".szm").click(function() {
		$(this).addClass("hover");
		$(".dz").removeClass("hover");

		$(".citylist").hide();
		$(".citylistss").show();
	});

});

$(function() {
	$(".d_down").click(function() {
		$(".city_switch_box").toggle();

	});

});
$(function() {
	var con = document.getElementById("tanchuang");
	$(".sc_dl_le a").click(function() {
		$(".tanchuang").show();
		$(".xmlb_cons").show();
		//		parent.zhezhaoshow();
		setInterval(function() {
			var pmw = document.documentElement.clientWidth || document.body.clientWidth;
			var pmh = document.documentElement.clientHeight || document.body.clientHeight;
			con.style.left = (pmw - con.offsetWidth) / 2 + 'px';
			con.style.top = (pmh - con.offsetHeight) / 2 + 'px';
		}, 1);

	})
	$(".aqcl_title2 i").click(function() {
		$(".tanchuang").hide();
		$(".xmlb_cons").hide();
		//		parent.zhezhaohide();
	})
});
$(function() {
	var con = document.getElementById("tanchuang");
	$(".sc_dl_ri").click(function() {
		$(".tanchuang").show();
		$(".xmlb_cons").show();
		//		parent.zhezhaoshow();
		setInterval(function() {
			var pmw = document.documentElement.clientWidth || document.body.clientWidth;
			var pmh = document.documentElement.clientHeight || document.body.clientHeight;
			con.style.left = (pmw - con.offsetWidth) / 2 + 'px';
			con.style.top = (pmh - con.offsetHeight) / 2 + 'px';
		}, 1);

	})
	$(".aqcl_title2 i").click(function() {
		$(".tanchuang").hide();
		$(".xmlb_cons").hide();
		//		parent.zhezhaohide();
	})
});
$(function() {
	$(".sc_li li").each(function(i) {
		$(this).mouseover(function() {
			$(".dclear").eq(i).show();
		});
		$(this).mouseout(function() {
			$(".dclear").eq(i).hide();
		});
	});
});
$(function() {
	$(".l_cha").hover(function() {
		$(this).css('background', 'url(img/l_chas.png) 0 0 no-repeat');

	}, function() {
		$(this).css('background', 'url(img/login_cha.png)');

	});
	$(".l_cha2").hover(function() {
		$(this).css('background', 'url(img/l_chas.png) 0 0 no-repeat');

	}, function() {
		$(this).css('background', 'url(img/login_cha.png)');

	});

});
$(function() {
	$(".l_cha").click(function() {
		$(".user").val(' ');

	});
	$(".l_cha2").click(function() {
		$(".pwd").val('');
	});

});
$(function() {
	$(".user").click(function(event) {
		event.stopPropagation();
		$(".user").val(' ');
		$(document).click(function() {
			$(".user").val('请输入用户名');
		})

	});

});
$("#inter img").click(function() {
	$(".tanchuang2").show();
	$(".t_chuang").show()
});
$(".t_back").click(function() {
	$(".tanchuang2").hide();
	$(".t_chuang").hide()
});
$(function() {

	$(".sou_btn").click(function() {
		if($(".sousuo1").is(':hidden') == false) {

			$(location).attr('href', 'map_cun_jieshao.html');

		} else if($(".sousuo2").is(':hidden') == false) {
			$(location).attr('href', 'map_bus.html');

		}
	});

});
$(function() {
	$(".sou").keydown(function(event) {
		event.stopPropagation();
		$(".down_city").show();
		$(".down_city_list li").mouseover(function() {
			var m = $(this).index();
			$(this).addClass('adbg').siblings().removeClass('adbg');
			$(this).click(function() {
				$(".sou").val($(".c_le").eq(m).html());
				$(".down_city").hide();
			})
		})
		$(document).click(function() {
			$(".down_city").hide();
			var wenben = $(".sou").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".shuru").html('请输入地点');
			}
		})
	})
	$(".sou").click(function() {
		$(".down_city").hide();
		$(".down_city").css('left', '365px');
	})

});
$(function() {
	$(".bus_left").keydown(function(event) {
		event.stopPropagation();
		$(".down_city").show();
		$(".down_city_list li").mouseover(function() {
			var m = $(this).index();
			$(this).addClass('adbg').siblings().removeClass('adbg');
			$(this).click(function() {
				$(".bus_left").val($(".c_le").eq(m).html());
				$(".down_city").hide();
			})
		})
		$(document).click(function() {
			$(".down_city").hide();
			var wenben = $(".bus_left").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".shuru").html('请输入起点');
			}
		})
	})
	$(".bus_left").click(function() {
		$(".down_city").hide();
		$(".down_city").css('left', '365px');
	})

});
$(function() {
	$(".bus_rt").keydown(function(event) {
		event.stopPropagation();
		$(".down_city").show();
		$(".down_city").css('left', '600px');
		$(".down_city_list li").mouseover(function() {
			var m = $(this).index();
			$(this).addClass('adbg').siblings().removeClass('adbg');
			$(this).click(function() {
				$(".bus_rt").val($(".c_le").eq(m).html());
				$(".down_city").hide();
			})
		})
		$(document).click(function() {
			$(".down_city").hide();
			var wenben = $(".bus_rt").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".shuru").html('请输入终点');
			}
		})
	})
	$(".bus_rt").click(function() {
		$(".down_city").hide();
	})

});
$(function() {
	$(".car_left").keydown(function(event) {
		event.stopPropagation();
		$(".down_city").show();
		$(".down_city_list li").mouseover(function() {
			var m = $(this).index();
			$(this).addClass('adbg').siblings().removeClass('adbg');
			$(this).click(function() {
				$(".car_left").val($(".c_le").eq(m).html());
				$(".down_city").hide();
			})
		})
		$(document).click(function() {
			$(".down_city").hide();
			var wenben = $(".car_left").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".shuru").html('请输入起点');
			}
		})
	})
	$(".car_left").click(function() {
		$(".down_city").hide();
		$(".down_city").css('left', '365px');
	})

});
$(function() {
	$(".car_rt").keydown(function(event) {
		event.stopPropagation();
		$(".down_city").show();
		$(".down_city").css('left', '600px');
		$(".down_city_list li").mouseover(function() {
			var m = $(this).index();
			$(this).addClass('adbg').siblings().removeClass('adbg');
			$(this).click(function() {
				$(".car_rt").val($(".c_le").eq(m).html());
				$(".down_city").hide();
			})
		})
		$(document).click(function() {
			$(".down_city").hide();
			var wenben = $(".car_rt").val();
			if(wenben == "") {
				e.stopPropagation();
				$(".shuru").html('请输入终点');
			}
		})
	})
	$(".car_rt").click(function() {
		$(".down_city").hide();
	})

});
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