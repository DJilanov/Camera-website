angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.templates = {
    	'camera': './templates/camera.html',
    	'carousel': './templates/carousel.html',
    	'head': './templates/head.html',
    	'navigation': './templates/navigation.html',
    	'productTemplate': './templates/productTemplate.html',
    };
});