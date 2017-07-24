describe('greet module', function () {

    beforeEach(module('myApp.greet'));


    describe('greet controller ', function () {

        it('should create the instance of greet controller', inject(function ($controller) {

            var scope = {};
            var controller = $controller('greetController', { $scope: scope });
            expect(controller).toBeDefined();

        }));

        it('should create the name and set it to empty string ', inject(function ($controller) {

            var scope = {};
            var controller = $controller('greetController', { $scope: scope });
            expect(controller).toBeDefined();
            expect(scope.name).toBeDefined();
            expect(scope.name).toBe('');

        }));

        it('should create the greetMsg and set it to empty string ', inject(function ($controller) {

            var scope = {};
            var controller = $controller('greetController', { $scope: scope });
            expect(controller).toBeDefined();
            expect(scope.greetMsg).toBeDefined();
            expect(scope.greetMsg).toBe('');

        }));

        it('should update the greetMsg when greet is called', inject(function ($controller) {

            var scope = {};
            var controller = $controller('greetController', { $scope: scope });
            expect(controller).toBeDefined();
            scope.name = 'Jhon';
            scope.salutation = 'Mr';
            scope.greet();
            expect(scope.greetMsg).toBe('Hi Mr. Jhon, Have  a nice day!');

        }));

    })

    describe('trim text filter should', function () {

        it('trim text if text length is greater than 20 characters', inject(function ($filter) {

            var trimTextFilter = $filter('trimText');

            var content = 'hi how are you doing , have a nice day!';
            var expected = 'hi how are you doing...';

            var result = trimTextFilter(content);

            expect(result).toBe(expected);

        }));

        it('not trim text if text length is less than 20 characters', inject(function ($filter) {

            var trimTextFilter = $filter('trimText');

            var content = 'hi how are you !';
            var expected = 'hi how are you !';

            var result = trimTextFilter(content);

            expect(result).toBe(expected);

        }));

    });
});