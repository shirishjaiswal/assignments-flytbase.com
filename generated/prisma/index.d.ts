
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
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Drone
 * 
 */
export type Drone = $Result.DefaultSelection<Prisma.$DronePayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DroneStatus: {
  AVAILABLE: 'AVAILABLE',
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  MAINTENANCE: 'MAINTENANCE',
  ERROR: 'ERROR'
};

export type DroneStatus = (typeof DroneStatus)[keyof typeof DroneStatus]


export const MissionType: {
  IDEAL: 'IDEAL',
  INSPECTION: 'INSPECTION',
  REPAIR: 'REPAIR',
  DELIVERY: 'DELIVERY',
  EMERGENCY: 'EMERGENCY'
};

export type MissionType = (typeof MissionType)[keyof typeof MissionType]


export const MissionStatus: {
  PENDING: 'PENDING',
  INPROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  ABORTED: 'ABORTED',
  FAILED: 'FAILED'
};

export type MissionStatus = (typeof MissionStatus)[keyof typeof MissionStatus]


export const RecurringIntervalType: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type RecurringIntervalType = (typeof RecurringIntervalType)[keyof typeof RecurringIntervalType]

}

export type DroneStatus = $Enums.DroneStatus

export const DroneStatus: typeof $Enums.DroneStatus

export type MissionType = $Enums.MissionType

export const MissionType: typeof $Enums.MissionType

export type MissionStatus = $Enums.MissionStatus

export const MissionStatus: typeof $Enums.MissionStatus

export type RecurringIntervalType = $Enums.RecurringIntervalType

export const RecurringIntervalType: typeof $Enums.RecurringIntervalType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drones
 * const drones = await prisma.drone.findMany()
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
   * // Fetch zero or more Drones
   * const drones = await prisma.drone.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.drone`: Exposes CRUD operations for the **Drone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drones
    * const drones = await prisma.drone.findMany()
    * ```
    */
  get drone(): Prisma.DroneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Drone: 'Drone',
    Mission: 'Mission',
    Report: 'Report'
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
      modelProps: "drone" | "mission" | "report"
      txIsolationLevel: never
    }
    model: {
      Drone: {
        payload: Prisma.$DronePayload<ExtArgs>
        fields: Prisma.DroneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findFirst: {
            args: Prisma.DroneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findMany: {
            args: Prisma.DroneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          create: {
            args: Prisma.DroneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          createMany: {
            args: Prisma.DroneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DroneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          update: {
            args: Prisma.DroneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          deleteMany: {
            args: Prisma.DroneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DroneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          aggregate: {
            args: Prisma.DroneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrone>
          }
          groupBy: {
            args: Prisma.DroneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DroneFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DroneAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DroneCountArgs<ExtArgs>
            result: $Utils.Optional<DroneCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReportFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReportAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    drone?: DroneOmit
    mission?: MissionOmit
    report?: ReportOmit
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
   * Count Type DroneCountOutputType
   */

  export type DroneCountOutputType = {
    missions: number
  }

  export type DroneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | DroneCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneCountOutputType
     */
    select?: DroneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    Report: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | MissionCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Location
   */





  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"latitude" | "longitude" | "altitude", ExtArgs["result"]["location"]>

  export type $LocationPayload = {
    name: "Location"
    objects: {}
    scalars: {
      latitude: number
      longitude: number
      altitude: number
    }
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>





  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly latitude: FieldRef<"Location", 'Float'>
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly altitude: FieldRef<"Location", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
  }


  /**
   * Model Drone
   */

  export type AggregateDrone = {
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  export type DroneAvgAggregateOutputType = {
    maxAltitude: number | null
    topSpeed: number | null
    maxWeight: number | null
    range: number | null
    battery: number | null
  }

  export type DroneSumAggregateOutputType = {
    maxAltitude: number | null
    topSpeed: number | null
    maxWeight: number | null
    range: number | null
    battery: number | null
  }

  export type DroneMinAggregateOutputType = {
    id: string | null
    model: string | null
    modelId: string | null
    maxAltitude: number | null
    topSpeed: number | null
    maxWeight: number | null
    range: number | null
    type: string | null
    status: $Enums.DroneStatus | null
    battery: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneMaxAggregateOutputType = {
    id: string | null
    model: string | null
    modelId: string | null
    maxAltitude: number | null
    topSpeed: number | null
    maxWeight: number | null
    range: number | null
    type: string | null
    status: $Enums.DroneStatus | null
    battery: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneCountAggregateOutputType = {
    id: number
    model: number
    modelId: number
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: number
    status: number
    battery: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DroneAvgAggregateInputType = {
    maxAltitude?: true
    topSpeed?: true
    maxWeight?: true
    range?: true
    battery?: true
  }

  export type DroneSumAggregateInputType = {
    maxAltitude?: true
    topSpeed?: true
    maxWeight?: true
    range?: true
    battery?: true
  }

  export type DroneMinAggregateInputType = {
    id?: true
    model?: true
    modelId?: true
    maxAltitude?: true
    topSpeed?: true
    maxWeight?: true
    range?: true
    type?: true
    status?: true
    battery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneMaxAggregateInputType = {
    id?: true
    model?: true
    modelId?: true
    maxAltitude?: true
    topSpeed?: true
    maxWeight?: true
    range?: true
    type?: true
    status?: true
    battery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneCountAggregateInputType = {
    id?: true
    model?: true
    modelId?: true
    maxAltitude?: true
    topSpeed?: true
    maxWeight?: true
    range?: true
    type?: true
    status?: true
    battery?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DroneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drone to aggregate.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drones
    **/
    _count?: true | DroneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneMaxAggregateInputType
  }

  export type GetDroneAggregateType<T extends DroneAggregateArgs> = {
        [P in keyof T & keyof AggregateDrone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrone[P]>
      : GetScalarType<T[P], AggregateDrone[P]>
  }




  export type DroneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneWhereInput
    orderBy?: DroneOrderByWithAggregationInput | DroneOrderByWithAggregationInput[]
    by: DroneScalarFieldEnum[] | DroneScalarFieldEnum
    having?: DroneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneCountAggregateInputType | true
    _avg?: DroneAvgAggregateInputType
    _sum?: DroneSumAggregateInputType
    _min?: DroneMinAggregateInputType
    _max?: DroneMaxAggregateInputType
  }

  export type DroneGroupByOutputType = {
    id: string
    model: string
    modelId: string
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: string
    status: $Enums.DroneStatus
    battery: number
    createdAt: Date
    updatedAt: Date
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  type GetDroneGroupByPayload<T extends DroneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneGroupByOutputType[P]>
            : GetScalarType<T[P], DroneGroupByOutputType[P]>
        }
      >
    >


  export type DroneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    modelId?: boolean
    maxAltitude?: boolean
    topSpeed?: boolean
    maxWeight?: boolean
    range?: boolean
    type?: boolean
    status?: boolean
    battery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missions?: boolean | Drone$missionsArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drone"]>



  export type DroneSelectScalar = {
    id?: boolean
    model?: boolean
    modelId?: boolean
    maxAltitude?: boolean
    topSpeed?: boolean
    maxWeight?: boolean
    range?: boolean
    type?: boolean
    status?: boolean
    battery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DroneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "modelId" | "maxAltitude" | "topSpeed" | "maxWeight" | "range" | "type" | "status" | "battery" | "createdAt" | "updatedAt", ExtArgs["result"]["drone"]>
  export type DroneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Drone$missionsArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DronePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drone"
    objects: {
      missions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      model: string
      modelId: string
      maxAltitude: number
      topSpeed: number
      maxWeight: number
      range: number
      type: string
      status: $Enums.DroneStatus
      battery: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drone"]>
    composites: {}
  }

  type DroneGetPayload<S extends boolean | null | undefined | DroneDefaultArgs> = $Result.GetResult<Prisma.$DronePayload, S>

  type DroneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneCountAggregateInputType | true
    }

  export interface DroneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drone'], meta: { name: 'Drone' } }
    /**
     * Find zero or one Drone that matches the filter.
     * @param {DroneFindUniqueArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneFindUniqueArgs>(args: SelectSubset<T, DroneFindUniqueArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneFindUniqueOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneFindFirstArgs>(args?: SelectSubset<T, DroneFindFirstArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drones
     * const drones = await prisma.drone.findMany()
     * 
     * // Get first 10 Drones
     * const drones = await prisma.drone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneWithIdOnly = await prisma.drone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneFindManyArgs>(args?: SelectSubset<T, DroneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drone.
     * @param {DroneCreateArgs} args - Arguments to create a Drone.
     * @example
     * // Create one Drone
     * const Drone = await prisma.drone.create({
     *   data: {
     *     // ... data to create a Drone
     *   }
     * })
     * 
     */
    create<T extends DroneCreateArgs>(args: SelectSubset<T, DroneCreateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drones.
     * @param {DroneCreateManyArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneCreateManyArgs>(args?: SelectSubset<T, DroneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Drone.
     * @param {DroneDeleteArgs} args - Arguments to delete one Drone.
     * @example
     * // Delete one Drone
     * const Drone = await prisma.drone.delete({
     *   where: {
     *     // ... filter to delete one Drone
     *   }
     * })
     * 
     */
    delete<T extends DroneDeleteArgs>(args: SelectSubset<T, DroneDeleteArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drone.
     * @param {DroneUpdateArgs} args - Arguments to update one Drone.
     * @example
     * // Update one Drone
     * const drone = await prisma.drone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneUpdateArgs>(args: SelectSubset<T, DroneUpdateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drones.
     * @param {DroneDeleteManyArgs} args - Arguments to filter Drones to delete.
     * @example
     * // Delete a few Drones
     * const { count } = await prisma.drone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneDeleteManyArgs>(args?: SelectSubset<T, DroneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneUpdateManyArgs>(args: SelectSubset<T, DroneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Drone.
     * @param {DroneUpsertArgs} args - Arguments to update or create a Drone.
     * @example
     * // Update or create a Drone
     * const drone = await prisma.drone.upsert({
     *   create: {
     *     // ... data to create a Drone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drone we want to update
     *   }
     * })
     */
    upsert<T extends DroneUpsertArgs>(args: SelectSubset<T, DroneUpsertArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drones that matches the filter.
     * @param {DroneFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const drone = await prisma.drone.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DroneFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Drone.
     * @param {DroneAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const drone = await prisma.drone.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DroneAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneCountArgs} args - Arguments to filter Drones to count.
     * @example
     * // Count the number of Drones
     * const count = await prisma.drone.count({
     *   where: {
     *     // ... the filter for the Drones we want to count
     *   }
     * })
    **/
    count<T extends DroneCountArgs>(
      args?: Subset<T, DroneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DroneAggregateArgs>(args: Subset<T, DroneAggregateArgs>): Prisma.PrismaPromise<GetDroneAggregateType<T>>

    /**
     * Group by Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneGroupByArgs} args - Group by arguments.
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
      T extends DroneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneGroupByArgs['orderBy'] }
        : { orderBy?: DroneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DroneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drone model
   */
  readonly fields: DroneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Drone$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Drone$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Drone model
   */
  interface DroneFieldRefs {
    readonly id: FieldRef<"Drone", 'String'>
    readonly model: FieldRef<"Drone", 'String'>
    readonly modelId: FieldRef<"Drone", 'String'>
    readonly maxAltitude: FieldRef<"Drone", 'Int'>
    readonly topSpeed: FieldRef<"Drone", 'Int'>
    readonly maxWeight: FieldRef<"Drone", 'Float'>
    readonly range: FieldRef<"Drone", 'Float'>
    readonly type: FieldRef<"Drone", 'String'>
    readonly status: FieldRef<"Drone", 'DroneStatus'>
    readonly battery: FieldRef<"Drone", 'Int'>
    readonly createdAt: FieldRef<"Drone", 'DateTime'>
    readonly updatedAt: FieldRef<"Drone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drone findUnique
   */
  export type DroneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findUniqueOrThrow
   */
  export type DroneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findFirst
   */
  export type DroneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findFirstOrThrow
   */
  export type DroneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findMany
   */
  export type DroneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drones to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone create
   */
  export type DroneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to create a Drone.
     */
    data: XOR<DroneCreateInput, DroneUncheckedCreateInput>
  }

  /**
   * Drone createMany
   */
  export type DroneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
  }

  /**
   * Drone update
   */
  export type DroneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to update a Drone.
     */
    data: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
    /**
     * Choose, which Drone to update.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone updateMany
   */
  export type DroneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
  }

  /**
   * Drone upsert
   */
  export type DroneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The filter to search for the Drone to update in case it exists.
     */
    where: DroneWhereUniqueInput
    /**
     * In case the Drone found by the `where` argument doesn't exist, create a new Drone with this data.
     */
    create: XOR<DroneCreateInput, DroneUncheckedCreateInput>
    /**
     * In case the Drone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
  }

  /**
   * Drone delete
   */
  export type DroneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter which Drone to delete.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone deleteMany
   */
  export type DroneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drones to delete
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to delete.
     */
    limit?: number
  }

  /**
   * Drone findRaw
   */
  export type DroneFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Drone aggregateRaw
   */
  export type DroneAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Drone.missions
   */
  export type Drone$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Drone without action
   */
  export type DroneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    progress: number | null
  }

  export type MissionSumAggregateOutputType = {
    progress: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MissionType | null
    area: string | null
    status: $Enums.MissionStatus | null
    progress: number | null
    recurring: boolean | null
    recurringInterval: $Enums.RecurringIntervalType | null
    droneId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MissionType | null
    area: string | null
    status: $Enums.MissionStatus | null
    progress: number | null
    recurring: boolean | null
    recurringInterval: $Enums.RecurringIntervalType | null
    droneId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    name: number
    type: number
    area: number
    status: number
    progress: number
    recurring: number
    recurringInterval: number
    droneId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    progress?: true
  }

  export type MissionSumAggregateInputType = {
    progress?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    area?: true
    status?: true
    progress?: true
    recurring?: true
    recurringInterval?: true
    droneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    area?: true
    status?: true
    progress?: true
    recurring?: true
    recurringInterval?: true
    droneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    area?: true
    status?: true
    progress?: true
    recurring?: true
    recurringInterval?: true
    droneId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    recurringInterval: $Enums.RecurringIntervalType
    droneId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    area?: boolean
    status?: boolean
    progress?: boolean
    recurring?: boolean
    waypoints?: boolean | LocationDefaultArgs<ExtArgs>
    recurringInterval?: boolean
    droneId?: boolean
    droneLocation?: boolean | LocationDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | Mission$droneArgs<ExtArgs>
    Report?: boolean | Mission$ReportArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    area?: boolean
    status?: boolean
    progress?: boolean
    recurring?: boolean
    recurringInterval?: boolean
    droneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "area" | "status" | "progress" | "recurring" | "waypoints" | "recurringInterval" | "droneId" | "droneLocation" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | Mission$droneArgs<ExtArgs>
    Report?: boolean | Mission$ReportArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      drone: Prisma.$DronePayload<ExtArgs> | null
      Report: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.MissionType
      area: string
      status: $Enums.MissionStatus
      progress: number
      recurring: boolean
      recurringInterval: $Enums.RecurringIntervalType
      droneId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {
      waypoints: Prisma.$LocationPayload
      droneLocation: Prisma.$LocationPayload | null
    }
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * @param {MissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mission = await prisma.mission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Mission.
     * @param {MissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mission = await prisma.mission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
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
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drone<T extends Mission$droneArgs<ExtArgs> = {}>(args?: Subset<T, Mission$droneArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Report<T extends Mission$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Mission$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'String'>
    readonly name: FieldRef<"Mission", 'String'>
    readonly type: FieldRef<"Mission", 'MissionType'>
    readonly area: FieldRef<"Mission", 'String'>
    readonly status: FieldRef<"Mission", 'MissionStatus'>
    readonly progress: FieldRef<"Mission", 'Int'>
    readonly recurring: FieldRef<"Mission", 'Boolean'>
    readonly recurringInterval: FieldRef<"Mission", 'RecurringIntervalType'>
    readonly droneId: FieldRef<"Mission", 'String'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission findRaw
   */
  export type MissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Mission aggregateRaw
   */
  export type MissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Mission.drone
   */
  export type Mission$droneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    where?: DroneWhereInput
  }

  /**
   * Mission.Report
   */
  export type Mission$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    missionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    missionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    missionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    missionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    missionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    missionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    missionId: string
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    missionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      missionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * @param {ReportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const report = await prisma.report.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReportFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Report.
     * @param {ReportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const report = await prisma.report.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReportAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly missionId: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report findRaw
   */
  export type ReportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Report aggregateRaw
   */
  export type ReportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const DroneScalarFieldEnum: {
    id: 'id',
    model: 'model',
    modelId: 'modelId',
    maxAltitude: 'maxAltitude',
    topSpeed: 'topSpeed',
    maxWeight: 'maxWeight',
    range: 'range',
    type: 'type',
    status: 'status',
    battery: 'battery',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DroneScalarFieldEnum = (typeof DroneScalarFieldEnum)[keyof typeof DroneScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    area: 'area',
    status: 'status',
    progress: 'progress',
    recurring: 'recurring',
    recurringInterval: 'recurringInterval',
    droneId: 'droneId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DroneStatus'
   */
  export type EnumDroneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DroneStatus'>
    


  /**
   * Reference to a field of type 'DroneStatus[]'
   */
  export type ListEnumDroneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DroneStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MissionType'
   */
  export type EnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType'>
    


  /**
   * Reference to a field of type 'MissionType[]'
   */
  export type ListEnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType[]'>
    


  /**
   * Reference to a field of type 'MissionStatus'
   */
  export type EnumMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatus'>
    


  /**
   * Reference to a field of type 'MissionStatus[]'
   */
  export type ListEnumMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RecurringIntervalType'
   */
  export type EnumRecurringIntervalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringIntervalType'>
    


  /**
   * Reference to a field of type 'RecurringIntervalType[]'
   */
  export type ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringIntervalType[]'>
    
  /**
   * Deep Input Types
   */


  export type DroneWhereInput = {
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    id?: StringFilter<"Drone"> | string
    model?: StringFilter<"Drone"> | string
    modelId?: StringFilter<"Drone"> | string
    maxAltitude?: IntFilter<"Drone"> | number
    topSpeed?: IntFilter<"Drone"> | number
    maxWeight?: FloatFilter<"Drone"> | number
    range?: FloatFilter<"Drone"> | number
    type?: StringFilter<"Drone"> | string
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    battery?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    missions?: MissionListRelationFilter
  }

  export type DroneOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    modelId?: SortOrder
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    type?: SortOrder
    status?: SortOrder
    battery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missions?: MissionOrderByRelationAggregateInput
  }

  export type DroneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    modelId?: string
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    model?: StringFilter<"Drone"> | string
    maxAltitude?: IntFilter<"Drone"> | number
    topSpeed?: IntFilter<"Drone"> | number
    maxWeight?: FloatFilter<"Drone"> | number
    range?: FloatFilter<"Drone"> | number
    type?: StringFilter<"Drone"> | string
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    battery?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    missions?: MissionListRelationFilter
  }, "id" | "modelId">

  export type DroneOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    modelId?: SortOrder
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    type?: SortOrder
    status?: SortOrder
    battery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DroneCountOrderByAggregateInput
    _avg?: DroneAvgOrderByAggregateInput
    _max?: DroneMaxOrderByAggregateInput
    _min?: DroneMinOrderByAggregateInput
    _sum?: DroneSumOrderByAggregateInput
  }

  export type DroneScalarWhereWithAggregatesInput = {
    AND?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    OR?: DroneScalarWhereWithAggregatesInput[]
    NOT?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drone"> | string
    model?: StringWithAggregatesFilter<"Drone"> | string
    modelId?: StringWithAggregatesFilter<"Drone"> | string
    maxAltitude?: IntWithAggregatesFilter<"Drone"> | number
    topSpeed?: IntWithAggregatesFilter<"Drone"> | number
    maxWeight?: FloatWithAggregatesFilter<"Drone"> | number
    range?: FloatWithAggregatesFilter<"Drone"> | number
    type?: StringWithAggregatesFilter<"Drone"> | string
    status?: EnumDroneStatusWithAggregatesFilter<"Drone"> | $Enums.DroneStatus
    battery?: IntWithAggregatesFilter<"Drone"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: StringFilter<"Mission"> | string
    name?: StringFilter<"Mission"> | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    area?: StringFilter<"Mission"> | string
    status?: EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus
    progress?: IntFilter<"Mission"> | number
    recurring?: BoolFilter<"Mission"> | boolean
    waypoints?: XOR<LocationCompositeFilter, LocationObjectEqualityInput>
    recurringInterval?: EnumRecurringIntervalTypeFilter<"Mission"> | $Enums.RecurringIntervalType
    droneId?: StringNullableFilter<"Mission"> | string | null
    droneLocation?: XOR<LocationNullableCompositeFilter, LocationObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    drone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    Report?: ReportListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    area?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    recurring?: SortOrder
    waypoints?: LocationOrderByInput
    recurringInterval?: SortOrder
    droneId?: SortOrder
    droneLocation?: LocationOrderByInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drone?: DroneOrderByWithRelationInput
    Report?: ReportOrderByRelationAggregateInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    name?: StringFilter<"Mission"> | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    area?: StringFilter<"Mission"> | string
    status?: EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus
    progress?: IntFilter<"Mission"> | number
    recurring?: BoolFilter<"Mission"> | boolean
    waypoints?: XOR<LocationCompositeFilter, LocationObjectEqualityInput>
    recurringInterval?: EnumRecurringIntervalTypeFilter<"Mission"> | $Enums.RecurringIntervalType
    droneId?: StringNullableFilter<"Mission"> | string | null
    droneLocation?: XOR<LocationNullableCompositeFilter, LocationObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    drone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    Report?: ReportListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    area?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    recurring?: SortOrder
    recurringInterval?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mission"> | string
    name?: StringWithAggregatesFilter<"Mission"> | string
    type?: EnumMissionTypeWithAggregatesFilter<"Mission"> | $Enums.MissionType
    area?: StringWithAggregatesFilter<"Mission"> | string
    status?: EnumMissionStatusWithAggregatesFilter<"Mission"> | $Enums.MissionStatus
    progress?: IntWithAggregatesFilter<"Mission"> | number
    recurring?: BoolWithAggregatesFilter<"Mission"> | boolean
    recurringInterval?: EnumRecurringIntervalTypeWithAggregatesFilter<"Mission"> | $Enums.RecurringIntervalType
    droneId?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    missionId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mission?: MissionOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    missionId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    missionId?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type DroneCreateInput = {
    id?: string
    model: string
    modelId: string
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: string
    status: $Enums.DroneStatus
    battery: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateInput = {
    id?: string
    model: string
    modelId: string
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: string
    status: $Enums.DroneStatus
    battery: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    maxAltitude?: IntFieldUpdateOperationsInput | number
    topSpeed?: IntFieldUpdateOperationsInput | number
    maxWeight?: FloatFieldUpdateOperationsInput | number
    range?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    battery?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    maxAltitude?: IntFieldUpdateOperationsInput | number
    topSpeed?: IntFieldUpdateOperationsInput | number
    maxWeight?: FloatFieldUpdateOperationsInput | number
    range?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    battery?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type DroneCreateManyInput = {
    id?: string
    model: string
    modelId: string
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: string
    status: $Enums.DroneStatus
    battery: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    maxAltitude?: IntFieldUpdateOperationsInput | number
    topSpeed?: IntFieldUpdateOperationsInput | number
    maxWeight?: FloatFieldUpdateOperationsInput | number
    range?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    battery?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateManyInput = {
    model?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    maxAltitude?: IntFieldUpdateOperationsInput | number
    topSpeed?: IntFieldUpdateOperationsInput | number
    maxWeight?: FloatFieldUpdateOperationsInput | number
    range?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    battery?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drone?: DroneCreateNestedOneWithoutMissionsInput
    Report?: ReportCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneId?: string | null
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneWithoutMissionsNestedInput
    Report?: ReportUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneId?: string | null
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mission: MissionCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    missionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    missionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    missionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    missionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
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

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DroneCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    modelId?: SortOrder
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    type?: SortOrder
    status?: SortOrder
    battery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneAvgOrderByAggregateInput = {
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    battery?: SortOrder
  }

  export type DroneMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    modelId?: SortOrder
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    type?: SortOrder
    status?: SortOrder
    battery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    modelId?: SortOrder
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    type?: SortOrder
    status?: SortOrder
    battery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneSumOrderByAggregateInput = {
    maxAltitude?: SortOrder
    topSpeed?: SortOrder
    maxWeight?: SortOrder
    range?: SortOrder
    battery?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
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

  export type EnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type EnumMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusFilter<$PrismaModel> | $Enums.MissionStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LocationCompositeFilter = {
    equals?: LocationObjectEqualityInput
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type LocationObjectEqualityInput = {
    latitude: number
    longitude: number
    altitude: number
  }

  export type EnumRecurringIntervalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringIntervalType | EnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringIntervalTypeFilter<$PrismaModel> | $Enums.RecurringIntervalType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type LocationNullableCompositeFilter = {
    equals?: LocationObjectEqualityInput | null
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
    isSet?: boolean
  }

  export type DroneNullableScalarRelationFilter = {
    is?: DroneWhereInput | null
    isNot?: DroneWhereInput | null
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type LocationOrderByInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    area?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    recurring?: SortOrder
    recurringInterval?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    area?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    recurring?: SortOrder
    recurringInterval?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    area?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    recurring?: SortOrder
    recurringInterval?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type EnumMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumMissionStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRecurringIntervalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringIntervalType | EnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringIntervalTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecurringIntervalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringIntervalTypeFilter<$PrismaModel>
    _max?: NestedEnumRecurringIntervalTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionCreateNestedManyWithoutDroneInput = {
    create?: XOR<MissionCreateWithoutDroneInput, MissionUncheckedCreateWithoutDroneInput> | MissionCreateWithoutDroneInput[] | MissionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutDroneInput | MissionCreateOrConnectWithoutDroneInput[]
    createMany?: MissionCreateManyDroneInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<MissionCreateWithoutDroneInput, MissionUncheckedCreateWithoutDroneInput> | MissionCreateWithoutDroneInput[] | MissionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutDroneInput | MissionCreateOrConnectWithoutDroneInput[]
    createMany?: MissionCreateManyDroneInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDroneStatusFieldUpdateOperationsInput = {
    set?: $Enums.DroneStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MissionUpdateManyWithoutDroneNestedInput = {
    create?: XOR<MissionCreateWithoutDroneInput, MissionUncheckedCreateWithoutDroneInput> | MissionCreateWithoutDroneInput[] | MissionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutDroneInput | MissionCreateOrConnectWithoutDroneInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutDroneInput | MissionUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: MissionCreateManyDroneInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutDroneInput | MissionUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutDroneInput | MissionUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<MissionCreateWithoutDroneInput, MissionUncheckedCreateWithoutDroneInput> | MissionCreateWithoutDroneInput[] | MissionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutDroneInput | MissionCreateOrConnectWithoutDroneInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutDroneInput | MissionUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: MissionCreateManyDroneInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutDroneInput | MissionUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutDroneInput | MissionUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type LocationCreateEnvelopeInput = {
    set?: LocationCreateInput
  }

  export type LocationCreateInput = {
    latitude: number
    longitude: number
    altitude: number
  }

  export type LocationNullableCreateEnvelopeInput = {
    set?: LocationCreateInput | null
  }

  export type DroneCreateNestedOneWithoutMissionsInput = {
    create?: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutMissionsInput
    connect?: DroneWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutMissionInput = {
    create?: XOR<ReportCreateWithoutMissionInput, ReportUncheckedCreateWithoutMissionInput> | ReportCreateWithoutMissionInput[] | ReportUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMissionInput | ReportCreateOrConnectWithoutMissionInput[]
    createMany?: ReportCreateManyMissionInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<ReportCreateWithoutMissionInput, ReportUncheckedCreateWithoutMissionInput> | ReportCreateWithoutMissionInput[] | ReportUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMissionInput | ReportCreateOrConnectWithoutMissionInput[]
    createMany?: ReportCreateManyMissionInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type EnumMissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MissionType
  }

  export type EnumMissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.MissionStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LocationUpdateEnvelopeInput = {
    set?: LocationCreateInput
    update?: LocationUpdateInput
  }

  export type EnumRecurringIntervalTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecurringIntervalType
  }

  export type LocationNullableUpdateEnvelopeInput = {
    set?: LocationCreateInput | null
    upsert?: LocationUpsertInput
    unset?: boolean
  }

  export type DroneUpdateOneWithoutMissionsNestedInput = {
    create?: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutMissionsInput
    upsert?: DroneUpsertWithoutMissionsInput
    disconnect?: boolean
    delete?: DroneWhereInput | boolean
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutMissionsInput, DroneUpdateWithoutMissionsInput>, DroneUncheckedUpdateWithoutMissionsInput>
  }

  export type ReportUpdateManyWithoutMissionNestedInput = {
    create?: XOR<ReportCreateWithoutMissionInput, ReportUncheckedCreateWithoutMissionInput> | ReportCreateWithoutMissionInput[] | ReportUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMissionInput | ReportCreateOrConnectWithoutMissionInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMissionInput | ReportUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: ReportCreateManyMissionInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMissionInput | ReportUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMissionInput | ReportUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ReportUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<ReportCreateWithoutMissionInput, ReportUncheckedCreateWithoutMissionInput> | ReportCreateWithoutMissionInput[] | ReportUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMissionInput | ReportCreateOrConnectWithoutMissionInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMissionInput | ReportUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: ReportCreateManyMissionInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMissionInput | ReportUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMissionInput | ReportUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MissionCreateNestedOneWithoutReportInput = {
    create?: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
    connectOrCreate?: MissionCreateOrConnectWithoutReportInput
    connect?: MissionWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
    connectOrCreate?: MissionCreateOrConnectWithoutReportInput
    upsert?: MissionUpsertWithoutReportInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutReportInput, MissionUpdateWithoutReportInput>, MissionUncheckedUpdateWithoutReportInput>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DroneStatus[] | ListEnumDroneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
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

  export type NestedEnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type NestedEnumMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusFilter<$PrismaModel> | $Enums.MissionStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    altitude?: FloatFilter<"Location"> | number
  }

  export type NestedEnumRecurringIntervalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringIntervalType | EnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringIntervalTypeFilter<$PrismaModel> | $Enums.RecurringIntervalType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionStatus | EnumMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionStatus[] | ListEnumMissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumMissionStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRecurringIntervalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringIntervalType | EnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringIntervalType[] | ListEnumRecurringIntervalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringIntervalTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecurringIntervalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringIntervalTypeFilter<$PrismaModel>
    _max?: NestedEnumRecurringIntervalTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type MissionCreateWithoutDroneInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutDroneInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutDroneInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutDroneInput, MissionUncheckedCreateWithoutDroneInput>
  }

  export type MissionCreateManyDroneInputEnvelope = {
    data: MissionCreateManyDroneInput | MissionCreateManyDroneInput[]
  }

  export type MissionUpsertWithWhereUniqueWithoutDroneInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutDroneInput, MissionUncheckedUpdateWithoutDroneInput>
    create: XOR<MissionCreateWithoutDroneInput, MissionUncheckedCreateWithoutDroneInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutDroneInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutDroneInput, MissionUncheckedUpdateWithoutDroneInput>
  }

  export type MissionUpdateManyWithWhereWithoutDroneInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutDroneInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: StringFilter<"Mission"> | string
    name?: StringFilter<"Mission"> | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    area?: StringFilter<"Mission"> | string
    status?: EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus
    progress?: IntFilter<"Mission"> | number
    recurring?: BoolFilter<"Mission"> | boolean
    recurringInterval?: EnumRecurringIntervalTypeFilter<"Mission"> | $Enums.RecurringIntervalType
    droneId?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
  }

  export type DroneCreateWithoutMissionsInput = {
    id?: string
    model: string
    modelId: string
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: string
    status: $Enums.DroneStatus
    battery: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUncheckedCreateWithoutMissionsInput = {
    id?: string
    model: string
    modelId: string
    maxAltitude: number
    topSpeed: number
    maxWeight: number
    range: number
    type: string
    status: $Enums.DroneStatus
    battery: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneCreateOrConnectWithoutMissionsInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
  }

  export type ReportCreateWithoutMissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutMissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutMissionInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutMissionInput, ReportUncheckedCreateWithoutMissionInput>
  }

  export type ReportCreateManyMissionInputEnvelope = {
    data: ReportCreateManyMissionInput | ReportCreateManyMissionInput[]
  }

  export type LocationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUpsertInput = {
    set: LocationCreateInput | null
    update: LocationUpdateInput
  }

  export type DroneUpsertWithoutMissionsInput = {
    update: XOR<DroneUpdateWithoutMissionsInput, DroneUncheckedUpdateWithoutMissionsInput>
    create: XOR<DroneCreateWithoutMissionsInput, DroneUncheckedCreateWithoutMissionsInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutMissionsInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutMissionsInput, DroneUncheckedUpdateWithoutMissionsInput>
  }

  export type DroneUpdateWithoutMissionsInput = {
    model?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    maxAltitude?: IntFieldUpdateOperationsInput | number
    topSpeed?: IntFieldUpdateOperationsInput | number
    maxWeight?: FloatFieldUpdateOperationsInput | number
    range?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    battery?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateWithoutMissionsInput = {
    model?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    maxAltitude?: IntFieldUpdateOperationsInput | number
    topSpeed?: IntFieldUpdateOperationsInput | number
    maxWeight?: FloatFieldUpdateOperationsInput | number
    range?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    battery?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutMissionInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutMissionInput, ReportUncheckedUpdateWithoutMissionInput>
    create: XOR<ReportCreateWithoutMissionInput, ReportUncheckedCreateWithoutMissionInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutMissionInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutMissionInput, ReportUncheckedUpdateWithoutMissionInput>
  }

  export type ReportUpdateManyWithWhereWithoutMissionInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutMissionInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    missionId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type MissionCreateWithoutReportInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drone?: DroneCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateWithoutReportInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneId?: string | null
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionCreateOrConnectWithoutReportInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
  }

  export type MissionUpsertWithoutReportInput = {
    update: XOR<MissionUpdateWithoutReportInput, MissionUncheckedUpdateWithoutReportInput>
    create: XOR<MissionCreateWithoutReportInput, MissionUncheckedCreateWithoutReportInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutReportInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutReportInput, MissionUncheckedUpdateWithoutReportInput>
  }

  export type MissionUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateManyDroneInput = {
    id?: string
    name: string
    type: $Enums.MissionType
    area: string
    status: $Enums.MissionStatus
    progress: number
    recurring: boolean
    waypoints: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    recurringInterval: $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateWithoutDroneInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutDroneInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutDroneInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus
    progress?: IntFieldUpdateOperationsInput | number
    recurring?: BoolFieldUpdateOperationsInput | boolean
    waypoints?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    recurringInterval?: EnumRecurringIntervalTypeFieldUpdateOperationsInput | $Enums.RecurringIntervalType
    droneLocation?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyMissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutMissionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutMissionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutMissionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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