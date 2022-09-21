'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var coreClient = require('@azure/core-client');
var coreRestPipeline = require('@azure/core-rest-pipeline');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var coreClient__namespace = /*#__PURE__*/_interopNamespace(coreClient);
var coreRestPipeline__namespace = /*#__PURE__*/_interopNamespace(coreRestPipeline);

/** Known values of {@link ProviderType} that the service accepts. */
exports.KnownProviderType = void 0;
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
})(exports.KnownProviderType || (exports.KnownProviderType = {}));
/** Known values of {@link ProfileType} that the service accepts. */
exports.KnownProfileType = void 0;
(function (KnownProfileType) {
    /** Normal */
    KnownProfileType["Normal"] = "normal";
    /** Server */
    KnownProfileType["Server"] = "server";
    /** System */
    KnownProfileType["System"] = "system";
    /** Unknown */
    KnownProfileType["Unknown"] = "unknown";
})(exports.KnownProfileType || (exports.KnownProfileType = {}));
/** Known values of {@link AppProviderRegionDeploymentModelsItem} that the service accepts. */
exports.KnownAppProviderRegionDeploymentModelsItem = void 0;
(function (KnownAppProviderRegionDeploymentModelsItem) {
    /** Global */
    KnownAppProviderRegionDeploymentModelsItem["Global"] = "GLOBAL";
    /** Local */
    KnownAppProviderRegionDeploymentModelsItem["Local"] = "LOCAL";
})(exports.KnownAppProviderRegionDeploymentModelsItem || (exports.KnownAppProviderRegionDeploymentModelsItem = {}));
/** Known values of {@link AtlasClusterConfigReadPreference} that the service accepts. */
exports.KnownAtlasClusterConfigReadPreference = void 0;
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
})(exports.KnownAtlasClusterConfigReadPreference || (exports.KnownAtlasClusterConfigReadPreference = {}));
/** Known values of {@link TriggerRequestType} that the service accepts. */
exports.KnownTriggerRequestType = void 0;
(function (KnownTriggerRequestType) {
    /** Database */
    KnownTriggerRequestType["Database"] = "DATABASE";
    /** Authentication */
    KnownTriggerRequestType["Authentication"] = "AUTHENTICATION";
    /** Scheduled */
    KnownTriggerRequestType["Scheduled"] = "SCHEDULED";
})(exports.KnownTriggerRequestType || (exports.KnownTriggerRequestType = {}));
/** Known values of {@link TriggerRequestConfigOperationTypesItem} that the service accepts. */
exports.KnownTriggerRequestConfigOperationTypesItem = void 0;
(function (KnownTriggerRequestConfigOperationTypesItem) {
    /** Insert */
    KnownTriggerRequestConfigOperationTypesItem["Insert"] = "INSERT";
    /** Update */
    KnownTriggerRequestConfigOperationTypesItem["Update"] = "UPDATE";
    /** Replace */
    KnownTriggerRequestConfigOperationTypesItem["Replace"] = "REPLACE";
    /** Delete */
    KnownTriggerRequestConfigOperationTypesItem["Delete"] = "DELETE";
})(exports.KnownTriggerRequestConfigOperationTypesItem || (exports.KnownTriggerRequestConfigOperationTypesItem = {}));
/** Known values of {@link TriggerRequestConfigOperationType} that the service accepts. */
exports.KnownTriggerRequestConfigOperationType = void 0;
(function (KnownTriggerRequestConfigOperationType) {
    /** Login */
    KnownTriggerRequestConfigOperationType["Login"] = "LOGIN";
    /** Create */
    KnownTriggerRequestConfigOperationType["Create"] = "CREATE";
    /** Delete */
    KnownTriggerRequestConfigOperationType["Delete"] = "DELETE";
})(exports.KnownTriggerRequestConfigOperationType || (exports.KnownTriggerRequestConfigOperationType = {}));
/** Known values of {@link ThirdPartyServiceType} that the service accepts. */
exports.KnownThirdPartyServiceType = void 0;
(function (KnownThirdPartyServiceType) {
    /** Aws */
    KnownThirdPartyServiceType["Aws"] = "aws";
    /** Twilio */
    KnownThirdPartyServiceType["Twilio"] = "twilio";
    /** Github */
    KnownThirdPartyServiceType["Github"] = "github";
    /** Gcm */
    KnownThirdPartyServiceType["Gcm"] = "gcm";
})(exports.KnownThirdPartyServiceType || (exports.KnownThirdPartyServiceType = {}));
/** Known values of {@link Enum8} that the service accepts. */
exports.KnownEnum8 = void 0;
(function (KnownEnum8) {
    /** Zero */
    KnownEnum8[KnownEnum8["Zero"] = 0] = "Zero";
    /** One */
    KnownEnum8[KnownEnum8["One"] = 1] = "One";
})(exports.KnownEnum8 || (exports.KnownEnum8 = {}));
/** Known values of {@link MessageState} that the service accepts. */
exports.KnownMessageState = void 0;
(function (KnownMessageState) {
    /** Sent */
    KnownMessageState["Sent"] = "sent";
    /** Draft */
    KnownMessageState["Draft"] = "draft";
})(exports.KnownMessageState || (exports.KnownMessageState = {}));
/** Known values of {@link Enum10} that the service accepts. */
exports.KnownEnum10 = void 0;
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
})(exports.KnownEnum10 || (exports.KnownEnum10 = {}));
/** Known values of {@link LogType} that the service accepts. */
exports.KnownLogType = void 0;
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
})(exports.KnownLogType || (exports.KnownLogType = {}));
/** Known values of {@link LogStatus} that the service accepts. */
exports.KnownLogStatus = void 0;
(function (KnownLogStatus) {
    /** Error */
    KnownLogStatus["Error"] = "error";
    /** Success */
    KnownLogStatus["Success"] = "success";
})(exports.KnownLogStatus || (exports.KnownLogStatus = {}));
/** Known values of {@link LogForwardingPolicyType} that the service accepts. */
exports.KnownLogForwardingPolicyType = void 0;
(function (KnownLogForwardingPolicyType) {
    /** Single */
    KnownLogForwardingPolicyType["Single"] = "single";
    /** Batch */
    KnownLogForwardingPolicyType["Batch"] = "batch";
})(exports.KnownLogForwardingPolicyType || (exports.KnownLogForwardingPolicyType = {}));
/** Known values of {@link LogForwardingActionType} that the service accepts. */
exports.KnownLogForwardingActionType = void 0;
(function (KnownLogForwardingActionType) {
    /** Collection */
    KnownLogForwardingActionType["Collection"] = "collection";
    /** Function */
    KnownLogForwardingActionType["Function"] = "function";
})(exports.KnownLogForwardingActionType || (exports.KnownLogForwardingActionType = {}));
/** Known values of {@link HostingConfigurationStatus} that the service accepts. */
exports.KnownHostingConfigurationStatus = void 0;
(function (KnownHostingConfigurationStatus) {
    /** SetupOk */
    KnownHostingConfigurationStatus["SetupOk"] = "setup_ok";
    /** ChangeInProgress */
    KnownHostingConfigurationStatus["ChangeInProgress"] = "change_in_progress";
    /** ChangeFailed */
    KnownHostingConfigurationStatus["ChangeFailed"] = "change_failed";
    /** ChangeFailedFatal */
    KnownHostingConfigurationStatus["ChangeFailedFatal"] = "change_failed_fatal";
})(exports.KnownHostingConfigurationStatus || (exports.KnownHostingConfigurationStatus = {}));
/** Known values of {@link Enum16} that the service accepts. */
exports.KnownEnum16 = void 0;
(function (KnownEnum16) {
    /** P31D */
    KnownEnum16["P31D"] = "P31D";
    /** PT1H */
    KnownEnum16["PT1H"] = "PT1H";
})(exports.KnownEnum16 || (exports.KnownEnum16 = {}));
/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemName} that the service accepts. */
exports.KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName = void 0;
(function (KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName) {
    /** RequestCount */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["RequestCount"] = "request_count";
    /** ComputeTime */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["ComputeTime"] = "compute_time";
    /** DataOut */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["DataOut"] = "data_out";
    /** SyncTime */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName["SyncTime"] = "sync_time";
})(exports.KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName || (exports.KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName = {}));
/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits} that the service accepts. */
exports.KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits = void 0;
(function (KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits) {
    /** EmptyString */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits["EmptyString"] = "<empty string>";
    /** Hours */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits["Hours"] = "HOURS";
    /** Gigabytes */
    KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits["Gigabytes"] = "GIGABYTES";
})(exports.KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits || (exports.KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits = {}));
/** Known values of {@link Enum19} that the service accepts. */
exports.KnownEnum19 = void 0;
(function (KnownEnum19) {
    /** P31D */
    KnownEnum19["P31D"] = "P31D";
    /** PT1H */
    KnownEnum19["PT1H"] = "PT1H";
})(exports.KnownEnum19 || (exports.KnownEnum19 = {}));
/** Known values of {@link Enum20} that the service accepts. */
exports.KnownEnum20 = void 0;
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
})(exports.KnownEnum20 || (exports.KnownEnum20 = {}));
/** Known values of {@link Enum21} that the service accepts. */
exports.KnownEnum21 = void 0;
(function (KnownEnum21) {
    /** EmptyString */
    KnownEnum21["EmptyString"] = "<empty string>";
    /** Hours */
    KnownEnum21["Hours"] = "HOURS";
    /** Gigabytes */
    KnownEnum21["Gigabytes"] = "GIGABYTES";
    /** GigabyteSeconds */
    KnownEnum21["GigabyteSeconds"] = "GIGABYTE_SECONDS";
})(exports.KnownEnum21 || (exports.KnownEnum21 = {}));
/** Known values of {@link EndpointHttpMethod} that the service accepts. */
exports.KnownEndpointHttpMethod = void 0;
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
})(exports.KnownEndpointHttpMethod || (exports.KnownEndpointHttpMethod = {}));
/** Known values of {@link EndpointValidationMethod} that the service accepts. */
exports.KnownEndpointValidationMethod = void 0;
(function (KnownEndpointValidationMethod) {
    /** NOValidation */
    KnownEndpointValidationMethod["NOValidation"] = "NO_VALIDATION";
    /** SecretASQueryParam */
    KnownEndpointValidationMethod["SecretASQueryParam"] = "SECRET_AS_QUERY_PARAM";
    /** VerifyPayload */
    KnownEndpointValidationMethod["VerifyPayload"] = "VERIFY_PAYLOAD";
})(exports.KnownEndpointValidationMethod || (exports.KnownEndpointValidationMethod = {}));
/** Known values of {@link EndpointDataFormat} that the service accepts. */
exports.KnownEndpointDataFormat = void 0;
(function (KnownEndpointDataFormat) {
    /** Json */
    KnownEndpointDataFormat["Json"] = "JSON";
    /** Ejson */
    KnownEndpointDataFormat["Ejson"] = "EJSON";
})(exports.KnownEndpointDataFormat || (exports.KnownEndpointDataFormat = {}));
/** Known values of {@link CustomResolverInputTypeFormat} that the service accepts. */
exports.KnownCustomResolverInputTypeFormat = void 0;
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
})(exports.KnownCustomResolverInputTypeFormat || (exports.KnownCustomResolverInputTypeFormat = {}));
/** Known values of {@link CustomResolverPayloadTypeFormat} that the service accepts. */
exports.KnownCustomResolverPayloadTypeFormat = void 0;
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
})(exports.KnownCustomResolverPayloadTypeFormat || (exports.KnownCustomResolverPayloadTypeFormat = {}));
/** Known values of {@link GraphQLValidationAction} that the service accepts. */
exports.KnownGraphQLValidationAction = void 0;
(function (KnownGraphQLValidationAction) {
    /** Error */
    KnownGraphQLValidationAction["Error"] = "ERROR";
    /** Warn */
    KnownGraphQLValidationAction["Warn"] = "WARN";
})(exports.KnownGraphQLValidationAction || (exports.KnownGraphQLValidationAction = {}));
/** Known values of {@link GraphQLValidationLevel} that the service accepts. */
exports.KnownGraphQLValidationLevel = void 0;
(function (KnownGraphQLValidationLevel) {
    /** Strict */
    KnownGraphQLValidationLevel["Strict"] = "STRICT";
    /** OFF */
    KnownGraphQLValidationLevel["OFF"] = "OFF";
})(exports.KnownGraphQLValidationLevel || (exports.KnownGraphQLValidationLevel = {}));

const ProviderSummary = {
    type: {
        name: "Composite",
        className: "ProviderSummary",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            username: {
                serializedName: "username",
                required: true,
                type: {
                    name: "String"
                }
            },
            apiKey: {
                serializedName: "apiKey",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            accessToken: {
                serializedName: "access_token",
                type: {
                    name: "String"
                }
            },
            refreshToken: {
                serializedName: "refresh_token",
                type: {
                    name: "String"
                }
            },
            userId: {
                serializedName: "user_id",
                type: {
                    name: "String"
                }
            },
            deviceId: {
                serializedName: "device_id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const RealmProfile = {
    type: {
        name: "Composite",
        className: "RealmProfile",
        modelProperties: {
            userId: {
                serializedName: "user_id",
                type: {
                    name: "String"
                }
            },
            domainId: {
                serializedName: "domain_id",
                type: {
                    name: "String"
                }
            },
            identities: {
                serializedName: "identities",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ProviderSummary"
                        }
                    }
                }
            },
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "RealmProfileData"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            roles: {
                serializedName: "roles",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "RealmProfileRolesItem"
                        }
                    }
                }
            }
        }
    }
};
const RealmProfileData = {
    type: {
        name: "Composite",
        className: "RealmProfileData",
        modelProperties: {
            email: {
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const RealmProfileRolesItem = {
    type: {
        name: "Composite",
        className: "RealmProfileRolesItem",
        modelProperties: {
            roleName: {
                serializedName: "role_name",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            accessToken: {
                serializedName: "access_token",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const AppProviderRegion = {
    type: {
        name: "Composite",
        className: "AppProviderRegion",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            cloudProvider: {
                serializedName: "cloud_provider",
                type: {
                    name: "String"
                }
            },
            country: {
                serializedName: "country",
                type: {
                    name: "String"
                }
            },
            deploymentModels: {
                serializedName: "deployment_models",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        }
    }
};
const NewApplication = {
    type: {
        name: "Composite",
        className: "NewApplication",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            templateId: {
                serializedName: "template_id",
                type: {
                    name: "String"
                }
            },
            dataSource: {
                serializedName: "data_source",
                type: {
                    name: "Composite",
                    className: "DataSource"
                }
            }
        }
    }
};
const DataSource = {
    type: {
        name: "Composite",
        className: "DataSource"
    }
};
const AtlasCluster = {
    type: {
        name: "Composite",
        className: "AtlasCluster",
        modelProperties: {
            name: {
                defaultValue: "mongodb-atlas",
                isConstant: true,
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                defaultValue: "mongodb-atlas",
                isConstant: true,
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            config: {
                serializedName: "config",
                type: {
                    name: "Composite",
                    className: "AtlasClusterConfig"
                }
            }
        }
    }
};
const AtlasClusterConfig = {
    type: {
        name: "Composite",
        className: "AtlasClusterConfig",
        modelProperties: {
            clusterName: {
                serializedName: "clusterName",
                required: true,
                type: {
                    name: "String"
                }
            },
            readPreference: {
                serializedName: "readPreference",
                type: {
                    name: "String"
                }
            },
            wireProtocolEnabled: {
                serializedName: "wireProtocolEnabled",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const AtlasFederatedInstance = {
    type: {
        name: "Composite",
        className: "AtlasFederatedInstance",
        modelProperties: {
            name: {
                defaultValue: "mongodb-datalake",
                isConstant: true,
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                defaultValue: "mongodb-datalake",
                isConstant: true,
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            config: {
                serializedName: "config",
                type: {
                    name: "Composite",
                    className: "AtlasFederatedInstanceConfig"
                }
            }
        }
    }
};
const AtlasFederatedInstanceConfig = {
    type: {
        name: "Composite",
        className: "AtlasFederatedInstanceConfig",
        modelProperties: {
            dataLakeName: {
                serializedName: "dataLakeName",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ApplicationSummary = {
    type: {
        name: "Composite",
        className: "ApplicationSummary",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            clientAppId: {
                serializedName: "client_app_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "String"
                }
            },
            deploymentModel: {
                serializedName: "deployment_model",
                type: {
                    name: "String"
                }
            },
            domainId: {
                serializedName: "domain_id",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            lastUsed: {
                serializedName: "last_used",
                type: {
                    name: "Number"
                }
            },
            lastModified: {
                serializedName: "last_modified",
                type: {
                    name: "Number"
                }
            },
            product: {
                serializedName: "product",
                type: {
                    name: "String"
                }
            },
            environment: {
                serializedName: "environment",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Application = {
    type: {
        name: "Composite",
        className: "Application",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            clientAppId: {
                serializedName: "client_app_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "String"
                }
            },
            deploymentModel: {
                serializedName: "deployment_model",
                type: {
                    name: "String"
                }
            },
            domainId: {
                serializedName: "domain_id",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const TriggerRequest = {
    type: {
        name: "Composite",
        className: "TriggerRequest",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                required: true,
                type: {
                    name: "String"
                }
            },
            functionId: {
                serializedName: "function_id",
                required: true,
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            },
            config: {
                serializedName: "config",
                type: {
                    name: "Composite",
                    className: "TriggerRequestConfig"
                }
            },
            eventProcessors: {
                serializedName: "event_processors",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const TriggerRequestConfig = {
    type: {
        name: "Composite",
        className: "TriggerRequestConfig",
        modelProperties: {
            operationTypes: {
                serializedName: "operation_types",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            operationType: {
                serializedName: "operation_type",
                required: true,
                type: {
                    name: "String"
                }
            },
            providers: {
                serializedName: "providers",
                required: true,
                type: {
                    name: "String"
                }
            },
            database: {
                serializedName: "database",
                required: true,
                type: {
                    name: "String"
                }
            },
            collection: {
                serializedName: "collection",
                required: true,
                type: {
                    name: "String"
                }
            },
            serviceId: {
                serializedName: "service_id",
                required: true,
                type: {
                    name: "String"
                }
            },
            match: {
                serializedName: "match",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            fullDocument: {
                serializedName: "full_document",
                type: {
                    name: "Boolean"
                }
            },
            fullDocumentBeforeChange: {
                serializedName: "full_document_before_change",
                type: {
                    name: "Boolean"
                }
            },
            schedule: {
                serializedName: "schedule",
                type: {
                    name: "String"
                }
            },
            unordered: {
                serializedName: "unordered",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const TriggerResponse = {
    type: {
        name: "Composite",
        className: "TriggerResponse",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            functionId: {
                serializedName: "function_id",
                type: {
                    name: "String"
                }
            },
            functionName: {
                serializedName: "function_name",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const ErrorModel = {
    type: {
        name: "Composite",
        className: "ErrorModel",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "String"
                }
            },
            errorCode: {
                serializedName: "error_code",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            disableToken: {
                serializedName: "disable_token",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const NewValue = {
    type: {
        name: "Composite",
        className: "NewValue",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            private: {
                serializedName: "private",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "any"
                }
            }
        }
    }
};
const Value = {
    type: {
        name: "Composite",
        className: "Value",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            private: {
                serializedName: "private",
                type: {
                    name: "Boolean"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "any"
                }
            }
        }
    }
};
const PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema"
    }
};
const ThirdPartyService = {
    type: {
        name: "Composite",
        className: "ThirdPartyService",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema"
    }
};
const Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema"
    }
};
const PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            databaseName: {
                serializedName: "database_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            collectionName: {
                serializedName: "collection_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            fromSchema: {
                serializedName: "from_schema",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            query: {
                serializedName: "query",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            limit: {
                defaultValue: 10000,
                serializedName: "limit",
                type: {
                    name: "Number"
                }
            },
            sort: {
                serializedName: "sort",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            errors: {
                serializedName: "errors",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Post200ApplicationJsonPropertiesItemsItem"
                        }
                    }
                }
            },
            totalProcessedCount: {
                serializedName: "total_processed_count",
                type: {
                    name: "Number"
                }
            },
            totalErrorCount: {
                serializedName: "total_error_count",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Post200ApplicationJsonPropertiesItemsItem = {
    type: {
        name: "Composite",
        className: "Post200ApplicationJsonPropertiesItemsItem",
        modelProperties: {
            errorCode: {
                serializedName: "error_code",
                type: {
                    name: "Composite",
                    className: "ValidationError"
                }
            },
            errorCount: {
                serializedName: "error_count",
                type: {
                    name: "Number"
                }
            },
            field: {
                serializedName: "field",
                type: {
                    name: "String"
                }
            },
            failedIds: {
                serializedName: "failed_ids",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            failedDocumentsQuery: {
                serializedName: "failed_documents_query",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const ValidationError = {
    type: {
        name: "Composite",
        className: "ValidationError"
    }
};
const BuildInfo = {
    type: {
        name: "Composite",
        className: "BuildInfo",
        modelProperties: {
            version: {
                serializedName: "version",
                type: {
                    name: "String"
                }
            },
            gitVersion: {
                serializedName: "gitVersion",
                type: {
                    name: "String"
                }
            },
            versionArray: {
                serializedName: "versionArray",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Number"
                        }
                    }
                }
            },
            javascriptEngine: {
                serializedName: "javascriptEngine",
                type: {
                    name: "String"
                }
            },
            bits: {
                serializedName: "bits",
                type: {
                    name: "String"
                }
            },
            debug: {
                serializedName: "debug",
                type: {
                    name: "Boolean"
                }
            },
            maxBsonObjectSize: {
                serializedName: "maxBsonObjectSize",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema"
    }
};
const Rule = {
    type: {
        name: "Composite",
        className: "Rule",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            database: {
                serializedName: "database",
                required: true,
                type: {
                    name: "String"
                }
            },
            collection: {
                serializedName: "collection",
                required: true,
                type: {
                    name: "String"
                }
            },
            roles: {
                serializedName: "roles",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Role"
                        }
                    }
                }
            },
            filters: {
                serializedName: "filters",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Filter"
                        }
                    }
                }
            }
        }
    }
};
const Role = {
    type: {
        name: "Composite",
        className: "Role",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            applyWhen: {
                serializedName: "apply_when",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            write: {
                serializedName: "write",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            insert: {
                serializedName: "insert",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            delete: {
                serializedName: "delete",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            search: {
                serializedName: "search",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            fields: {
                serializedName: "fields",
                type: {
                    name: "Dictionary",
                    value: {
                        type: {
                            name: "Composite",
                            className: "Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties"
                        }
                    }
                }
            },
            additionalFields: {
                serializedName: "additional_fields",
                type: {
                    name: "Composite",
                    className: "FieldLevelPermissions"
                }
            }
        }
    }
};
const Expression = {
    type: {
        name: "Composite",
        className: "Expression"
    }
};
const FieldLevelPermissions = {
    type: {
        name: "Composite",
        className: "FieldLevelPermissions",
        modelProperties: {
            read: {
                serializedName: "read",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            write: {
                serializedName: "write",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            }
        }
    }
};
const Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1 = {
    type: {
        name: "Composite",
        className: "Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1",
        modelProperties: {
            fields: {
                serializedName: "fields",
                type: {
                    name: "Dictionary",
                    value: {
                        type: {
                            name: "Composite",
                            className: "Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties"
                        }
                    }
                }
            }
        }
    }
};
const Filter = {
    type: {
        name: "Composite",
        className: "Filter",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            applyWhen: {
                serializedName: "apply_when",
                type: {
                    name: "Composite",
                    className: "Expression"
                }
            },
            query: {
                serializedName: "query",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            projection: {
                serializedName: "projection",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "Number" } }
                }
            }
        }
    }
};
const ThirdPartyServiceRule = {
    type: {
        name: "Composite",
        className: "ThirdPartyServiceRule",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            actions: {
                serializedName: "actions",
                type: {
                    name: "any"
                }
            },
            when: {
                serializedName: "when",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema"
    }
};
const Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema"
    }
};
const DefaultRule = {
    type: {
        name: "Composite",
        className: "DefaultRule",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            roles: {
                serializedName: "roles",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Role"
                        }
                    }
                }
            },
            filters: {
                serializedName: "filters",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Filter"
                        }
                    }
                }
            }
        }
    }
};
const BasicError = {
    type: {
        name: "Composite",
        className: "BasicError",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            databaseName: {
                serializedName: "database_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            collectionName: {
                serializedName: "collection_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            limit: {
                serializedName: "limit",
                required: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            schema: {
                serializedName: "schema",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const IncomingWebhook = {
    type: {
        name: "Composite",
        className: "IncomingWebhook",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            functionSource: {
                serializedName: "function_source",
                required: true,
                type: {
                    name: "String"
                }
            },
            respondResult: {
                serializedName: "respond_result",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            options: {
                serializedName: "options",
                type: {
                    name: "Composite",
                    className: "IncomingWebhookOptions"
                }
            }
        }
    }
};
const IncomingWebhookOptions = {
    type: {
        name: "Composite",
        className: "IncomingWebhookOptions",
        modelProperties: {
            secret: {
                serializedName: "secret",
                type: {
                    name: "String"
                }
            },
            secretAsQueryParam: {
                serializedName: "secretAsQueryParam",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const SyncDataResponse = {
    type: {
        name: "Composite",
        className: "SyncDataResponse",
        modelProperties: {
            serviceId: {
                serializedName: "service_id",
                type: {
                    name: "String"
                }
            },
            partitionFields: {
                serializedName: "partition_fields",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Partition"
                        }
                    }
                }
            }
        }
    }
};
const Partition = {
    type: {
        name: "Composite",
        className: "Partition",
        modelProperties: {
            key: {
                serializedName: "key",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const NewMessage = {
    type: {
        name: "Composite",
        className: "NewMessage",
        modelProperties: {
            label: {
                serializedName: "label",
                required: true,
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                required: true,
                type: {
                    name: "String"
                }
            },
            topic: {
                serializedName: "topic",
                required: true,
                type: {
                    name: "String"
                }
            },
            state: {
                serializedName: "state",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Message = {
    type: {
        name: "Composite",
        className: "Message",
        modelProperties: {
            allowedIps: {
                serializedName: "allowed_ips",
                type: {
                    name: "String"
                }
            },
            appID: {
                serializedName: "appID",
                type: {
                    name: "String"
                }
            },
            label: {
                serializedName: "label",
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                type: {
                    name: "String"
                }
            },
            topic: {
                serializedName: "topic",
                type: {
                    name: "String"
                }
            },
            created: {
                serializedName: "created",
                type: {
                    name: "String"
                }
            },
            sent: {
                serializedName: "sent",
                type: {
                    name: "String"
                }
            },
            state: {
                serializedName: "state",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const User = {
    type: {
        name: "Composite",
        className: "User",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            identities: {
                serializedName: "identities",
                type: {
                    name: "any"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            creationDate: {
                serializedName: "creation_date",
                type: {
                    name: "Number"
                }
            },
            lastAuthenticationDate: {
                serializedName: "last_authentication_date",
                type: {
                    name: "Number"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            },
            data: {
                serializedName: "data",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            email: {
                serializedName: "email",
                required: true,
                type: {
                    name: "String"
                }
            },
            password: {
                serializedName: "password",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            token: {
                serializedName: "token",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            sub: {
                serializedName: "sub",
                type: {
                    name: "String"
                }
            },
            aud: {
                serializedName: "aud",
                type: {
                    name: "String"
                }
            },
            exp: {
                serializedName: "exp",
                type: {
                    name: "Number"
                }
            },
            iat: {
                serializedName: "iat",
                type: {
                    name: "Number"
                }
            },
            iss: {
                serializedName: "iss",
                type: {
                    name: "String"
                }
            },
            customUserData: {
                serializedName: "custom_user_data",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            domainId: {
                serializedName: "domain_id",
                type: {
                    name: "String"
                }
            },
            data: {
                serializedName: "data",
                type: {
                    name: "String"
                }
            },
            deviceId: {
                serializedName: "device_id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            service: {
                serializedName: "service",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            arguments: {
                serializedName: "arguments",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        }
    }
};
const PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            logs: {
                serializedName: "logs",
                type: {
                    name: "any"
                }
            },
            result: {
                serializedName: "result",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            stats: {
                serializedName: "stats",
                type: {
                    name: "Composite",
                    className: "Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats"
                }
            }
        }
    }
};
const Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats = {
    type: {
        name: "Composite",
        className: "Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats",
        modelProperties: {
            executionTime: {
                serializedName: "execution_time",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            evalSource: {
                serializedName: "eval_source",
                type: {
                    name: "String"
                }
            },
            source: {
                serializedName: "source",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            logs: {
                serializedName: "logs",
                type: {
                    name: "any"
                }
            },
            result: {
                serializedName: "result",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            stats: {
                serializedName: "stats",
                type: {
                    name: "Composite",
                    className: "Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats"
                }
            }
        }
    }
};
const Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats = {
    type: {
        name: "Composite",
        className: "Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats",
        modelProperties: {
            executionTime: {
                serializedName: "execution_time",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const NewProvider = {
    type: {
        name: "Composite",
        className: "NewProvider",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                required: true,
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            config: {
                serializedName: "config",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const FullProvider = {
    type: {
        name: "Composite",
        className: "FullProvider",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            },
            config: {
                serializedName: "config",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            address: {
                serializedName: "address",
                type: {
                    name: "String"
                }
            },
            ip: {
                serializedName: "ip",
                type: {
                    name: "String"
                }
            },
            network: {
                serializedName: "network",
                type: {
                    name: "String"
                }
            },
            comment: {
                serializedName: "comment",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            address: {
                serializedName: "address",
                type: {
                    name: "String"
                }
            },
            ip: {
                serializedName: "ip",
                type: {
                    name: "String"
                }
            },
            network: {
                serializedName: "network",
                type: {
                    name: "String"
                }
            },
            comment: {
                serializedName: "comment",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            logs: {
                constraints: {
                    MaxItems: 100
                },
                serializedName: "logs",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Get200ApplicationJsonPropertiesItemsItem"
                        }
                    }
                }
            },
            nextEndDate: {
                serializedName: "nextEndDate",
                required: true,
                type: {
                    name: "String"
                }
            },
            nextSkip: {
                serializedName: "nextSkip",
                required: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Get200ApplicationJsonPropertiesItemsItem = {
    type: {
        name: "Composite",
        className: "Get200ApplicationJsonPropertiesItemsItem",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            coId: {
                serializedName: "co_id",
                type: {
                    name: "String"
                }
            },
            domainId: {
                serializedName: "domain_id",
                type: {
                    name: "String"
                }
            },
            appId: {
                serializedName: "app_id",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            requestUrl: {
                serializedName: "request_url",
                type: {
                    name: "String"
                }
            },
            requestMethod: {
                serializedName: "request_method",
                type: {
                    name: "String"
                }
            },
            started: {
                serializedName: "started",
                type: {
                    name: "String"
                }
            },
            completed: {
                serializedName: "completed",
                type: {
                    name: "String"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "String"
                }
            },
            errorCode: {
                serializedName: "error_code",
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const LogForwarder = {
    type: {
        name: "Composite",
        className: "LogForwarder",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            },
            logTypes: {
                serializedName: "log_types",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            logStatuses: {
                serializedName: "log_statuses",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            policy: {
                serializedName: "policy",
                type: {
                    name: "Composite",
                    className: "LogForwardingPolicy"
                }
            },
            action: {
                serializedName: "action",
                type: {
                    name: "Composite",
                    className: "LogForwardingAction"
                }
            }
        }
    }
};
const LogForwardingPolicy = {
    type: {
        name: "Composite",
        className: "LogForwardingPolicy",
        modelProperties: {
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const LogForwardingAction = {
    type: {
        name: "Composite",
        className: "LogForwardingAction",
        modelProperties: {
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            dataSource: {
                serializedName: "data_source",
                type: {
                    name: "String"
                }
            },
            database: {
                serializedName: "database",
                type: {
                    name: "String"
                }
            },
            collection: {
                serializedName: "collection",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ApiKey = {
    type: {
        name: "Composite",
        className: "ApiKey",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ApiKeyResponse = {
    type: {
        name: "Composite",
        className: "ApiKeyResponse",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const NewFunction = {
    type: {
        name: "Composite",
        className: "NewFunction",
        modelProperties: {
            canEvaluate: {
                serializedName: "can_evaluate",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            private: {
                serializedName: "private",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            source: {
                serializedName: "source",
                required: true,
                type: {
                    name: "String"
                }
            },
            runAsSystem: {
                serializedName: "run_as_system",
                required: true,
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const FunctionModel = {
    type: {
        name: "Composite",
        className: "FunctionModel",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            canEvaluate: {
                serializedName: "can_evaluate",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            private: {
                serializedName: "private",
                type: {
                    name: "Boolean"
                }
            },
            source: {
                serializedName: "source",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const DependenciesSummary = {
    type: {
        name: "Composite",
        className: "DependenciesSummary",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "String"
                }
            },
            userId: {
                serializedName: "user_id",
                type: {
                    name: "String"
                }
            },
            lastModified: {
                serializedName: "last_modified",
                type: {
                    name: "Number"
                }
            },
            dependenciesList: {
                serializedName: "dependencies_list",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Dependency"
                        }
                    }
                }
            }
        }
    }
};
const Dependency = {
    type: {
        name: "Composite",
        className: "Dependency",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Deployment = {
    type: {
        name: "Composite",
        className: "Deployment",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            appId: {
                serializedName: "app_id",
                type: {
                    name: "String"
                }
            },
            draftId: {
                serializedName: "draft_id",
                type: {
                    name: "String"
                }
            },
            userId: {
                serializedName: "user_id",
                type: {
                    name: "String"
                }
            },
            deployedAt: {
                serializedName: "deployed_at",
                type: {
                    name: "Number"
                }
            },
            origin: {
                serializedName: "origin",
                type: {
                    name: "String"
                }
            },
            commit: {
                serializedName: "commit",
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            },
            statusErrorMessage: {
                serializedName: "status_error_message",
                type: {
                    name: "String"
                }
            },
            diffUrl: {
                serializedName: "diff_url",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const DeploymentDraft = {
    type: {
        name: "Composite",
        className: "DeploymentDraft",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            userId: {
                serializedName: "user_id",
                type: {
                    name: "String"
                }
            },
            app: {
                serializedName: "app",
                type: {
                    name: "Composite",
                    className: "Application"
                }
            }
        }
    }
};
const Diff = {
    type: {
        name: "Composite",
        className: "Diff",
        modelProperties: {
            diffs: {
                serializedName: "diffs",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            hostingFilesDiff: {
                serializedName: "hosting_files_diff",
                type: {
                    name: "Composite",
                    className: "DiffHostingFilesDiff"
                }
            }
        }
    }
};
const DiffHostingFilesDiff = {
    type: {
        name: "Composite",
        className: "DiffHostingFilesDiff",
        modelProperties: {
            added: {
                serializedName: "added",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            deleted: {
                serializedName: "deleted",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            modified: {
                serializedName: "modified",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        }
    }
};
const HostingConfiguration = {
    type: {
        name: "Composite",
        className: "HostingConfiguration",
        modelProperties: {
            enabled: {
                serializedName: "enabled",
                type: {
                    name: "Boolean"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            },
            defaultDomain: {
                serializedName: "default_domain",
                type: {
                    name: "Composite",
                    className: "HostingConfigurationDefaultDomain"
                }
            }
        }
    }
};
const HostingConfigurationDefaultDomain = {
    type: {
        name: "Composite",
        className: "HostingConfigurationDefaultDomain",
        modelProperties: {
            providerType: {
                serializedName: "provider_type",
                type: {
                    name: "String"
                }
            },
            config: {
                serializedName: "config",
                type: {
                    name: "Composite",
                    className: "HostingConfigurationDefaultDomainConfig"
                }
            }
        }
    }
};
const HostingConfigurationDefaultDomainConfig = {
    type: {
        name: "Composite",
        className: "HostingConfigurationDefaultDomainConfig",
        modelProperties: {
            appDefaultDomain: {
                serializedName: "app_default_domain",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            enabled: {
                serializedName: "enabled",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const HostedAssetMetadata = {
    type: {
        name: "Composite",
        className: "HostedAssetMetadata",
        modelProperties: {
            appId: {
                serializedName: "appId",
                type: {
                    name: "String"
                }
            },
            lastModified: {
                serializedName: "last_modified",
                type: {
                    name: "Number"
                }
            },
            url: {
                serializedName: "url",
                type: {
                    name: "String"
                }
            },
            path: {
                serializedName: "path",
                type: {
                    name: "String"
                }
            },
            size: {
                serializedName: "size",
                type: {
                    name: "Number"
                }
            },
            attrs: {
                serializedName: "attrs",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "MetadataAttribute"
                        }
                    }
                }
            },
            hash: {
                serializedName: "hash",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const MetadataAttribute = {
    type: {
        name: "Composite",
        className: "MetadataAttribute",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            moveFrom: {
                serializedName: "move_from",
                type: {
                    name: "String"
                }
            },
            moveTo: {
                serializedName: "move_to",
                type: {
                    name: "String"
                }
            },
            copyFrom: {
                serializedName: "copy_from",
                type: {
                    name: "String"
                }
            },
            copyTo: {
                serializedName: "copy_to",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "AssetMetadata"
                }
            },
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            }
        }
    }
};
const AssetMetadata = {
    type: {
        name: "Composite",
        className: "AssetMetadata",
        modelProperties: {
            path: {
                serializedName: "path",
                type: {
                    name: "String"
                }
            },
            size: {
                serializedName: "size",
                type: {
                    name: "Number"
                }
            },
            attrs: {
                serializedName: "attrs",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "MetadataAttribute"
                        }
                    }
                }
            },
            hash: {
                serializedName: "hash",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            attributes: {
                serializedName: "attributes",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "MetadataAttribute"
                        }
                    }
                }
            }
        }
    }
};
const PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            start: {
                serializedName: "start",
                type: {
                    name: "String"
                }
            },
            end: {
                serializedName: "end",
                type: {
                    name: "String"
                }
            },
            granularity: {
                serializedName: "granularity",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            measurements: {
                serializedName: "measurements",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems"
                        }
                    }
                }
            }
        }
    }
};
const PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems = {
    type: {
        name: "Composite",
        className: "PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            units: {
                serializedName: "units",
                type: {
                    name: "String"
                }
            },
            dataPoints: {
                serializedName: "data_points",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Get200ApplicationJsonPropertiesItemsDataPointsItem"
                        }
                    }
                }
            }
        }
    }
};
const Get200ApplicationJsonPropertiesItemsDataPointsItem = {
    type: {
        name: "Composite",
        className: "Get200ApplicationJsonPropertiesItemsDataPointsItem",
        modelProperties: {
            timestamp: {
                serializedName: "timestamp",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            start: {
                serializedName: "start",
                type: {
                    name: "String"
                }
            },
            end: {
                serializedName: "end",
                type: {
                    name: "String"
                }
            },
            granularity: {
                serializedName: "granularity",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            appId: {
                serializedName: "appId",
                type: {
                    name: "String"
                }
            },
            appName: {
                serializedName: "appName",
                type: {
                    name: "String"
                }
            },
            measurements: {
                serializedName: "measurements",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems"
                        }
                    }
                }
            }
        }
    }
};
const PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems = {
    type: {
        name: "Composite",
        className: "PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            units: {
                serializedName: "units",
                type: {
                    name: "String"
                }
            },
            dataPoints: {
                serializedName: "data_points",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems"
                        }
                    }
                }
            }
        }
    }
};
const PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems = {
    type: {
        name: "Composite",
        className: "PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems",
        modelProperties: {
            timestamp: {
                serializedName: "timestamp",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems = {
    type: {
        name: "Composite",
        className: "Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            schema: {
                serializedName: "schema",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            metadata: {
                serializedName: "metadata",
                type: {
                    name: "Composite",
                    className: "SchemaMetadata"
                }
            }
        }
    }
};
const SchemaMetadata = {
    type: {
        name: "Composite",
        className: "SchemaMetadata",
        modelProperties: {
            dataSource: {
                serializedName: "data_source",
                type: {
                    name: "String"
                }
            },
            database: {
                serializedName: "database",
                type: {
                    name: "String"
                }
            },
            collection: {
                serializedName: "collection",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            schema: {
                serializedName: "schema",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            metadata: {
                serializedName: "metadata",
                type: {
                    name: "Composite",
                    className: "SchemaMetadata"
                }
            }
        }
    }
};
const Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            metadata: {
                serializedName: "metadata",
                type: {
                    name: "Composite",
                    className: "SchemaMetadata"
                }
            }
        }
    }
};
const Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            schema: {
                serializedName: "schema",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            schema: {
                serializedName: "schema",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            relationships: {
                serializedName: "relationships",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "Composite", className: "Relationship" } }
                }
            },
            metadata: {
                serializedName: "metadata",
                type: {
                    name: "Composite",
                    className: "SchemaMetadata"
                }
            }
        }
    }
};
const Relationship = {
    type: {
        name: "Composite",
        className: "Relationship",
        modelProperties: {
            ref: {
                serializedName: "ref",
                type: {
                    name: "String"
                }
            },
            foreignKey: {
                serializedName: "foreign_key",
                type: {
                    name: "String"
                }
            },
            isList: {
                serializedName: "is_list",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const Endpoint = {
    type: {
        name: "Composite",
        className: "Endpoint",
        modelProperties: {
            route: {
                serializedName: "route",
                type: {
                    name: "String"
                }
            },
            httpMethod: {
                serializedName: "http_method",
                type: {
                    name: "String"
                }
            },
            functionName: {
                serializedName: "function_name",
                type: {
                    name: "String"
                }
            },
            validationMethod: {
                serializedName: "validation_method",
                type: {
                    name: "String"
                }
            },
            returnType: {
                serializedName: "return_type",
                type: {
                    name: "String"
                }
            },
            respondResult: {
                serializedName: "respond_result",
                type: {
                    name: "Boolean"
                }
            },
            fetchCustomUserData: {
                serializedName: "fetch_custom_user_data",
                type: {
                    name: "Boolean"
                }
            },
            createUserOnAuth: {
                serializedName: "create_user_on_auth",
                type: {
                    name: "Boolean"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const DataApiConfig = {
    type: {
        name: "Composite",
        className: "DataApiConfig",
        modelProperties: {
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            },
            versions: {
                serializedName: "versions",
                type: {
                    name: "Sequence",
                    element: {
                        defaultValue: "v1",
                        isConstant: true,
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            returnType: {
                serializedName: "return_type",
                type: {
                    name: "String"
                }
            },
            createUserOnAuth: {
                serializedName: "create_user_on_auth",
                type: {
                    name: "Boolean"
                }
            },
            runAsUserId: {
                serializedName: "run_as_user_id",
                type: {
                    name: "String"
                }
            },
            runAsUserIdScriptSource: {
                serializedName: "run_as_user_id_script_source",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            query: {
                serializedName: "query",
                required: true,
                type: {
                    name: "String"
                }
            },
            variables: {
                serializedName: "variables",
                type: {
                    name: "String"
                }
            },
            operationName: {
                serializedName: "operationName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema",
        modelProperties: {
            data: {
                serializedName: "data",
                required: true,
                nullable: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            errors: {
                constraints: {
                    MinItems: 1
                },
                serializedName: "errors",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems"
                        }
                    }
                }
            }
        }
    }
};
const Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems = {
    type: {
        name: "Composite",
        className: "Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems",
        modelProperties: {
            message: {
                serializedName: "message",
                required: true,
                type: {
                    name: "String"
                }
            },
            locations: {
                serializedName: "locations",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Post200ApplicationJsonPropertiesItemsLocationsItem"
                        }
                    }
                }
            }
        }
    }
};
const Post200ApplicationJsonPropertiesItemsLocationsItem = {
    type: {
        name: "Composite",
        className: "Post200ApplicationJsonPropertiesItemsLocationsItem",
        modelProperties: {
            line: {
                serializedName: "line",
                required: true,
                type: {
                    name: "Number"
                }
            },
            column: {
                serializedName: "column",
                required: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const CustomResolver = {
    type: {
        name: "Composite",
        className: "CustomResolver",
        modelProperties: {
            id: {
                serializedName: "_id",
                required: true,
                type: {
                    name: "String"
                }
            },
            functionId: {
                serializedName: "function_id",
                required: true,
                type: {
                    name: "String"
                }
            },
            onType: {
                serializedName: "on_type",
                required: true,
                type: {
                    name: "String"
                }
            },
            fieldName: {
                serializedName: "field_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            inputType: {
                serializedName: "input_type",
                type: {
                    name: "Composite",
                    className: "CustomResolverInputType"
                }
            },
            inputTypeFormat: {
                serializedName: "input_type_format",
                type: {
                    name: "String"
                }
            },
            payloadType: {
                serializedName: "payload_type",
                type: {
                    name: "Composite",
                    className: "CustomResolverPayloadType"
                }
            },
            payloadTypeFormat: {
                serializedName: "payload_type_format",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const CustomResolverInputType = {
    type: {
        name: "Composite",
        className: "CustomResolverInputType"
    }
};
const CustomResolverPayloadType = {
    type: {
        name: "Composite",
        className: "CustomResolverPayloadType"
    }
};
const GraphQLValidationSettings = {
    type: {
        name: "Composite",
        className: "GraphQLValidationSettings",
        modelProperties: {
            readValidationAction: {
                serializedName: "read_validation_action",
                type: {
                    name: "String"
                }
            },
            readValidationLevel: {
                serializedName: "read_validation_level",
                type: {
                    name: "String"
                }
            },
            writeValidationAction: {
                serializedName: "write_validation_action",
                type: {
                    name: "String"
                }
            },
            writeValidationLevel: {
                serializedName: "write_validation_level",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const UserProvider = {
    type: {
        name: "Composite",
        className: "UserProvider",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            providerType: {
                serializedName: "provider_type",
                type: {
                    name: "String"
                }
            },
            providerId: {
                serializedName: "provider_id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ValueSummary = {
    type: {
        name: "Composite",
        className: "ValueSummary",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            private: {
                serializedName: "private",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const Get200ApplicationJsonItemsItem = {
    type: {
        name: "Composite",
        className: "Get200ApplicationJsonItemsItem"
    }
};
const PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems = {
    type: {
        name: "Composite",
        className: "PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems"
    }
};
const PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems = {
    type: {
        name: "Composite",
        className: "PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems",
        modelProperties: {
            currentIp: {
                serializedName: "current_ip",
                type: {
                    name: "String"
                }
            },
            allowedIps: {
                serializedName: "allowed_ips",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Get200ApplicationJsonItemsAllowedIpsItem"
                        }
                    }
                }
            }
        }
    }
};
const Get200ApplicationJsonItemsAllowedIpsItem = {
    type: {
        name: "Composite",
        className: "Get200ApplicationJsonItemsAllowedIpsItem",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            address: {
                serializedName: "address",
                type: {
                    name: "String"
                }
            },
            ip: {
                serializedName: "ip",
                type: {
                    name: "String"
                }
            },
            network: {
                serializedName: "network",
                type: {
                    name: "String"
                }
            },
            comment: {
                serializedName: "comment",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems = {
    type: {
        name: "Composite",
        className: "PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            disabled: {
                serializedName: "disabled",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems = {
    type: {
        name: "Composite",
        className: "Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems = {
    type: {
        name: "Composite",
        className: "PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems",
        modelProperties: {
            id: {
                serializedName: "_id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties = {
    type: {
        name: "Composite",
        className: "Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties",
        modelProperties: Object.assign(Object.assign({}, FieldLevelPermissions.type.modelProperties), Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1
            .type.modelProperties)
    }
};
const PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema",
        modelProperties: Object.assign({}, DefaultRule.type.modelProperties)
    }
};

var Mappers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ProviderSummary: ProviderSummary,
    PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema: PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema,
    Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema: Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema,
    RealmProfile: RealmProfile,
    RealmProfileData: RealmProfileData,
    RealmProfileRolesItem: RealmProfileRolesItem,
    PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema: PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema,
    AppProviderRegion: AppProviderRegion,
    NewApplication: NewApplication,
    DataSource: DataSource,
    AtlasCluster: AtlasCluster,
    AtlasClusterConfig: AtlasClusterConfig,
    AtlasFederatedInstance: AtlasFederatedInstance,
    AtlasFederatedInstanceConfig: AtlasFederatedInstanceConfig,
    ApplicationSummary: ApplicationSummary,
    Application: Application,
    TriggerRequest: TriggerRequest,
    TriggerRequestConfig: TriggerRequestConfig,
    TriggerResponse: TriggerResponse,
    ErrorModel: ErrorModel,
    PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema: PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema,
    PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema: PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema,
    NewValue: NewValue,
    Value: Value,
    PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema: PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema,
    ThirdPartyService: ThirdPartyService,
    Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema: Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema,
    Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema: Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema,
    PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema: PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema,
    Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema: Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema,
    Post200ApplicationJsonPropertiesItemsItem: Post200ApplicationJsonPropertiesItemsItem,
    ValidationError: ValidationError,
    BuildInfo: BuildInfo,
    Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema: Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema,
    Rule: Rule,
    Role: Role,
    Expression: Expression,
    FieldLevelPermissions: FieldLevelPermissions,
    Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1: Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1,
    Filter: Filter,
    ThirdPartyServiceRule: ThirdPartyServiceRule,
    Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema: Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema,
    Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema: Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema,
    Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema: Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema,
    DefaultRule: DefaultRule,
    BasicError: BasicError,
    PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema: PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema,
    Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema: Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema,
    IncomingWebhook: IncomingWebhook,
    IncomingWebhookOptions: IncomingWebhookOptions,
    SyncDataResponse: SyncDataResponse,
    Partition: Partition,
    NewMessage: NewMessage,
    Message: Message,
    User: User,
    PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema: PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema,
    PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema: PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema,
    PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema: PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema,
    PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema: PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema,
    PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema: PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema,
    Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats: Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats,
    Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema: Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema,
    Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema: Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema,
    Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats: Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats,
    NewProvider: NewProvider,
    FullProvider: FullProvider,
    Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema: Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema,
    PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema: PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema,
    Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema: Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema,
    Get200ApplicationJsonPropertiesItemsItem: Get200ApplicationJsonPropertiesItemsItem,
    LogForwarder: LogForwarder,
    LogForwardingPolicy: LogForwardingPolicy,
    LogForwardingAction: LogForwardingAction,
    Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema: Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema,
    ApiKey: ApiKey,
    ApiKeyResponse: ApiKeyResponse,
    Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema: Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema,
    Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema: Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema,
    PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema: PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema,
    NewFunction: NewFunction,
    Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema: Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema,
    FunctionModel: FunctionModel,
    DependenciesSummary: DependenciesSummary,
    Dependency: Dependency,
    Deployment: Deployment,
    DeploymentDraft: DeploymentDraft,
    Diff: Diff,
    DiffHostingFilesDiff: DiffHostingFilesDiff,
    HostingConfiguration: HostingConfiguration,
    HostingConfigurationDefaultDomain: HostingConfigurationDefaultDomain,
    HostingConfigurationDefaultDomainConfig: HostingConfigurationDefaultDomainConfig,
    Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema: Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema,
    HostedAssetMetadata: HostedAssetMetadata,
    MetadataAttribute: MetadataAttribute,
    Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema: Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema,
    PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema: PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema,
    Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema: Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema,
    AssetMetadata: AssetMetadata,
    Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema: Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema,
    Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema: Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema,
    PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema: PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema,
    PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems: PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems,
    Get200ApplicationJsonPropertiesItemsDataPointsItem: Get200ApplicationJsonPropertiesItemsDataPointsItem,
    Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema: Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema,
    Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema: Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema,
    PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems: PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems,
    PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems: PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems,
    Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems: Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems,
    SchemaMetadata: SchemaMetadata,
    Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema: Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema,
    Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema: Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema,
    Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema: Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema,
    Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema: Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema,
    Relationship: Relationship,
    Endpoint: Endpoint,
    DataApiConfig: DataApiConfig,
    Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema: Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema,
    Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema: Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema,
    Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems: Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems,
    Post200ApplicationJsonPropertiesItemsLocationsItem: Post200ApplicationJsonPropertiesItemsLocationsItem,
    CustomResolver: CustomResolver,
    CustomResolverInputType: CustomResolverInputType,
    CustomResolverPayloadType: CustomResolverPayloadType,
    GraphQLValidationSettings: GraphQLValidationSettings,
    UserProvider: UserProvider,
    ValueSummary: ValueSummary,
    Get200ApplicationJsonItemsItem: Get200ApplicationJsonItemsItem,
    PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems: PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems,
    PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems: PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems,
    Get200ApplicationJsonItemsAllowedIpsItem: Get200ApplicationJsonItemsAllowedIpsItem,
    PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems: PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems,
    Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems: Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems,
    PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems: PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems,
    Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties: Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties,
    PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema: PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema
});

const accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
const $host = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
const body = {
    parameterPath: "body",
    mapper: PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema
};
const provider = {
    parameterPath: "provider",
    mapper: {
        serializedName: "provider",
        required: true,
        type: {
            name: "String"
        }
    }
};
const groupId = {
    parameterPath: "groupId",
    mapper: {
        serializedName: "groupId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const product = {
    parameterPath: ["options", "product"],
    mapper: {
        serializedName: "product",
        type: {
            name: "String"
        }
    }
};
const body1 = {
    parameterPath: "body",
    mapper: NewApplication
};
const defaults = {
    parameterPath: ["options", "defaults"],
    mapper: {
        serializedName: "defaults",
        type: {
            name: "Boolean"
        }
    }
};
const appId = {
    parameterPath: "appId",
    mapper: {
        serializedName: "appId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body2 = {
    parameterPath: "body",
    mapper: TriggerRequest
};
const triggerId = {
    parameterPath: "triggerId",
    mapper: {
        serializedName: "triggerId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body3 = {
    parameterPath: ["options", "body"],
    mapper: PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema
};
const body4 = {
    parameterPath: "body",
    mapper: NewValue
};
const valueId = {
    parameterPath: "valueId",
    mapper: {
        serializedName: "valueId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body5 = {
    parameterPath: ["options", "body"],
    mapper: PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema
};
const serviceId = {
    parameterPath: "serviceId",
    mapper: {
        serializedName: "serviceId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body6 = {
    parameterPath: "body",
    mapper: PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema
};
const datasourceId = {
    parameterPath: "datasourceId",
    mapper: {
        serializedName: "datasourceId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const commandName = {
    parameterPath: "commandName",
    mapper: {
        serializedName: "commandName",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body7 = {
    parameterPath: "body",
    mapper: Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema
};
const ruleId = {
    parameterPath: "ruleId",
    mapper: {
        serializedName: "ruleId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body8 = {
    parameterPath: "body",
    mapper: Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema
};
const body9 = {
    parameterPath: "body",
    mapper: DefaultRule
};
const body10 = {
    parameterPath: "body",
    mapper: PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema
};
const body11 = {
    parameterPath: "body",
    mapper: PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema
};
const body12 = {
    parameterPath: "body",
    mapper: IncomingWebhook
};
const incomingWebhookId = {
    parameterPath: "incomingWebhookId",
    mapper: {
        serializedName: "incomingWebhookId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const serviceId1 = {
    parameterPath: "serviceId",
    mapper: {
        serializedName: "service_id",
        required: true,
        type: {
            name: "String"
        }
    }
};
const state = {
    parameterPath: ["options", "state"],
    mapper: {
        serializedName: "state",
        type: {
            name: "String"
        }
    }
};
const body13 = {
    parameterPath: "body",
    mapper: NewMessage
};
const messageId = {
    parameterPath: "messageId",
    mapper: {
        serializedName: "messageId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const after = {
    parameterPath: ["options", "after"],
    mapper: {
        serializedName: "after",
        type: {
            name: "String"
        }
    }
};
const sort = {
    parameterPath: ["options", "sort"],
    mapper: {
        serializedName: "sort",
        type: {
            name: "String"
        }
    }
};
const desc = {
    parameterPath: ["options", "desc"],
    mapper: {
        serializedName: "desc",
        type: {
            name: "Boolean"
        }
    }
};
const body14 = {
    parameterPath: "body",
    mapper: PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema
};
const body15 = {
    parameterPath: "body",
    mapper: PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema
};
const uid = {
    parameterPath: "uid",
    mapper: {
        serializedName: "uid",
        required: true,
        type: {
            name: "String"
        }
    }
};
const email = {
    parameterPath: "email",
    mapper: {
        serializedName: "email",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body16 = {
    parameterPath: "body",
    mapper: PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema
};
const userId = {
    parameterPath: "userId",
    mapper: {
        serializedName: "user_id",
        required: true,
        type: {
            name: "String"
        }
    }
};
const runAsSystem = {
    parameterPath: "runAsSystem",
    mapper: {
        serializedName: "run_as_system",
        required: true,
        type: {
            name: "Boolean"
        }
    }
};
const body17 = {
    parameterPath: "body",
    mapper: Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema
};
const body18 = {
    parameterPath: "body",
    mapper: NewProvider
};
const providerId = {
    parameterPath: "providerId",
    mapper: {
        serializedName: "providerId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body19 = {
    parameterPath: "body",
    mapper: FullProvider
};
const body20 = {
    parameterPath: "body",
    mapper: {
        serializedName: "body",
        required: true,
        type: {
            name: "any"
        }
    }
};
const ipId = {
    parameterPath: "ipId",
    mapper: {
        serializedName: "ipId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const coId = {
    parameterPath: ["options", "coId"],
    mapper: {
        serializedName: "co_id",
        type: {
            name: "String"
        }
    }
};
const errorsOnly = {
    parameterPath: ["options", "errorsOnly"],
    mapper: {
        serializedName: "errors_only",
        type: {
            name: "Boolean"
        }
    }
};
const userId1 = {
    parameterPath: ["options", "userId"],
    mapper: {
        serializedName: "user_id",
        type: {
            name: "String"
        }
    }
};
const startDate = {
    parameterPath: ["options", "startDate"],
    mapper: {
        serializedName: "start_date",
        type: {
            name: "String"
        }
    }
};
const endDate = {
    parameterPath: ["options", "endDate"],
    mapper: {
        serializedName: "end_date",
        type: {
            name: "String"
        }
    }
};
const skip = {
    parameterPath: ["options", "skip"],
    mapper: {
        serializedName: "skip",
        type: {
            name: "Number"
        }
    }
};
const limit = {
    parameterPath: ["options", "limit"],
    mapper: {
        constraints: {
            InclusiveMaximum: 100,
            InclusiveMinimum: 1
        },
        serializedName: "limit",
        type: {
            name: "Number"
        }
    }
};
const typeParam = {
    parameterPath: ["options", "type"],
    mapper: {
        serializedName: "type",
        type: {
            name: "String"
        }
    }
};
const body21 = {
    parameterPath: "body",
    mapper: LogForwarder
};
const forwarderId = {
    parameterPath: "forwarderId",
    mapper: {
        serializedName: "forwarderId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body22 = {
    parameterPath: "body",
    mapper: Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema
};
const apiKeyId = {
    parameterPath: "apiKeyId",
    mapper: {
        serializedName: "apiKeyId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body23 = {
    parameterPath: "body",
    mapper: Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema
};
const body24 = {
    parameterPath: "body",
    mapper: PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema
};
const secretId = {
    parameterPath: "secretId",
    mapper: {
        serializedName: "secretId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body25 = {
    parameterPath: "body",
    mapper: NewFunction
};
const functionId = {
    parameterPath: "functionId",
    mapper: {
        serializedName: "functionId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const draftId = {
    parameterPath: "draftId",
    mapper: {
        serializedName: "draftId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body26 = {
    parameterPath: ["options", "body"],
    mapper: Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema
};
const body27 = {
    parameterPath: "body",
    mapper: Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema
};
const path = {
    parameterPath: "path",
    mapper: {
        serializedName: "path",
        required: true,
        type: {
            name: "String"
        }
    }
};
const prefix = {
    parameterPath: ["options", "prefix"],
    mapper: {
        serializedName: "prefix",
        type: {
            name: "String"
        }
    }
};
const body28 = {
    parameterPath: "body",
    mapper: Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema
};
const body29 = {
    parameterPath: "body",
    mapper: Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema
};
const start = {
    parameterPath: ["options", "start"],
    mapper: {
        serializedName: "start",
        type: {
            name: "String"
        }
    }
};
const end = {
    parameterPath: ["options", "end"],
    mapper: {
        serializedName: "end",
        type: {
            name: "String"
        }
    }
};
const granularity = {
    parameterPath: ["options", "granularity"],
    mapper: {
        serializedName: "granularity",
        type: {
            name: "String"
        }
    }
};
const granularity1 = {
    parameterPath: ["options", "granularity"],
    mapper: {
        serializedName: "granularity",
        type: {
            name: "String"
        }
    }
};
const body30 = {
    parameterPath: "body",
    mapper: Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema
};
const schemaId = {
    parameterPath: "schemaId",
    mapper: {
        serializedName: "schemaId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body31 = {
    parameterPath: "body",
    mapper: Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema
};
const body32 = {
    parameterPath: "body",
    mapper: Endpoint
};
const endpointId = {
    parameterPath: "endpointId",
    mapper: {
        serializedName: "endpointId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body33 = {
    parameterPath: "body",
    mapper: DataApiConfig
};
const body34 = {
    parameterPath: ["options", "body"],
    mapper: Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema
};
const body35 = {
    parameterPath: "body",
    mapper: CustomResolver
};
const customResolverId = {
    parameterPath: "customResolverId",
    mapper: {
        serializedName: "customResolverId",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body36 = {
    parameterPath: "body",
    mapper: GraphQLValidationSettings
};

class AtlasAppServicesAPI extends coreClient__namespace.ServiceClient {
    /**
     * Initializes a new instance of the AtlasAppServicesAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param groupId An Atlas [Project/Group
     *                ID](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
     * @param appId The ObjectID of your application.
     *              [The App Services API Project and Application IDs section](#section/Project-and-Application-IDs)
     *              demonstrates how to find this
     *              value.
     * @param options The parameter options
     */
    constructor(credentials, groupId, appId, options) {
        var _a, _b;
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        if (groupId === undefined) {
            throw new Error("'groupId' cannot be null");
        }
        if (appId === undefined) {
            throw new Error("'appId' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials
        };
        const packageDetails = `azsdk-js-atlas-app-services-admin-sdk-generated/1.0.0-beta.1`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, baseUri: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "https://realm.mongodb.com/api/admin/v3.0" });
        super(optionsWithDefaults);
        if ((options === null || options === void 0 ? void 0 : options.pipeline) && options.pipeline.getOrderedPolicies().length > 0) {
            const pipelinePolicies = options.pipeline.getOrderedPolicies();
            const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some((pipelinePolicy) => pipelinePolicy.name ===
                coreRestPipeline__namespace.bearerTokenAuthenticationPolicyName);
            if (!bearerTokenAuthenticationPolicyFound) {
                this.pipeline.removePolicy({
                    name: coreRestPipeline__namespace.bearerTokenAuthenticationPolicyName
                });
                this.pipeline.addPolicy(coreRestPipeline__namespace.bearerTokenAuthenticationPolicy({
                    scopes: `${optionsWithDefaults.baseUri}/.default`,
                    challengeCallbacks: {
                        authorizeRequestOnChallenge: coreClient__namespace.authorizeRequestOnClaimChallenge
                    }
                }));
            }
        }
        // Parameter assignments
        this.groupId = groupId;
        this.appId = appId;
        // Assigning values to Constant parameters
        this.$host = options.$host || "https://realm.mongodb.com/api/admin/v3.0";
    }
    /**
     * Enumerate available App Services administration authentication providers
     * @param options The options parameters.
     */
    getAdminAuthProviders(options) {
        return this.sendOperationRequest({ options }, getAdminAuthProvidersOperationSpec);
    }
    /**
     * Authenticate as an App Services administrator. Use [GET
     * /auth/providers](#section/adminGetLogs) to list the available
     * authentication providers.
     *
     * @param provider The authentication provider to use.
     * @param body
     * @param options The options parameters.
     */
    adminLogin(provider, body, options) {
        return this.sendOperationRequest({ provider, body, options }, adminLoginOperationSpec);
    }
    /**
     * Get information about the currently logged in user
     * @param options The options parameters.
     */
    getAdminProfile(options) {
        return this.sendOperationRequest({ options }, getAdminProfileOperationSpec);
    }
    /**
     * Obtain a session access token
     * @param options The options parameters.
     */
    adminCreateSession(options) {
        return this.sendOperationRequest({ options }, adminCreateSessionOperationSpec);
    }
    /**
     * Delete a session access token
     * @param options The options parameters.
     */
    adminDeleteSession(options) {
        return this.sendOperationRequest({ options }, adminDeleteSessionOperationSpec);
    }
    /**
     * Return a list of all supported cloud regions in which you can
     * deploy an Atlas App.
     * @param options The options parameters.
     */
    adminListAppRegions(options) {
        return this.sendOperationRequest({ options }, adminListAppRegionsOperationSpec);
    }
    /**
     * List all App Services apps within an Atlas
     * [project/group](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
     * @param options The options parameters.
     */
    adminListApplications(options) {
        return this.sendOperationRequest({ options }, adminListApplicationsOperationSpec);
    }
    /**
     * Create a new Atlas App Services app
     * @param body The application to create.
     * @param options The options parameters.
     */
    adminCreateApplication(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateApplicationOperationSpec);
    }
    /**
     * Retrieve an application definition
     * @param options The options parameters.
     */
    adminGetApplication(options) {
        return this.sendOperationRequest({ options }, adminGetApplicationOperationSpec);
    }
    /**
     * Delete an application
     * @param options The options parameters.
     */
    adminDeleteApplication(options) {
        return this.sendOperationRequest({ options }, adminDeleteApplicationOperationSpec);
    }
    /**
     * [Export](https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/export-app#std-label-export-realm-app)
     * an application as a zip file.
     * @param options The options parameters.
     */
    adminExportApplication(options) {
        return this.sendOperationRequest({ options }, adminExportApplicationOperationSpec);
    }
    /**
     * Create a trigger
     * @param body The trigger to create.
     * @param options The options parameters.
     */
    adminCreateTrigger(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateTriggerOperationSpec);
    }
    /**
     * List all triggers
     * @param options The options parameters.
     */
    adminListTriggers(options) {
        return this.sendOperationRequest({ options }, adminListTriggersOperationSpec);
    }
    /**
     * Update a trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param body The trigger to update.
     * @param options The options parameters.
     */
    adminUpdateTrigger(triggerId, body, options) {
        return this.sendOperationRequest({ triggerId, body, options }, adminUpdateTriggerOperationSpec);
    }
    /**
     * Retrieve the configuration for a specific trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param options The options parameters.
     */
    adminGetTrigger(triggerId, options) {
        return this.sendOperationRequest({ triggerId, options }, adminGetTriggerOperationSpec);
    }
    /**
     * Delete a trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param options The options parameters.
     */
    adminDeleteTrigger(triggerId, options) {
        return this.sendOperationRequest({ triggerId, options }, adminDeleteTriggerOperationSpec);
    }
    /**
     * Resume a suspended trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param options The options parameters.
     */
    adminResumeTrigger(triggerId, options) {
        return this.sendOperationRequest({ triggerId, options }, adminResumeTriggerOperationSpec);
    }
    /**
     * List all [values](https://www.mongodb.com/docs/realm/values-and-secrets)
     * defined in an application.
     * @param options The options parameters.
     */
    adminListValues(options) {
        return this.sendOperationRequest({ options }, adminListValuesOperationSpec);
    }
    /**
     * Define a [Value](https://www.mongodb.com/docs/realm/values-and-secrets) in
     * an application.
     * @param body The value to create.
     * @param options The options parameters.
     */
    adminCreateValue(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateValueOperationSpec);
    }
    /**
     * Retrieve a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
     * definition from an application.
     * @param valueId The unique `_id` value of a value.
     * @param options The options parameters.
     */
    adminGetValue(valueId, options) {
        return this.sendOperationRequest({ valueId, options }, adminGetValueOperationSpec);
    }
    /**
     * Delete a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
     * defined in an application.
     * @param valueId The unique `_id` value of a value.
     * @param options The options parameters.
     */
    adminDeleteValue(valueId, options) {
        return this.sendOperationRequest({ valueId, options }, adminDeleteValueOperationSpec);
    }
    /**
     * Update a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
     * definition in an application.
     * @param valueId The unique `_id` value of a value.
     * @param options The options parameters.
     */
    adminUpdateValue(valueId, options) {
        return this.sendOperationRequest({ valueId, options }, adminUpdateValueOperationSpec);
    }
    /**
     * List all [data sources](https://www.mongodb.com/docs/atlas/app-services/mongodb/) and [third-party
     * services [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param options The options parameters.
     */
    adminListServices(options) {
        return this.sendOperationRequest({ options }, adminListServicesOperationSpec);
    }
    /**
     * Create a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/) or [third-party
     * service [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param options The options parameters.
     */
    adminCreateService(options) {
        return this.sendOperationRequest({ options }, adminCreateServiceOperationSpec);
    }
    /**
     * Get a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/)
     * or [third-party service
     * [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminGetService(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminGetServiceOperationSpec);
    }
    /**
     * Delete a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/)
     * or [third-party service
     * [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminDeleteService(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminDeleteServiceOperationSpec);
    }
    /**
     * Update a [service](https://www.mongodb.com/docs/realm/services#std-label-services).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminUpdateService(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminUpdateServiceOperationSpec);
    }
    /**
     * Query a subset of documents in a collection and validate each match against a schema.
     * @param datasourceId The unique `_id` value of a MongoDB data source.
     * @param body
     * @param options The options parameters.
     */
    adminValidateDocuments(datasourceId, body, options) {
        return this.sendOperationRequest({ datasourceId, body, options }, adminValidateDocumentsOperationSpec);
    }
    /**
     * Run a command associated with a
     * [service](https://www.mongodb.com/docs/realm/services#std-label-services).
     * @param serviceId The unique `_id` value of a service.
     * @param commandName Command name
     * @param options The options parameters.
     */
    adminRunCommand(serviceId, commandName, options) {
        return this.sendOperationRequest({ serviceId, commandName, options }, adminRunCommandOperationSpec);
    }
    /**
     * Get information about the underlying Atlas mongod
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    getBuildInfo(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, getBuildInfoOperationSpec);
    }
    /**
     * Retrieve a [service's](https://www.mongodb.com/docs/realm/services#std-label-services)
     * configuration.
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminGetServiceConfig(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminGetServiceConfigOperationSpec);
    }
    /**
     * Update a [service's](https://www.mongodb.com/docs/realm/services#std-label-services) configuration.
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminUpdateServiceConfig(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminUpdateServiceConfigOperationSpec);
    }
    /**
     * List all [data access rules](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminListRules(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminListRulesOperationSpec);
    }
    /**
     * Create a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param body The rule to create.
     * @param options The options parameters.
     */
    adminCreateRule(serviceId, body, options) {
        return this.sendOperationRequest({ serviceId, body, options }, adminCreateRuleOperationSpec);
    }
    /**
     * Get a specific [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param ruleId The unique `_id` value of a rule.
     * @param options The options parameters.
     */
    adminGetRule(serviceId, ruleId, options) {
        return this.sendOperationRequest({ serviceId, ruleId, options }, adminGetRuleOperationSpec);
    }
    /**
     * Delete a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param ruleId The unique `_id` value of a rule.
     * @param options The options parameters.
     */
    adminDeleteRule(serviceId, ruleId, options) {
        return this.sendOperationRequest({ serviceId, ruleId, options }, adminDeleteRuleOperationSpec);
    }
    /**
     * Update a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param ruleId The unique `_id` value of a rule.
     * @param body The new state of the rule.
     * @param options The options parameters.
     */
    adminUpdateRule(serviceId, ruleId, body, options) {
        return this.sendOperationRequest({ serviceId, ruleId, body, options }, adminUpdateRuleOperationSpec);
    }
    /**
     * Get the current [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminGetDefaultRule(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminGetDefaultRuleOperationSpec);
    }
    /**
     * Create [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) for a data source.
     * @param serviceId The unique `_id` value of a service.
     * @param body A default rule configuration object.
     * @param options The options parameters.
     */
    adminCreateDefaultRule(serviceId, body, options) {
        return this.sendOperationRequest({ serviceId, body, options }, adminCreateDefaultRuleOperationSpec);
    }
    /**
     * Modify the [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) of a data source.
     * @param serviceId The unique `_id` value of a service.
     * @param body The updated default rule configuration object.
     * @param options The options parameters.
     */
    adminUpdateDefaultRule(serviceId, body, options) {
        return this.sendOperationRequest({ serviceId, body, options }, adminUpdateDefaultRuleOperationSpec);
    }
    /**
     * Delete the [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) of a data source.
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminDeleteDefaultRule(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminDeleteDefaultRuleOperationSpec);
    }
    /**
     * Sample a subset of documents in a collection to generate a JSON schema.
     * @param serviceId The unique `_id` value of a service.
     * @param body
     * @param options The options parameters.
     */
    adminGenerateSchema(serviceId, body, options) {
        return this.sendOperationRequest({ serviceId, body, options }, adminGenerateSchemaOperationSpec);
    }
    /**
     * List [webhooks](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminListWebhooks(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminListWebhooksOperationSpec);
    }
    /**
     * Create a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param body The webhook to create.
     * @param options The options parameters.
     */
    adminCreateWebhook(serviceId, body, options) {
        return this.sendOperationRequest({ serviceId, body, options }, adminCreateWebhookOperationSpec);
    }
    /**
     * Retrieve a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param incomingWebhookId The unique `_id` value of an incoming webhook
     * @param options The options parameters.
     */
    adminGetWebhook(serviceId, incomingWebhookId, options) {
        return this.sendOperationRequest({ serviceId, incomingWebhookId, options }, adminGetWebhookOperationSpec);
    }
    /**
     * Delete a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param incomingWebhookId The unique `_id` value of an incoming webhook
     * @param options The options parameters.
     */
    adminDeleteWebhook(serviceId, incomingWebhookId, options) {
        return this.sendOperationRequest({ serviceId, incomingWebhookId, options }, adminDeleteWebhookOperationSpec);
    }
    /**
     * Update a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param incomingWebhookId The unique `_id` value of an incoming webhook
     * @param body The updated state of the webhook.
     * @param options The options parameters.
     */
    adminUpdateWebhook(serviceId, incomingWebhookId, body, options) {
        return this.sendOperationRequest({ serviceId, incomingWebhookId, body, options }, adminUpdateWebhookOperationSpec);
    }
    /**
     * Retrieve partition field data when using [Partition-Based
     * Sync](https://www.mongodb.com/docs/realm/sync/data-access-patterns/partitions/).
     * @param serviceId The Service ID for the linked cluster.
     * @param options The options parameters.
     */
    adminGetSync(serviceId, options) {
        return this.sendOperationRequest({ serviceId, options }, adminGetSyncOperationSpec);
    }
    /**
     * List [push
     * notifications](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
     * @param options The options parameters.
     */
    adminListNotifications(options) {
        return this.sendOperationRequest({ options }, adminListNotificationsOperationSpec);
    }
    /**
     * Create a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
     * @param body The notification to create.
     * @param options The options parameters.
     */
    adminCreateNotification(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateNotificationOperationSpec);
    }
    /**
     * Retrieve a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * message.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminGetMessage(messageId, options) {
        return this.sendOperationRequest({ messageId, options }, adminGetMessageOperationSpec);
    }
    /**
     * Delete a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * message.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminDeleteMessage(messageId, options) {
        return this.sendOperationRequest({ messageId, options }, adminDeleteMessageOperationSpec);
    }
    /**
     * Update a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * message.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminUpdateMessage(messageId, options) {
        return this.sendOperationRequest({ messageId, options }, adminUpdateMessageOperationSpec);
    }
    /**
     * Set a [push
     * notification's](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * type.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminSetMessageType(messageId, options) {
        return this.sendOperationRequest({ messageId, options }, adminSetMessageTypeOperationSpec);
    }
    /**
     * Send a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminSendMessage(messageId, options) {
        return this.sendOperationRequest({ messageId, options }, adminSendMessageOperationSpec);
    }
    /**
     * List [users](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param options The options parameters.
     */
    adminListUsers(options) {
        return this.sendOperationRequest({ options }, adminListUsersOperationSpec);
    }
    /**
     * Create a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param body The user to create
     * @param options The options parameters.
     */
    adminCreateUser(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateUserOperationSpec);
    }
    /**
     * Verify a that a user's [client access
     * token](https://www.mongodb.com/docs/realm/reference/authenticate-http-client-requests#std-label-get-client-api-access-token)
     * is valid.
     * @param body The user's client access token. This is distinct from the
     *             [API access
     *             token](https://www.mongodb.com/docs/realm/reference/authenticate-http-client-requests#std-label-get-client-api-access-token)
     *             you need to authenticate to the admin API.
     * @param options The options parameters.
     */
    adminVerifyUserAccessToken(body, options) {
        return this.sendOperationRequest({ body, options }, adminVerifyUserAccessTokenOperationSpec);
    }
    /**
     * Retrieve a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminGetUser(uid, options) {
        return this.sendOperationRequest({ uid, options }, adminGetUserOperationSpec);
    }
    /**
     * Delete a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminDeleteUser(uid, options) {
        return this.sendOperationRequest({ uid, options }, adminDeleteUserOperationSpec);
    }
    /**
     * List a user's devices.
     * @param uid UID
     * @param options The options parameters.
     */
    adminListDevices(uid, options) {
        return this.sendOperationRequest({ uid, options }, adminListDevicesOperationSpec);
    }
    /**
     * Revoke all of a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts)'s
     * sessions.
     * @param uid UID
     * @param options The options parameters.
     */
    adminUserLogout(uid, options) {
        return this.sendOperationRequest({ uid, options }, adminUserLogoutOperationSpec);
    }
    /**
     * Enable a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminEnableUser(uid, options) {
        return this.sendOperationRequest({ uid, options }, adminEnableUserOperationSpec);
    }
    /**
     * Disable a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminDisableUser(uid, options) {
        return this.sendOperationRequest({ uid, options }, adminDisableUserOperationSpec);
    }
    /**
     * Delete a pending [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param email Email address
     * @param options The options parameters.
     */
    adminDeletePendingUser(email, options) {
        return this.sendOperationRequest({ email, options }, adminDeletePendingUserOperationSpec);
    }
    /**
     * Send a [confirmation
     * email](https://www.mongodb.com/docs/realm/authentication/email-password).
     * @param email Email address
     * @param options The options parameters.
     */
    adminSendConfirmationEmail(email, options) {
        return this.sendOperationRequest({ email, options }, adminSendConfirmationEmailOperationSpec);
    }
    /**
     * Confirm a pending [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param email Email address
     * @param options The options parameters.
     */
    adminConfirmPendingUser(email, options) {
        return this.sendOperationRequest({ email, options }, adminConfirmPendingUserOperationSpec);
    }
    /**
     * Reruns a pending user's [confirmation
     * workflow](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param email Email address
     * @param options The options parameters.
     */
    adminRerunPendingUserConfirmation(email, options) {
        return this.sendOperationRequest({ email, options }, adminRerunPendingUserConfirmationOperationSpec);
    }
    /**
     * Execute a [function](https://www.mongodb.com/docs/realm/functions#std-label-functions) for testing.
     * @param userId The user as which to execute the function. Either `user_id` or
     *               `run_as_system` is required. You cannot specify both.
     * @param runAsSystem Determine whether or not to run as system user. Either `run_as_system`
     *                    or `user_id` is required. You cannot specify both.
     * @param body The function to execute.
     * @param options The options parameters.
     */
    adminExecuteFunction(userId, runAsSystem, body, options) {
        return this.sendOperationRequest({ userId, runAsSystem, body, options }, adminExecuteFunctionOperationSpec);
    }
    /**
     * Execute a [function](https://www.mongodb.com/docs/realm/functions#std-label-functions)'s source code
     * for testing.
     * @param userId The user as which to execute the function. Either `user_id` or
     *               `run_as_system` is required. You cannot specify both.
     * @param runAsSystem Determine whether or not to run as system user. Either `run_as_system`
     *                    or `user_id` is required. You cannot specify both.
     * @param body The source to execute.
     * @param options The options parameters.
     */
    adminExecuteFunctionSource(userId, runAsSystem, body, options) {
        return this.sendOperationRequest({ userId, runAsSystem, body, options }, adminExecuteFunctionSourceOperationSpec);
    }
    /**
     * List [authentication
     * providers](https://www.mongodb.com/docs/realm/authentication/providers)
     * within a Atlas App Services app.
     * @param options The options parameters.
     */
    adminListAuthProviders(options) {
        return this.sendOperationRequest({ options }, adminListAuthProvidersOperationSpec);
    }
    /**
     * Create an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param body
     * @param options The options parameters.
     */
    adminCreateAuthProvider(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateAuthProviderOperationSpec);
    }
    /**
     * Retrieve information about one of an application's [authentication
     * providers](https://www.mongodb.com/docs/realm/authentication/providers)
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminGetAuthProvider(providerId, options) {
        return this.sendOperationRequest({ providerId, options }, adminGetAuthProviderOperationSpec);
    }
    /**
     * Delete an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminDeleteAuthProvider(providerId, options) {
        return this.sendOperationRequest({ providerId, options }, adminDeleteAuthProviderOperationSpec);
    }
    /**
     * Update an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param body
     * @param options The options parameters.
     */
    adminUpdateAuthProvider(providerId, body, options) {
        return this.sendOperationRequest({ providerId, body, options }, adminUpdateAuthProviderOperationSpec);
    }
    /**
     * Disable an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminDisableAuthProvider(providerId, options) {
        return this.sendOperationRequest({ providerId, options }, adminDisableAuthProviderOperationSpec);
    }
    /**
     * Enable an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminEnableAuthProvider(providerId, options) {
        return this.sendOperationRequest({ providerId, options }, adminEnableAuthProviderOperationSpec);
    }
    /**
     * List the allowed [HTTP
     * origins](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
     * from which App Services should allow requests.
     * @param options The options parameters.
     */
    adminListAllowedRequestOrigins(options) {
        return this.sendOperationRequest({ options }, adminListAllowedRequestOriginsOperationSpec);
    }
    /**
     * Set the allowed [HTTP
     * origins](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
     * from which App Services should allow requests.
     * @param body A list of HTTP origins.
     * @param options The options parameters.
     */
    adminSetAllowedRequestOrigins(body, options) {
        return this.sendOperationRequest({ body, options }, adminSetAllowedRequestOriginsOperationSpec);
    }
    /**
     * List the allowed entries in the Access List of your Atlas App Services app.
     * @param options The options parameters.
     */
    allowedIPAccessListGet(options) {
        return this.sendOperationRequest({ options }, allowedIPAccessListGetOperationSpec);
    }
    /**
     * Create an IP address or CIDR block in the Access List for your App Services
     * app.
     * @param options The options parameters.
     */
    allowedIPAccessListCreate(options) {
        return this.sendOperationRequest({ options }, allowedIPAccessListCreateOperationSpec);
    }
    /**
     * Modify an IP address or CIDR block in the Access List of your App Services
     * app
     * @param ipId The IP address entry denoted by `ip_id` with the information given in
     *             the request body
     * @param options The options parameters.
     */
    allowedIPAccessListUpdate(ipId, options) {
        return this.sendOperationRequest({ ipId, options }, allowedIPAccessListUpdateOperationSpec);
    }
    /**
     * Delete an IP address or CIDR block from the Access List of your App Services
     * app
     * @param ipId The IP address entry denoted by `ip_id` with the information given in
     *             the request body
     * @param options The options parameters.
     */
    allowedIPAccessListDelete(ipId, options) {
        return this.sendOperationRequest({ ipId, options }, allowedIPAccessListDeleteOperationSpec);
    }
    /**
     * Retrieve App Services logs
     * @param options The options parameters.
     */
    adminGetLogs(options) {
        return this.sendOperationRequest({ options }, adminGetLogsOperationSpec);
    }
    /**
     * List log forwarders.
     * @param options The options parameters.
     */
    listLogForwarders(options) {
        return this.sendOperationRequest({ options }, listLogForwardersOperationSpec);
    }
    /**
     * Create a log forwarder.
     * @param body A log forwarder configuration
     * @param options The options parameters.
     */
    createLogForwarder(body, options) {
        return this.sendOperationRequest({ body, options }, createLogForwarderOperationSpec);
    }
    /**
     * Get a specific log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    getLogForwarder(forwarderId, options) {
        return this.sendOperationRequest({ forwarderId, options }, getLogForwarderOperationSpec);
    }
    /**
     * Update a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param body A log forwarder configuration
     * @param options The options parameters.
     */
    updateLogForwarder(forwarderId, body, options) {
        return this.sendOperationRequest({ forwarderId, body, options }, updateLogForwarderOperationSpec);
    }
    /**
     * Delete a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    deleteGwarder(forwarderId, options) {
        return this.sendOperationRequest({ forwarderId, options }, deleteGwarderOperationSpec);
    }
    /**
     * Enable a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    enableLogForwarder(forwarderId, options) {
        return this.sendOperationRequest({ forwarderId, options }, enableLogForwarderOperationSpec);
    }
    /**
     * Disable a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    disableLogForwarder(forwarderId, options) {
        return this.sendOperationRequest({ forwarderId, options }, disableLogForwarderOperationSpec);
    }
    /**
     * List [API keys](https://www.mongodb.com/docs/realm/authentication/api-key)
     * associated with a Atlas App Services app.
     * @param options The options parameters.
     */
    adminListApiKeys(options) {
        return this.sendOperationRequest({ options }, adminListApiKeysOperationSpec);
    }
    /**
     * Create a new [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param body The API key to create.
     * @param options The options parameters.
     */
    adminCreateApiKey(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateApiKeyOperationSpec);
    }
    /**
     * Retrieve information about an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminGetApiKey(apiKeyId, options) {
        return this.sendOperationRequest({ apiKeyId, options }, adminGetApiKeyOperationSpec);
    }
    /**
     * Delete an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminDeleteApiKey(apiKeyId, options) {
        return this.sendOperationRequest({ apiKeyId, options }, adminDeleteApiKeyOperationSpec);
    }
    /**
     * Enable an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminEnableApiKey(apiKeyId, options) {
        return this.sendOperationRequest({ apiKeyId, options }, adminEnableApiKeyOperationSpec);
    }
    /**
     * Disable an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminDisableApiKey(apiKeyId, options) {
        return this.sendOperationRequest({ apiKeyId, options }, adminDisableApiKeyOperationSpec);
    }
    /**
     * List
     * [secrets](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets#std-label-define-secret)
     * associated with a Atlas App Services app.
     * @param options The options parameters.
     */
    adminGetAllSecrets(options) {
        return this.sendOperationRequest({ options }, adminGetAllSecretsOperationSpec);
    }
    /**
     * Create a new
     * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets).
     * @param body The Secret to create.
     * @param options The options parameters.
     */
    adminCreateASecret(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateASecretOperationSpec);
    }
    /**
     * Modify a
     * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets)
     * associated with a Atlas App Services app.
     * @param secretId The unique `_id` value of a secret.
     * @param body The modified value of the Secret.
     * @param options The options parameters.
     */
    adminModifyASecret(secretId, body, options) {
        return this.sendOperationRequest({ secretId, body, options }, adminModifyASecretOperationSpec);
    }
    /**
     * Delete a
     * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets)
     * associated with a Atlas App Services app.
     * @param secretId The unique `_id` value of a secret.
     * @param options The options parameters.
     */
    adminDeleteSecret(secretId, options) {
        return this.sendOperationRequest({ secretId, options }, adminDeleteSecretOperationSpec);
    }
    /**
     * List [Functions](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param options The options parameters.
     */
    adminListFunctions(options) {
        return this.sendOperationRequest({ options }, adminListFunctionsOperationSpec);
    }
    /**
     * Create a new [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param body The function to create
     * @param options The options parameters.
     */
    adminCreateFunction(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateFunctionOperationSpec);
    }
    /**
     * Retrieve a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param functionId The unique `_id` value of a function.
     * @param options The options parameters.
     */
    adminGetFunction(functionId, options) {
        return this.sendOperationRequest({ functionId, options }, adminGetFunctionOperationSpec);
    }
    /**
     * Delete a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param functionId The unique `_id` value of a function.
     * @param options The options parameters.
     */
    adminDeleteFunction(functionId, options) {
        return this.sendOperationRequest({ functionId, options }, adminDeleteFunctionOperationSpec);
    }
    /**
     * Update a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param functionId The unique `_id` value of a function.
     * @param options The options parameters.
     */
    adminUpdateFunction(functionId, options) {
        return this.sendOperationRequest({ functionId, options }, adminUpdateFunctionOperationSpec);
    }
    /**
     * List [external
     * dependencies](https://www.mongodb.com/docs/realm/functions/dependencies/) uploaded
     * to the Atlas App Services app.
     * @param options The options parameters.
     */
    adminGetAllDependencies(options) {
        return this.sendOperationRequest({ options }, adminGetAllDependenciesOperationSpec);
    }
    /**
     * Return the 100 most recent application deployments.
     * @param options The options parameters.
     */
    adminListDeployments(options) {
        return this.sendOperationRequest({ options }, adminListDeploymentsOperationSpec);
    }
    /**
     * Return the current application deployment draft, if applicable.
     * @param options The options parameters.
     */
    adminListDeploymentDrafts(options) {
        return this.sendOperationRequest({ options }, adminListDeploymentDraftsOperationSpec);
    }
    /**
     * Create a new application deployment draft, if none exists.
     * @param options The options parameters.
     */
    adminCreateDeploymentDraft(options) {
        return this.sendOperationRequest({ options }, adminCreateDeploymentDraftOperationSpec);
    }
    /**
     * Discard the specified application deployment draft.
     * @param draftId The unique `_id` value of a draft.
     * @param options The options parameters.
     */
    adminDiscardDraft(draftId, options) {
        return this.sendOperationRequest({ draftId, options }, adminDiscardDraftOperationSpec);
    }
    /**
     * Deploy the specified application deployment draft.
     * @param draftId The unique `_id` value of a draft.
     * @param options The options parameters.
     */
    adminDeployDraft(draftId, options) {
        return this.sendOperationRequest({ draftId, options }, adminDeployDraftOperationSpec);
    }
    /**
     * Return a diff between the currently deployed application and the
     * specified draft.
     * @param draftId The unique `_id` value of a draft.
     * @param options The options parameters.
     */
    adminDeployDraftDiff(draftId, options) {
        return this.sendOperationRequest({ draftId, options }, adminDeployDraftDiffOperationSpec);
    }
    /**
     * Returns the current hosting configuration. Hosting is active
     * if the response includes `status: "setup_ok"`.
     *
     * @param options The options parameters.
     */
    adminGetHostingConfig(options) {
        return this.sendOperationRequest({ options }, adminGetHostingConfigOperationSpec);
    }
    /**
     * Enable or disable App Services Hosting for your app.
     * Changes to hosting can take up to 15 minutes to take effect.
     * This endpoint does not notify you when the changes have taken effect,
     * only that the change operation was successfully received by the server.
     *
     * You can see if the hosting enablement/disablement is complete
     * by calling the [Get Hosting Configuration](#operation/adminGetHostingConfig) endpoint.
     *
     * @param options The options parameters.
     */
    adminEnableDisableHosting(options) {
        return this.sendOperationRequest({ options }, adminEnableDisableHostingOperationSpec);
    }
    /**
     * List all hosted assets
     * @param options The options parameters.
     */
    adminGetAllHostedAssets(options) {
        return this.sendOperationRequest({ options }, adminGetAllHostedAssetsOperationSpec);
    }
    /**
     * Move or copy a hosted asset to a new resource path.
     * @param body The hosted asset file and its metadata. (Must use
     *             `Content-Type: multipart/mixed`)
     * @param options The options parameters.
     */
    adminMoveCopyHostedAsset(body, options) {
        return this.sendOperationRequest({ body, options }, adminMoveCopyHostedAssetOperationSpec);
    }
    /**
     * Retrieve metadata for a specific hosted asset
     * @param path The resource path of a hosted asset.
     * @param options The options parameters.
     */
    adminGetHostedAsset(path, options) {
        return this.sendOperationRequest({ path, options }, adminGetHostedAssetOperationSpec);
    }
    /**
     * Upload or replace a hosted asset at a specific resource path.
     * @param path The resource path of a hosted asset.
     * @param body The hosted asset file and its metadata. (Must use
     *             `Content-Type: multipart/mixed`)
     * @param options The options parameters.
     */
    adminUploadHostedAsset(path, body, options) {
        return this.sendOperationRequest({ path, body, options }, adminUploadHostedAssetOperationSpec);
    }
    /**
     * Update the metadata attributes of a hosted asset at a specific resource
     * path.
     * @param path The resource path of a hosted asset.
     * @param body The new metadata attributes for the hosted asset. These attributes
     *             replace all existing attributes for the file.
     * @param options The options parameters.
     */
    adminUpdateHostedAsset(path, body, options) {
        return this.sendOperationRequest({ path, body, options }, adminUpdateHostedAssetOperationSpec);
    }
    /**
     * List the request, compute, sync, and data transfer usage in a given
     * period for [billing](https://www.mongodb.com/docs/realm/billing) purposes.
     * @param options The options parameters.
     */
    adminMeasurements(options) {
        return this.sendOperationRequest({ options }, adminMeasurementsOperationSpec);
    }
    /**
     * List the request, compute, sync, data transfer, and memory usage of a
     * specific app in a given period for
     * [billing](https://www.mongodb.com/docs/realm/billing) purposes.
     * @param options The options parameters.
     */
    adminAppMeasurements(options) {
        return this.sendOperationRequest({ options }, adminAppMeasurementsOperationSpec);
    }
    /**
     * List all defined [schemas](https://www.mongodb.com/docs/realm/schemas).
     * @param options The options parameters.
     */
    adminListSchemas(options) {
        return this.sendOperationRequest({ options }, adminListSchemasOperationSpec);
    }
    /**
     * Define a new [schema](https://www.mongodb.com/docs/realm/schemas) for a linked collection.
     * @param body
     * @param options The options parameters.
     */
    adminCreateSchema(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateSchemaOperationSpec);
    }
    /**
     * Get a specific [schema](https://www.mongodb.com/docs/realm/schemas) by its `_id` value.
     * @param schemaId The unique `_id` value of a schema.
     * @param options The options parameters.
     */
    adminGetSchema(schemaId, options) {
        return this.sendOperationRequest({ schemaId, options }, adminGetSchemaOperationSpec);
    }
    /**
     * Replace an existing [schema](https://www.mongodb.com/docs/realm/schemas) with a new one.
     * @param schemaId The unique `_id` value of a schema.
     * @param body
     * @param options The options parameters.
     */
    adminUpdateSchema(schemaId, body, options) {
        return this.sendOperationRequest({ schemaId, body, options }, adminUpdateSchemaOperationSpec);
    }
    /**
     * Delete a specific [schema](https://www.mongodb.com/docs/realm/schemas) by its `_id` value.
     * @param schemaId The unique `_id` value of a schema.
     * @param options The options parameters.
     */
    adminDeleteSchema(schemaId, options) {
        return this.sendOperationRequest({ schemaId, options }, adminDeleteSchemaOperationSpec);
    }
    /**
     * Get all [endpoint](https://www.mongodb.com/docs/realm/endpoints/) configurations.
     * @param options The options parameters.
     */
    adminGetAllEndpoints(options) {
        return this.sendOperationRequest({ options }, adminGetAllEndpointsOperationSpec);
    }
    /**
     * Create a new [endpoint](https://www.mongodb.com/docs/realm/endpoints/).
     * @param body A valid [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/) for the new
     *             endpoint.
     * @param options The options parameters.
     */
    adminCreateEndpoint(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateEndpointOperationSpec);
    }
    /**
     * Get a specific [endpoint](https://www.mongodb.com/docs/realm/endpoints/)'s configuration.
     * @param endpointId The unique `_id` value of an endpoint
     * @param options The options parameters.
     */
    adminGetEndpoint(endpointId, options) {
        return this.sendOperationRequest({ endpointId, options }, adminGetEndpointOperationSpec);
    }
    /**
     * Modify an existing [endpoint](https://www.mongodb.com/docs/realm/endpoints/) configuration.
     * @param endpointId The unique `_id` value of an endpoint
     * @param body A valid, updated [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/) for the
     *             endpoint.
     * @param options The options parameters.
     */
    adminModifyEndpoint(endpointId, body, options) {
        return this.sendOperationRequest({ endpointId, body, options }, adminModifyEndpointOperationSpec);
    }
    /**
     * Delete an endpoint
     * @param endpointId The unique `_id` value of an endpoint
     * @param options The options parameters.
     */
    adminDeleteEndpoint(endpointId, options) {
        return this.sendOperationRequest({ endpointId, options }, adminDeleteEndpointOperationSpec);
    }
    /**
     * Get your app's [Data
     * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
     * @param options The options parameters.
     */
    adminGetDataApiConfig(options) {
        return this.sendOperationRequest({ options }, adminGetDataApiConfigOperationSpec);
    }
    /**
     * Create your app's [Data
     * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
     * @param body A valid [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/#appconfig-data-api-endpoints)
     *             for the endpoint.
     * @param options The options parameters.
     */
    adminCreateDataApiConfig(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateDataApiConfigOperationSpec);
    }
    /**
     * Update your app's [Data
     * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
     * @param body A valid [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/#appconfig-data-api-endpoints)
     *             for the endpoint.
     * @param options The options parameters.
     */
    adminModifyDataApiConfig(body, options) {
        return this.sendOperationRequest({ body, options }, adminModifyDataApiConfigOperationSpec);
    }
    /**
     * List all possible Data API versions.
     * @param options The options parameters.
     */
    adminGetDataApiVersions(options) {
        return this.sendOperationRequest({ options }, adminGetDataApiVersionsOperationSpec);
    }
    /**
     * Run a query or mutation as a system user that bypasses
     * authentication and data access rules. You can access metadata
     * about your API, including its schema, with an
     * [introspection](https://graphql.org/learn/introspection/) query.
     * @param options The options parameters.
     */
    adminRunGraphQLOperation(options) {
        return this.sendOperationRequest({ options }, adminRunGraphQLOperationOperationSpec);
    }
    /**
     * Get all [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configurations from your app's GraphQL API.
     * @param options The options parameters.
     */
    adminGetAllCustomResolvers(options) {
        return this.sendOperationRequest({ options }, adminGetAllCustomResolversOperationSpec);
    }
    /**
     * Create a new [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/).
     * @param body A valid [custom resolver
     *             configuration](https://www.mongodb.com/docs/realm/manage-apps/configure/config/graphql/#appconfig-custom-resolver)
     *             object.
     * @param options The options parameters.
     */
    adminCreateCustomResolver(body, options) {
        return this.sendOperationRequest({ body, options }, adminCreateCustomResolverOperationSpec);
    }
    /**
     * Get a specific [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configuration.
     * @param customResolverId The unique `_id` value of a custom resolver.
     * @param options The options parameters.
     */
    adminGetCustomResolver(customResolverId, options) {
        return this.sendOperationRequest({ customResolverId, options }, adminGetCustomResolverOperationSpec);
    }
    /**
     * Modify an existing [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configuration.
     * @param customResolverId The unique `_id` value of a custom resolver.
     * @param body A valid, updated [custom resolver
     *             configuration](https://www.mongodb.com/docs/realm/manage-apps/configure/config/graphql/#appconfig-custom-resolver)
     *             object.
     * @param options The options parameters.
     */
    adminModifyCustomResolver(customResolverId, body, options) {
        return this.sendOperationRequest({ customResolverId, body, options }, adminModifyCustomResolverOperationSpec);
    }
    /**
     * Delete an existing [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configuration.
     * @param customResolverId The unique `_id` value of a custom resolver.
     * @param options The options parameters.
     */
    adminDeleteCustomResolver(customResolverId, options) {
        return this.sendOperationRequest({ customResolverId, options }, adminDeleteCustomResolverOperationSpec);
    }
    /**
     * Get the current validation level and action for reads and writes.
     * @param options The options parameters.
     */
    adminGetGraphQLValidationSettings(options) {
        return this.sendOperationRequest({ options }, adminGetGraphQLValidationSettingsOperationSpec);
    }
    /**
     * Set the validation level and action for reads and writes.
     * @param body The updated validation levels and actions.
     * @param options The options parameters.
     */
    adminSetGraphQLValidationSettings(body, options) {
        return this.sendOperationRequest({ body, options }, adminSetGraphQLValidationSettingsOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getAdminAuthProvidersOperationSpec = {
    path: "/auth/providers",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "ProviderSummary" } }
                }
            }
        }
    },
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const adminLoginOperationSpec = {
    path: "/auth/providers/{provider}/login",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body,
    urlParameters: [$host, provider],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const getAdminProfileOperationSpec = {
    path: "/auth/profile",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: RealmProfile
        }
    },
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const adminCreateSessionOperationSpec = {
    path: "/auth/session",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema
        }
    },
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const adminDeleteSessionOperationSpec = {
    path: "/auth/session",
    httpMethod: "DELETE",
    responses: { 401: {} },
    urlParameters: [$host],
    serializer
};
const adminListAppRegionsOperationSpec = {
    path: "/provider_regions",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: { name: "Composite", className: "AppProviderRegion" }
                    }
                }
            }
        }
    },
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const adminListApplicationsOperationSpec = {
    path: "/groups/{groupId}/apps",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    queryParameters: [product],
    urlParameters: [$host, groupId],
    headerParameters: [accept],
    serializer
};
const adminCreateApplicationOperationSpec = {
    path: "/groups/{groupId}/apps",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: ApplicationSummary
        }
    },
    requestBody: body1,
    queryParameters: [defaults],
    urlParameters: [$host, groupId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetApplicationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Application
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminDeleteApplicationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [$host, groupId, appId],
    serializer
};
const adminExportApplicationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/export",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host, groupId, appId],
    serializer
};
const adminCreateTriggerOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: TriggerResponse
        }
    },
    requestBody: body2,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminListTriggersOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: TriggerResponse
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminUpdateTriggerOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}",
    httpMethod: "PUT",
    responses: {
        204: {},
        409: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body2,
    urlParameters: [
        $host,
        groupId,
        appId,
        triggerId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetTriggerOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: TriggerResponse
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        triggerId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteTriggerOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        triggerId
    ],
    headerParameters: [accept],
    serializer
};
const adminResumeTriggerOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}/resume",
    httpMethod: "PUT",
    responses: {
        204: {},
        404: {
            bodyMapper: PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema
        }
    },
    requestBody: body3,
    urlParameters: [
        $host,
        groupId,
        appId,
        triggerId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminListValuesOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/values",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateValueOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/values",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: NewValue
        }
    },
    requestBody: body4,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetValueOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/values/{valueId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Value
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        valueId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteValueOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/values/{valueId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        valueId
    ],
    serializer
};
const adminUpdateValueOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/values/{valueId}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        valueId
    ],
    headerParameters: [accept],
    serializer
};
const adminListServicesOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateServiceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema
        },
        409: {}
    },
    requestBody: body5,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetServiceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteServiceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    serializer
};
const adminUpdateServiceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
    httpMethod: "PATCH",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    serializer
};
const adminValidateDocumentsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{datasourceId}/commands/validate_documents",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body6,
    urlParameters: [
        $host,
        groupId,
        appId,
        datasourceId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminRunCommandOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/{commandName}",
    httpMethod: "POST",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        commandName
    ],
    serializer
};
const getBuildInfoOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/build_info",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: BuildInfo
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept],
    serializer
};
const adminGetServiceConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/config",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    serializer
};
const adminUpdateServiceConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/config",
    httpMethod: "PATCH",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    serializer
};
const adminListRulesOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept],
    serializer
};
const adminCreateRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema
        },
        409: {}
    },
    requestBody: body7,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        ruleId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        ruleId
    ],
    serializer
};
const adminUpdateRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
    httpMethod: "PUT",
    responses: { 200: {} },
    requestBody: body8,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        ruleId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetDefaultRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: DefaultRule
        },
        404: {
            bodyMapper: BasicError
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept],
    serializer
};
const adminCreateDefaultRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: DefaultRule
        },
        400: {
            bodyMapper: BasicError
        }
    },
    requestBody: body9,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminUpdateDefaultRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
    httpMethod: "PUT",
    responses: {
        204: {},
        400: {
            bodyMapper: BasicError
        }
    },
    requestBody: body10,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminDeleteDefaultRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
    httpMethod: "DELETE",
    responses: {
        204: {},
        404: {
            bodyMapper: BasicError
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept],
    serializer
};
const adminGenerateSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/generate_schema",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body11,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminListWebhooksOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: IncomingWebhook
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [accept],
    serializer
};
const adminCreateWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks",
    httpMethod: "POST",
    responses: { 201: {} },
    requestBody: body12,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        incomingWebhookId
    ],
    serializer
};
const adminDeleteWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        incomingWebhookId
    ],
    serializer
};
const adminUpdateWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
    httpMethod: "PUT",
    responses: { 200: {} },
    requestBody: body12,
    urlParameters: [
        $host,
        groupId,
        appId,
        serviceId,
        incomingWebhookId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetSyncOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/sync/data",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: SyncDataResponse
        }
    },
    queryParameters: [serviceId1],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminListNotificationsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    queryParameters: [state],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateNotificationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications",
    httpMethod: "POST",
    responses: { 201: {} },
    requestBody: body13,
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetMessageOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Message
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        messageId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteMessageOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        messageId
    ],
    serializer
};
const adminUpdateMessageOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Message
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        messageId
    ],
    headerParameters: [accept],
    serializer
};
const adminSetMessageTypeOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}/type",
    httpMethod: "PUT",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        messageId
    ],
    serializer
};
const adminSendMessageOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}/send",
    httpMethod: "POST",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        messageId
    ],
    serializer
};
const adminListUsersOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "User" } }
                }
            }
        }
    },
    queryParameters: [after, sort, desc],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: User
        }
    },
    requestBody: body14,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminVerifyUserAccessTokenOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/verify_token",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body15,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/{uid}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: User
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        uid
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/{uid}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        uid
    ],
    serializer
};
const adminListDevicesOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/{uid}/devices",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        uid
    ],
    headerParameters: [accept],
    serializer
};
const adminUserLogoutOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/{uid}/logout",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        uid
    ],
    serializer
};
const adminEnableUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/{uid}/enable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        uid
    ],
    serializer
};
const adminDisableUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/{uid}/disable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        uid
    ],
    serializer
};
const adminDeletePendingUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        email
    ],
    serializer
};
const adminSendConfirmationEmailOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/send_confirm",
    httpMethod: "POST",
    responses: { 200: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        email
    ],
    serializer
};
const adminConfirmPendingUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/confirm",
    httpMethod: "POST",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        email
    ],
    serializer
};
const adminRerunPendingUserConfirmationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/run_confirm",
    httpMethod: "POST",
    responses: { 202: {}, 400: {}, 404: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        email
    ],
    serializer
};
const adminExecuteFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/debug/execute_function",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body16,
    queryParameters: [userId, runAsSystem],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminExecuteFunctionSourceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/debug/execute_function_source",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body17,
    queryParameters: [userId, runAsSystem],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminListAuthProvidersOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateAuthProviderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: FullProvider
        }
    },
    requestBody: body18,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetAuthProviderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: FullProvider
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        providerId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteAuthProviderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        providerId
    ],
    serializer
};
const adminUpdateAuthProviderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}",
    httpMethod: "PATCH",
    responses: { 204: {} },
    requestBody: body19,
    urlParameters: [
        $host,
        groupId,
        appId,
        providerId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminDisableAuthProviderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}/disable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        providerId
    ],
    serializer
};
const adminEnableAuthProviderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}/enable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        providerId
    ],
    serializer
};
const adminListAllowedRequestOriginsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/allowed_request_origins",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminSetAllowedRequestOriginsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/allowed_request_origins",
    httpMethod: "POST",
    responses: { 204: {} },
    requestBody: body20,
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const allowedIPAccessListGetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/access_list",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const allowedIPAccessListCreateOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/access_list",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const allowedIPAccessListUpdateOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/access_list/{ipId}",
    httpMethod: "PATCH",
    responses: {
        201: {
            bodyMapper: PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        ipId
    ],
    headerParameters: [accept],
    serializer
};
const allowedIPAccessListDeleteOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/access_list/{ipId}",
    httpMethod: "DELETE",
    responses: { 404: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        ipId
    ],
    serializer
};
const adminGetLogsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/logs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema
        }
    },
    queryParameters: [
        coId,
        errorsOnly,
        userId1,
        startDate,
        endDate,
        skip,
        limit,
        typeParam
    ],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const listLogForwardersOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "LogForwarder" } }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const createLogForwarderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: LogForwarder
        }
    },
    requestBody: body21,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const getLogForwarderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: LogForwarder
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        forwarderId
    ],
    headerParameters: [accept],
    serializer
};
const updateLogForwarderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: LogForwarder
        }
    },
    requestBody: body21,
    urlParameters: [
        $host,
        groupId,
        appId,
        forwarderId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const deleteGwarderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        forwarderId
    ],
    serializer
};
const enableLogForwarderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}/enable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        forwarderId
    ],
    serializer
};
const disableLogForwarderOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}/disable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        forwarderId
    ],
    serializer
};
const adminListApiKeysOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/api_keys",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateApiKeyOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/api_keys",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: ApiKey
        }
    },
    requestBody: body22,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetApiKeyOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: ApiKeyResponse
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        apiKeyId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteApiKeyOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        apiKeyId
    ],
    serializer
};
const adminEnableApiKeyOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}/enable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        apiKeyId
    ],
    serializer
};
const adminDisableApiKeyOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}/disable",
    httpMethod: "PUT",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        apiKeyId
    ],
    serializer
};
const adminGetAllSecretsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/secrets",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateASecretOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/secrets",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema
        }
    },
    requestBody: body23,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminModifyASecretOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/secrets/{secretId}",
    httpMethod: "PUT",
    responses: { 204: {} },
    requestBody: body24,
    urlParameters: [
        $host,
        groupId,
        appId,
        secretId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminDeleteSecretOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/secrets/{secretId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        secretId
    ],
    serializer
};
const adminListFunctionsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/functions",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "any" } }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/functions",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema
        }
    },
    requestBody: body25,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/functions/{functionId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: FunctionModel
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        functionId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeleteFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/functions/{functionId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        functionId
    ],
    serializer
};
const adminUpdateFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/functions/{functionId}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: NewFunction
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        functionId
    ],
    headerParameters: [accept],
    serializer
};
const adminGetAllDependenciesOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/dependencies",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: DependenciesSummary
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminListDeploymentsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/deployments",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "Deployment" } }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminListDeploymentDraftsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/drafts",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: DeploymentDraft
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateDeploymentDraftOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/drafts",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: DeploymentDraft
        },
        409: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminDiscardDraftOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/drafts/{draftId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        draftId
    ],
    serializer
};
const adminDeployDraftOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/drafts/{draftId}/deployment",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Application
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        draftId
    ],
    headerParameters: [accept],
    serializer
};
const adminDeployDraftDiffOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/drafts/{draftId}/diff",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Diff
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        draftId
    ],
    headerParameters: [accept],
    serializer
};
const adminGetHostingConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/config",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: HostingConfiguration
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminEnableDisableHostingOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/config",
    httpMethod: "PATCH",
    responses: { 204: {} },
    requestBody: body26,
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetAllHostedAssetsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: { name: "Composite", className: "HostedAssetMetadata" }
                    }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminMoveCopyHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets",
    httpMethod: "POST",
    responses: { 204: {} },
    requestBody: body27,
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: HostedAssetMetadata
        },
        404: {
            bodyMapper: PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema
        }
    },
    queryParameters: [path, prefix],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminUploadHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
    httpMethod: "PUT",
    responses: {
        204: {},
        400: {
            bodyMapper: Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema
        }
    },
    requestBody: body28,
    queryParameters: [path],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminUpdateHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
    httpMethod: "PATCH",
    responses: { 204: {}, 400: {} },
    requestBody: body29,
    queryParameters: [path],
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminMeasurementsOperationSpec = {
    path: "/groups/{groupId}/measurements",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema
        }
    },
    queryParameters: [start, end, granularity],
    urlParameters: [$host, groupId],
    headerParameters: [accept],
    serializer
};
const adminAppMeasurementsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/measurements",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema
        }
    },
    queryParameters: [start, end, granularity1],
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminListSchemasOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body30,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        schemaId
    ],
    headerParameters: [accept],
    serializer
};
const adminUpdateSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
    httpMethod: "PUT",
    responses: { 204: {} },
    requestBody: body31,
    urlParameters: [
        $host,
        groupId,
        appId,
        schemaId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminDeleteSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        schemaId
    ],
    serializer
};
const adminGetAllEndpointsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/endpoints",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "Endpoint" } }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateEndpointOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/endpoints",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Endpoint
        }
    },
    requestBody: body32,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetEndpointOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/endpoints/{endpointId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Endpoint
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        endpointId
    ],
    headerParameters: [accept],
    serializer
};
const adminModifyEndpointOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/endpoints/{endpointId}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Endpoint
        }
    },
    requestBody: body32,
    urlParameters: [
        $host,
        groupId,
        appId,
        endpointId
    ],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminDeleteEndpointOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/endpoints/{endpointId}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        endpointId
    ],
    headerParameters: [accept],
    serializer
};
const adminGetDataApiConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/data_api/config",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: DataApiConfig
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateDataApiConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/data_api/config",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: DataApiConfig
        }
    },
    requestBody: body33,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminModifyDataApiConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/data_api/config",
    httpMethod: "PATCH",
    responses: { 204: {} },
    requestBody: body33,
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminGetDataApiVersionsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/data_api/versions",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: { name: "String" },
                        defaultValue: "v1",
                        isConstant: true
                    }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminRunGraphQLOperationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: body34,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetAllCustomResolversOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: { type: { name: "Composite", className: "CustomResolver" } }
                }
            }
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminCreateCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: CustomResolver
        }
    },
    requestBody: body35,
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const adminGetCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: CustomResolver
        }
    },
    urlParameters: [
        $host,
        groupId,
        appId,
        customResolverId
    ],
    headerParameters: [accept],
    serializer
};
const adminModifyCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
    httpMethod: "PUT",
    responses: { 204: {} },
    requestBody: body35,
    urlParameters: [
        $host,
        groupId,
        appId,
        customResolverId
    ],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};
const adminDeleteCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [
        $host,
        groupId,
        appId,
        customResolverId
    ],
    serializer
};
const adminGetGraphQLValidationSettingsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/validation_settings/graphql",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: GraphQLValidationSettings
        }
    },
    urlParameters: [$host, groupId, appId],
    headerParameters: [accept],
    serializer
};
const adminSetGraphQLValidationSettingsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/validation_settings/graphql",
    httpMethod: "PUT",
    responses: { 204: {} },
    requestBody: body36,
    urlParameters: [$host, groupId, appId],
    headerParameters: [contentType],
    mediaType: "json",
    serializer
};

exports.AtlasAppServicesAPI = AtlasAppServicesAPI;
//# sourceMappingURL=index.js.map
