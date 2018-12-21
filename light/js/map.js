$(function(){ 
    //百度地图插件
    //创建和初始化地图函数：
     maap_lng=116.40396;
     maap_lat=39.915138;
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){
        map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(maap_lng,maap_lat),15);// lng lat
//map.centerAndZoom(new BMap.Point(113.642438,34.809845),12);
    }
    function setMapEvent(){
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
        target.addEventListener("click",function(){
            target.openInfoWindow(window);
        });
    }
    function addMapOverlay(){
       var markers = [
        {content:"次渠医院",title:"次渠医院",imageOffset: {width:-46,height:-21},position:{lat:maap_lat,lng: maap_lng}}
      ];
        //console.log(markers[1].position.lat);
        for(var index = 0; index < markers.length; index++ ){
            var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
            var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
                imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
            })});
            var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
            var opts = {
                width: 200,
                title: markers[index].title,
                enableMessage: false
            };
            var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
            marker.setLabel(label);
            addClickHandler(marker,infoWindow);
            map.addOverlay(marker);
        };
    }
    //向地图添加控件
    function addMapControl(){
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:3});
        map.addControl(navControl);
    }
    var map;
    initMap();
});