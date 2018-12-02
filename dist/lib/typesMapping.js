"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var typeGuards_1 = require("./typeGuards");
exports.typesMapping = {
    'Boolean': 'boolean',
    'String': 'string',
    'Int': 'number',
    'Float': 'number'
};
exports.graphqlToJSONType = function (k) {
    if (typeGuards_1.isIntrospectionListTypeRef(k)) {
        return {
            type: 'array',
            items: exports.graphqlToJSONType(k.ofType)
        };
    }
    else if (typeGuards_1.isNonNullIntrospectionType(k)) {
        return exports.graphqlToJSONType(k.ofType);
    }
    else {
        var name_1 = k.name;
        return lodash_1.includes(['OBJECT', 'INPUT_OBJECT', 'ENUM'], k.kind) ?
            { $ref: "#/definitions/" + name_1 } :
            { type: exports.typesMapping[name_1] };
    }
};
