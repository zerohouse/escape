app.controller('contact', function () {
    var oPoint = new nhn.api.map.LatLng(35.1359970, 129.1000470);
    nhn.api.map.setDefaultPoint('LatLng');
    oMap = new nhn.api.map.Map('tmap' ,{
        point : oPoint,
        zoom : 10,
        enableWheelZoom : true,
        enableDragPan : true,
        enableDblClickZoom : false,
        mapMode : 0,
        activateTrafficMap : false,
        activateBicycleMap : false,
        minMaxLevel : [ 1, 14 ],
        size : new nhn.api.map.Size(500, 400)
    });
});