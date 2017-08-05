var rewire = require('rewire');

var assert = require('assert');

var app = rewire('../dev/GaMobileConnectionType.js');

let ga = new gaMobileConnectivity();

describe('#getConnectionName', function() {


    it('should return H+', function() {
        
        let name  = ga.getConnectionName('cellular',42);

        assert.equal(name,"H+");

    });


    it('should return 4G', function() {
        
        var name  = ga.getConnectionName('cellular',100);

        assert.equal(name,"4G");

    });


    it('should return 3G', function() {
        
        var name  = ga.getConnectionName('cellular',14.7);

        assert.equal(name,"3G");

    });


   
    it('should return 3G', function() {
        
        var name  = ga.getConnectionName('cellular',14.3);

        assert.equal(name,"3G");

    });



    it('should return 3G', function() {
        
        var name  = ga.getConnectionName('cellular',14.4);

        assert.equal(name,"3G");

    });


    it('should return 3G', function() {
        
        var name  = ga.getConnectionName('cellular',21);

        assert.equal(name,"3G");

    });


    it('should return 2G', function() {
        
        var name  = ga.getConnectionName('cellular',3.6);

        assert.equal(name,"2G");

    });


    it('should return 2G', function() {
        
        var name  = ga.getConnectionName('cellular',3.1);

        assert.equal(name,"2G");

    });


    it('should return 2G', function() {
        
        var name  = ga.getConnectionName('cellular',2.46);

        assert.equal(name,"2G");

    });


     it('should return E' , function() {
        
        var name  = ga.getConnectionName('cellular',2);

        assert.equal(name,"E");

    });


     it('should return E' , function() {
        
        var name  = ga.getConnectionName('cellular',0.01);

        assert.equal(name,"E");

    });


    it('should return SLOW' , function() {
        
        var name  = ga.getConnectionName('wifi',11);

        assert.equal(name,"SLOW");

    });


    it('should return g' , function() {
        
        var name  = ga.getConnectionName('wifi',54);

        assert.equal(name,"G");

    });


    it('should return n' , function() {
        
        var name  = ga.getConnectionName('wifi',600);

        assert.equal(name,"N");

    });


    it('should return ac' , function() {
        
        var name  = ga.getConnectionName('wifi',6933);

        assert.equal(name,"AC");

    });



    it('should return ac' , function() {
        
        var name  = ga.getConnectionName('wifi',7000);

        assert.equal(name,"AD");

    });


    it('should return false', function() {
        
        var name  = ga.getConnectionName('ssdsdsd',021);

        assert.equal(name,false);

    });


    it('should return false', function() {
        
        var name  = ga.getConnectionName('ssdsdsd',undefined);

        assert.equal(name,false);

    });

});
  
