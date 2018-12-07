"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var typeGuards_1 = require("./typeGuards");
var typesMapping_1 = require("./typesMapping");
exports.getRequiredFields = function (fields) { return lodash_1.map(lodash_1.filter(fields, function (f) { return typeGuards_1.isNonNullIntrospectionType(f.type) && !typeGuards_1.isIntrospectionListTypeRef(f.type.ofType); }), function (f) { return f.name; }); };
exports.propertiesIntrospectionFieldReducer = function (acc, curr) {
    if (typeGuards_1.isIntrospectionField(curr)) {
        var returnType = typeGuards_1.isNonNullIntrospectionType(curr.type) ?
          {...typesMapping_1.graphqlToJSONType(curr.type.ofType), description: curr.description} :
          {...typesMapping_1.graphqlToJSONType(curr.type), description: curr.description};
        acc[curr.name] = {
            type: 'object',
            properties: {
                'return': returnType,
                'arguments': {
                    type: 'object',
                    properties: lodash_1.reduce(curr.args, exports.propertiesIntrospectionFieldReducer, {}),
                    required: exports.getRequiredFields(curr.args)
                }
            },
            required: []
        };
    }
    else if (typeGuards_1.isIntrospectionInputValue(curr)) {
        var returnType = typeGuards_1.isNonNullIntrospectionType(curr.type) ?
          {...typesMapping_1.graphqlToJSONType(curr.type.ofType), description: curr.description} :
          {...typesMapping_1.graphqlToJSONType(curr.type), description: curr.description};
        acc[curr.name] = returnType;
    }
    return acc;
};
exports.definitionsIntrospectionFieldReducer = function (acc, curr) {
    if (typeGuards_1.isIntrospectionField(curr)) {
        var returnType = typeGuards_1.isNonNullIntrospectionType(curr.type) ?
          {...typesMapping_1.graphqlToJSONType(curr.type.ofType), description: curr.description} :
          {...typesMapping_1.graphqlToJSONType(curr.type), description: curr.description};
        acc[curr.name] = returnType;
    }
    else if (typeGuards_1.isIntrospectionInputValue(curr)) {
        var returnType = typeGuards_1.isNonNullIntrospectionType(curr.type) ?
          {...typesMapping_1.graphqlToJSONType(curr.type.ofType), description: curr.description} :
          {...typesMapping_1.graphqlToJSONType(curr.type), description: curr.description};
        acc[curr.name] = returnType;
    }
    return acc;
};
exports.introspectionTypeReducer = function (type) { return function (acc, curr) {
    var fieldReducer = type === 'definitions' ?
        exports.definitionsIntrospectionFieldReducer :
        exports.propertiesIntrospectionFieldReducer;
    if (typeGuards_1.isIntrospectionObjectType(curr)) {
        acc[curr.name] = {
            type: 'object',
            description: curr.description,
            properties: lodash_1.reduce(curr.fields, fieldReducer, {}),
            required: type === 'definitions' ? exports.getRequiredFields(curr.fields) : []
        };
    }
    else if (typeGuards_1.isIntrospectionInputObjectType(curr)) {
        acc[curr.name] = {
            type: 'object',
            description: curr.description,
            properties: lodash_1.reduce(curr.inputFields, fieldReducer, {}),
            required: exports.getRequiredFields(curr.inputFields)
        };
    } else if (typeGuards_1.isIntrospectionEnumType(curr)) {
      acc[curr.name] = {
        type: 'string',
        description: curr.description,
        enum: curr.enumValues.map(item => item.name),
        enumNames: curr.enumValues.map(item => item.description),
        properties: lodash_1.reduce(curr.fields, fieldReducer, {}),
        required: type === 'definitions' ? exports.getRequiredFields(curr.fields) : []
      };
    }
    return acc;
}; };
