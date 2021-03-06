'use strict';

(function () {
    'use strict';

    angular
        .module('core')
        .factory('IncomeService', Factory);

    Factory.$inject = ['$resource'];
    /** @ngInject */

    function Factory($resource) {

        var Income = $resource('/api/income/views', {}, {
            updateFodata: {
                method: "PUT",
                url: '/api/income/views/:information',
                params: {
                    information: "@id"
                }
            },
            saveInformation: {
                method: "POST",
                url: "/api/income/views",
            },
            deleteInformation: {
                method: "DELETE",
                url: '/api/income/views/:information',
                params: {
                    information: "@id"
                }

            },
            getFigetinforndByid: {
                method: 'GET',
                url: '/api/income/views/:information'
            },
            viewsInformation: {
                method: "GET",
                url:'/api/income/views',
                isArray: true
        
            }
        });
        angular.extend(Income, {
            saveInfor: function (information) {
                return this.saveInformation(information).$promise

            },
            viewsInfor: function () {
                return this;
            },
            delete: function (infor) {
                return this.deleteInformation({
                    information: infor
                }).$promise;
            },
            updateInfor: function (updateFodata) {

                return this.updateFodata({information: updateFodata._id },updateFodata).$promise;
            },
            getinfor: function (id) {
                return this.getFigetinforndByid({information:id}).$promise;
                
            }

        })


        return Income



    }

}());