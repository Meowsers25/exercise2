angular.module('myApp').controller('MyController', MyController).controller('AboutController', AboutController);

function MyController () {
    var vm = this;
    vm.name = 'Chris'
}

function AboutController () {
    var vm = this;
    vm.about = 'This is my bio';
}