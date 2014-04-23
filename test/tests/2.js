var assert = require('assert');

describe("ConcoctJS - Content Loader options test", function() {

    describe('strict mode active', function() {

        describe('missing contentField', function() {

            var Concoction = require('concoct'),
                options = {
                    templates: './test/templates/1.tpl',
                    contexts: './test/contexts/1.json',
                    dest: './test/output',
                    linkingRules: {
                        './test/contexts/1.json': './test/templates/1.tpl'
                    },
                    plugins: [{
                        name: 'concoct-content-loader',
                        handler: require('../../'),
                        params: {
                            srcField: 'file',
                            strict: true
                        }
                    }]
                };

            it('should have an error', function(done) {

                var c = new Concoction(options);
                c.concoct(function(err) {

                    assert( !! err);
                    done();

                });

            });


        });

        describe('missing srcField', function() {

            var Concoction = require('concoct'),
                options = {
                    templates: './test/templates/1.tpl',
                    contexts: './test/contexts/1.json',
                    dest: './test/output',
                    linkingRules: {
                        './test/contexts/1.json': './test/templates/1.tpl'
                    },
                    plugins: [{
                        name: 'concoct-content-loader',
                        handler: require('../../'),
                        params: {
                            contentField: 'content',
                            strict: true
                        }
                    }]
                };

            it('should have an error', function(done) {

                var c = new Concoction(options);
                c.concoct(function(err) {

                    assert( !! err);
                    done();

                });

            });


        });

        describe('missing srcField and contentField', function() {

            var Concoction = require('concoct'),
                options = {
                    templates: './test/templates/1.tpl',
                    contexts: './test/contexts/1.json',
                    dest: './test/output',
                    linkingRules: {
                        './test/contexts/1.json': './test/templates/1.tpl'
                    },
                    plugins: [{
                        name: 'concoct-content-loader',
                        handler: require('../../'),
                        params: {
                            strict: true
                        }
                    }]
                };

            it('should have an error', function(done) {

                var c = new Concoction(options);
                c.concoct(function(err) {

                    assert( !! err);
                    done();

                });

            });


        });

    });

    describe('strict mode disabled', function() {

        describe('missing contentField', function() {

            var Concoction = require('concoct'),
                options = {
                    templates: './test/templates/1.tpl',
                    contexts: './test/contexts/1.json',
                    dest: './test/output',
                    linkingRules: {
                        './test/contexts/1.json': './test/templates/1.tpl'
                    },
                    plugins: [{
                        name: 'concoct-content-loader',
                        handler: require('../../'),
                        params: {
                            srcField: 'file',
                            strict: false
                        }
                    }]
                };

            it('should have an error', function(done) {

                var c = new Concoction(options);
                c.concoct(function(err) {

                    assert( !! err);
                    done();

                });

            });


        });

        describe('missing srcField', function() {

            var Concoction = require('concoct'),
                options = {
                    templates: './test/templates/1.tpl',
                    contexts: './test/contexts/1.json',
                    dest: './test/output',
                    linkingRules: {
                        './test/contexts/1.json': './test/templates/1.tpl'
                    },
                    plugins: [{
                        name: 'concoct-content-loader',
                        handler: require('../../'),
                        params: {
                            contentField: 'content',
                            strict: false
                        }
                    }]
                };

            it('should have an error', function(done) {

                var c = new Concoction(options);
                c.concoct(function(err) {

                    assert( !! err);
                    done();

                });

            });


        });

        describe('missing srcField and contentField', function() {

            var Concoction = require('concoct'),
                options = {
                    templates: './test/templates/1.tpl',
                    contexts: './test/contexts/1.json',
                    dest: './test/output',
                    linkingRules: {
                        './test/contexts/1.json': './test/templates/1.tpl'
                    },
                    plugins: [{
                        name: 'concoct-content-loader',
                        handler: require('../../'),
                        params: {
                            strict: false
                        }
                    }]
                };

            it('should not have an error', function(done) {

                var c = new Concoction(options);
                c.concoct(function(err) {

                    assert(!err);
                    done();

                });

            });


        });

    });

});