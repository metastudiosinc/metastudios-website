#!/bin/env node

var express = require('express');
var fs = require('fs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./source/Components/Application.react.js');

//local host only example
var ip_addr = '127.0.0.1';
var port = '3000';

var server = function() {

  //  Scope.
  var self = this;


  self.setupVariables = function() {
    //  Set the environment variables we need.
    self.ipaddress = ip_addr || '127.0.0.1';
    self.port = port || 8080;

    if (typeof self.ipaddress === "undefined") {
      console.warn('No IP var, using 127.0.0.1');
      self.ipaddress = "127.0.0.1";
    }
  };


  /**
   *  Populate the cache.
   */
  self.populateCache = function() {
    if (typeof self.zcache === "undefined") {
      self.zcache = {
        'index.ejs': ''
      };
    }

    //  Local cache for static content.
    self.zcache['index.ejs'] = fs.readFileSync('./views/index.ejs');
  };


  /**
   *  Retrieve entry (content) from cache.
   *  @param {string} key  Key identifying content to retrieve from cache.
   */
  self.cache_get = function(key) {
    return self.zcache[key];
  };




  /**
   *  terminator === the termination handler
   *  Terminate server on receipt of the specified signal.
   *  @param {string} sig  Signal to terminate on.
   */
  self.terminator = function(sig) {
    if (typeof sig === "string") {
      console.log('%s: Received %s - terminating sample app ...',
        Date(Date.now()), sig);
      process.exit(1);
    }
    console.log('%s: Node server stopped.', Date(Date.now()));
  };


  /**
   *  Setup termination handlers (for exit and a list of signals).
   */
  self.setupTerminationHandlers = function() {
    //  Process on exit and signals.
    process.on('exit', function() {
      self.terminator();
    });

    // Removed 'SIGPIPE' from the list - bugz 852598.
    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
      'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ].forEach(function(element, index, array) {
      process.on(element, function() {
        self.terminator(element);
      });
    });
  };


  /*  ================================================================  */
  /*  App server functions (main app logic here).                       */
  /*  ================================================================  */

  /**
   *  Create the routing table entries + handlers for the application.
   */
  self.createRoutes = function() {
    self.routes = {};

    self.routes['/'] = function(req, res) {
      console.log("Fetching isomorphic index page.")
      var reactHtml = ReactDOMServer.renderToString(<App />);
      res.render('index.ejs', {reactOutput: reactHtml});
    };



  };


  /**
   *  Initialize the server (express) and create the routes and register
   *  the handlers.
   */
  self.initializeServer = function() {
    self.createRoutes();
    self.app = express();
    self.app.use(express.static('public'));
    self.app.use('/', express.static(__dirname + '/build'));
    self.app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));

    self.app.set('view engine', 'ejs');

    //  Add handlers for the app (from the routes).
    for (var r in self.routes) {
      self.app.get(r, self.routes[r]);
    }
  };


  /**
   *  Initializes the sample application.
   */
  self.initialize = function() {
    self.setupVariables();
    self.populateCache();
    self.setupTerminationHandlers();

    // Create the express server and routes.
    self.initializeServer();
  };


  /**
   *  Start the server (starts up the sample application).
   */
  self.start = function() {
    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, self.ipaddress, function() {
      console.log('%s: Node server started on %s:%d ...',
        Date(Date.now()), self.ipaddress, self.port);
    });
  };

}; /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var app = new server();
app.initialize();
app.start();
