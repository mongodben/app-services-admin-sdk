import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export interface ProviderSummary {
  id?: string;
  name?: string;
  type?: ProviderType;
  disabled?: boolean;
}

export interface PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema {
  username: string;
  apiKey: string;
}

export interface Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema {
  /**
   * An access token you may provide in the `Authorization` header of API
   * requests. [The App Services API Authentication section](#section/Get-Authentication-Tokens) demonstrates how to use this token.
   */
  accessToken?: string;
  /**
   * A refresh token you may provide in the `Authorization` header of
   * [POST auth/session](#section/adminCreateSession)
   * to obtain a new `access_token` for the current user session.
   *
   */
  refreshToken?: string;
  /** The unique `_id` value of the MongoDB Cloud user. */
  userId?: string;
  deviceId?: string;
}

export interface RealmProfile {
  userId?: string;
  domainId?: string;
  identities?: ProviderSummary[];
  data?: RealmProfileData;
  type?: ProfileType;
  roles?: RealmProfileRolesItem[];
}

export interface RealmProfileData {
  email?: string;
  name?: string;
}

export interface RealmProfileRolesItem {
  roleName?: string;
  groupId?: string;
}

export interface PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema {
  accessToken?: string;
}

export interface AppProviderRegion {
  /** The short identifier for the region. */
  id?: string;
  /** A descriptive name for the region. */
  name?: string;
  /** The cloud provider that hosts the region. */
  cloudProvider?: string;
  /** The country where the region is physically hosted. */
  country?: string;
  /**
   * The [deployment
   * models](https://www.mongodb.com/docs/atlas/app-services/manage-apps/deploy/deployment-models-and-regions/#deployment-models)
   * that this region supports.
   */
  deploymentModels?: AppProviderRegionDeploymentModelsItem[];
}

export interface NewApplication {
  /** Can only contain ASCII letters, numbers, underscores, and hyphens. */
  name: string;
  /**
   * Name of [supported template
   * app](https://www.mongodb.com/docs/realm/manage-apps/create/template-apps#std-label-template-apps) to
   * serve as base template.
   */
  templateId?: string;
  dataSource?: DataSource;
}

export interface DataSource {}

export interface AtlasCluster {
  name?: "mongodb-atlas";
  type?: "mongodb-atlas";
  config?: AtlasClusterConfig;
}

export interface AtlasClusterConfig {
  /**
   * The service name used to refer to the data source within
   * this Atlas app. The name may be at most 64 characters
   * long and must only contain ASCII letters, numbers,
   * underscores, and hyphens.
   */
  clusterName: string;
  /**
   * The [read
   * preference](https://www.mongodb.com/docs/atlas/app-services/mongodb/read-preference/#std-label-read-preference)
   * mode for read requests to the data source.
   */
  readPreference?: AtlasClusterConfigReadPreference;
  /**
   * If true, clients may [connect to the app over the
   * MongoDB Wire
   * Protocol](https://www.mongodb.com/docs/atlas/app-services/mongodb/wire-protocol/#connect-over-the-wire-protocol).
   */
  wireProtocolEnabled?: boolean;
}

export interface AtlasFederatedInstance {
  name?: "mongodb-datalake";
  type?: "mongodb-datalake";
  config?: AtlasFederatedInstanceConfig;
}

export interface AtlasFederatedInstanceConfig {
  /**
   * The service name used to refer to the Federated database
   * instance within this Atlas app. The name may be at most
   * 64 characters long and must only contain ASCII letters,
   * numbers, underscores, and hyphens.
   */
  dataLakeName: string;
}

export interface ApplicationSummary {
  /** The application's unique internal ID. */
  id?: string;
  /** The application's public App ID. */
  clientAppId?: string;
  /** The name of the application. */
  name?: string;
  /** The application's deployment region. */
  location?: string;
  /** The application's deployment model. */
  deploymentModel?: string;
  /** The application's associated domain ID. */
  domainId?: string;
  /** The application's current owner ID. */
  groupId?: string;
  /** The time this app was last used. */
  lastUsed?: number;
  /** The time this app was last modified. */
  lastModified?: number;
  /** The product this app is for. */
  product?: string;
  /** The environment the app is in. */
  environment?: string;
}

export interface Application {
  /** The application's unique internal ID. */
  id?: string;
  /** The application's public App ID. */
  clientAppId?: string;
  /** The name of the application. */
  name?: string;
  /** The application's deployment region. */
  location?: string;
  /** The application's deployment model. */
  deploymentModel?: string;
  domainId?: string;
  /**
   * An Atlas [Project/Group
   * ID](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
   */
  groupId?: string;
}

export interface TriggerRequest {
  /** The name of the trigger. */
  name: string;
  /** The type of the trigger. */
  type: TriggerRequestType;
  /** The ID of the function associated with the trigger. */
  functionId: string;
  /** Default: `false` If true, the trigger is disabled. */
  disabled?: boolean;
  /** An object that defines configuration values for the trigger. */
  config?: TriggerRequestConfig;
  /**
   * An object where each field name is an event processor ID and each value
   * is an object that configures its corresponding event processor. The
   * following event processors are supported: `AWS_EVENTBRIDGE` For an
   * example configuration object, see [Send Trigger Events to AWS
   * EventBridge](https://www.mongodb.com/docs/realm/triggers/examples/send-events-aws-eventbridge#std-label-event_processor_example).
   */
  eventProcessors?: Record<string, unknown>;
}

/** An object that defines configuration values for the trigger. */
export interface TriggerRequestConfig {
  /**
   * **Required for Database Triggers** -- The [database event operation
   * types](https://www.mongodb.com/docs/realm/triggers/database-triggers#std-label-database-events) to
   * listen for. This must contain at least one value.
   */
  operationTypes: TriggerRequestConfigOperationTypesItem[];
  /**
   * **Required for Authentication Triggers** -- The [authentication
   * operation
   * type](https://www.mongodb.com/docs/realm/triggers/authentication-triggers#std-label-authentication-event-operation-types)
   * to listen for.
   */
  operationType: TriggerRequestConfigOperationType;
  /**
   * **Only Available for Authentication Triggers** -- A list of one or more
   * [authentication
   * provider](https://www.mongodb.com/docs/realm/authentication/providers) id
   * values. The trigger will only listen for authentication events produced
   * by these providers.
   */
  providers: string;
  /**
   * **Required for Database Triggers** -- The name of the MongoDB database
   * that contains the watched collection.
   */
  database: string;
  /**
   * **Required for Database Triggers** -- The name of the MongoDB collection
   * that the trigger watches for change events. The collection must be part
   * of the specified database.
   */
  collection: string;
  /**
   * **Required for Database Triggers** -- The ID of the MongoDB Service
   * associated with the trigger.
   */
  serviceId: string;
  /**
   * **Only Available for Database Triggers** -- A
   * [$match](https://www.mongodb.com/docs/manual/reference/operator/aggregation/match)
   * expression document that App Services includes in the underlying change
   * stream pipeline for the trigger. This is useful when you want to filter
   * change events beyond their operation type. The trigger will only fire if
   * the expression evaluates to true for a given change event.
   */
  match?: Record<string, unknown>;
  /**
   * **Only Available for Database Triggers** -- If true, indicates that
   * `UPDATE` change events should include the most current
   * [majority-committed](https://www.mongodb.com/docs/manual/reference/read-concern-majority/)
   * version of the modified document in the `fullDocument` field.
   */
  fullDocument?: boolean;
  /**
   * **Only Available for Database Triggers** -- If true, indicates that the
   * `UPDATE` change event response should include a copy of the modified
   * document from before the update was applied.
   * [Preimages](https://www.mongodb.com/docs/realm/mongodb/preimages/)
   * must be enabled.
   */
  fullDocumentBeforeChange?: boolean;
  /**
   * **Only Available for Scheduled Triggers** -- A [cron
   * expression](https://www.mongodb.com/docs/realm/triggers/cron-expressions)
   * that defines the trigger schedule.
   */
  schedule?: string;
  /**
   * **Only Available for Database Triggers** -- If ``true``,
   * event ordering is disabled and this trigger can process
   * events in parallel. If ``false``, event ordering is
   * enabled and the trigger executes serially.
   */
  unordered?: boolean;
}

export interface TriggerResponse {
  /** The unique ID of the trigger. */
  id?: string;
  /** The name of the trigger. */
  name?: string;
  /** The type of the trigger. */
  type?: string;
  /** The ID of the function associated with the trigger. */
  functionId?: string;
  /** The name of the function associated with the trigger. */
  functionName?: string;
  /** If true, the trigger is disabled and will not fire. */
  disabled?: boolean;
}

export interface ErrorModel {
  /** A message that describes the error. */
  error?: string;
  /** The error type. */
  errorCode?: string;
}

export interface PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema {
  /**
   * If `true`, attempts to resume the trigger from the
   * first change event after it failed by using a resume
   * token. Otherwise, resumes the trigger without
   * processing missed events.
   */
  disableToken?: boolean;
}

export interface PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema {
  /** A description of the error that App Services encountered. */
  error?: string;
}

export interface NewValue {
  name: string;
  private: boolean;
  /** Anything */
  value: any;
}

export interface Value {
  id?: string;
  name?: string;
  private?: boolean;
  /** Anything */
  value?: any;
}

export interface PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema {}

/**
 * **THIRD-PARTY SERVICES ARE DEPRECATED**
 *
 * See [Third-Party Services](https://www.mongodb.com/docs/atlas/app-services/reference/services/) for more information.
 */
export interface ThirdPartyService {
  /** A unique ID for the third-party service. */
  id?: string;
  /** The third-party service name. */
  name?: string;
  /** The type of third party service. */
  type?: ThirdPartyServiceType;
  version?: number;
}

export interface Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema {}

export interface Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema {}

export interface PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema {
  /** The name of the database that contains the collection to validate. */
  databaseName: string;
  /** The name of the collection to validate. */
  collectionName: string;
  /** The EJSON schema to validate sampled documents against. */
  fromSchema: Record<string, unknown>;
  /**
   * A [MongoDB query](https://www.mongodb.com/docs/manual/tutorial/query-documents/)
   * that matches documents in the collection. The result of running this query is the
   * sample population. Use this to narrow the sample to a subset of documents in the
   * collection.
   */
  query?: Record<string, unknown>;
  /** The maximum number of documents to sample. */
  limit?: number;
  /**
   * A [MongoDB sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/) for the collection.
   * Use this to determine which end of a range query to start sampling from.
   */
  sort?: Record<string, unknown>;
}

export interface Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema {
  errors?: Post200ApplicationJsonPropertiesItemsItem[];
  /** The total number of documents that were sampled. */
  totalProcessedCount?: number;
  /** The total number of documents that failed any validation. */
  totalErrorCount?: number;
}

export interface Post200ApplicationJsonPropertiesItemsItem {
  /** The type of the schema validation error. */
  errorCode?: ValidationError;
  /** The number of sampled documents that failed this validation. */
  errorCount?: number;
  /** The path of the field that failed this validation. */
  field?: string;
  /** A list of the `_id` values for sampled documents that failed this validation. */
  failedIds?: string[];
  /** A MongoDB query filter that matches sampled documents that failed this validation. */
  failedDocumentsQuery?: Record<string, unknown>;
}

/** An EJSON schema validation error. */
export interface ValidationError {}

export interface BuildInfo {
  /**
   * Human-readable version information about the mongod instance. This
   * string will take the format `<major>.<minor>.<patch>`.
   */
  version?: string;
  /**
   * The commit identifier that identifies the state of the code use to build
   * the mongod.
   */
  gitVersion?: string;
  /**
   * An array that conveys version information about the mongod instance. See
   * version for a more readable version of this string.
   */
  versionArray?: number[];
  /**
   * A string that reports the JavaScript engine used in the mongod instance.
   * By default, this is `mozjs` after version `3.2`, and previously `V8`.
   */
  javascriptEngine?: string;
  /**
   * A number that reflects the target processor architecture of the mongod
   * binary.
   */
  bits?: string;
  /**
   * A boolean that reflects whether or not the `mongod` instance was built
   * with debugging options.
   */
  debug?: boolean;
  /**
   * A number that reports the [Maximum BSON Document
   * Size](https://www.mongodb.com/docs/manual/reference/limits/#BSON-Document-Size)
   */
  maxBsonObjectSize?: number;
}

export interface Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema {}

/** A data access rule that defines user roles and query filters for a collection in a linked data source. */
export interface Rule {
  /** The rule's unique ObjectId identifier. */
  id?: string;
  /** The name of a database in the linked data source. */
  database: string;
  /** The name of a collection in the specified `database`. */
  collection: string;
  /** A list of data access roles. */
  roles?: Role[];
  /** A list of filters for incoming operations. */
  filters?: Filter[];
}

/** A data access role that assigns read and write permissions to a user for each document */
export interface Role {
  /** The role's unique ObjectId identifier. */
  id?: string;
  /** The role's name. */
  name?: string;
  /** A rule expression that evaluates to `true` when this role applies to a user for a specific document. */
  applyWhen?: Expression;
  /** A rule expression that evaluates to `true` if the role has permission to add, modify, or remove all fields in the document. */
  write?: Expression;
  /** A rule expression that evaluates to `true` if the role has permission to insert a new document into the collection. */
  insert?: Expression;
  /** A rule expression that evaluates to `true` if the role has permission to delete a document from the collection. */
  delete?: Expression;
  /** A rule expression that evaluates to `true` if the role has permission to search the collection using [Atlas Search](https://www.mongodb.com/docs/atlas/atlas-search/). */
  search?: Expression;
  /** Field-level rules for any fields that are not explicitly configured in the role's `properties`. */
  fields?: {
    [propertyName: string]: Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties;
  };
  /** Field-level rules for any fields that are not explicitly configured in the role's `properties`. */
  additionalFields?: FieldLevelPermissions;
}

/** A [rule expression](https://mongodb.com/docs/atlas/app-services/rules/expressions/). */
export interface Expression {}

/** Read and write permissions for a field. */
export interface FieldLevelPermissions {
  /** A rule expression that evaluates to `true` if the role can read the field's value. */
  read: Expression;
  /** A rule expression that evaluates to `true` if the role can write the field's value. */
  write: Expression;
}

export interface Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1 {
  /** An object that maps document field names to read and write permissions for the field and its children. */
  fields?: {
    [propertyName: string]: Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties;
  };
}

/** A filter that conditionally modifies incoming query operations before they run. */
export interface Filter {
  /** The filter's unique ObjectId identifier. */
  id?: string;
  /** The filter's name. */
  name?: string;
  /** A rule expression that evaluates to `true` if the filter applies to an incoming query. */
  applyWhen?: Expression;
  /** A MongoDB query object that is merged into an incoming query before the operation runs. */
  query?: Record<string, unknown>;
  /** A MongoDB projection object that is merged into an incoming query before the operation runs. */
  projection?: { [propertyName: string]: Enum8 };
}

/** [Deprecated] A rule for a third-party service. */
export interface ThirdPartyServiceRule {
  name: string;
  /** Anything */
  actions?: any;
  /** Any object */
  when: Record<string, unknown>;
}

export interface Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema {
  id?: string;
  name?: string;
}

export interface Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema {}

export interface Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema {}

/** A data access rule that define defines fallback user roles and query filters for collection's that don't have more specific permissions defined. */
export interface DefaultRule {
  /** The default rule's unique ObjectId identifier. */
  id?: string;
  /** An ordered list of default user roles. */
  roles?: Role[];
  /** A list of default [query filters](https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/config/data_sources/#filters). */
  filters?: Filter[];
}

export interface BasicError {
  error?: string;
}

export interface PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema {
  /** The name of the database that contains the collection. */
  databaseName: string;
  /** The name of the collection to sample and generate a schema for. */
  collectionName: string;
  /** The maximum number of documents to include in the sample. */
  limit: number;
}

export interface Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema {
  /** The generated JSON schema */
  schema?: Record<string, unknown>;
}

export interface IncomingWebhook {
  name: string;
  functionSource: string;
  respondResult: boolean;
  options?: IncomingWebhookOptions;
}

export interface IncomingWebhookOptions {
  secret?: string;
  secretAsQueryParam?: boolean;
}

export interface SyncDataResponse {
  /** The Service ID for the currently synced cluster, if there is one. */
  serviceId?: string;
  /**
   * A list of valid partition keys based on the cluster's collection
   * schemas.
   */
  partitionFields?: Partition[];
}

export interface Partition {
  key?: string;
  type?: string;
}

export interface NewMessage {
  label: string;
  message: string;
  topic: string;
  state: MessageState;
}

export interface Message {
  allowedIps?: string;
  appID?: string;
  label?: string;
  message?: string;
  topic?: string;
  created?: string;
  sent?: string;
  state?: MessageState;
}

export interface User {
  id?: string;
  /** Anything */
  identities?: any;
  type?: string;
  creationDate?: number;
  lastAuthenticationDate?: number;
  disabled?: boolean;
  /** Any object */
  data?: Record<string, unknown>;
}

export interface PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema {
  email: string;
  password: string;
}

export interface PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema {
  token: string;
}

export interface PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema {
  /** User ID. */
  sub?: string;
  /**
   * Optional; specifies which Resource Servers the JWT is valid for. Omitted
   * if empty.
   */
  aud?: string;
  /** Unix timestamp after which the JWT expires. */
  exp?: number;
  /** Unix timestamp at which the JWT was issued. */
  iat?: number;
  /** The issuer of the JWT. */
  iss?: string;
  /**
   * Optional; contains [custom user
   * data](https://www.mongodb.com/docs/realm/users/enable-custom-user-data#std-label-custom-user-data)
   * if it exists for the user. Only present if the access token is created
   * after custom user data is enabled and configured. Omitted if empty.
   */
  customUserData?: Record<string, unknown>;
  /** The UID representing the app domain. */
  domainId?: string;
  /** Optional: any metadata stored with the token. Omitted if empty. */
  data?: string;
  /** The UID representing the device. */
  deviceId?: string;
}

export interface PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema {
  /** The service to use when calling this function. */
  service?: string;
  /** The name of the function you want to run. */
  name: string;
  /** Any arguments that your function needs. */
  arguments?: string[];
}

export interface PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema {
  /** Any object */
  error?: Record<string, unknown>;
  /** Anything */
  logs?: any;
  /** Any object */
  result?: Record<string, unknown>;
  stats?: Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats;
}

export interface Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats {
  executionTime?: string;
}

export interface Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema {
  /**
   * This JSON expression must evaluate to `true` before the function may
   * run. If this field is blank, it will evaluate to `true`.
   */
  evalSource?: string;
  source: string;
}

export interface Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema {
  /** Any object */
  error?: Record<string, unknown>;
  /** Anything */
  logs?: any;
  /** Any object */
  result?: Record<string, unknown>;
  stats?: Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats;
}

export interface Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats {
  executionTime?: string;
}

export interface NewProvider {
  name: string;
  type: ProviderType;
  disabled: boolean;
  /** Any object */
  config?: Record<string, unknown>;
}

export interface FullProvider {
  id?: string;
  name?: string;
  type?: ProviderType;
  disabled?: boolean;
  /** Any object */
  config?: Record<string, unknown>;
}

export interface Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema {
  /** ObjectID */
  id?: string;
  address?: string;
  /** net.IP */
  ip?: string;
  /** net.IPNet */
  network?: string;
  comment?: string;
}

export interface PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema {
  /** ObjectID */
  id?: string;
  address?: string;
  /** net.IP */
  ip?: string;
  /** net.IPNet */
  network?: string;
  comment?: string;
}

export interface Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema {
  /** At most 100 results per request. */
  logs?: Get200ApplicationJsonPropertiesItemsItem[];
  /**
   * The end date and time of the next page of log entries in ISO 8601
   * format. App Services paginates the result sets of queries that match
   * more than 100 log entries and includes this field in paginated
   * responses. To get the next page of up to 100 entries, pass this value as
   * the `end_date` parameter in a subsequent request.
   */
  nextEndDate: string;
  /**
   * The offset into the next page of log entries in ISO 8601 format. MongoDB
   * App Services paginates the result sets of queries that match more than 100 log
   * entries and includes this field in paginated responses where the first
   * entry on the next page has the same timestamp as the last entry on this
   * page. To get the next page of up to 100 entries, pass this value, if it
   * is present, as the `skip` parameter in a subsequent request.
   */
  nextSkip: number;
}

export interface Get200ApplicationJsonPropertiesItemsItem {
  id?: string;
  coId?: string;
  domainId?: string;
  /**
   * The ObjectID of your application.
   * [The App Services API Project and Application IDs section](#section/Project-and-Application-IDs) demonstrates how to find this
   * value.
   */
  appId?: string;
  /**
   * An Atlas [Project/Group
   * ID](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
   */
  groupId?: string;
  requestUrl?: string;
  requestMethod?: string;
  started?: string;
  completed?: string;
  error?: string;
  errorCode?: string;
  status?: number;
}

export interface LogForwarder {
  id?: string;
  name?: string;
  disabled?: boolean;
  logTypes?: LogType[];
  logStatuses?: LogStatus[];
  policy?: LogForwardingPolicy;
  action?: LogForwardingAction;
}

export interface LogForwardingPolicy {
  type?: LogForwardingPolicyType;
}

export interface LogForwardingAction {
  type?: LogForwardingActionType;
  name?: string;
  dataSource?: string;
  database?: string;
  collection?: string;
}

export interface Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema {
  name: string;
}

export interface ApiKey {
  id?: string;
  key?: string;
  name?: string;
  disabled?: string;
}

export interface ApiKeyResponse {
  id?: string;
  name?: string;
  disabled?: string;
}

export interface Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema {
  name: string;
  value: string;
}

export interface Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema {
  id?: string;
  name?: string;
}

export interface PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema {
  id?: string;
  name: string;
  value: string;
}

export interface NewFunction {
  /**
   * A JSON expression that evaluates to `true` if the Function is allowed to
   * run in response to an incoming request.
   */
  canEvaluate?: Record<string, unknown>;
  /** A unique name for the Function. */
  name: string;
  /**
   * If `true`, the function is hidden from client applications. You can
   * still call a private function from JSON expressions and other functions,
   * including incoming webhooks and triggers.
   */
  private: boolean;
  /**
   * The stringified source code for the function. The code must be valid
   * ES6.
   */
  source: string;
  /**
   * If `true`, the function executes with full privileges, bypassing rules
   * on all services.
   */
  runAsSystem: boolean;
}

export interface Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema {
  /** Unique identifier for the function. */
  id?: string;
  /** Name for the function specified in the `name` field of the request. */
  name?: string;
}

export interface FunctionModel {
  id?: string;
  /**
   * A JSON expression that evaluates to `true` if the Function is allowed to
   * run in response to an incoming request.
   */
  canEvaluate?: Record<string, unknown>;
  /** A unique name for the Function. */
  name?: string;
  /**
   * If `true`, the function is hidden from client applications. You can
   * still call a private function from JSON expressions and other functions,
   * including incoming webhooks and triggers.
   */
  private?: boolean;
  /**
   * The stringified source code for the function. The code must be valid
   * ES6.
   */
  source?: string;
}

export interface DependenciesSummary {
  /** The dependency collection's unique internal ID. */
  id?: string;
  /** The application's deployment region. */
  location?: string;
  /**
   * The unique `_id` value of the MongoDB Cloud user that uploaded the
   * dependency collection.
   */
  userId?: string;
  /**
   * The time at which the dependencies were uploaded in [Unix
   * time](https://en.wikipedia.org/wiki/Unix_time) (number of seconds since
   * January 1, 1970 at 00:00 UTC).
   */
  lastModified?: number;
  /**
   * An array of documents that each describe a dependency uploaded to the
   * application.
   */
  dependenciesList?: Dependency[];
}

export interface Dependency {
  /** The name of the uploaded dependency. */
  name?: string;
  /** The version of the uploaded dependency. */
  version?: string;
}

export interface Deployment {
  /** The unique ID of the deployment. */
  id?: string;
  /** The unique `_id` value of the Atlas App Services app. */
  appId?: string;
  /**
   * The unique `_id` value of the deployment draft associated with the
   * deployment, if applicable.
   */
  draftId?: string;
  /** The unique `_id` value of the MongoDB Cloud user that deployed the draft. */
  userId?: string;
  /**
   * The time at which the deployment was made. Represented as the number of
   * seconds since January 1, 1970.
   */
  deployedAt?: number;
  /** The deployment method used to create the deployment. */
  origin?: string;
  /** The commit hash of the deployment (Automatic GitHub Deployment) */
  commit?: string;
  /** A message that indicates whether or not the deployment was successful. */
  status?: string;
  /**
   * The error message of the error that caused the deployment to fail, if
   * applicable.
   */
  statusErrorMessage?: string;
  /**
   * A link to the diff of changes in the deployment (Automatic GitHub
   * Deployment)
   */
  diffUrl?: string;
}

export interface DeploymentDraft {
  /** The unique ID of the draft. */
  id?: string;
  /** The unique `_id` value of the MongoDB Cloud user that created the draft. */
  userId?: string;
  app?: Application;
}

export interface Diff {
  /**
   * A list where each item is the line-by-line diff for a specific
   * configuration file.
   */
  diffs?: string[];
  /**
   * The filenames of hosted files that have been added, removed, or
   * modified.
   */
  hostingFilesDiff?: DiffHostingFilesDiff;
}

/**
 * The filenames of hosted files that have been added, removed, or
 * modified.
 */
export interface DiffHostingFilesDiff {
  added?: string[];
  deleted?: string[];
  modified?: string[];
}

export interface HostingConfiguration {
  enabled?: boolean;
  status?: HostingConfigurationStatus;
  defaultDomain?: HostingConfigurationDefaultDomain;
}

export interface HostingConfigurationDefaultDomain {
  providerType?: string;
  config?: HostingConfigurationDefaultDomainConfig;
}

export interface HostingConfigurationDefaultDomainConfig {
  /** Default domain of hosted Atlas App Services app provided by App Services. */
  appDefaultDomain?: string;
}

export interface Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema {
  /**
   * Set to `true` to enable App Services Hosting.
   * Set to `false` to disable App Services Hosting.
   *
   */
  enabled?: boolean;
}

export interface HostedAssetMetadata {
  /** The unique App ID of the Atlas App Services app that is hosting the file. */
  appId?: string;
  /**
   * The time at which the hosted asset was last modified in [Unix
   * time](https://en.wikipedia.org/wiki/Unix_time) (number of seconds since
   * January 1, 1970 at 00:00 UTC).
   */
  lastModified?: number;
  /** The full URL of the hosted asset. */
  url?: string;
  /** The resource path of the hosted asset */
  path?: string;
  /** The size of the hosted asset in bytes */
  size?: number;
  /**
   * An array of documents that each describe a [metadata
   * attribute](https://www.mongodb.com/docs/realm/hosting/file-metadata-attributes)
   * that applies to the asset.
   */
  attrs?: MetadataAttribute[];
  /** The MD5 checksum hash for the hosted asset */
  hash?: string;
}

export interface MetadataAttribute {
  /**
   * The [metadata
   * attribute](https://www.mongodb.com/docs/realm/hosting/file-metadata-attributes)
   * name.
   */
  name?: string;
  /**
   * The [metadata
   * attribute](https://www.mongodb.com/docs/realm/hosting/file-metadata-attributes)
   * value.
   */
  value?: string;
}

export interface Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema {
  /**
   * The current resource path of the asset to move. Must be used with
   * `move_to`.
   */
  moveFrom?: string;
  /**
   * The resource path to which the asset will move. Must be used with
   * `move_from`.
   */
  moveTo?: string;
  /**
   * The current resource path of the asset to copy. Must be used with
   * `copy_to`.
   */
  copyFrom?: string;
  /**
   * The resource path to which the asset will be copied. Must be used with
   * `copy_from`.
   */
  copyTo?: string;
}

export interface PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema {
  error?: string;
}

export interface Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema {
  /**
   * An [asset metadata
   * document](https://www.mongodb.com/docs/realm/admin/api/v3#std-label-asset-metadata-document)
   * (encoded as JSON).
   */
  meta?: AssetMetadata;
  /** The asset file to upload (encoded as binary). */
  file?: coreRestPipeline.RequestBodyType;
}

export interface AssetMetadata {
  /** The resource path of the asset */
  path?: string;
  /** The size of the asset in bytes */
  size?: number;
  /**
   * An array of documents that each describe a [metadata
   * attribute](https://www.mongodb.com/docs/realm/hosting/file-metadata-attributes)
   * that applies to the asset.
   */
  attrs?: MetadataAttribute[];
  /** The MD5 checksum hash for the asset */
  hash?: string;
}

export interface Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema {
  error?: ErrorModel;
}

export interface Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema {
  attributes?: MetadataAttribute[];
}

export interface PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema {
  /**
   * The [RFC 3339](https://tools.ietf.org/html/3339) date and time of the
   * start of the query period, which can be specified with the `start` query
   * parameter.
   */
  start?: string;
  /**
   * The [RFC 3339](https://tools.ietf.org/html/3339) date and time of the
   * end of the query period, which can be specified with the `end` query
   * parameter.
   */
  end?: string;
  /**
   * The granularity, which can be specified with the `granularity` query
   * parameter.
   */
  granularity?: string;
  /**
   * The Atlas [Group
   * ID](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
   */
  groupId?: string;
  /** The array of measurements. */
  measurements?: PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems[];
}

export interface PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems {
  /**
   * The usage metric represented by each data point. See
   * [billing](https://www.mongodb.com/docs/realm/billing).
   */
  name?: GetResponses200ContentApplicationJsonSchemaMeasurementsItemName;
  /** The unit of the `value` of each data point. */
  units?: GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits;
  /**
   * The array of data points for this measurement. A finer `granularity`
   * results in more data points.
   */
  dataPoints?: Get200ApplicationJsonPropertiesItemsDataPointsItem[];
}

export interface Get200ApplicationJsonPropertiesItemsDataPointsItem {
  /** The ISO 8601 date and time of the data point. */
  timestamp?: string;
  /** The value at the time in the `unit` of the measurement. */
  value?: number;
}

export interface Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema {
  /** A message describing the error. */
  error?: string;
}

export interface Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema {
  /**
   * The RFC 3339 date and time of the start of the query period, which can
   * be specified with the `start` query parameter.
   */
  start?: string;
  /**
   * The RFC 3339 date and time of the end of the query period, which can be
   * specified with the `end` query parameter.
   */
  end?: string;
  /**
   * The granularity, which can be specified with the `granularity` query
   * parameter.
   */
  granularity?: string;
  /**
   * The Atlas [Group
   * ID](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
   */
  groupId?: string;
  /** The Atlas App Services app ID specified by the `appId` path parameter. */
  appId?: string;
  /** The name of the Atlas App Services app specified by the `appId` path parameter. */
  appName?: string;
  /** The array of measurements. */
  measurements?: PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems[];
}

export interface PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems {
  /**
   * The usage metric represented by each data point. See
   * [billing](https://www.mongodb.com/docs/realm/billing).
   */
  name?: Enum20;
  /** The unit of the `value` of each data point. */
  units?: Enum21;
  /**
   * The array of data points for this measurement. A finer `granularity`
   * results in more data points.
   */
  dataPoints?: PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems[];
}

export interface PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems {
  /** The ISO 8601 date and time of the data point. */
  timestamp?: string;
  /** The value at the time in the `unit` of the measurement. */
  value?: number;
}

export interface Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems {
  id?: string;
  /** Any object */
  schema?: Record<string, unknown>;
  /** Metadata the describes which linked collection the schema applies to. */
  metadata?: SchemaMetadata;
}

/** Metadata the describes which linked collection the schema applies to. */
export interface SchemaMetadata {
  /** The data source name. */
  dataSource?: string;
  /** The database name. */
  database?: string;
  /** The collection name. */
  collection?: string;
}

export interface Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema {
  id?: string;
  /** A valid [schema](https://www.mongodb.com/docs/realm/schemas) for the collection. */
  schema: Record<string, unknown>;
  /** Metadata the describes which linked collection the schema applies to. */
  metadata: SchemaMetadata;
}

export interface Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema {
  id?: string;
  /** Metadata the describes which linked collection the schema applies to. */
  metadata?: SchemaMetadata;
}

export interface Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema {
  id?: string;
  /** Any object */
  schema?: Record<string, unknown>;
}

export interface Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema {
  id?: string;
  /** A valid [schema](https://www.mongodb.com/docs/realm/schemas) for the collection. */
  schema: Record<string, unknown>;
  /** Relationships to foreign collections. Each field name is a property in the schema. The corresponding value is a [relationship](https://www.mongodb.com/docs/realm/schemas/relationships/) definition for that field. */
  relationships?: { [propertyName: string]: Relationship };
  /** Metadata the describes which linked collection the schema applies to. */
  metadata?: SchemaMetadata;
}

/** A [relationship](https://www.mongodb.com/docs/realm/schemas/relationships/) definition. */
export interface Relationship {
  /** A reference string for the foreign collection. */
  ref?: string;
  /** The name of the field in the foreign collection that the relationship points to. */
  foreignKey?: string;
  /**
   * If `true`:
   *
   * - the relationship may point to many foreign documents.
   * - the local field must be defined as an array in the collection schema.
   */
  isList?: boolean;
}

export interface Endpoint {
  route?: string;
  httpMethod?: EndpointHttpMethod;
  functionName?: string;
  validationMethod?: EndpointValidationMethod;
  /** The default [data format](https://mongodb.com/docs/atlas/app-services/data-api/#data-formats) returned by custom HTTPS endpoints. */
  returnType?: EndpointDataFormat;
  respondResult?: boolean;
  fetchCustomUserData?: boolean;
  createUserOnAuth?: boolean;
  disabled?: boolean;
}

export interface DataApiConfig {
  disabled?: boolean;
  versions?: string[];
  /** The default [data format](https://mongodb.com/docs/atlas/app-services/data-api/#data-formats) returned by Data API endpoints. */
  returnType?: EndpointDataFormat;
  createUserOnAuth?: boolean;
  /** An application user's account ID. If defined, endpoints will always run as the specified user. */
  runAsUserId?: string;
  /**
   * Stringified source code for a function that returns an
   * application user's account ID. If defined, endpoints execute
   * the function on every request and run as the user with the
   * ID returned from the function.
   */
  runAsUserIdScriptSource?: string;
}

export interface Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema {
  /**
   * A stringified `.graphql` file that contains one or
   * more valid GraphQL operations for your API. If more
   * than one operation is defined, you must specify
   * which operation to run in `operationName`.
   */
  query: string;
  /**
   * A stringified JSON object where each field name maps
   * a value to a variable in the specified operation.
   */
  variables?: string;
  /**
   * The name of the GraphQL operation specified in
   * `query` to run.
   */
  operationName?: string;
}

/** The result of the specified operation. */
export interface Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema {
  /** The result of a successful operation. If `null`, the operation had errors. */
  data: Record<string, unknown> | null;
  /** A list of errors encountered while running an operation. */
  errors?: Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems[];
}

/** An error encountered while running an operation. */
export interface Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems {
  /** A message that describes the error. */
  message: string;
  /** A list of one or more locations in the operation that caused the error. */
  locations: Post200ApplicationJsonPropertiesItemsLocationsItem[];
}

/** The operation line and column numbers that caused an error. */
export interface Post200ApplicationJsonPropertiesItemsLocationsItem {
  line: number;
  column: number;
}

export interface CustomResolver {
  /** The custom resolver's unique ID. */
  id: string;
  /** The resolver function's unique ID. */
  functionId: string;
  /**
   * The name of the resolver's parent type. This can be
   * `"Query"`, `"Mutation"`, or the name of a generated type if
   * this is a computed property.
   */
  onType: string;
  /** The name of the custom resolver field that appears in the GraphQL schema. */
  fieldName: string;
  /**
   * The type of the custom resolver's `input` parameter. This
   * can be a scalar, the name of an existing generated type, or
   * a custom JSON schema object. If undefined, the resolver does
   * not accept an input.
   */
  inputType?: CustomResolverInputType;
  /**
   * The kind of input type the custom resolver uses. This value
   * must agree with the value of `input_type`:
   *
   * - A scalar input type must use `"scalar"` or `"scalar-list"`
   * - A generated input type must use `"generated"` or `"generated-list"`
   * - A custom input type must use `"custom"`
   *
   * If undefined, the resolver does not accept an input.
   */
  inputTypeFormat?: CustomResolverInputTypeFormat;
  /**
   * The type of the value returned by the custom resolver. This
   * can be a scalar, the name of an existing generated type, or
   * a custom JSON schema object.
   *
   * If undefined, the resolver returns a `DefaultPayload`
   * object:
   *
   * ```graphql
   * type DefaultPayload {
   *   status: String!
   * }
   * ```
   */
  payloadType?: CustomResolverPayloadType;
  /**
   * The kind of payload type the custom resolver uses. This value
   * must agree with the value of `payload_type`:
   *
   * - A scalar payload type must use `"scalar"` or `"scalar-list"`
   * - A generated payload type must use `"generated"` or `"generated-list"`
   * - A custom payload type must use `"custom"`
   *
   * If undefined, the resolver returns a `DefaultPayload` object.
   */
  payloadTypeFormat?: CustomResolverPayloadTypeFormat;
}

/**
 * The type of the custom resolver's `input` parameter. This
 * can be a scalar, the name of an existing generated type, or
 * a custom JSON schema object. If undefined, the resolver does
 * not accept an input.
 */
export interface CustomResolverInputType {}

/**
 * The type of the value returned by the custom resolver. This
 * can be a scalar, the name of an existing generated type, or
 * a custom JSON schema object.
 *
 * If undefined, the resolver returns a `DefaultPayload`
 * object:
 *
 * ```graphql
 * type DefaultPayload {
 *   status: String!
 * }
 * ```
 */
export interface CustomResolverPayloadType {}

export interface GraphQLValidationSettings {
  readValidationAction?: GraphQLValidationAction;
  readValidationLevel?: GraphQLValidationLevel;
  writeValidationAction?: GraphQLValidationAction;
  writeValidationLevel?: GraphQLValidationLevel;
}

export interface UserProvider {
  id?: string;
  providerType?: ProviderType;
  providerId?: string;
}

export interface ValueSummary {
  id?: string;
  name?: string;
  private?: boolean;
}

export interface Get200ApplicationJsonItemsItem {}

export interface PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems {}

export interface PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems {
  currentIp?: string;
  allowedIps?: Get200ApplicationJsonItemsAllowedIpsItem[];
}

export interface Get200ApplicationJsonItemsAllowedIpsItem {
  /** ObjectID */
  id?: string;
  address?: string;
  /** net.IP */
  ip?: string;
  /** net.IPNet */
  network?: string;
  comment?: string;
}

export interface PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems {
  id?: string;
  name?: string;
  disabled?: boolean;
}

export interface Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems {
  id?: string;
  name?: string;
}

export interface PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems {
  id?: string;
  name?: string;
}

export interface Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties
  extends FieldLevelPermissions,
    Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1 {}

export interface PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema
  extends DefaultRule {}

/** Known values of {@link ProviderType} that the service accepts. */
export enum KnownProviderType {
  /** AnonUser */
  AnonUser = "anon-user",
  /** LocalUserpass */
  LocalUserpass = "local-userpass",
  /** ApiKey */
  ApiKey = "api-key",
  /** Oauth2Apple */
  Oauth2Apple = "oauth2-apple",
  /** Oauth2Google */
  Oauth2Google = "oauth2-google",
  /** Oauth2Facebook */
  Oauth2Facebook = "oauth2-facebook",
  /** CustomToken */
  CustomToken = "custom-token",
  /** CustomFunction */
  CustomFunction = "custom-function"
}

/**
 * Defines values for ProviderType. \
 * {@link KnownProviderType} can be used interchangeably with ProviderType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **anon-user** \
 * **local-userpass** \
 * **api-key** \
 * **oauth2-apple** \
 * **oauth2-google** \
 * **oauth2-facebook** \
 * **custom-token** \
 * **custom-function**
 */
export type ProviderType = string;

/** Known values of {@link ProfileType} that the service accepts. */
export enum KnownProfileType {
  /** Normal */
  Normal = "normal",
  /** Server */
  Server = "server",
  /** System */
  System = "system",
  /** Unknown */
  Unknown = "unknown"
}

/**
 * Defines values for ProfileType. \
 * {@link KnownProfileType} can be used interchangeably with ProfileType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **normal** \
 * **server** \
 * **system** \
 * **unknown**
 */
export type ProfileType = string;

/** Known values of {@link AppProviderRegionDeploymentModelsItem} that the service accepts. */
export enum KnownAppProviderRegionDeploymentModelsItem {
  /** Global */
  Global = "GLOBAL",
  /** Local */
  Local = "LOCAL"
}

/**
 * Defines values for AppProviderRegionDeploymentModelsItem. \
 * {@link KnownAppProviderRegionDeploymentModelsItem} can be used interchangeably with AppProviderRegionDeploymentModelsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GLOBAL** \
 * **LOCAL**
 */
export type AppProviderRegionDeploymentModelsItem = string;

/** Known values of {@link AtlasClusterConfigReadPreference} that the service accepts. */
export enum KnownAtlasClusterConfigReadPreference {
  /** Primary */
  Primary = "primary",
  /** PrimaryPreferred */
  PrimaryPreferred = "primaryPreferred",
  /** Secondary */
  Secondary = "secondary",
  /** SecondaryPreferred */
  SecondaryPreferred = "secondaryPreferred",
  /** Nearest */
  Nearest = "nearest"
}

/**
 * Defines values for AtlasClusterConfigReadPreference. \
 * {@link KnownAtlasClusterConfigReadPreference} can be used interchangeably with AtlasClusterConfigReadPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **primary** \
 * **primaryPreferred** \
 * **secondary** \
 * **secondaryPreferred** \
 * **nearest**
 */
export type AtlasClusterConfigReadPreference = string;

/** Known values of {@link TriggerRequestType} that the service accepts. */
export enum KnownTriggerRequestType {
  /** Database */
  Database = "DATABASE",
  /** Authentication */
  Authentication = "AUTHENTICATION",
  /** Scheduled */
  Scheduled = "SCHEDULED"
}

/**
 * Defines values for TriggerRequestType. \
 * {@link KnownTriggerRequestType} can be used interchangeably with TriggerRequestType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DATABASE** \
 * **AUTHENTICATION** \
 * **SCHEDULED**
 */
export type TriggerRequestType = string;

/** Known values of {@link TriggerRequestConfigOperationTypesItem} that the service accepts. */
export enum KnownTriggerRequestConfigOperationTypesItem {
  /** Insert */
  Insert = "INSERT",
  /** Update */
  Update = "UPDATE",
  /** Replace */
  Replace = "REPLACE",
  /** Delete */
  Delete = "DELETE"
}

/**
 * Defines values for TriggerRequestConfigOperationTypesItem. \
 * {@link KnownTriggerRequestConfigOperationTypesItem} can be used interchangeably with TriggerRequestConfigOperationTypesItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **INSERT** \
 * **UPDATE** \
 * **REPLACE** \
 * **DELETE**
 */
export type TriggerRequestConfigOperationTypesItem = string;

/** Known values of {@link TriggerRequestConfigOperationType} that the service accepts. */
export enum KnownTriggerRequestConfigOperationType {
  /** Login */
  Login = "LOGIN",
  /** Create */
  Create = "CREATE",
  /** Delete */
  Delete = "DELETE"
}

/**
 * Defines values for TriggerRequestConfigOperationType. \
 * {@link KnownTriggerRequestConfigOperationType} can be used interchangeably with TriggerRequestConfigOperationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LOGIN** \
 * **CREATE** \
 * **DELETE**
 */
export type TriggerRequestConfigOperationType = string;

/** Known values of {@link ThirdPartyServiceType} that the service accepts. */
export enum KnownThirdPartyServiceType {
  /** Aws */
  Aws = "aws",
  /** Twilio */
  Twilio = "twilio",
  /** Github */
  Github = "github",
  /** Gcm */
  Gcm = "gcm"
}

/**
 * Defines values for ThirdPartyServiceType. \
 * {@link KnownThirdPartyServiceType} can be used interchangeably with ThirdPartyServiceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **aws** \
 * **twilio** \
 * **github** \
 * **gcm**
 */
export type ThirdPartyServiceType = string;

/** Known values of {@link Enum8} that the service accepts. */
export enum KnownEnum8 {
  /** Zero */
  Zero = 0,
  /** One */
  One = 1
}

/**
 * Defines values for Enum8. \
 * {@link KnownEnum8} can be used interchangeably with Enum8,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **0** \
 * **1**
 */
export type Enum8 = number;

/** Known values of {@link MessageState} that the service accepts. */
export enum KnownMessageState {
  /** Sent */
  Sent = "sent",
  /** Draft */
  Draft = "draft"
}

/**
 * Defines values for MessageState. \
 * {@link KnownMessageState} can be used interchangeably with MessageState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **sent** \
 * **draft**
 */
export type MessageState = string;

/** Known values of {@link Enum10} that the service accepts. */
export enum KnownEnum10 {
  /** TriggerFailure */
  TriggerFailure = "TRIGGER_FAILURE",
  /** DBTrigger */
  DBTrigger = "DB_TRIGGER",
  /** AuthTrigger */
  AuthTrigger = "AUTH_TRIGGER",
  /** ScheduledTrigger */
  ScheduledTrigger = "SCHEDULED_TRIGGER",
  /** Function */
  Function = "FUNCTION",
  /** ServiceFunction */
  ServiceFunction = "SERVICE_FUNCTION",
  /** StreamFunction */
  StreamFunction = "STREAM_FUNCTION",
  /** ServiceStreamFunction */
  ServiceStreamFunction = "SERVICE_STREAM_FUNCTION",
  /** Auth */
  Auth = "AUTH",
  /** Webhook */
  Webhook = "WEBHOOK",
  /** Endpoint */
  Endpoint = "ENDPOINT",
  /** Push */
  Push = "PUSH",
  /** API */
  API = "API",
  /** APIKEY */
  APIKEY = "API_KEY",
  /** Graphql */
  Graphql = "GRAPHQL",
  /** SyncConnectionStart */
  SyncConnectionStart = "SYNC_CONNECTION_START",
  /** SyncConnectionEND */
  SyncConnectionEND = "SYNC_CONNECTION_END",
  /** SyncSessionStart */
  SyncSessionStart = "SYNC_SESSION_START",
  /** SyncSessionEND */
  SyncSessionEND = "SYNC_SESSION_END",
  /** SyncClientWrite */
  SyncClientWrite = "SYNC_CLIENT_WRITE",
  /** SyncError */
  SyncError = "SYNC_ERROR",
  /** SyncOther */
  SyncOther = "SYNC_OTHER",
  /** SchemaAdditiveChange */
  SchemaAdditiveChange = "SCHEMA_ADDITIVE_CHANGE",
  /** SchemaGeneration */
  SchemaGeneration = "SCHEMA_GENERATION",
  /** SchemaValidation */
  SchemaValidation = "SCHEMA_VALIDATION",
  /** LOGForwarder */
  LOGForwarder = "LOG_FORWARDER"
}

/**
 * Defines values for Enum10. \
 * {@link KnownEnum10} can be used interchangeably with Enum10,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TRIGGER_FAILURE** \
 * **DB_TRIGGER** \
 * **AUTH_TRIGGER** \
 * **SCHEDULED_TRIGGER** \
 * **FUNCTION** \
 * **SERVICE_FUNCTION** \
 * **STREAM_FUNCTION** \
 * **SERVICE_STREAM_FUNCTION** \
 * **AUTH** \
 * **WEBHOOK** \
 * **ENDPOINT** \
 * **PUSH** \
 * **API** \
 * **API_KEY** \
 * **GRAPHQL** \
 * **SYNC_CONNECTION_START** \
 * **SYNC_CONNECTION_END** \
 * **SYNC_SESSION_START** \
 * **SYNC_SESSION_END** \
 * **SYNC_CLIENT_WRITE** \
 * **SYNC_ERROR** \
 * **SYNC_OTHER** \
 * **SCHEMA_ADDITIVE_CHANGE** \
 * **SCHEMA_GENERATION** \
 * **SCHEMA_VALIDATION** \
 * **LOG_FORWARDER**
 */
export type Enum10 = string;

/** Known values of {@link LogType} that the service accepts. */
export enum KnownLogType {
  /** Auth */
  Auth = "auth",
  /** Function */
  Function = "function",
  /** Graphql */
  Graphql = "graphql",
  /** Push */
  Push = "push",
  /** Schema */
  Schema = "schema",
  /** Service */
  Service = "service",
  /** Sync */
  Sync = "sync",
  /** Trigger */
  Trigger = "trigger"
}

/**
 * Defines values for LogType. \
 * {@link KnownLogType} can be used interchangeably with LogType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **auth** \
 * **function** \
 * **graphql** \
 * **push** \
 * **schema** \
 * **service** \
 * **sync** \
 * **trigger**
 */
export type LogType = string;

/** Known values of {@link LogStatus} that the service accepts. */
export enum KnownLogStatus {
  /** Error */
  Error = "error",
  /** Success */
  Success = "success"
}

/**
 * Defines values for LogStatus. \
 * {@link KnownLogStatus} can be used interchangeably with LogStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **error** \
 * **success**
 */
export type LogStatus = string;

/** Known values of {@link LogForwardingPolicyType} that the service accepts. */
export enum KnownLogForwardingPolicyType {
  /** Single */
  Single = "single",
  /** Batch */
  Batch = "batch"
}

/**
 * Defines values for LogForwardingPolicyType. \
 * {@link KnownLogForwardingPolicyType} can be used interchangeably with LogForwardingPolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **single** \
 * **batch**
 */
export type LogForwardingPolicyType = string;

/** Known values of {@link LogForwardingActionType} that the service accepts. */
export enum KnownLogForwardingActionType {
  /** Collection */
  Collection = "collection",
  /** Function */
  Function = "function"
}

/**
 * Defines values for LogForwardingActionType. \
 * {@link KnownLogForwardingActionType} can be used interchangeably with LogForwardingActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **collection** \
 * **function**
 */
export type LogForwardingActionType = string;

/** Known values of {@link HostingConfigurationStatus} that the service accepts. */
export enum KnownHostingConfigurationStatus {
  /** SetupOk */
  SetupOk = "setup_ok",
  /** ChangeInProgress */
  ChangeInProgress = "change_in_progress",
  /** ChangeFailed */
  ChangeFailed = "change_failed",
  /** ChangeFailedFatal */
  ChangeFailedFatal = "change_failed_fatal"
}

/**
 * Defines values for HostingConfigurationStatus. \
 * {@link KnownHostingConfigurationStatus} can be used interchangeably with HostingConfigurationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **setup_ok** \
 * **change_in_progress** \
 * **change_failed** \
 * **change_failed_fatal**
 */
export type HostingConfigurationStatus = string;

/** Known values of {@link Enum16} that the service accepts. */
export enum KnownEnum16 {
  /** P31D */
  P31D = "P31D",
  /** PT1H */
  PT1H = "PT1H"
}

/**
 * Defines values for Enum16. \
 * {@link KnownEnum16} can be used interchangeably with Enum16,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P31D** \
 * **PT1H**
 */
export type Enum16 = string;

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemName} that the service accepts. */
export enum KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName {
  /** RequestCount */
  RequestCount = "request_count",
  /** ComputeTime */
  ComputeTime = "compute_time",
  /** DataOut */
  DataOut = "data_out",
  /** SyncTime */
  SyncTime = "sync_time"
}

/**
 * Defines values for GetResponses200ContentApplicationJsonSchemaMeasurementsItemName. \
 * {@link KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName} can be used interchangeably with GetResponses200ContentApplicationJsonSchemaMeasurementsItemName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **request_count** \
 * **compute_time** \
 * **data_out** \
 * **sync_time**
 */
export type GetResponses200ContentApplicationJsonSchemaMeasurementsItemName = string;

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits} that the service accepts. */
export enum KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits {
  /** EmptyString */
  EmptyString = "<empty string>",
  /** Hours */
  Hours = "HOURS",
  /** Gigabytes */
  Gigabytes = "GIGABYTES"
}

/**
 * Defines values for GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits. \
 * {@link KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits} can be used interchangeably with GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **<empty string>** \
 * **HOURS** \
 * **GIGABYTES**
 */
export type GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits = string;

/** Known values of {@link Enum19} that the service accepts. */
export enum KnownEnum19 {
  /** P31D */
  P31D = "P31D",
  /** PT1H */
  PT1H = "PT1H"
}

/**
 * Defines values for Enum19. \
 * {@link KnownEnum19} can be used interchangeably with Enum19,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P31D** \
 * **PT1H**
 */
export type Enum19 = string;

/** Known values of {@link Enum20} that the service accepts. */
export enum KnownEnum20 {
  /** RequestCount */
  RequestCount = "request_count",
  /** ComputeTime */
  ComputeTime = "compute_time",
  /** DataOut */
  DataOut = "data_out",
  /** SyncTime */
  SyncTime = "sync_time",
  /** MemUsage */
  MemUsage = "mem_usage"
}

/**
 * Defines values for Enum20. \
 * {@link KnownEnum20} can be used interchangeably with Enum20,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **request_count** \
 * **compute_time** \
 * **data_out** \
 * **sync_time** \
 * **mem_usage**
 */
export type Enum20 = string;

/** Known values of {@link Enum21} that the service accepts. */
export enum KnownEnum21 {
  /** EmptyString */
  EmptyString = "<empty string>",
  /** Hours */
  Hours = "HOURS",
  /** Gigabytes */
  Gigabytes = "GIGABYTES",
  /** GigabyteSeconds */
  GigabyteSeconds = "GIGABYTE_SECONDS"
}

/**
 * Defines values for Enum21. \
 * {@link KnownEnum21} can be used interchangeably with Enum21,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **<empty string>** \
 * **HOURS** \
 * **GIGABYTES** \
 * **GIGABYTE_SECONDS**
 */
export type Enum21 = string;

/** Known values of {@link EndpointHttpMethod} that the service accepts. */
export enum KnownEndpointHttpMethod {
  /** GET */
  GET = "GET",
  /** Post */
  Post = "POST",
  /** PUT */
  PUT = "PUT",
  /** Patch */
  Patch = "PATCH",
  /** Delete */
  Delete = "DELETE",
  /** Asterisk */
  Asterisk = "*"
}

/**
 * Defines values for EndpointHttpMethod. \
 * {@link KnownEndpointHttpMethod} can be used interchangeably with EndpointHttpMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GET** \
 * **POST** \
 * **PUT** \
 * **PATCH** \
 * **DELETE** \
 * *****
 */
export type EndpointHttpMethod = string;

/** Known values of {@link EndpointValidationMethod} that the service accepts. */
export enum KnownEndpointValidationMethod {
  /** NOValidation */
  NOValidation = "NO_VALIDATION",
  /** SecretASQueryParam */
  SecretASQueryParam = "SECRET_AS_QUERY_PARAM",
  /** VerifyPayload */
  VerifyPayload = "VERIFY_PAYLOAD"
}

/**
 * Defines values for EndpointValidationMethod. \
 * {@link KnownEndpointValidationMethod} can be used interchangeably with EndpointValidationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NO_VALIDATION** \
 * **SECRET_AS_QUERY_PARAM** \
 * **VERIFY_PAYLOAD**
 */
export type EndpointValidationMethod = string;

/** Known values of {@link EndpointDataFormat} that the service accepts. */
export enum KnownEndpointDataFormat {
  /** Json */
  Json = "JSON",
  /** Ejson */
  Ejson = "EJSON"
}

/**
 * Defines values for EndpointDataFormat. \
 * {@link KnownEndpointDataFormat} can be used interchangeably with EndpointDataFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **JSON** \
 * **EJSON**
 */
export type EndpointDataFormat = string;

/** Known values of {@link CustomResolverInputTypeFormat} that the service accepts. */
export enum KnownCustomResolverInputTypeFormat {
  /** Scalar */
  Scalar = "scalar",
  /** ScalarList */
  ScalarList = "scalar-list",
  /** Generated */
  Generated = "generated",
  /** GeneratedList */
  GeneratedList = "generated-list",
  /** Custom */
  Custom = "custom"
}

/**
 * Defines values for CustomResolverInputTypeFormat. \
 * {@link KnownCustomResolverInputTypeFormat} can be used interchangeably with CustomResolverInputTypeFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **scalar** \
 * **scalar-list** \
 * **generated** \
 * **generated-list** \
 * **custom**
 */
export type CustomResolverInputTypeFormat = string;

/** Known values of {@link CustomResolverPayloadTypeFormat} that the service accepts. */
export enum KnownCustomResolverPayloadTypeFormat {
  /** Scalar */
  Scalar = "scalar",
  /** ScalarList */
  ScalarList = "scalar-list",
  /** Generated */
  Generated = "generated",
  /** GeneratedList */
  GeneratedList = "generated-list",
  /** Custom */
  Custom = "custom"
}

/**
 * Defines values for CustomResolverPayloadTypeFormat. \
 * {@link KnownCustomResolverPayloadTypeFormat} can be used interchangeably with CustomResolverPayloadTypeFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **scalar** \
 * **scalar-list** \
 * **generated** \
 * **generated-list** \
 * **custom**
 */
export type CustomResolverPayloadTypeFormat = string;

/** Known values of {@link GraphQLValidationAction} that the service accepts. */
export enum KnownGraphQLValidationAction {
  /** Error */
  Error = "ERROR",
  /** Warn */
  Warn = "WARN"
}

/**
 * Defines values for GraphQLValidationAction. \
 * {@link KnownGraphQLValidationAction} can be used interchangeably with GraphQLValidationAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ERROR** \
 * **WARN**
 */
export type GraphQLValidationAction = string;

/** Known values of {@link GraphQLValidationLevel} that the service accepts. */
export enum KnownGraphQLValidationLevel {
  /** Strict */
  Strict = "STRICT",
  /** OFF */
  OFF = "OFF"
}

/**
 * Defines values for GraphQLValidationLevel. \
 * {@link KnownGraphQLValidationLevel} can be used interchangeably with GraphQLValidationLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **STRICT** \
 * **OFF**
 */
export type GraphQLValidationLevel = string;

/** Optional parameters. */
export interface GetAdminAuthProvidersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAdminAuthProviders operation. */
export type GetAdminAuthProvidersResponse = ProviderSummary[];

/** Optional parameters. */
export interface AdminLoginOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the adminLogin operation. */
export type AdminLoginResponse = Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetAdminProfileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAdminProfile operation. */
export type GetAdminProfileResponse = RealmProfile;

/** Optional parameters. */
export interface AdminCreateSessionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateSession operation. */
export type AdminCreateSessionResponse = PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminDeleteSessionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListAppRegionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListAppRegions operation. */
export type AdminListAppRegionsResponse = AppProviderRegion[];

/** Optional parameters. */
export interface AdminListApplicationsOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Specify `product=atlas` to include [Atlas
   * trigger](https://docs.atlas.mongodb.com/triggers) apps.
   */
  product?: string;
}

/** Contains response data for the adminListApplications operation. */
export type AdminListApplicationsResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateApplicationOptionalParams
  extends coreClient.OperationOptions {
  /** Whether or not to create a default application. */
  defaults?: boolean;
}

/** Contains response data for the adminCreateApplication operation. */
export type AdminCreateApplicationResponse = ApplicationSummary;

/** Optional parameters. */
export interface AdminGetApplicationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetApplication operation. */
export type AdminGetApplicationResponse = Application;

/** Optional parameters. */
export interface AdminDeleteApplicationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminExportApplicationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminCreateTriggerOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateTrigger operation. */
export type AdminCreateTriggerResponse = TriggerResponse;

/** Optional parameters. */
export interface AdminListTriggersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListTriggers operation. */
export type AdminListTriggersResponse = TriggerResponse;

/** Optional parameters. */
export interface AdminUpdateTriggerOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminUpdateTrigger operation. */
export type AdminUpdateTriggerResponse = ErrorModel;

/** Optional parameters. */
export interface AdminGetTriggerOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetTrigger operation. */
export type AdminGetTriggerResponse = TriggerResponse;

/** Optional parameters. */
export interface AdminDeleteTriggerOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminDeleteTrigger operation. */
export type AdminDeleteTriggerResponse = Record<string, unknown>;

/** Optional parameters. */
export interface AdminResumeTriggerOptionalParams
  extends coreClient.OperationOptions {
  /** Configuration options for the resume operation */
  body?: PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the adminResumeTrigger operation. */
export type AdminResumeTriggerResponse = PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminListValuesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListValues operation. */
export type AdminListValuesResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateValue operation. */
export type AdminCreateValueResponse = NewValue;

/** Optional parameters. */
export interface AdminGetValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetValue operation. */
export type AdminGetValueResponse = Value;

/** Optional parameters. */
export interface AdminDeleteValueOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminUpdateValue operation. */
export type AdminUpdateValueResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminListServicesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListServices operation. */
export type AdminListServicesResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateServiceOptionalParams
  extends coreClient.OperationOptions {
  body?: PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the adminCreateService operation. */
export type AdminCreateServiceResponse = Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminGetServiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetService operation. */
export type AdminGetServiceResponse = Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminDeleteServiceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateServiceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminValidateDocumentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminValidateDocuments operation. */
export type AdminValidateDocumentsResponse = Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminRunCommandOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetBuildInfoOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBuildInfo operation. */
export type GetBuildInfoResponse = BuildInfo;

/** Optional parameters. */
export interface AdminGetServiceConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateServiceConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListRulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListRules operation. */
export type AdminListRulesResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateRule operation. */
export type AdminCreateRuleResponse = Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminGetRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetRule operation. */
export type AdminGetRuleResponse = Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminDeleteRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetDefaultRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetDefaultRule operation. */
export type AdminGetDefaultRuleResponse = DefaultRule;

/** Optional parameters. */
export interface AdminCreateDefaultRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateDefaultRule operation. */
export type AdminCreateDefaultRuleResponse = DefaultRule;

/** Optional parameters. */
export interface AdminUpdateDefaultRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminUpdateDefaultRule operation. */
export type AdminUpdateDefaultRuleResponse = BasicError;

/** Optional parameters. */
export interface AdminDeleteDefaultRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminDeleteDefaultRule operation. */
export type AdminDeleteDefaultRuleResponse = BasicError;

/** Optional parameters. */
export interface AdminGenerateSchemaOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGenerateSchema operation. */
export type AdminGenerateSchemaResponse = Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminListWebhooksOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListWebhooks operation. */
export type AdminListWebhooksResponse = IncomingWebhook;

/** Optional parameters. */
export interface AdminCreateWebhookOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetWebhookOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDeleteWebhookOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateWebhookOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetSyncOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetSync operation. */
export type AdminGetSyncResponse = SyncDataResponse;

/** Optional parameters. */
export interface AdminListNotificationsOptionalParams
  extends coreClient.OperationOptions {
  /** Only list notifications with the given state. */
  state?: MessageState;
}

/** Contains response data for the adminListNotifications operation. */
export type AdminListNotificationsResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateNotificationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetMessage operation. */
export type AdminGetMessageResponse = Message;

/** Optional parameters. */
export interface AdminDeleteMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminUpdateMessage operation. */
export type AdminUpdateMessageResponse = Message;

/** Optional parameters. */
export interface AdminSetMessageTypeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminSendMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListUsersOptionalParams
  extends coreClient.OperationOptions {
  /** The `id` of the last user returned by a previous paginated request. */
  after?: string;
  /**
   * The field name to sort to sort results by. The only valid value is the
   * default: `_id`.
   */
  sort?: string;
  /**
   * If `true`, returns sorted results in descending order. If not specified
   * or set to `false`, results return in ascending order.
   */
  desc?: boolean;
}

/** Contains response data for the adminListUsers operation. */
export type AdminListUsersResponse = User[];

/** Optional parameters. */
export interface AdminCreateUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateUser operation. */
export type AdminCreateUserResponse = User;

/** Optional parameters. */
export interface AdminVerifyUserAccessTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminVerifyUserAccessToken operation. */
export type AdminVerifyUserAccessTokenResponse = PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminGetUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetUser operation. */
export type AdminGetUserResponse = User;

/** Optional parameters. */
export interface AdminDeleteUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListDevicesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListDevices operation. */
export type AdminListDevicesResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminUserLogoutOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminEnableUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDisableUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDeletePendingUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminSendConfirmationEmailOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminConfirmPendingUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminRerunPendingUserConfirmationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminExecuteFunctionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminExecuteFunction operation. */
export type AdminExecuteFunctionResponse = PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminExecuteFunctionSourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminExecuteFunctionSource operation. */
export type AdminExecuteFunctionSourceResponse = Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminListAuthProvidersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListAuthProviders operation. */
export type AdminListAuthProvidersResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateAuthProviderOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateAuthProvider operation. */
export type AdminCreateAuthProviderResponse = FullProvider;

/** Optional parameters. */
export interface AdminGetAuthProviderOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetAuthProvider operation. */
export type AdminGetAuthProviderResponse = FullProvider;

/** Optional parameters. */
export interface AdminDeleteAuthProviderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateAuthProviderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDisableAuthProviderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminEnableAuthProviderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListAllowedRequestOriginsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListAllowedRequestOrigins operation. */
export type AdminListAllowedRequestOriginsResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminSetAllowedRequestOriginsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AllowedIPAccessListGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the allowedIPAccessListGet operation. */
export type AllowedIPAccessListGetResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AllowedIPAccessListCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the allowedIPAccessListCreate operation. */
export type AllowedIPAccessListCreateResponse = Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AllowedIPAccessListUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the allowedIPAccessListUpdate operation. */
export type AllowedIPAccessListUpdateResponse = PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AllowedIPAccessListDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetLogsOptionalParams
  extends coreClient.OperationOptions {
  /** Return only log messages associated with the given request ID. */
  coId?: string;
  /**
   * The value of this field does not matter. If included in the request,
   * this endpoint only returns error logs (even if the value is set to ``false``).
   * If this field is excluded from the request, this endpoint only returns non-error logs.
   */
  errorsOnly?: boolean;
  /** Return only log messages associated with the given `user_id`. */
  userId?: string;
  /**
   * The date and time in ISO 8601 at which to begin returning results,
   * exclusive.
   */
  startDate?: string;
  /**
   * The date and time in ISO 8601 at which to cease returning results,
   * inclusive.
   */
  endDate?: string;
  /**
   * The offset number of matching log entries to skip before including them
   * in the response.
   */
  skip?: number;
  /**
   * The maximum number of log entries to include in the response. If the
   * query matches more than this many logs, it returns documents in
   * ascending order by date until the limit is reached.
   */
  limit?: number;
  /** The kind of log you would like to retrieve. */
  typeParam?: Enum10;
}

/** Contains response data for the adminGetLogs operation. */
export type AdminGetLogsResponse = Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface ListLogForwardersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listLogForwarders operation. */
export type ListLogForwardersResponse = LogForwarder[];

/** Optional parameters. */
export interface CreateLogForwarderOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createLogForwarder operation. */
export type CreateLogForwarderResponse = LogForwarder;

/** Optional parameters. */
export interface GetLogForwarderOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getLogForwarder operation. */
export type GetLogForwarderResponse = LogForwarder;

/** Optional parameters. */
export interface UpdateLogForwarderOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateLogForwarder operation. */
export type UpdateLogForwarderResponse = LogForwarder;

/** Optional parameters. */
export interface DeleteGwarderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface EnableLogForwarderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DisableLogForwarderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListApiKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListApiKeys operation. */
export type AdminListApiKeysResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateApiKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateApiKey operation. */
export type AdminCreateApiKeyResponse = ApiKey;

/** Optional parameters. */
export interface AdminGetApiKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetApiKey operation. */
export type AdminGetApiKeyResponse = ApiKeyResponse;

/** Optional parameters. */
export interface AdminDeleteApiKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminEnableApiKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDisableApiKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetAllSecretsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetAllSecrets operation. */
export type AdminGetAllSecretsResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateASecretOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateASecret operation. */
export type AdminCreateASecretResponse = Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminModifyASecretOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDeleteSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminListFunctionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListFunctions operation. */
export type AdminListFunctionsResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface AdminCreateFunctionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateFunction operation. */
export type AdminCreateFunctionResponse = Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminGetFunctionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetFunction operation. */
export type AdminGetFunctionResponse = FunctionModel;

/** Optional parameters. */
export interface AdminDeleteFunctionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminUpdateFunctionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminUpdateFunction operation. */
export type AdminUpdateFunctionResponse = NewFunction;

/** Optional parameters. */
export interface AdminGetAllDependenciesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetAllDependencies operation. */
export type AdminGetAllDependenciesResponse = DependenciesSummary;

/** Optional parameters. */
export interface AdminListDeploymentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListDeployments operation. */
export type AdminListDeploymentsResponse = Deployment[];

/** Optional parameters. */
export interface AdminListDeploymentDraftsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListDeploymentDrafts operation. */
export type AdminListDeploymentDraftsResponse = DeploymentDraft;

/** Optional parameters. */
export interface AdminCreateDeploymentDraftOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateDeploymentDraft operation. */
export type AdminCreateDeploymentDraftResponse = DeploymentDraft;

/** Optional parameters. */
export interface AdminDiscardDraftOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDeployDraftOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminDeployDraft operation. */
export type AdminDeployDraftResponse = Application;

/** Optional parameters. */
export interface AdminDeployDraftDiffOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminDeployDraftDiff operation. */
export type AdminDeployDraftDiffResponse = Diff;

/** Optional parameters. */
export interface AdminGetHostingConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetHostingConfig operation. */
export type AdminGetHostingConfigResponse = HostingConfiguration;

/** Optional parameters. */
export interface AdminEnableDisableHostingOptionalParams
  extends coreClient.OperationOptions {
  body?: Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema;
}

/** Optional parameters. */
export interface AdminGetAllHostedAssetsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetAllHostedAssets operation. */
export type AdminGetAllHostedAssetsResponse = HostedAssetMetadata[];

/** Optional parameters. */
export interface AdminMoveCopyHostedAssetOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetHostedAssetOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Return only those assets where the resource path begins with the
   * specified prefix.
   */
  prefix?: string;
}

/** Contains response data for the adminGetHostedAsset operation. */
export type AdminGetHostedAssetResponse = HostedAssetMetadata;

/** Optional parameters. */
export interface AdminUploadHostedAssetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminUploadHostedAsset operation. */
export type AdminUploadHostedAssetResponse = Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminUpdateHostedAssetOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminMeasurementsOptionalParams
  extends coreClient.OperationOptions {
  /**
   * The ISO 8601 date and time of the start of the query period. Default is
   * 00:00:00 UTC on the first day of the current month.
   */
  start?: string;
  /**
   * The ISO 8601 date and time of the end of the query period. Default is
   * 23:59:59 UTC on the the last day of the current month.
   */
  end?: string;
  /**
   * Specifies the granularity of the query period, either P31D (31 day) or
   * PT1H (1 hour). Default is P31D.
   */
  granularity?: Enum16;
}

/** Contains response data for the adminMeasurements operation. */
export type AdminMeasurementsResponse = PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminAppMeasurementsOptionalParams
  extends coreClient.OperationOptions {
  /**
   * The ISO 8601 date and time of the start of the query period. Default is
   * 00:00:00 UTC on the first day of the current month.
   */
  start?: string;
  /**
   * The ISO 8601 date and time of the end of the query period. Default is
   * 23:59:59 UTC on the the last day of the current month.
   */
  end?: string;
  /**
   * Specifies the granularity of the query period, either P31D (31 day) or
   * PT1H (1 hour). Default is P31D.
   */
  granularity?: Enum19;
}

/** Contains response data for the adminAppMeasurements operation. */
export type AdminAppMeasurementsResponse = Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminListSchemasOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminListSchemas operation. */
export type AdminListSchemasResponse = Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems[];

/** Optional parameters. */
export interface AdminCreateSchemaOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateSchema operation. */
export type AdminCreateSchemaResponse = Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminGetSchemaOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetSchema operation. */
export type AdminGetSchemaResponse = Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminUpdateSchemaOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDeleteSchemaOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetAllEndpointsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetAllEndpoints operation. */
export type AdminGetAllEndpointsResponse = Endpoint[];

/** Optional parameters. */
export interface AdminCreateEndpointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateEndpoint operation. */
export type AdminCreateEndpointResponse = Endpoint;

/** Optional parameters. */
export interface AdminGetEndpointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetEndpoint operation. */
export type AdminGetEndpointResponse = Endpoint;

/** Optional parameters. */
export interface AdminModifyEndpointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminModifyEndpoint operation. */
export type AdminModifyEndpointResponse = Endpoint;

/** Optional parameters. */
export interface AdminDeleteEndpointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminDeleteEndpoint operation. */
export type AdminDeleteEndpointResponse = Record<string, unknown>;

/** Optional parameters. */
export interface AdminGetDataApiConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetDataApiConfig operation. */
export type AdminGetDataApiConfigResponse = DataApiConfig;

/** Optional parameters. */
export interface AdminCreateDataApiConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateDataApiConfig operation. */
export type AdminCreateDataApiConfigResponse = DataApiConfig;

/** Optional parameters. */
export interface AdminModifyDataApiConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetDataApiVersionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetDataApiVersions operation. */
export type AdminGetDataApiVersionsResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface AdminRunGraphQLOperationOptionalParams
  extends coreClient.OperationOptions {
  body?: Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the adminRunGraphQLOperation operation. */
export type AdminRunGraphQLOperationResponse = Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AdminGetAllCustomResolversOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetAllCustomResolvers operation. */
export type AdminGetAllCustomResolversResponse = CustomResolver[];

/** Optional parameters. */
export interface AdminCreateCustomResolverOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminCreateCustomResolver operation. */
export type AdminCreateCustomResolverResponse = CustomResolver;

/** Optional parameters. */
export interface AdminGetCustomResolverOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetCustomResolver operation. */
export type AdminGetCustomResolverResponse = CustomResolver;

/** Optional parameters. */
export interface AdminModifyCustomResolverOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminDeleteCustomResolverOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AdminGetGraphQLValidationSettingsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the adminGetGraphQLValidationSettings operation. */
export type AdminGetGraphQLValidationSettingsResponse = GraphQLValidationSettings;

/** Optional parameters. */
export interface AdminSetGraphQLValidationSettingsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AtlasAppServicesAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
