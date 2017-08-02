function bannerplay(){
var waibu=document.getElementById("banner");
var neibu=document.getElementById("inter");
var phot=neibu.getElementsByTagName('img');
neibu.innerHTML+=neibu.innerHTML;
var inp=document.getElementById('next');
var inps=document.getElementById('prev');
var imw=phot[0].offsetWidth+10;//获取单个照片的宽度
var imzw=imw*(phot.length/2);
	function lef(){
			if(waibu.scrollLeft%imw==0){
				 waibu.scrollLeft+=imw;
				 if(waibu.scrollLeft>=imzw){
				waibu.scrollLeft=0;
				
			}
				console.log(waibu.scrollLeft);
			}
		}
	function ri(){
			if(waibu.scrollLeft%imw==0){
				 waibu.scrollLeft-=imw;
				 if(waibu.scrollLeft<=0){
				waibu.scrollLeft=imzw;
			}
			}
		}
		inp.onclick=function (){
			 lef();
		}
		inps.onclick=function (){
			 ri();
		}
}
bannerplay();
$(function(){
	$("#inter img").click(function(){
						$(".tanchuang2").show();
						$(".t_chuang").show()
					});
					$(".t_back").click(function(){
						$(".tanchuang2").hide();
						$(".t_chuang").hide()
					});
})
