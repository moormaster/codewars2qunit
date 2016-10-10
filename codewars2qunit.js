var Codewars2QUnit = function() {
	this.assert = null;
	this.fnBeforeEach = function() {};
};

Codewars2QUnit.prototype.assertEquals = function(actual, expected, msg) {
	this.assert.equal(actual, expected, msg);
};

Codewars2QUnit.prototype.assertNotEquals = function(actual, expected, msg) {
	this.assert.notEqual(actual, expected, msg);
};

Codewars2QUnit.prototype.assertSimilar = function(actual, expected, msg) {
	this.assert.strictEqual(actual, expected, msg);
};

Codewars2QUnit.prototype.assertNotSimilar = function(actual, expected, msg) {
	this.assert.notStrictEqual(actual, expected, msg);
};

Codewars2QUnit.prototype.expectError = function(actual, expected, msg) {
}

Codewars2QUnit.prototype.expectNoError = function(actual, expected, msg) {
};

Codewars2QUnit.prototype.before = function(fn) {
	this.fnBeforeEach = fn;
};

Codewars2QUnit.prototype.describe = function(msg, fn) {
	QUnit.module(msg, {beforeEach: this.fnBeforeEach});

	fn.call(this);
};

Codewars2QUnit.prototype.it = function(msg, fn) {
	var testInstance = this;
	QUnit.test(msg, function(assert) {
		testInstance.assert = assert;

		fn.call(testInstance);
	});
};

var Test = new Codewars2QUnit();
