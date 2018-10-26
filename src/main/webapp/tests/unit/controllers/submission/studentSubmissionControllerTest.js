describe('controller: StudentSubmissionController', function () {

    var controller, scope;

    beforeEach(function() {
        module('core');
        module('vireo');
        module('mock.managedConfigurationRepo');
        module('mock.modalService');
        module('mock.restApi');
        module('mock.storageService');
        module('mock.studentSubmission');
        module('mock.studentSubmissionRepo');
        module('mock.wsApi');

        inject(function ($anchorScroll, $controller, $location, $rootScope, $routeParams, $timeout, $window, _ManagedConfigurationRepo_, _ModalService_, _RestApi_, _StorageService_, _StudentSubmission_, _StudentSubmissionRepo_, _WsApi_) {
            installPromiseMatchers();
            scope = $rootScope.$new();

            controller = $controller('StudentSubmissionController', {
                $anchorScroll: $anchorScroll,
                $location: $location,
                $routeParams: $routeParams,
                $scope: scope,
                $timeout: $timeout,
                $window: $window,
                ManagedConfigurationRepo: _ManagedConfigurationRepo_,
                ModalService: _ModalService_,
                RestApi: _RestApi_,
                StorageService: _StorageService_,
                StudentSubmission: _StudentSubmission_,
                StudentSubmissionRepo: _StudentSubmissionRepo_,
                WsApi: _WsApi_
            });

            // ensure that the isReady() is called.
            scope.$digest();
        });
    });

    describe('Is the controller defined', function () {
        it('should be defined', function () {
            expect(controller).toBeDefined();
        });
    });

});
