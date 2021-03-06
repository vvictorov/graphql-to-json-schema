import { IntrospectionQuery } from 'graphql';
import { JSONSchema6 } from 'json-schema';
import { JSONSchema6Acc } from './reducer';
export interface GraphQLJSONSchema6 extends JSONSchema6 {
    properties: {
        Query: JSONSchema6Acc;
        Mutation: JSONSchema6Acc;
    };
    definitions: JSONSchema6Acc;
}
export interface FromIntrospectionQueryOptions {
    ignoreInternals?: boolean;
}
export declare const fromIntrospectionQuery: (introspection: IntrospectionQuery, opts?: FromIntrospectionQueryOptions | undefined) => JSONSchema6;
