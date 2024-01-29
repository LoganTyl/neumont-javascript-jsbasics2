let app = angular.module('mainApp', ['ngRoute']);
app.config($routeProvider => {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/template1.html',
            controller: 'beginningController'
        })

        .when('/page2', {
            templateUrl: "pages/template1.html",
            controller: "page2Controller"
        })

        .when('/page3', {
            templateUrl: "pages/template3.html",
            controller: "page3Controller"
        })

        .when('/page4', {
            templateUrl: "pages/template2.html",
            controller: "page4Controller"
        })

        .when('/page5', {
            templateUrl: "pages/template1.html",
            controller: "page5Controller"
        })

        .when('/page6', {
            templateUrl: "pages/template2.html",
            controller: "page6Controller"
        })

        .when('/page7', {
            templateUrl: "pages/template1.html",
            controller: "endpointController"
        })
});

app.controller('beginningController', function($scope){
    $scope.heading = "How To Create Brownies From Scratch";
    $scope.instructions = 
    `
    This step by step guide will teach you how to create some brownies from scratch.
    You will need:
    -1/2 cup of butter
    -1 cup of white sugar
    -2 eggs
    -1 teaspoon of vanilla extract
    -1/3 cup of unsweetened cocoa powder
    -1/2 cup of all-purpose flour
    -1/4 teaspoon of salt
    /1-4 teaspoon of baking powder

    With that, let's get baking!
    `;
    $scope.picture1 = "images/brownie_ingredients.png";
});

app.controller('page2Controller', function($scope){
    $scope.heading = "The Preparation";
    $scope.instructions = "First, start warming up your oven to 350℉. While that's happening, grease up and flour your pan. "+
    "Although the recommended size is 8 in. by 8 in., I will be using a slightly larger pan.";
    $scope.picture1 = "images/floured_pan.png";
});

app.controller('page3Controller', function($scope){
    $scope.heading = "Mix Everything Together";
    $scope.instructions = "Take the butter and begin to melt it on a saucepan. Once it's melted, stir in the eggs, sugar, and vanilla. " + 
    "Once they're mixed up, add the cocoa, salt, flour, and baking powder.";
    $scope.picture1 = "images/brownie_mix_1.png";
    $scope.picture2 = "images/brownie_mix_2.png";
    $scope.picture3 = "images/brownie_mix_done.png";
});

app.controller('page4Controller', function($scope){
    $scope.heading = "Put It In The Oven";
    $scope.instructions = "Spread the now-mixed batter into the pan from before. Once the oven is at the desired temperature, put the pan in for 25-30 minutes.";
    $scope.picture1 = "images/in_pan.png";
    $scope.picture2 = "images/in_oven.png";
});

app.controller('page5Controller', function($scope){
    $scope.heading = "Why Not Add Some Frosting?";
    $scope.instructions = `
    Why not add just the brownies? Frosting would go well with them too!
    For the frosting, you will need:
    -3 tablespoons of melted butter
    -3 tablespoons of unsweetened cocoa powder
    -1 tablespoon of honey
    -1 teaspoon of vanilla extract
    -1 cup of granulated/confectioners' sugar
    `;
    $scope.picture1 = "images/frosting_ingredients.png";
});

app.controller('page6Controller', function($scope){
    $scope.heading = "Making the Frosting";
    $scope.instructions = "Once the butter is done melting, add it, the cocoa, honey, vanilla extract, and confectioners' sugar to a bowl. Mix it until it has a smooth texture.";
    $scope.picture1 = "images/frosting_mix.png";
    $scope.picture2 = "images/frosting_done.png";
});

app.controller('endpointController', function($scope){
    $scope.heading = "The Final Steps";
    $scope.instructions = "Once the brownies are done in the oven, take them out and let them cool before eating them. Make sure to add the frosting while the brownies are still warm.";
    $scope.picture1 = "images/happy.png";
});

app.controller('pageController', function($scope){
    $scope.start = true;
    $scope.end = false;
    $scope.pageNum = 1;
    $scope.link = "/"
    $scope.nextPage = function(){
        $scope.pageNum++;
        $scope.link = "#!page" + $scope.pageNum;
        if($scope.pageNum == 7){
            $scope.end = true;
        }
        else{
            $scope.end = false;
        }
        $scope.start = false;
        window.location.href = $scope.link; 
    }
    $scope.prevPage = function(){
        $scope.pageNum--;
        if($scope.pageNum == 1){
            $scope.link = "#!/";
        }
        else{
            $scope.link = "#!page" + $scope.pageNum;
        }
        if($scope.pageNum == 1){
            $scope.start = true;
        }
        else{
            $scope.start = false;
        }
        $scope.end = false;
        window.location.href = $scope.link; 
    }
});

app.controller('sideNavController', function($scope){
    $scope.sideNav = [
        {
            link: "/",
            title: "Brownie Ingredients",
            index: 0
        },{
            link: "/page2",
            title: "Preparation",
            index: 1
        },{
            link: "/page3",
            title: "Creating the Batter",
            index: 2
        },{
            link: "/page4",
            title: "Finishing the Brownies",
            index: 3
        },{
            link: "/page5",
            title: "Frosting Ingredients",
            index: 4
        },{
            link: "/page6",
            title: "Making the Frosting",
            index: 5
        },{
            link: "/page7",
            title: "Final Steps",
            index: 6
        }
    ];
});