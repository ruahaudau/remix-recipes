
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PantryShelf
 * 
 */
export type PantryShelf = $Result.DefaultSelection<Prisma.$PantryShelfPayload>
/**
 * Model PantryItems
 * 
 */
export type PantryItems = $Result.DefaultSelection<Prisma.$PantryItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PantryShelves
 * const pantryShelves = await prisma.pantryShelf.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PantryShelves
   * const pantryShelves = await prisma.pantryShelf.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pantryShelf`: Exposes CRUD operations for the **PantryShelf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PantryShelves
    * const pantryShelves = await prisma.pantryShelf.findMany()
    * ```
    */
  get pantryShelf(): Prisma.PantryShelfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantryItems`: Exposes CRUD operations for the **PantryItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PantryItems
    * const pantryItems = await prisma.pantryItems.findMany()
    * ```
    */
  get pantryItems(): Prisma.PantryItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PantryShelf: 'PantryShelf',
    PantryItems: 'PantryItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pantryShelf" | "pantryItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PantryShelf: {
        payload: Prisma.$PantryShelfPayload<ExtArgs>
        fields: Prisma.PantryShelfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryShelfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryShelfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          findFirst: {
            args: Prisma.PantryShelfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryShelfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          findMany: {
            args: Prisma.PantryShelfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>[]
          }
          create: {
            args: Prisma.PantryShelfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          createMany: {
            args: Prisma.PantryShelfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PantryShelfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>[]
          }
          delete: {
            args: Prisma.PantryShelfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          update: {
            args: Prisma.PantryShelfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          deleteMany: {
            args: Prisma.PantryShelfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryShelfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PantryShelfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>[]
          }
          upsert: {
            args: Prisma.PantryShelfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          aggregate: {
            args: Prisma.PantryShelfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantryShelf>
          }
          groupBy: {
            args: Prisma.PantryShelfGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryShelfGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryShelfCountArgs<ExtArgs>
            result: $Utils.Optional<PantryShelfCountAggregateOutputType> | number
          }
        }
      }
      PantryItems: {
        payload: Prisma.$PantryItemsPayload<ExtArgs>
        fields: Prisma.PantryItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>
          }
          findFirst: {
            args: Prisma.PantryItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>
          }
          findMany: {
            args: Prisma.PantryItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>[]
          }
          create: {
            args: Prisma.PantryItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>
          }
          createMany: {
            args: Prisma.PantryItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PantryItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>[]
          }
          delete: {
            args: Prisma.PantryItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>
          }
          update: {
            args: Prisma.PantryItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>
          }
          deleteMany: {
            args: Prisma.PantryItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PantryItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>[]
          }
          upsert: {
            args: Prisma.PantryItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemsPayload>
          }
          aggregate: {
            args: Prisma.PantryItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantryItems>
          }
          groupBy: {
            args: Prisma.PantryItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryItemsCountArgs<ExtArgs>
            result: $Utils.Optional<PantryItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pantryShelf?: PantryShelfOmit
    pantryItems?: PantryItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PantryShelfCountOutputType
   */

  export type PantryShelfCountOutputType = {
    items: number
  }

  export type PantryShelfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PantryShelfCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PantryShelfCountOutputType without action
   */
  export type PantryShelfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelfCountOutputType
     */
    select?: PantryShelfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PantryShelfCountOutputType without action
   */
  export type PantryShelfCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PantryShelf
   */

  export type AggregatePantryShelf = {
    _count: PantryShelfCountAggregateOutputType | null
    _min: PantryShelfMinAggregateOutputType | null
    _max: PantryShelfMaxAggregateOutputType | null
  }

  export type PantryShelfMinAggregateOutputType = {
    id: string | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PantryShelfMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PantryShelfCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type PantryShelfMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type PantryShelfMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type PantryShelfCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type PantryShelfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryShelf to aggregate.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PantryShelves
    **/
    _count?: true | PantryShelfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryShelfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryShelfMaxAggregateInputType
  }

  export type GetPantryShelfAggregateType<T extends PantryShelfAggregateArgs> = {
        [P in keyof T & keyof AggregatePantryShelf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryShelf[P]>
      : GetScalarType<T[P], AggregatePantryShelf[P]>
  }




  export type PantryShelfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryShelfWhereInput
    orderBy?: PantryShelfOrderByWithAggregationInput | PantryShelfOrderByWithAggregationInput[]
    by: PantryShelfScalarFieldEnum[] | PantryShelfScalarFieldEnum
    having?: PantryShelfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryShelfCountAggregateInputType | true
    _min?: PantryShelfMinAggregateInputType
    _max?: PantryShelfMaxAggregateInputType
  }

  export type PantryShelfGroupByOutputType = {
    id: string
    name: string
    createAt: Date
    updateAt: Date
    _count: PantryShelfCountAggregateOutputType | null
    _min: PantryShelfMinAggregateOutputType | null
    _max: PantryShelfMaxAggregateOutputType | null
  }

  type GetPantryShelfGroupByPayload<T extends PantryShelfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryShelfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryShelfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryShelfGroupByOutputType[P]>
            : GetScalarType<T[P], PantryShelfGroupByOutputType[P]>
        }
      >
    >


  export type PantryShelfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    items?: boolean | PantryShelf$itemsArgs<ExtArgs>
    _count?: boolean | PantryShelfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryShelf"]>

  export type PantryShelfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["pantryShelf"]>

  export type PantryShelfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["pantryShelf"]>

  export type PantryShelfSelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type PantryShelfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createAt" | "updateAt", ExtArgs["result"]["pantryShelf"]>
  export type PantryShelfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PantryShelf$itemsArgs<ExtArgs>
    _count?: boolean | PantryShelfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PantryShelfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PantryShelfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PantryShelfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PantryShelf"
    objects: {
      items: Prisma.$PantryItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["pantryShelf"]>
    composites: {}
  }

  type PantryShelfGetPayload<S extends boolean | null | undefined | PantryShelfDefaultArgs> = $Result.GetResult<Prisma.$PantryShelfPayload, S>

  type PantryShelfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryShelfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryShelfCountAggregateInputType | true
    }

  export interface PantryShelfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PantryShelf'], meta: { name: 'PantryShelf' } }
    /**
     * Find zero or one PantryShelf that matches the filter.
     * @param {PantryShelfFindUniqueArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryShelfFindUniqueArgs>(args: SelectSubset<T, PantryShelfFindUniqueArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PantryShelf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryShelfFindUniqueOrThrowArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryShelfFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryShelfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryShelf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfFindFirstArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryShelfFindFirstArgs>(args?: SelectSubset<T, PantryShelfFindFirstArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryShelf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfFindFirstOrThrowArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryShelfFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryShelfFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PantryShelves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryShelves
     * const pantryShelves = await prisma.pantryShelf.findMany()
     * 
     * // Get first 10 PantryShelves
     * const pantryShelves = await prisma.pantryShelf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryShelfWithIdOnly = await prisma.pantryShelf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantryShelfFindManyArgs>(args?: SelectSubset<T, PantryShelfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PantryShelf.
     * @param {PantryShelfCreateArgs} args - Arguments to create a PantryShelf.
     * @example
     * // Create one PantryShelf
     * const PantryShelf = await prisma.pantryShelf.create({
     *   data: {
     *     // ... data to create a PantryShelf
     *   }
     * })
     * 
     */
    create<T extends PantryShelfCreateArgs>(args: SelectSubset<T, PantryShelfCreateArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PantryShelves.
     * @param {PantryShelfCreateManyArgs} args - Arguments to create many PantryShelves.
     * @example
     * // Create many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryShelfCreateManyArgs>(args?: SelectSubset<T, PantryShelfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PantryShelves and returns the data saved in the database.
     * @param {PantryShelfCreateManyAndReturnArgs} args - Arguments to create many PantryShelves.
     * @example
     * // Create many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PantryShelves and only return the `id`
     * const pantryShelfWithIdOnly = await prisma.pantryShelf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PantryShelfCreateManyAndReturnArgs>(args?: SelectSubset<T, PantryShelfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PantryShelf.
     * @param {PantryShelfDeleteArgs} args - Arguments to delete one PantryShelf.
     * @example
     * // Delete one PantryShelf
     * const PantryShelf = await prisma.pantryShelf.delete({
     *   where: {
     *     // ... filter to delete one PantryShelf
     *   }
     * })
     * 
     */
    delete<T extends PantryShelfDeleteArgs>(args: SelectSubset<T, PantryShelfDeleteArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PantryShelf.
     * @param {PantryShelfUpdateArgs} args - Arguments to update one PantryShelf.
     * @example
     * // Update one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryShelfUpdateArgs>(args: SelectSubset<T, PantryShelfUpdateArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PantryShelves.
     * @param {PantryShelfDeleteManyArgs} args - Arguments to filter PantryShelves to delete.
     * @example
     * // Delete a few PantryShelves
     * const { count } = await prisma.pantryShelf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryShelfDeleteManyArgs>(args?: SelectSubset<T, PantryShelfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryShelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryShelfUpdateManyArgs>(args: SelectSubset<T, PantryShelfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryShelves and returns the data updated in the database.
     * @param {PantryShelfUpdateManyAndReturnArgs} args - Arguments to update many PantryShelves.
     * @example
     * // Update many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PantryShelves and only return the `id`
     * const pantryShelfWithIdOnly = await prisma.pantryShelf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PantryShelfUpdateManyAndReturnArgs>(args: SelectSubset<T, PantryShelfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PantryShelf.
     * @param {PantryShelfUpsertArgs} args - Arguments to update or create a PantryShelf.
     * @example
     * // Update or create a PantryShelf
     * const pantryShelf = await prisma.pantryShelf.upsert({
     *   create: {
     *     // ... data to create a PantryShelf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryShelf we want to update
     *   }
     * })
     */
    upsert<T extends PantryShelfUpsertArgs>(args: SelectSubset<T, PantryShelfUpsertArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PantryShelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfCountArgs} args - Arguments to filter PantryShelves to count.
     * @example
     * // Count the number of PantryShelves
     * const count = await prisma.pantryShelf.count({
     *   where: {
     *     // ... the filter for the PantryShelves we want to count
     *   }
     * })
    **/
    count<T extends PantryShelfCountArgs>(
      args?: Subset<T, PantryShelfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryShelfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PantryShelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PantryShelfAggregateArgs>(args: Subset<T, PantryShelfAggregateArgs>): Prisma.PrismaPromise<GetPantryShelfAggregateType<T>>

    /**
     * Group by PantryShelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PantryShelfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryShelfGroupByArgs['orderBy'] }
        : { orderBy?: PantryShelfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PantryShelfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryShelfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PantryShelf model
   */
  readonly fields: PantryShelfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryShelf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryShelfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends PantryShelf$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PantryShelf$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PantryShelf model
   */
  interface PantryShelfFieldRefs {
    readonly id: FieldRef<"PantryShelf", 'String'>
    readonly name: FieldRef<"PantryShelf", 'String'>
    readonly createAt: FieldRef<"PantryShelf", 'DateTime'>
    readonly updateAt: FieldRef<"PantryShelf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PantryShelf findUnique
   */
  export type PantryShelfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf findUniqueOrThrow
   */
  export type PantryShelfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf findFirst
   */
  export type PantryShelfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryShelves.
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryShelves.
     */
    distinct?: PantryShelfScalarFieldEnum | PantryShelfScalarFieldEnum[]
  }

  /**
   * PantryShelf findFirstOrThrow
   */
  export type PantryShelfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryShelves.
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryShelves.
     */
    distinct?: PantryShelfScalarFieldEnum | PantryShelfScalarFieldEnum[]
  }

  /**
   * PantryShelf findMany
   */
  export type PantryShelfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelves to fetch.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PantryShelves.
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    distinct?: PantryShelfScalarFieldEnum | PantryShelfScalarFieldEnum[]
  }

  /**
   * PantryShelf create
   */
  export type PantryShelfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * The data needed to create a PantryShelf.
     */
    data: XOR<PantryShelfCreateInput, PantryShelfUncheckedCreateInput>
  }

  /**
   * PantryShelf createMany
   */
  export type PantryShelfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PantryShelves.
     */
    data: PantryShelfCreateManyInput | PantryShelfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryShelf createManyAndReturn
   */
  export type PantryShelfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * The data used to create many PantryShelves.
     */
    data: PantryShelfCreateManyInput | PantryShelfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryShelf update
   */
  export type PantryShelfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * The data needed to update a PantryShelf.
     */
    data: XOR<PantryShelfUpdateInput, PantryShelfUncheckedUpdateInput>
    /**
     * Choose, which PantryShelf to update.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf updateMany
   */
  export type PantryShelfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PantryShelves.
     */
    data: XOR<PantryShelfUpdateManyMutationInput, PantryShelfUncheckedUpdateManyInput>
    /**
     * Filter which PantryShelves to update
     */
    where?: PantryShelfWhereInput
    /**
     * Limit how many PantryShelves to update.
     */
    limit?: number
  }

  /**
   * PantryShelf updateManyAndReturn
   */
  export type PantryShelfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * The data used to update PantryShelves.
     */
    data: XOR<PantryShelfUpdateManyMutationInput, PantryShelfUncheckedUpdateManyInput>
    /**
     * Filter which PantryShelves to update
     */
    where?: PantryShelfWhereInput
    /**
     * Limit how many PantryShelves to update.
     */
    limit?: number
  }

  /**
   * PantryShelf upsert
   */
  export type PantryShelfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * The filter to search for the PantryShelf to update in case it exists.
     */
    where: PantryShelfWhereUniqueInput
    /**
     * In case the PantryShelf found by the `where` argument doesn't exist, create a new PantryShelf with this data.
     */
    create: XOR<PantryShelfCreateInput, PantryShelfUncheckedCreateInput>
    /**
     * In case the PantryShelf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryShelfUpdateInput, PantryShelfUncheckedUpdateInput>
  }

  /**
   * PantryShelf delete
   */
  export type PantryShelfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter which PantryShelf to delete.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf deleteMany
   */
  export type PantryShelfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryShelves to delete
     */
    where?: PantryShelfWhereInput
    /**
     * Limit how many PantryShelves to delete.
     */
    limit?: number
  }

  /**
   * PantryShelf.items
   */
  export type PantryShelf$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    where?: PantryItemsWhereInput
    orderBy?: PantryItemsOrderByWithRelationInput | PantryItemsOrderByWithRelationInput[]
    cursor?: PantryItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryItemsScalarFieldEnum | PantryItemsScalarFieldEnum[]
  }

  /**
   * PantryShelf without action
   */
  export type PantryShelfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
  }


  /**
   * Model PantryItems
   */

  export type AggregatePantryItems = {
    _count: PantryItemsCountAggregateOutputType | null
    _min: PantryItemsMinAggregateOutputType | null
    _max: PantryItemsMaxAggregateOutputType | null
  }

  export type PantryItemsMinAggregateOutputType = {
    id: string | null
    name: string | null
    shelfID: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PantryItemsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shelfID: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PantryItemsCountAggregateOutputType = {
    id: number
    name: number
    shelfID: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type PantryItemsMinAggregateInputType = {
    id?: true
    name?: true
    shelfID?: true
    createAt?: true
    updateAt?: true
  }

  export type PantryItemsMaxAggregateInputType = {
    id?: true
    name?: true
    shelfID?: true
    createAt?: true
    updateAt?: true
  }

  export type PantryItemsCountAggregateInputType = {
    id?: true
    name?: true
    shelfID?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type PantryItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryItems to aggregate.
     */
    where?: PantryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemsOrderByWithRelationInput | PantryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PantryItems
    **/
    _count?: true | PantryItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryItemsMaxAggregateInputType
  }

  export type GetPantryItemsAggregateType<T extends PantryItemsAggregateArgs> = {
        [P in keyof T & keyof AggregatePantryItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryItems[P]>
      : GetScalarType<T[P], AggregatePantryItems[P]>
  }




  export type PantryItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemsWhereInput
    orderBy?: PantryItemsOrderByWithAggregationInput | PantryItemsOrderByWithAggregationInput[]
    by: PantryItemsScalarFieldEnum[] | PantryItemsScalarFieldEnum
    having?: PantryItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryItemsCountAggregateInputType | true
    _min?: PantryItemsMinAggregateInputType
    _max?: PantryItemsMaxAggregateInputType
  }

  export type PantryItemsGroupByOutputType = {
    id: string
    name: string
    shelfID: string
    createAt: Date
    updateAt: Date
    _count: PantryItemsCountAggregateOutputType | null
    _min: PantryItemsMinAggregateOutputType | null
    _max: PantryItemsMaxAggregateOutputType | null
  }

  type GetPantryItemsGroupByPayload<T extends PantryItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryItemsGroupByOutputType[P]>
            : GetScalarType<T[P], PantryItemsGroupByOutputType[P]>
        }
      >
    >


  export type PantryItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shelfID?: boolean
    createAt?: boolean
    updateAt?: boolean
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItems"]>

  export type PantryItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shelfID?: boolean
    createAt?: boolean
    updateAt?: boolean
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItems"]>

  export type PantryItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shelfID?: boolean
    createAt?: boolean
    updateAt?: boolean
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItems"]>

  export type PantryItemsSelectScalar = {
    id?: boolean
    name?: boolean
    shelfID?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type PantryItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shelfID" | "createAt" | "updateAt", ExtArgs["result"]["pantryItems"]>
  export type PantryItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }
  export type PantryItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }
  export type PantryItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }

  export type $PantryItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PantryItems"
    objects: {
      shelf: Prisma.$PantryShelfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      shelfID: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["pantryItems"]>
    composites: {}
  }

  type PantryItemsGetPayload<S extends boolean | null | undefined | PantryItemsDefaultArgs> = $Result.GetResult<Prisma.$PantryItemsPayload, S>

  type PantryItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryItemsCountAggregateInputType | true
    }

  export interface PantryItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PantryItems'], meta: { name: 'PantryItems' } }
    /**
     * Find zero or one PantryItems that matches the filter.
     * @param {PantryItemsFindUniqueArgs} args - Arguments to find a PantryItems
     * @example
     * // Get one PantryItems
     * const pantryItems = await prisma.pantryItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryItemsFindUniqueArgs>(args: SelectSubset<T, PantryItemsFindUniqueArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PantryItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryItemsFindUniqueOrThrowArgs} args - Arguments to find a PantryItems
     * @example
     * // Get one PantryItems
     * const pantryItems = await prisma.pantryItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsFindFirstArgs} args - Arguments to find a PantryItems
     * @example
     * // Get one PantryItems
     * const pantryItems = await prisma.pantryItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryItemsFindFirstArgs>(args?: SelectSubset<T, PantryItemsFindFirstArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsFindFirstOrThrowArgs} args - Arguments to find a PantryItems
     * @example
     * // Get one PantryItems
     * const pantryItems = await prisma.pantryItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PantryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryItems
     * const pantryItems = await prisma.pantryItems.findMany()
     * 
     * // Get first 10 PantryItems
     * const pantryItems = await prisma.pantryItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryItemsWithIdOnly = await prisma.pantryItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantryItemsFindManyArgs>(args?: SelectSubset<T, PantryItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PantryItems.
     * @param {PantryItemsCreateArgs} args - Arguments to create a PantryItems.
     * @example
     * // Create one PantryItems
     * const PantryItems = await prisma.pantryItems.create({
     *   data: {
     *     // ... data to create a PantryItems
     *   }
     * })
     * 
     */
    create<T extends PantryItemsCreateArgs>(args: SelectSubset<T, PantryItemsCreateArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PantryItems.
     * @param {PantryItemsCreateManyArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItems = await prisma.pantryItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryItemsCreateManyArgs>(args?: SelectSubset<T, PantryItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PantryItems and returns the data saved in the database.
     * @param {PantryItemsCreateManyAndReturnArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItems = await prisma.pantryItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PantryItems and only return the `id`
     * const pantryItemsWithIdOnly = await prisma.pantryItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PantryItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, PantryItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PantryItems.
     * @param {PantryItemsDeleteArgs} args - Arguments to delete one PantryItems.
     * @example
     * // Delete one PantryItems
     * const PantryItems = await prisma.pantryItems.delete({
     *   where: {
     *     // ... filter to delete one PantryItems
     *   }
     * })
     * 
     */
    delete<T extends PantryItemsDeleteArgs>(args: SelectSubset<T, PantryItemsDeleteArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PantryItems.
     * @param {PantryItemsUpdateArgs} args - Arguments to update one PantryItems.
     * @example
     * // Update one PantryItems
     * const pantryItems = await prisma.pantryItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryItemsUpdateArgs>(args: SelectSubset<T, PantryItemsUpdateArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PantryItems.
     * @param {PantryItemsDeleteManyArgs} args - Arguments to filter PantryItems to delete.
     * @example
     * // Delete a few PantryItems
     * const { count } = await prisma.pantryItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryItemsDeleteManyArgs>(args?: SelectSubset<T, PantryItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryItems
     * const pantryItems = await prisma.pantryItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryItemsUpdateManyArgs>(args: SelectSubset<T, PantryItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryItems and returns the data updated in the database.
     * @param {PantryItemsUpdateManyAndReturnArgs} args - Arguments to update many PantryItems.
     * @example
     * // Update many PantryItems
     * const pantryItems = await prisma.pantryItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PantryItems and only return the `id`
     * const pantryItemsWithIdOnly = await prisma.pantryItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PantryItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, PantryItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PantryItems.
     * @param {PantryItemsUpsertArgs} args - Arguments to update or create a PantryItems.
     * @example
     * // Update or create a PantryItems
     * const pantryItems = await prisma.pantryItems.upsert({
     *   create: {
     *     // ... data to create a PantryItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryItems we want to update
     *   }
     * })
     */
    upsert<T extends PantryItemsUpsertArgs>(args: SelectSubset<T, PantryItemsUpsertArgs<ExtArgs>>): Prisma__PantryItemsClient<$Result.GetResult<Prisma.$PantryItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsCountArgs} args - Arguments to filter PantryItems to count.
     * @example
     * // Count the number of PantryItems
     * const count = await prisma.pantryItems.count({
     *   where: {
     *     // ... the filter for the PantryItems we want to count
     *   }
     * })
    **/
    count<T extends PantryItemsCountArgs>(
      args?: Subset<T, PantryItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PantryItemsAggregateArgs>(args: Subset<T, PantryItemsAggregateArgs>): Prisma.PrismaPromise<GetPantryItemsAggregateType<T>>

    /**
     * Group by PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PantryItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryItemsGroupByArgs['orderBy'] }
        : { orderBy?: PantryItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PantryItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PantryItems model
   */
  readonly fields: PantryItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelf<T extends PantryShelfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PantryShelfDefaultArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PantryItems model
   */
  interface PantryItemsFieldRefs {
    readonly id: FieldRef<"PantryItems", 'String'>
    readonly name: FieldRef<"PantryItems", 'String'>
    readonly shelfID: FieldRef<"PantryItems", 'String'>
    readonly createAt: FieldRef<"PantryItems", 'DateTime'>
    readonly updateAt: FieldRef<"PantryItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PantryItems findUnique
   */
  export type PantryItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where: PantryItemsWhereUniqueInput
  }

  /**
   * PantryItems findUniqueOrThrow
   */
  export type PantryItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where: PantryItemsWhereUniqueInput
  }

  /**
   * PantryItems findFirst
   */
  export type PantryItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where?: PantryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemsOrderByWithRelationInput | PantryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemsScalarFieldEnum | PantryItemsScalarFieldEnum[]
  }

  /**
   * PantryItems findFirstOrThrow
   */
  export type PantryItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where?: PantryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemsOrderByWithRelationInput | PantryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemsScalarFieldEnum | PantryItemsScalarFieldEnum[]
  }

  /**
   * PantryItems findMany
   */
  export type PantryItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where?: PantryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemsOrderByWithRelationInput | PantryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PantryItems.
     */
    cursor?: PantryItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    distinct?: PantryItemsScalarFieldEnum | PantryItemsScalarFieldEnum[]
  }

  /**
   * PantryItems create
   */
  export type PantryItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a PantryItems.
     */
    data: XOR<PantryItemsCreateInput, PantryItemsUncheckedCreateInput>
  }

  /**
   * PantryItems createMany
   */
  export type PantryItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemsCreateManyInput | PantryItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryItems createManyAndReturn
   */
  export type PantryItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemsCreateManyInput | PantryItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PantryItems update
   */
  export type PantryItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a PantryItems.
     */
    data: XOR<PantryItemsUpdateInput, PantryItemsUncheckedUpdateInput>
    /**
     * Choose, which PantryItems to update.
     */
    where: PantryItemsWhereUniqueInput
  }

  /**
   * PantryItems updateMany
   */
  export type PantryItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PantryItems.
     */
    data: XOR<PantryItemsUpdateManyMutationInput, PantryItemsUncheckedUpdateManyInput>
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemsWhereInput
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number
  }

  /**
   * PantryItems updateManyAndReturn
   */
  export type PantryItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * The data used to update PantryItems.
     */
    data: XOR<PantryItemsUpdateManyMutationInput, PantryItemsUncheckedUpdateManyInput>
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemsWhereInput
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PantryItems upsert
   */
  export type PantryItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the PantryItems to update in case it exists.
     */
    where: PantryItemsWhereUniqueInput
    /**
     * In case the PantryItems found by the `where` argument doesn't exist, create a new PantryItems with this data.
     */
    create: XOR<PantryItemsCreateInput, PantryItemsUncheckedCreateInput>
    /**
     * In case the PantryItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryItemsUpdateInput, PantryItemsUncheckedUpdateInput>
  }

  /**
   * PantryItems delete
   */
  export type PantryItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
    /**
     * Filter which PantryItems to delete.
     */
    where: PantryItemsWhereUniqueInput
  }

  /**
   * PantryItems deleteMany
   */
  export type PantryItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryItems to delete
     */
    where?: PantryItemsWhereInput
    /**
     * Limit how many PantryItems to delete.
     */
    limit?: number
  }

  /**
   * PantryItems without action
   */
  export type PantryItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItems
     */
    select?: PantryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItems
     */
    omit?: PantryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PantryShelfScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type PantryShelfScalarFieldEnum = (typeof PantryShelfScalarFieldEnum)[keyof typeof PantryShelfScalarFieldEnum]


  export const PantryItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shelfID: 'shelfID',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type PantryItemsScalarFieldEnum = (typeof PantryItemsScalarFieldEnum)[keyof typeof PantryItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PantryShelfWhereInput = {
    AND?: PantryShelfWhereInput | PantryShelfWhereInput[]
    OR?: PantryShelfWhereInput[]
    NOT?: PantryShelfWhereInput | PantryShelfWhereInput[]
    id?: StringFilter<"PantryShelf"> | string
    name?: StringFilter<"PantryShelf"> | string
    createAt?: DateTimeFilter<"PantryShelf"> | Date | string
    updateAt?: DateTimeFilter<"PantryShelf"> | Date | string
    items?: PantryItemsListRelationFilter
  }

  export type PantryShelfOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    items?: PantryItemsOrderByRelationAggregateInput
  }

  export type PantryShelfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PantryShelfWhereInput | PantryShelfWhereInput[]
    OR?: PantryShelfWhereInput[]
    NOT?: PantryShelfWhereInput | PantryShelfWhereInput[]
    name?: StringFilter<"PantryShelf"> | string
    createAt?: DateTimeFilter<"PantryShelf"> | Date | string
    updateAt?: DateTimeFilter<"PantryShelf"> | Date | string
    items?: PantryItemsListRelationFilter
  }, "id">

  export type PantryShelfOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: PantryShelfCountOrderByAggregateInput
    _max?: PantryShelfMaxOrderByAggregateInput
    _min?: PantryShelfMinOrderByAggregateInput
  }

  export type PantryShelfScalarWhereWithAggregatesInput = {
    AND?: PantryShelfScalarWhereWithAggregatesInput | PantryShelfScalarWhereWithAggregatesInput[]
    OR?: PantryShelfScalarWhereWithAggregatesInput[]
    NOT?: PantryShelfScalarWhereWithAggregatesInput | PantryShelfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PantryShelf"> | string
    name?: StringWithAggregatesFilter<"PantryShelf"> | string
    createAt?: DateTimeWithAggregatesFilter<"PantryShelf"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"PantryShelf"> | Date | string
  }

  export type PantryItemsWhereInput = {
    AND?: PantryItemsWhereInput | PantryItemsWhereInput[]
    OR?: PantryItemsWhereInput[]
    NOT?: PantryItemsWhereInput | PantryItemsWhereInput[]
    id?: StringFilter<"PantryItems"> | string
    name?: StringFilter<"PantryItems"> | string
    shelfID?: StringFilter<"PantryItems"> | string
    createAt?: DateTimeFilter<"PantryItems"> | Date | string
    updateAt?: DateTimeFilter<"PantryItems"> | Date | string
    shelf?: XOR<PantryShelfScalarRelationFilter, PantryShelfWhereInput>
  }

  export type PantryItemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shelfID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    shelf?: PantryShelfOrderByWithRelationInput
  }

  export type PantryItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PantryItemsWhereInput | PantryItemsWhereInput[]
    OR?: PantryItemsWhereInput[]
    NOT?: PantryItemsWhereInput | PantryItemsWhereInput[]
    name?: StringFilter<"PantryItems"> | string
    shelfID?: StringFilter<"PantryItems"> | string
    createAt?: DateTimeFilter<"PantryItems"> | Date | string
    updateAt?: DateTimeFilter<"PantryItems"> | Date | string
    shelf?: XOR<PantryShelfScalarRelationFilter, PantryShelfWhereInput>
  }, "id">

  export type PantryItemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shelfID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: PantryItemsCountOrderByAggregateInput
    _max?: PantryItemsMaxOrderByAggregateInput
    _min?: PantryItemsMinOrderByAggregateInput
  }

  export type PantryItemsScalarWhereWithAggregatesInput = {
    AND?: PantryItemsScalarWhereWithAggregatesInput | PantryItemsScalarWhereWithAggregatesInput[]
    OR?: PantryItemsScalarWhereWithAggregatesInput[]
    NOT?: PantryItemsScalarWhereWithAggregatesInput | PantryItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PantryItems"> | string
    name?: StringWithAggregatesFilter<"PantryItems"> | string
    shelfID?: StringWithAggregatesFilter<"PantryItems"> | string
    createAt?: DateTimeWithAggregatesFilter<"PantryItems"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"PantryItems"> | Date | string
  }

  export type PantryShelfCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    items?: PantryItemsCreateNestedManyWithoutShelfInput
  }

  export type PantryShelfUncheckedCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    items?: PantryItemsUncheckedCreateNestedManyWithoutShelfInput
  }

  export type PantryShelfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PantryItemsUpdateManyWithoutShelfNestedInput
  }

  export type PantryShelfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PantryItemsUncheckedUpdateManyWithoutShelfNestedInput
  }

  export type PantryShelfCreateManyInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryShelfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryShelfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemsCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    shelf: PantryShelfCreateNestedOneWithoutItemsInput
  }

  export type PantryItemsUncheckedCreateInput = {
    id?: string
    name: string
    shelfID: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelf?: PantryShelfUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PantryItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shelfID?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemsCreateManyInput = {
    id?: string
    name: string
    shelfID: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shelfID?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PantryItemsListRelationFilter = {
    every?: PantryItemsWhereInput
    some?: PantryItemsWhereInput
    none?: PantryItemsWhereInput
  }

  export type PantryItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PantryShelfCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PantryShelfMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PantryShelfMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PantryShelfScalarRelationFilter = {
    is?: PantryShelfWhereInput
    isNot?: PantryShelfWhereInput
  }

  export type PantryItemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shelfID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PantryItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shelfID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PantryItemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shelfID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PantryItemsCreateNestedManyWithoutShelfInput = {
    create?: XOR<PantryItemsCreateWithoutShelfInput, PantryItemsUncheckedCreateWithoutShelfInput> | PantryItemsCreateWithoutShelfInput[] | PantryItemsUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemsCreateOrConnectWithoutShelfInput | PantryItemsCreateOrConnectWithoutShelfInput[]
    createMany?: PantryItemsCreateManyShelfInputEnvelope
    connect?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
  }

  export type PantryItemsUncheckedCreateNestedManyWithoutShelfInput = {
    create?: XOR<PantryItemsCreateWithoutShelfInput, PantryItemsUncheckedCreateWithoutShelfInput> | PantryItemsCreateWithoutShelfInput[] | PantryItemsUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemsCreateOrConnectWithoutShelfInput | PantryItemsCreateOrConnectWithoutShelfInput[]
    createMany?: PantryItemsCreateManyShelfInputEnvelope
    connect?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PantryItemsUpdateManyWithoutShelfNestedInput = {
    create?: XOR<PantryItemsCreateWithoutShelfInput, PantryItemsUncheckedCreateWithoutShelfInput> | PantryItemsCreateWithoutShelfInput[] | PantryItemsUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemsCreateOrConnectWithoutShelfInput | PantryItemsCreateOrConnectWithoutShelfInput[]
    upsert?: PantryItemsUpsertWithWhereUniqueWithoutShelfInput | PantryItemsUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: PantryItemsCreateManyShelfInputEnvelope
    set?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    disconnect?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    delete?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    connect?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    update?: PantryItemsUpdateWithWhereUniqueWithoutShelfInput | PantryItemsUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: PantryItemsUpdateManyWithWhereWithoutShelfInput | PantryItemsUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: PantryItemsScalarWhereInput | PantryItemsScalarWhereInput[]
  }

  export type PantryItemsUncheckedUpdateManyWithoutShelfNestedInput = {
    create?: XOR<PantryItemsCreateWithoutShelfInput, PantryItemsUncheckedCreateWithoutShelfInput> | PantryItemsCreateWithoutShelfInput[] | PantryItemsUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemsCreateOrConnectWithoutShelfInput | PantryItemsCreateOrConnectWithoutShelfInput[]
    upsert?: PantryItemsUpsertWithWhereUniqueWithoutShelfInput | PantryItemsUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: PantryItemsCreateManyShelfInputEnvelope
    set?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    disconnect?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    delete?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    connect?: PantryItemsWhereUniqueInput | PantryItemsWhereUniqueInput[]
    update?: PantryItemsUpdateWithWhereUniqueWithoutShelfInput | PantryItemsUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: PantryItemsUpdateManyWithWhereWithoutShelfInput | PantryItemsUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: PantryItemsScalarWhereInput | PantryItemsScalarWhereInput[]
  }

  export type PantryShelfCreateNestedOneWithoutItemsInput = {
    create?: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PantryShelfCreateOrConnectWithoutItemsInput
    connect?: PantryShelfWhereUniqueInput
  }

  export type PantryShelfUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PantryShelfCreateOrConnectWithoutItemsInput
    upsert?: PantryShelfUpsertWithoutItemsInput
    connect?: PantryShelfWhereUniqueInput
    update?: XOR<XOR<PantryShelfUpdateToOneWithWhereWithoutItemsInput, PantryShelfUpdateWithoutItemsInput>, PantryShelfUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PantryItemsCreateWithoutShelfInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryItemsUncheckedCreateWithoutShelfInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryItemsCreateOrConnectWithoutShelfInput = {
    where: PantryItemsWhereUniqueInput
    create: XOR<PantryItemsCreateWithoutShelfInput, PantryItemsUncheckedCreateWithoutShelfInput>
  }

  export type PantryItemsCreateManyShelfInputEnvelope = {
    data: PantryItemsCreateManyShelfInput | PantryItemsCreateManyShelfInput[]
    skipDuplicates?: boolean
  }

  export type PantryItemsUpsertWithWhereUniqueWithoutShelfInput = {
    where: PantryItemsWhereUniqueInput
    update: XOR<PantryItemsUpdateWithoutShelfInput, PantryItemsUncheckedUpdateWithoutShelfInput>
    create: XOR<PantryItemsCreateWithoutShelfInput, PantryItemsUncheckedCreateWithoutShelfInput>
  }

  export type PantryItemsUpdateWithWhereUniqueWithoutShelfInput = {
    where: PantryItemsWhereUniqueInput
    data: XOR<PantryItemsUpdateWithoutShelfInput, PantryItemsUncheckedUpdateWithoutShelfInput>
  }

  export type PantryItemsUpdateManyWithWhereWithoutShelfInput = {
    where: PantryItemsScalarWhereInput
    data: XOR<PantryItemsUpdateManyMutationInput, PantryItemsUncheckedUpdateManyWithoutShelfInput>
  }

  export type PantryItemsScalarWhereInput = {
    AND?: PantryItemsScalarWhereInput | PantryItemsScalarWhereInput[]
    OR?: PantryItemsScalarWhereInput[]
    NOT?: PantryItemsScalarWhereInput | PantryItemsScalarWhereInput[]
    id?: StringFilter<"PantryItems"> | string
    name?: StringFilter<"PantryItems"> | string
    shelfID?: StringFilter<"PantryItems"> | string
    createAt?: DateTimeFilter<"PantryItems"> | Date | string
    updateAt?: DateTimeFilter<"PantryItems"> | Date | string
  }

  export type PantryShelfCreateWithoutItemsInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryShelfUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryShelfCreateOrConnectWithoutItemsInput = {
    where: PantryShelfWhereUniqueInput
    create: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
  }

  export type PantryShelfUpsertWithoutItemsInput = {
    update: XOR<PantryShelfUpdateWithoutItemsInput, PantryShelfUncheckedUpdateWithoutItemsInput>
    create: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
    where?: PantryShelfWhereInput
  }

  export type PantryShelfUpdateToOneWithWhereWithoutItemsInput = {
    where?: PantryShelfWhereInput
    data: XOR<PantryShelfUpdateWithoutItemsInput, PantryShelfUncheckedUpdateWithoutItemsInput>
  }

  export type PantryShelfUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryShelfUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemsCreateManyShelfInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PantryItemsUpdateWithoutShelfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemsUncheckedUpdateWithoutShelfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemsUncheckedUpdateManyWithoutShelfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}