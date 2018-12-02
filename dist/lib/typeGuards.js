"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
exports.isIntrospectionField = function (type) {
    return lodash_1.has(type, 'args');
};
exports.isIntrospectionInputValue = function (type) {
    return lodash_1.has(type, 'defaultValue');
};
exports.isIntrospectionListTypeRef = function (type) { return (type.kind === 'LIST'); };
exports.isIntrospectionObjectType = function (type) { return (type.kind === 'OBJECT'); };
exports.isIntrospectionInputObjectType = function (type) { return (type.kind === 'INPUT_OBJECT'); };
exports.isIntrospectionEnumType = function (type) { return (type.kind === 'ENUM'); };
exports.isNonNullIntrospectionType = function (type) { return (type.kind === 'NON_NULL'); };
exports.filterDefinitionsTypes = function (types, opts) {
    var ignoreInternals = opts && opts.ignoreInternals;
    return lodash_1.filter(types, function (type) { return ((exports.isIntrospectionObjectType(type) && !!type.fields) ||
        (exports.isIntrospectionInputObjectType(type) && !!type.inputFields)
        || (exports.isIntrospectionEnumType(type))) &&
        (!ignoreInternals || (ignoreInternals && !lodash_1.startsWith(type.name, '__'))); });
};
