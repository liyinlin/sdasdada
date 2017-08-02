		var map;
		var timer;//悬停的计时器。
		var lnglats;//点数据。
		var zoom = 12;
        var customerWinInfo;//鼠标移动上去显示的信息窗口
        var markers = [];
			var lnglats = [{
					"B": "29.044409",
					"L": "117.483741",
					"PName": "1111",
					"Status": 1
				},
				{
					"B": "29.044409",
					"L": "117.493741",
					"PName": "2222",
					"Status": 2
				},
				{
					"B": "29.035419",
					"L": "117.483741",
					"PName": "3333",
					"Status": 3
				},
				{
					"B": "29.035419",
					"L": "117.469956",
					"PName": "第四个点",
					"Status": 4
				},
				{
					"B": "29.030288",
					"L": "117.443466",
					"PName": "第五个点",
					"Status": 5
				},
				{
					"B": "29.025419",
					"L": "117.483741",
					"PName": "第六个点",
					"Status": 6
				},
				{
					"B": "29.015642",
					"L": "117.449188",
					"PName": "7777",
					"Status": 7
				}
			];

function loadMap(){
			try{
				map = new TMap("allmaps"); //初始化地图对象
             	map.centerAndZoom(new TLngLat(117.483552, 29.046463), zoom);//设置显示地图的中心点和级别
             	map.enableHandleMouseScroll(); 
             	//允许鼠标双击放大地图
             } catch(err) {
             	alert('天地图加载不成功，请稍候再试！');
             }
        }
	  	//鼠标从图标移动出去的时候执行
	  	function onClose() {
	  		clearTimeout(timer);
	  		map.removeOverLay(infoWin);
	  	}
		
		//绘制多个marker。
		function drawTMakers(lnglats) {
				markers.length = 0;
				if(lnglats.length != 0) {
					var iconurl = 'img/A.png';
					var iconurl1 = 'img/B.png';
					var iconurl2 = 'img/C.png';
					var iconurl3 = 'img/D.png';
					var iconurl4 = 'img/E.png';
					var iconurl5 = 'img/F.png';
					var iconurl6 = 'img/G.png';
					
					icon = new TIcon(iconurl, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					}); //两种图标，根据status判断用哪一种。  
					icon1 = new TIcon(iconurl1, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					});
					icon2 = new TIcon(iconurl2, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					}); //两种图标，根据status判断用哪一种。  
					icon3 = new TIcon(iconurl3, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					});
					icon4 = new TIcon(iconurl4, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					}); //两种图标，根据status判断用哪一种。  
					icon5 = new TIcon(iconurl5, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					});
					icon6 = new TIcon(iconurl6, new TSize(18, 24), {
						anchor: new TPixel(12, 12)
					}); //两种图标，根据status判断用哪一种。  
					

					for(var i = 0; i < lnglats.length; i = i + 1) {
						if(lnglats[i].Status == 1) {
							markers[i] = drawTMaker(lnglats[i], icon);
						} else if(lnglats[i].Status == 2) {
							markers[i] = drawTMaker(lnglats[i], icon1);
						} else if(lnglats[i].Status == 3) {
							markers[i] = drawTMaker(lnglats[i], icon2);
						} else if(lnglats[i].Status == 4) {
							markers[i] = drawTMaker(lnglats[i], icon3);
						} else if(lnglats[i].Status == 5) {
							markers[i] = drawTMaker(lnglats[i], icon4);
						} else if(lnglats[i].Status == 6) {
							markers[i] = drawTMaker(lnglats[i], icon5);
						} else {
							markers[i] = drawTMaker(lnglats[i], icon6);
						}
						markers[i].id = i;
					}
				}
			}
		//往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
		function drawTMaker(lnglat,icon){
			var marker =  new TMarker(new TLngLat(lnglat.L, lnglat.B), {icon: icon});
			console.log(lnglat.L);console.log(lnglat.B);


    

			map.addOverLay(marker);
			console.log(map);
			return marker;
		}
		loadMap();///加载地图
		drawTMakers(lnglats);//绘制标注。
//		addTEvent(markers,lnglats);