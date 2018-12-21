$(function(){
    var listBox = $('#list');//轮播盒子
    var list = listBox.find('li');//轮播元素
    var len = list.length;//轮播元素个数
    var firstLi = list.eq(0).clone();
    listBox.append(firstLi);
    var w = list.width();
    var timer = null;
    var index = 0;
    var pagesList = $('#pages li');

    autoPlay();

    function display(){
        var w = list.width();
        index++;
        if(index == len){
            pagesList.eq(0).addClass('on').siblings().removeClass('on');
        }
        if(index > len){
            index = 1;
            listBox.css({left: 0});
        }
        listBox.animate({left:-(w * index)},500);
        pagesList.eq(index).addClass('on').siblings().removeClass('on');
    }


    function autoPlay(){
        stopPlay();
        timer = setInterval(display,1800);
    }

    function stopPlay(){
        if(timer){
            clearInterval(timer);
        }
    }

    listBox.hover(function(){
        stopPlay();
    },function(){
        autoPlay();
    });

    pagesList.hover(function(){
        stopPlay();
    },function(){
        autoPlay();
    });

    pagesList.click(function(){
        index = $(this).index();
        listBox.stop().animate({left:-(w * index)},500);
        $(this).addClass('on').siblings().removeClass('on');
    });

    $(".text").focus(function () {//获取焦点
        var curValue=$(this).val();
        if(curValue==this.defaultValue){
            $(this).val("");
        }
    });

    $(".text").blur(function(){//失去焦点
        var curValue=$(this).val();
        if($.trim(curValue)==""){
            $(this).val(this.defaultValue);
        }
    });

    $(".section .product ul li:nth-child(3n)").css("margin-right", 0);

    $(".submit").click(function(){
        if($(".text").val() == ""){
            alert("请完善用户信息");
        }
    });
});