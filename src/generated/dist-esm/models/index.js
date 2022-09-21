/** Known values of {@link ProviderType} that the service accepts. */
export var KnownProviderType;
(function (KnownProviderType) {
    /** AnonUser */
    KnownProviderType["AnonUser"] = "anon-user";
    /** LocalUserpass */
    KnownProviderType["LocalUserpass"] = "local-userpass";
    /** ApiKey */
    KnownProviderType["ApiKey"] = "api-key";
    /** Oauth2Apple */
    KnownProviderType["Oauth2Apple"] = "oauth2-apple";
    /** Oauth2Google */
    KnownProviderType["Oauth2Google"] = "oauth2-google";
    /** Oauth2Facebook */
    KnownProviderType["Oauth2Facebook"] = "oauth2-facebook";
    /** CustomToken */
    KnownProviderType["CustomToken"] = "custom-token";
    /** CustomFunction */
    KnownProviderType["CustomFunction"] = "custom-function";
})(KnownProviderType || (KnownProviderType = {}));
/** Known values of {@link ProfileType} that the service accepts. */
export var KnownProfileType;
(function (KnownProfileType) {
    /** Normal */
    KnownProfileType["Normal"] = "normal";
    /** Server */
    KnownProfileType["Server"] = "server";
    /** System */
    KnownProfileType["System"] = "system";
    /** Unknown */
    KnownProfileType["Unknown"] = "unknown";
})(KnownProfileType || (KnownProfileType = {}));
/** Known values of {@link AppProviderRegionDeploymentModelsItem} that the service accepts. */
export var KnownAppProviderRegionDeploymentModelsItem;
(function (KnownAppProviderRegionDeploymentModelsItem) {
    /** Global */
    KnownAppProviderRegionDeploymentModelsItem["Global"] = "GLOBAL";
    /** Local */
    KnownAppProviderRegionDeploymentModelsItem["Local"] = "LOCAL";
})(KnownAppProviderRegionDeploymentModelsItem || (KnownAppProviderRegionDeploymentModelsItem = {}));
/** Known values of {@link AtlasClusterConfigReadPreference} that the service accepts. */
export var KnownAtlasClusterConfigReadPreference;
(function (KnownAtlasClusterConfigReadPreference) {
    /** Primary */
    KnownAtlasClusterConfigReadPreference["Primary"] = "primary";
    /** PrimaryPreferred */
    KnownAtlasClusterConfigReadPreference["PrimaryPreferred"] = "primaryPreferred";
    /** Secondary */
    KnownAtlasClusterConfigReadPreference["Secondary"] = "secondary";
    /** SecondaryPreferred */
    KnownAtlasClusterConfigReadPreference["SecondaryPreferred"] = "secondaryPreferred";
    /** Nearest */
    KnownAtlasClusterConfigReadPreference["Nearest"] = "nearest";
})(KnownAtlasClusterConfigReadPreference || (KnownAtlasClusterConfigReadPreference = {}));
/** Known values of {@link TriggerRequestType} that the service accepts. */
export var KnownTriggerRequestType;
(function (KnownTriggerRequestType) {
    /** Database */
    KnownTriggerRequestType["Database"] = "DATABASE";
    /** Authentication */
    KnownTriggerRequestType["Authentication"] = "AUTHENTICATION";
    /** Scheduled */
    KnownTriggerRequestType["Scheduled"] = "SCHEDULED";
})(KnownTriggerRequestType || (KnownTriggerRequestType = {}));
/** Known values of {@link TriggerRequestConfigOperationTypesItem} that the service accepts. */
export var KnownTriggerRequestConfigOperationTypesItem;
(function (KnownTriggerRequestConfigOperationTypesItem) {
    /** Insert */
    KnownTriggerRequestConfigOperationTypesItem["Insert"] = "INSERT";
    /** Update */
    KnownTriggerRequestConfigOperationTypesItem["Update"] = "UPDATE";
    /** Replace */
    KnownTriggerRequestConfigOperationTypesItem["Replace"] = "REPLACE";
    /** Delete */
    KnownTriggerRequestConfigOperationTypesItem["Delete"] = "DELETE";
})(KnownTriggerRequestConfigOperationTypesItem || (KnownTriggerRequestConfigOperationTypesItem = {}));
/** Known values of {@link TriggerRequestConfigOperationType} that the service accepts. */
export var KnownTriggerRequestConfigOperationType;
(function (KnownTriggerRequestConfigOperationType) {
    /** Login */
    KnownTriggerRequestConfigOperationType["Login"] = "LOGIN";
    /** Create */
    KnownTriggerRequestConfigOperationType["Create"] = "CREATE";
    /** Delete */
    KnownTriggerRequestConfigOperationType["Delete"] = "DELETE";
})(KnownTriggerRequestConfigOperationType || (KnownTriggerRequestConfigOperationType = {}));
/** Known values of {@link ThirdPartyServiceType} that the service accepts. */
export var KnownThirdPartyServiceType;
(function (KnownThirdPartyServiceType) {
    /** Aws */
    KnownThirdPartyServiceType["Aws"] = "aws";
    /** Twilio */
    KnownThirdPartyServiceType["Twilio"] = "twilio";
    /** Github */
    KnownThirdPartyServiceType["Github"] = "github";
    /** Gcm */
    KnownThirdPartyServiceType["Gcm"] = "gcm";
})(KnownThirdPartyServiceType || (KnownThirdPartyServiceType = {}));
/** Known values of {@link Enum8} that the service accepts. */
export var KnownEnum8;
(function (KnownEnum8) {
    /** Zero */
    KnownEnum8[KnownEnum8["Zero"] = 0] = "Zero";
    /** One */
    KnownEnum8[KnownEnum8["One"] = 1] = "One";
})(KnownEnum8 || (KnownEnum8 = {}));
/** Known values of {@link MessageState} that the service accepts. */
export var KnownMessageState;
(function (KnownMessageState) {
    /** Sent */
    KnownMessageState["Sent"] = "sent";
    /** Draft */
    KnownMessageState["Draft"] = "draft";
})(KnownMessageState || (KnownMessageState = {}));
/** Known values of {@link Enum10} that the service accepts. */
export var KnownEnum10;
(function (KnownEnum10) {
    /** TriggerFailure */
    KnownEnum10["TriggerFailure"] = "TRIGGER_FAILURE";
    /** DBTrigger */
    KnownEnum10["DBTrigger"] = "DB_TRIGGER";
    /** AuthTrigger */
    KnownEnum10["AuthTrigger"] = "AUTH_TRIGGER";
    /** ScheduledTrigger */
    KnownEnum10["ScheduledTrigger"] = "SCHEDULED_TRIGGER";
    /** Function */
    KnownEnum10["Function"] = "FUNCTION";
    /** ServiceFunction */
    KnownEnum10["ServiceFunction"] = "SERVICE_FUNCTION";
    /** StreamFunction */
    KnownEnum10["StreamFunction"] = "STREAM_FUNCTION";
    /** ServiceStreamFunction */
    KnownEnum10["ServiceStreamFunction"] = "SERVICE_STREAM_FUNCTION";
    /** Auth */
    KnownEnum10["Auth"] = "AUTH";
    /** Webhook */
    KnownEnum10["Webhook"] = "WEBHOOK";
    /** Endpoint */
    KnownEnum10["Endpoint"] = "ENDPOINT";
    /** Push */
    KnownEnum10["Push"] = "PUSH";
    /** API */
    KnownEnum10["API"] = "API";
    /** APIKEY */
    KnownEnum10["APIKEY"] = "API_KEY";
    /** Graphql */
    KnownEnum10["Graphql"] = "GRAPHQL";
    /** SyncConnectionStart */
    KnownEnum10["SyncConnectionStart"] = "SYNC_CONNECTION_START";
    /** SyncConnectionEND */
    KnownEnum10["SyncConnectionEND"] = "SYNC_CONNECTION_END";
    /** SyncSessionStart */
    KnownEnum10["SyncSessionStart"] = "SYNC_SESSION_START";
    /** SyncSessionEND */
    KnownEnum10["SyncSessionEND"] = "SYNC_SESSION_END";
    /** SyncClientWrite */
    KnownEnum10["SyncClientWrite"] = "SYNC_CLIENT_WRITE";
    /** SyncError */
    KnownEnum10["SyncError"] = "SYNC_ERROR";
    /** SyncOther */
    KnownEnum10["SyncOther"] = "SYNC_OTHER";
    /** SchemaAdditiveChange */
    KnownEnum10["SchemaAdditiveChange"] = "SCHEMA_ADDITIVE_CHANGE";
    /** SchemaGeneration */
    KnownEnum10["SchemaGeneration"] = "SCHEMA_GENERATION";
    /** SchemaValidation */
    KnownEnum10["SchemaValidation"] = "SCHEMA_VALIDATION";
    /** LOGForwarder */
    KnownEnum10["LOGForwarder"] = "LOG_FORWARDER";
})(KnownEnum10 || (KnownEnum10 = {}));
/** Known values of {@link LogType} that the service accepts. */
export var KnownLogType;
(function (KnownLogType) {
    /** Auth */
    KnownLogType["Auth"] = "auth";
    /** Function */
    KnownLogType["Function"] = "function";
    /** Graphql */
    KnownLogType["Graphql"] = "graphql";
    /** Push */
    KnownLogType["Push"] = "push";
    /** Schema */
    KnownLogType["Schema"] = "schema";
    /** Service */
    KnownLogType["Service"] = "service";
    /** Sync */
    KnownLogType["Sync"] = "sync";
    /** Trigger */
    KnownLogType["Trigger"] = "trigger";
})(KnownLogType || (KnownLogType = {}));
/** Known values of {@link LogStatus} that the service accepts. */
export var KnownLogStatus;
(function (KnownLogStatus) {
    /** Error */
    KnownLogStatus["Error"] = "error";
    /** Success */
    KnownLogStatus["Success"] = "success";
})(KnownLogStatus || (KnownLogStatus = {}));
/** Known values of {@link LogForwardingPolicyType} that the service accepts. */
export var KnownLogForwardingPolicyType;
(function (KnownLogForwardingPolicyType) {
    /** Single */
    KnownLogForwardingPolicyType["Single"] = "single";
    /** Batch */
    KnownLogForwardingPolicyType["Batch"] = "batch";
})(KnownLogForwardingPolicyType || (KnownLogForwardingPolicyType = {}));
/** Known values of {@link LogForwardingActionType} that the service accepts. */
export var KnownLogForwardingActionType;
(function (KnownLogForwardingActionType) {
    /** Collection */
    KnownLogForwardingActionType["Collection"] = "collection";
    /** Function */
    KnownLogForwardingActionType["Function"] = "function";
})(KnownLogForwardingActionType || (KnownLogForwardingActionType = {}));
/** Known values of {@link HostingConfigurationStatus} that the service accepts. */
export var KnownHostingConfigurationStatus;
(function (KnownHostingConfigurationStatus) {
    /** SetupOk */
    KnownHostingConfigurationStatus["SetupOk"] = "setup_ok";
    /** ChangeInProgress */
    KnownHostingConfigurationStatus["ChangeInProgress"] = "change_in_progress";
    /** ChangeFailed */
    KnownHostingConfigurationStatus["ChangeFailed"] = "change_failed";
    /** ChangeFailedFatal */
    KnownHostingConfigurationStatus["ChangeFailedFatal"] = "change_failed_fatal";
})(KnownHostingConfigurationStatus || (KnownHostingConfigurationStatus = {}));
/** Known values of {@link Enum16} that the service accepts. */
export var KnownEnum16;
(function (KnownEnum16) {
    /** P31D */
    KnownEnum16["P31D"] = "P31D";
    /** PT1H */
    KnownEnum16["PT1H"] = "PT1H";
})(KnownEnum16 || (KnownEnum16 = {}));
/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemName} that the service accepts. */
export var KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName;
(function (KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName) {
    /** RequestCount */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["RequestCount"] = "request_count";
    /** ComputeTime */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["ComputeTime"] = "compute_time";
    /** DataOut */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["DataOut"] = "data_out";
    /** SyncTime */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["SyncTime"] = "sync_time";
})(KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName || (KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName = {}));
/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits} that the service accepts. */
export var KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits;
(function (KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits) {
    /** EmptyString */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits["EmptyString"] = "<empty string>";
    /** Hours */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits["Hours"] = "HOURS";
    /** Gigabytes */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits["Gigabytes"] = "GIGABYTES";
})(KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits || (KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits = {}));
/** Known values of {@link Enum19} that the service accepts. */
export var KnownEnum19;
(function (KnownEnum19) {
    /** P31D */
    KnownEnum19["P31D"] = "P31D";
    /** PT1H */
    KnownEnum19["PT1H"] = "PT1H";
})(KnownEnum19 || (KnownEnum19 = {}));
/** Known values of {@link Enum20} that the service accepts. */
export var KnownEnum20;
(function (KnownEnum20) {
    /** RequestCount */
    KnownEnum20["RequestCount"] = "request_count";
    /** ComputeTime */
    KnownEnum20["ComputeTime"] = "compute_time";
    /** DataOut */
    KnownEnum20["DataOut"] = "data_out";
    /** SyncTime */
    KnownEnum20["SyncTime"] = "sync_time";
    /** MemUsage */
    KnownEnum20["MemUsage"] = "mem_usage";
})(KnownEnum20 || (KnownEnum20 = {}));
/** Known values of {@link Enum21} that the service accepts. */
export var KnownEnum21;
(function (KnownEnum21) {
    /** EmptyString */
    KnownEnum21["EmptyString"] = "<empty string>";
    /** Hours */
    KnownEnum21["Hours"] = "HOURS";
    /** Gigabytes */
    KnownEnum21["Gigabytes"] = "GIGABYTES";
    /** GigabyteSeconds */
    KnownEnum21["GigabyteSeconds"] = "GIGABYTE_SECONDS";
})(KnownEnum21 || (KnownEnum21 = {}));
/** Known values of {@link EndpointHttpMethod} that the service accepts. */
export var KnownEndpointHttpMethod;
(function (KnownEndpointHttpMethod) {
    /** GET */
    KnownEndpointHttpMethod["GET"] = "GET";
    /** Post */
    KnownEndpointHttpMethod["Post"] = "POST";
    /** PUT */
    KnownEndpointHttpMethod["PUT"] = "PUT";
    /** Patch */
    KnownEndpointHttpMethod["Patch"] = "PATCH";
    /** Delete */
    KnownEndpointHttpMethod["Delete"] = "DELETE";
    /** Asterisk */
    KnownEndpointHttpMethod["Asterisk"] = "*";
})(KnownEndpointHttpMethod || (KnownEndpointHttpMethod = {}));
/** Known values of {@link EndpointValidationMethod} that the service accepts. */
export var KnownEndpointValidationMethod;
(function (KnownEndpointValidationMethod) {
    /** NOValidation */
    KnownEndpointValidationMethod["NOValidation"] = "NO_VALIDATION";
    /** SecretASQueryParam */
    KnownEndpointValidationMethod["SecretASQueryParam"] = "SECRET_AS_QUERY_PARAM";
    /** VerifyPayload */
    KnownEndpointValidationMethod["VerifyPayload"] = "VERIFY_PAYLOAD";
})(KnownEndpointValidationMethod || (KnownEndpointValidationMethod = {}));
/** Known values of {@link EndpointDataFormat} that the service accepts. */
export var KnownEndpointDataFormat;
(function (KnownEndpointDataFormat) {
    /** Json */
    KnownEndpointDataFormat["Json"] = "JSON";
    /** Ejson */
    KnownEndpointDataFormat["Ejson"] = "EJSON";
})(KnownEndpointDataFormat || (KnownEndpointDataFormat = {}));
/** Known values of {@link CustomResolverInputTypeFormat} that the service accepts. */
export var KnownCustomResolverInputTypeFormat;
(function (KnownCustomResolverInputTypeFormat) {
    /** Scalar */
    KnownCustomResolverInputTypeFormat["Scalar"] = "scalar";
    /** ScalarList */
    KnownCustomResolverInputTypeFormat["ScalarList"] = "scalar-list";
    /** Generated */
    KnownCustomResolverInputTypeFormat["Generated"] = "generated";
    /** GeneratedList */
    KnownCustomResolverInputTypeFormat["GeneratedList"] = "generated-list";
    /** Custom */
    KnownCustomResolverInputTypeFormat["Custom"] = "custom";
})(KnownCustomResolverInputTypeFormat || (KnownCustomResolverInputTypeFormat = {}));
/** Known values of {@link CustomResolverPayloadTypeFormat} that the service accepts. */
export var KnownCustomResolverPayloadTypeFormat;
(function (KnownCustomResolverPayloadTypeFormat) {
    /** Scalar */
    KnownCustomResolverPayloadTypeFormat["Scalar"] = "scalar";
    /** ScalarList */
    KnownCustomResolverPayloadTypeFormat["ScalarList"] = "scalar-list";
    /** Generated */
    KnownCustomResolverPayloadTypeFormat["Generated"] = "generated";
    /** GeneratedList */
    KnownCustomResolverPayloadTypeFormat["GeneratedList"] = "generated-list";
    /** Custom */
    KnownCustomResolverPayloadTypeFormat["Custom"] = "custom";
})(KnownCustomResolverPayloadTypeFormat || (KnownCustomResolverPayloadTypeFormat = {}));
/** Known values of {@link GraphQLValidationAction} that the service accepts. */
export var KnownGraphQLValidationAction;
(function (KnownGraphQLValidationAction) {
    /** Error */
    KnownGraphQLValidationAction["Error"] = "ERROR";
    /** Warn */
    KnownGraphQLValidationAction["Warn"] = "WARN";
})(KnownGraphQLValidationAction || (KnownGraphQLValidationAction = {}));
/** Known values of {@link GraphQLValidationLevel} that the service accepts. */
export var KnownGraphQLValidationLevel;
(function (KnownGraphQLValidationLevel) {
    /** Strict */
    KnownGraphQLValidationLevel["Strict"] = "STRICT";
    /** OFF */
    KnownGraphQLValidationLevel["OFF"] = "OFF";
})(KnownGraphQLValidationLevel || (KnownGraphQLValidationLevel = {}));
//# sourceMappingURL=index.js.map