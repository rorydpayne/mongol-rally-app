blogUiModule.controller('BlogCtrl', ['$scope', '$http', '$sce', 'moment', function($scope, $http, $sce, moment) {

    var DISPLAY_FORMAT = 'Do MMMM YYYY';

    retrieveBlogSummaries();

    function retrieveBlogSummaries() {
        $http.get("/blogpost")
            .success(function(posts) {
                $scope.blogposts = posts.items; //todo sort
                $scope.activePost = $scope.blogposts[0]
            })
            .error(function(error) {
                //todo;
            })
    }

    $scope.selectPost = function(postId) {
        $scope.activePost = findPostById(postId);
    };

    function findPostById(postId) {
        for (var i = 0 ; i < $scope.blogposts.length ; i++) {
            if ($scope.blogposts[i].id == postId) {
                return $scope.blogposts[i];
            }
        }
        return null;
    }

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };

    $scope.getHtml = function() {
        if ($scope.activePost == null)
            return null;


        return $sce.trustAsHtml($scope.activePost.content.replaceAll("&quot;open sans&quot; , &quot;arial&quot; , sans-serif;", "Lato, Roboto, &quot;Helvetica Neue&quot;, sans-serif;"));
    };

    $scope.getActivePostDate = function() {
        if ($scope.activePost == null)
            return;
        var date = new Date($scope.activePost.published);
        return moment(date).format(DISPLAY_FORMAT);
    }




}]);