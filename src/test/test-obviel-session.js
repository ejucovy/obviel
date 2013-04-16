/*global buster:false, sinon:false, obviel:false */
var assert = buster.assert;
var refute = buster.refute;

var sessionTestCase = buster.testCase("session tests:", {
    setUp: function() {
    },
    tearDown: function() {
    },
    "update action": function() {
        var session = new obviel.session.Session();

        var obj = {foo: "bar"};

        session.update(obj, "foo");

        var actions = session.getActions();

        assert.equals(actions.length, 1);

        var action = actions[0];

        assert.equals(action.name, "update");
        assert.same(action.session, session);
        assert.same(action.obj, obj);
        assert.equals(action.propertyName, "foo");
    },
    "multiple update action": function() {
        var session = new obviel.session.Session();

        var obj = {foo: "FOO", bar: "BAR"};

        session.update(obj, "foo");
        session.update(obj, "bar");

        var actions = session.getActions();

        assert.equals(actions.length, 2);

        var action = actions[0];

        assert.equals(action.name, "update");
        assert.same(action.session, session);
        assert.same(action.obj, obj);
        assert.equals(action.propertyName, "foo");

        action = actions[1];

        assert.equals(action.name, "update");
        assert.same(action.session, session);
        assert.same(action.obj, obj);
        assert.equals(action.propertyName, "bar");
    }
});