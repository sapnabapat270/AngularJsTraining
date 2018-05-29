weatherApp.service('cityService',function () {
    this.city="New York,NY";
});


weatherApp.service('weatherService',['$resource',function ($resource) {

    this.GetWeather=function (city,days) {
        var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=91c2e7a69c6c50c6ca835ed2f1b61ca6", {
            callback: "JSON_CALLBACK"
        }, {get: {method: "JSONP"}});

        return weatherApi.get({q: "London,us", cnt: days});
    }
}]);


