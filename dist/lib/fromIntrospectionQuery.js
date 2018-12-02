"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var reducer_1 = require("./reducer");
var typeGuards_1 = require("./typeGuards");
exports.fromIntrospectionQuery = function (introspection, opts) {
    var options = opts || { ignoreInternals: true };
    var _a = introspection.__schema, queryType = _a.queryType, mutationType = _a.mutationType;
    var propertiesTypes = [queryType ? queryType.name : 'Query', mutationType ? mutationType.name : 'Mutation'];
    var _b = lodash_1.partition(introspection.__schema.types, function (type) { return typeGuards_1.isIntrospectionObjectType(type) && lodash_1.includes(propertiesTypes, type.name); }), properties = _b[0], definitions = _b[1];
    return {
        $schema: 'http://json-schema.org/draft-06/schema#',
        properties: lodash_1.reduce(properties, reducer_1.introspectionTypeReducer('properties'), {}),
        definitions: lodash_1.reduce(typeGuards_1.filterDefinitionsTypes(definitions, options), reducer_1.introspectionTypeReducer('definitions'), {})
    };
};
