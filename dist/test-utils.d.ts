import { GraphQLSchema, IntrospectionQuery } from 'graphql';
import { JSONSchema6 } from 'json-schema';
export declare const getTodoSchemaIntrospection: () => {
    schema: GraphQLSchema;
    introspection: IntrospectionQuery;
};
export declare const todoSchemaAsJsonSchema: JSONSchema6;
