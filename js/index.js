$(function () {
	//menu
	$(".menu").click(function () {
		if ($(this).hasClass("h")) {
			$(this).removeClass("h");
		} else {
			$(this).addClass("h");
		}
	})

	//scroll
	$(".ul-top li").eq(0).click(function () {
		$("body").stop(true).animate({
			"scrollTop": 75
		})
	})
	$(".ul-top li").eq(1).click(function () {
		var h1 = $(".body1").height();
		$("body").stop(true).animate({
			"scrollTop": h1
		})
	})
	$(".ul-top li").eq(2).click(function () {
		var h1 = $(".body1").height();
		$("body").stop(true).animate({
			"scrollTop": h1
		})
	})
	$(".ul-top li").eq(3).click(function () {
		var h1 = $(".body1").height();
		$("body").stop(true).animate({
			"scrollTop": h1
		})
	})
	$(".ul-top li").eq(4).click(function () {
		var h1 = $(".body1").height();
		var h2 = $(".body2").height();
		$("body").stop(true).animate({
			"scrollTop": h1 + h2
		})
	})
	$(".ul-top li").eq(5).click(function () {
		var h1 = $(".body1").height();
		var h2 = $(".body2").height();
		var h3 = $(".body3").height();
		$("body").stop(true).animate({
			"scrollTop": h1 + h2 + h3 + 205
		})
	})
	$(".ul-top li").eq(6).click(function () {
		var h1 = $(".body1").height();
		var h2 = $(".body2").height();
		var h3 = $(".body3").height();
		var h4 = $(".body4").height();
		$("body").stop(true).animate({
			"scrollTop": h1 + h2 + h3 + 205 + h4
		})
	})
	$(".body5b-test").click(function () {
		$("body").stop(true).animate({
			"scrollTop": 0
		})
	})

	//fadeIn
	$(".body1-test").hide();
	$(".body2-l .p1").hide();
	$(".body2-l .p2").hide();
	$(".body2-r span").hide();
	$(".body2-r .p1").hide();
	$(".body3-1").hide();
	$(".body3-2 span").hide();
	$(".body3-2 .p1").hide();
	$(".test1").hide();
	$(".test2-2").hide();
	$(".body5l-test").hide();
	$(".body5r-test").hide();
	$(".info1").hide();
	$(".info2").hide();
	$(".info3").hide();
	$(".body5b-test").hide();
	$(".body1-test").fadeIn(2000);
	$(window).scroll(function () {
		var i = $(this).scrollTop();
		var h1 = $(".body1").height();
		var h2 = $(".body2").height();
		var h3 = $(".body3").height();
		var h4 = $(".body4").height();
		if (i >= h1 / 3 && i < h1 + 50) {
			$(".body2-l .p1").fadeIn(1500);
			$(".body2-l .p2").fadeIn(1500);
			$(".body2-r span").fadeIn(2000);
			$(".body2-r .p1").fadeIn(3000);
			$(".body5b-test").hide();
		} else if (i >= h1 + 50 && i < h1 + h2 + 50) {
			$(".body5b-test").show();
			$(".body3-1").fadeIn(1500);
			$(".body3-2 span").fadeIn(2000);
			$(".body3-2 .p1").fadeIn(3000);
		} else if (i >= h1 + h2 + 50 && i < h1 + h2 + h3 + 300) {
			$(".test1").fadeIn(2000);
			$(".test2-2").fadeIn(3000);
		} else if (i >= h1 + h2 + h3 + 300) {
			$(".body5l-test").fadeIn(2000);
			$(".body5r-test").fadeIn(3000);
			$(".info1").fadeIn(4000);
			$(".info2").fadeIn(4000);
			$(".info3").fadeIn(5000);
		};
		if ($(".menu").hasClass("h")) {} else {
			$(".menu").addClass("h");
		}
	})


	//baidumap
	$(".btn").on("click", function () {
		$(".MAP").show();		
		//MAP初始化
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(118.786511, 32.029147);
		map.centerAndZoom(point, 15);
		var marker = new BMap.Marker(point); // 创建标注
		map.addOverlay(marker); // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		map.enableScrollWheelZoom(); //启动鼠标滚轮缩放地图		
		//文本
		var opts = {
			position: point, // 指定文本标注所在的地理位置
			offset: new BMap.Size(10, -70) //设置文本偏移量
		}
		var label = new BMap.Label("欣才IT学院", opts); // 创建文本标注对象
		label.setStyle({
			color: "red",
			fontSize: "14px",
			height: "20px",
			lineHeight: "20px",
			borderRadius: "5px",
			fontFamily: "微软雅黑"
		});
		map.addOverlay(label);
		//缩放回中心
		$(window).on("resize", function () {
			var loadCount = 1;
			map.addEventListener("tilesloaded", function () {
				if (loadCount == 1) {
					map.setCenter(point);
				}
				loadCount = loadCount + 1;
			});
		})
	})
	
	
	$("#close").on("click", function () {
		$(".MAP").hide();
	})
})
