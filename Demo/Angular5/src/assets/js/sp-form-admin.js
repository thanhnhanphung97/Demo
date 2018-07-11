var app = angular.module("myApp", []);
app.service('myService', function ($http) {
    this.getIntroduces = function () {
        debugger;
        return $http.get("HomeAdmin/GetAllIntro");
    };

    //Add introduce
    this.AddIntro = function (introduce) {
        var response = $http({
            method: "POST",
            url: "HomeAdmin/AddIntroduce",
            data: JSON.stringify(introduce),
            dataType: "json"
        });
        return response;
    }

    //// get introduce By Id
    //this.getIntro = function (introduceID) {
    //    var response = $http({
    //        method: "POST",
    //        url: "HomeAdmin/getIntroduceByNo",
    //        params: {
    //            id: JSON.stringify(introduceID)
    //        }
    //    });
    //    return response;
    //}

    //// Update introduce
    //this.updateIntro = function (introduce) {
    //    var response = $http({
    //        method: "POST",
    //        url: "HomeAdmin/UpdateIntroduce",
    //        data: JSON.stringify(introduce),
    //        dataType: "JSON"
    //    });
    //    return response;
    //}

    ////Delete introduce
    //this.DeleteIntro = function (introduceID) {
    //    var response = $http({
    //        method: "POST",
    //        url: "HomeAdmin/DeleteIntroduce",
    //        params: {
    //            employeeId: JSON.stringify(introduceID)
    //        }
    //    })
    //    return response;
    //}
})

app.controller('myIntroCntrl', function ($scope, myService) {
    $scope.divIntroduce = false;
    GetAllIntroduce();
    function GetAllIntroduce() {
        debugger;
        var getData = myService.getIntroduces();
        debugger;
        getData.then(function (intro) {
            $scope.introduces = intro.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    //$scope.editIntroduce = function (introduce) {
    //    debugger;
    //    var getData = myService.getIntro(introduce.Id);
    //    getData.then(function (intro) {
    //        $scope.introduce = intro.data;
    //        //$scope.Id = introduce.Id;
    //        $scope._Name = introduce.Name;
    //        $scope._Img = introduce.Img;
    //        $scope._Data = introduce.Data;
    //        $scope._Describe = introduce.Describe;
    //        $scope._Color = introduce.Color;
    //        $scope.Action = "Update";
    //        $scope.divIntroduce = true;
    //    },
    //        function () {
    //            alert('Error in getting records');
    //        });
    //}

    $scope.AddUpdateIntroduce = function ()
    {
        //debugger;
        alert('check');
        var Introduce = {
            Name: $scope._Name,
            Img: $scope._Img,
            Data: $scope._Data,
            Describe: $scope._Describe,
            Color: $scope._Color
        };
        var getAction = $scope.Action;

        if (getAction=="Update")
        {
            //Introduce.Id = $scope.Id;
            //var getData = myService.updateIntro(Introduce);
            //getData.then(function (msg) {
            //    GetAllIntroduce();
            //    alert(msg.data);
            //    $scope.divIntroduce = false;
            //}, function () {
            //    alert('Error in updating record');
            //});
            alert('Update');
        }
        else
        {
            //var _getData = myService.AddIntro(Introduce);
            //_getData.then(function (msg) {
            //    GetAllIntro();
            //    alert(msg.data);
            //    $scope.divIntroduce = false;
            //    alert('Error ');
            //}, function () {
            //    alert('Error in adding record');
            //});
            alert('Add');
        }
    }

    //$scope.deleteIntroduce = function (introduce) {
    //    var getData = myService.DeleteIntro(introduce.Id);
    //    getData.then(function (msg) {
    //        GetAllIntro();
    //        alert('Introduce Deleted');
    //    }, function () {
    //        alert('Error in Deleting Record');
    //    });
    //};

    $scope.AddIntroduceDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divIntroduce = true;
    }

    function ClearFields() {
        $scope.Name = "";
        $scope.Img = "";
        $scope.Data = "";
        $scope.Describe = "";
        $scope.Color = "";
    }

});

