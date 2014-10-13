﻿(function () {
    'use strict';

    angular.module('app')
        .controller('homeController', ['$scope', HomeController]);

    function HomeController($scope) {
        var vm = this;

        vm.formSchema = {
            type: 'object',
            title: 'Basic Example',
            description: 'Example description for angular dynamic form',
            properties: {
                firstName: { type: 'string', title: 'First Name', description: 'Your first name', required: true },
                lastName: { type: 'string', title: 'Last Name', description: 'Your last name', required: true },
                email: { type: 'string', format: 'email', title: 'E-mail', description: 'Your email address', required: true }
            }
        };

        vm.formModel = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com'
        };
    }
}());