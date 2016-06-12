(function () {

    var baseUrl = $("base").first().attr("href");
    
    var app = angular.module('store-products', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'A',
            templateUrl: baseUrl + 'views/product-title.html'
        };
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: baseUrl + 'views/product-description.html'
        };
    });

    app.directive('productSpecs', function () {
        return {
            restrict: 'E',
            templateUrl: baseUrl + 'views/product-specs.html'
        };
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: baseUrl + 'views/product-reviews.html'
        }
    });

    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: baseUrl + 'views/product-tabs.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (value) {
                    this.tab = value;
                };

                this.isSet = function (selectedTab) {
                    return this.tab === selectedTab;
                }
            },
            controllerAs: 'tabs'
        }
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: baseUrl + 'views/product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

})();