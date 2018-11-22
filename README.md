# error
```c++
yarn dev                                                                                                    (master✱)
yarn run v1.3.2
(node:84137) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd src && nodemon --exec ts-node index.ts -e ts, graphql
[nodemon] 1.18.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `ts-node index.ts graphql`

/Users/Hyungook/workspace/nuber-clone/node_modules/ts-node/src/index.ts:261
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
schema.ts(8,32): error TS2345: Argument of type 'GraphQLSchema[]' is not assignable to parameter of type '(string | Source | DocumentNode)[]'.
  Type 'GraphQLSchema' is not assignable to type 'string | Source | DocumentNode'.
    Type 'GraphQLSchema' is not assignable to type 'DocumentNode'.
      Property 'kind' is missing in type 'GraphQLSchema'.
schema.ts(10,37): error TS2345: Argument of type '{ typeDefs: string; resolvers: string; }' is not assignable to parameter of type 'IExecutableSchemaDefinition<any>'.
  Types of property 'resolvers' are incompatible.
    Type 'string' is not assignable to type 'IResolvers<any, any> | IResolvers<any, any>[] | undefined'.

    at createTSError (/Users/Hyungook/workspace/nuber-clone/node_modules/ts-node/src/index.ts:261:12)
    at getOutput (/Users/Hyungook/workspace/nuber-clone/node_modules/ts-node/src/index.ts:367:40)
    at Object.compile (/Users/Hyungook/workspace/nuber-clone/node_modules/ts-node/src/index.ts:558:11)
    at Module.m._compile (/Users/Hyungook/workspace/nuber-clone/node_modules/ts-node/src/index.ts:439:43)
    at Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/Users/Hyungook/workspace/nuber-clone/node_modules/ts-node/src/index.ts:442:12)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Module.require (internal/modules/cjs/loader.js:636:17)
[nodemon] app crashed - waiting for file changes before starting...
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM5MTkxMTE4OF19
-->