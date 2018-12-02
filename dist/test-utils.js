"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
exports.getTodoSchemaIntrospection = function () {
    var schema = graphql_1.buildSchema("\n        type Todo {\n            id: String!\n            name: String!\n            completed: Boolean\n        }\n\n        input TodoInputType {\n            name: String!\n            completed: Boolean\n        }\n\n        type Query {\n            todo(id: String!): Todo!\n            todos: [Todo!]!\n        }\n\n        type Mutation {\n            update_todo(id: String!, todo: TodoInputType!): Todo\n            create_todo(todo: TodoInputType!): Todo\n        }\n");
    var result = graphql_1.graphqlSync(schema, graphql_1.introspectionQuery);
    return {
        introspection: result.data,
        schema: schema
    };
};
exports.todoSchemaAsJsonSchema = {
    $schema: 'http://json-schema.org/draft-06/schema#',
    properties: {
        Query: {
            type: 'object',
            properties: {
                todo: {
                    type: 'object',
                    properties: {
                        arguments: {
                            type: 'object',
                            properties: {
                                id: { type: 'string' }
                            },
                            required: ['id']
                        },
                        "return": {
                            $ref: '#/definitions/Todo'
                        }
                    },
                    required: []
                },
                todos: {
                    type: 'object',
                    properties: {
                        arguments: {
                            type: 'object',
                            properties: {},
                            required: []
                        },
                        "return": {
                            type: 'array',
                            items: { $ref: '#/definitions/Todo' }
                        }
                    },
                    required: []
                }
            },
            required: []
        },
        Mutation: {
            type: 'object',
            properties: {
                update_todo: {
                    type: 'object',
                    properties: {
                        arguments: {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                todo: { $ref: '#/definitions/TodoInputType' }
                            },
                            required: ['id', 'todo']
                        },
                        "return": {
                            $ref: '#/definitions/Todo'
                        }
                    },
                    required: []
                },
                create_todo: {
                    type: 'object',
                    properties: {
                        arguments: {
                            type: 'object',
                            properties: {
                                todo: { $ref: '#/definitions/TodoInputType' }
                            },
                            required: ['todo']
                        },
                        "return": {
                            $ref: '#/definitions/Todo'
                        }
                    },
                    required: []
                }
            }
        }
    },
    definitions: {
        'Todo': {
            type: 'object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                completed: { type: 'boolean' }
            },
            required: ['id', 'name']
        },
        'TodoInputType': {
            type: 'object',
            properties: {
                name: { type: 'string' },
                completed: { type: 'boolean' }
            },
            required: ['name']
        }
    }
};
