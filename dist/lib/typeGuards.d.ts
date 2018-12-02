import { IntrospectionEnumType, IntrospectionField, IntrospectionInputObjectType, IntrospectionInputValue, IntrospectionListTypeRef, IntrospectionNamedTypeRef, IntrospectionNonNullTypeRef, IntrospectionObjectType, IntrospectionType } from 'graphql';
export declare const isIntrospectionField: (type: IntrospectionField | IntrospectionInputValue) => type is IntrospectionField;
export declare const isIntrospectionInputValue: (type: IntrospectionField | IntrospectionInputValue) => type is IntrospectionInputValue;
export declare const isIntrospectionListTypeRef: (type: any) => type is IntrospectionListTypeRef<any>;
export declare const isIntrospectionObjectType: (type: IntrospectionType) => type is IntrospectionObjectType;
export declare const isIntrospectionInputObjectType: (type: IntrospectionType) => type is IntrospectionInputObjectType;
export declare const isIntrospectionEnumType: (type: IntrospectionType) => type is IntrospectionEnumType;
export declare const isNonNullIntrospectionType: (type: any) => type is IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef<IntrospectionType>>;
export interface FilterDefinitionsTypesOptions {
    ignoreInternals?: boolean;
}
export declare const filterDefinitionsTypes: (types: IntrospectionType[], opts?: FilterDefinitionsTypesOptions | undefined) => IntrospectionType[];
