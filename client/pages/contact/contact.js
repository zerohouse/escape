app.controller('contact', function () {
    var oPoint = new nhn.api.map.LatLng(35.1359970, 129.1000470);
    nhn.api.map.setDefaultPoint('LatLng');
    var oMap = new nhn.api.map.Map('tmap', {
        point: oPoint,
        zoom: 10,
        enableWheelZoom: true,
        enableDragPan: true,
        enableDblClickZoom: false,
        mapMode: 0,
        activateTrafficMap: false,
        activateBicycleMap: false,
        minMaxLevel: [1, 14],
        size: new nhn.api.map.Size(500, 400)
    });
    var oSize = new nhn.api.map.Size(28, 37);
    var oOffset = new nhn.api.map.Size(14, 37);
    var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);
    var oMarker = new nhn.api.map.Marker(oIcon, {title: 'SIXTY ESCAPE'});
    oMarker.setPoint(oPoint);
    oMap.addOverlay(oMarker);

});