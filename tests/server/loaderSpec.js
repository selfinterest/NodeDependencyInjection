/**
 * Created by: Terrence C. Watson
 * Date: 6/30/14
 * Time: 5:16 PM
 */
describe("Loader class", function(){
    var loader, injector, Provider, mockRouter = {};
    beforeEach(function(){
        loader = require("../../src/loader.js");
        injector = require("../../src/injector.js");
        Provider = require("../../src/provider.js");
    });

    it("should exist", function(){
        expect(loader).toBeDefined();
    });

    it("should have an initialization method", function(){
       expect(typeof loader.initialize).toBe("function");
    });

    it("should have a method for loading modules", function(){
        expect(typeof loader.loadModule).toBe("function");
    });


    it("initialization method should throw an error if no modules are loaded", function(){
       expect(function(){
           loader.initialize();
       }).toThrow();
       //expect(returnedValue).toBeDefined();       //it hasn't really done anything, but it can be initialized with no dependencies
       //expect(returnedValue instanceof Provider.constructor).toBe(true);
    });

    it("initialization method should return the array of modules if modules are loaded", function(){
        var result = loader
            .loadModule("TestModule", function(){})
            .loadModule("TestModule2", function(){})
            .initialize();

    })

    /*it("should be able to use dependency injection", function(){
       function testDependency(){
           return "test";
       }

       function anotherTestDependency(){
           return "test2";
       }
        loader
            .loadModule("testDependency1", testDependency)
            .loadModule("testDependency2", anotherTestDependency);

        var returnedValue = loader.initialize();
        expect(returnedValue).toBe("test");

    });*/

    /*it("should be configurable through an options object", function(){

        Loader.initialize({resourcePath: "/terrence"}, mockRouter);
        expect(Loader.resources.getPath()).toBe("/terrence");
    })*/


    /*it("should be a constructor", function(){
        var loader = new Loader();
        expect(loader instanceof Loader).toBe(true);
    });

    describe("Loader instance", function(){
       var loader, mockRequest;
       beforeEach(function(){
           loader = Loader();
           //create a mock object to be used to test the module's ability to handle requests
           mockRequest = {
               req: {},
               res: {
                   send: function(response){
                       console.log(response);
                       //expect(response).toEqual({ok: true});
                   }
               },
               next: function(){
                   console.log("NEXT CALLED");
               }
           };
       });

        it("should have default options", function(){
            expect(loader.options).toBeDefined();
            expect(loader.options.url).toBe("/angular");
        });

        it("should be able to handle requests", function(){
            expect(typeof loader.requestHandler).toBe("function");
        });

        it("should be able to handle requests that do not match the url", function(){
            mockRequest.req.url = "/blah";
            mockRequest.req.method = "GET";
            spyOn(mockRequest, "next");
            spyOn(mockRequest.res, "send");
            loader.requestHandler()(mockRequest.req, mockRequest.res, mockRequest.next);
            expect(mockRequest.next).toHaveBeenCalled();
            expect(mockRequest.res.send).not.toHaveBeenCalled();
        });

        it("should be able to handle requests that do not match the method", function(){
            mockRequest.req.url = "/angular";
            mockRequest.req.method = "PUT";
            spyOn(mockRequest, "next");
            spyOn(mockRequest.res, "send");
            spyOn(loader, "incomingUrlMatches");
            loader.requestHandler()(mockRequest.req, mockRequest.res, mockRequest.next);
            expect(mockRequest.next).toHaveBeenCalled();
            expect(mockRequest.res.send).not.toHaveBeenCalled();
            expect(loader.incomingUrlMatches).toHaveBeenCalled();
        });


        it("should be able to handle requests that do match the url and method", function(){

            mockRequest.req.url = "/angular";
            mockRequest.req.method = "GET";
            mockRequest.res.send = function(response){
                console.log("SEND CALLED");
                expect(response).toEqual({ok: true});
            }


            spyOn(mockRequest, "next").andCallThrough();

            spyOn(mockRequest.res, "send").andCallFake(function(response){
               expect(response).toEqual({ok: true});
            });

            //You MUST spy on both methods in order to keep "this" properly bound.
            spyOn(loader, "incomingUrlMatches").andCallThrough();
            spyOn(loader, "incomingMethodMatches").andCallThrough();

            loader.requestHandler()(mockRequest.req, mockRequest.res, mockRequest.next);
            expect(mockRequest.next).not.toHaveBeenCalled();
            expect(mockRequest.res.send).toHaveBeenCalled();
            expect(loader.incomingUrlMatches).toHaveBeenCalledWith("/angular");
            expect(loader.incomingMethodMatches).toHaveBeenCalledWith("GET");
        });

        it("should have a method for determining if a request url matches", function(){
           expect(typeof loader.incomingUrlMatches).toBe("function");
           expect(loader.incomingUrlMatches("/angular")).toBe(true);
        });

        it("should have a method for determining if request method matches", function(){
            expect(typeof loader.incomingMethodMatches).toBe("function");
            expect(loader.incomingMethodMatches("get")).toBe(true);
        });

        it("should have a method for determining if a request should be processed", function(){
            mockRequest.req.url = "/angular";
            mockRequest.req.method = "get";
            expect(typeof loader.requestShouldBeProcessed).toBe("function");

            expect(loader.requestShouldBeProcessed(mockRequest.req)).toBe(true);

        })
    });*/


});