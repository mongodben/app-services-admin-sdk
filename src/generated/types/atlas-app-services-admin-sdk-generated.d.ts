import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import * as coreRestPipeline from '@azure/core-rest-pipeline';

/** Optional parameters. */
export declare interface AdminAppMeasurementsOptionalParams extends coreClient.OperationOptions {
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
export declare type AdminAppMeasurementsResponse = Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminConfirmPendingUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminCreateApiKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateApiKey operation. */
export declare type AdminCreateApiKeyResponse = ApiKey;

/** Optional parameters. */
export declare interface AdminCreateApplicationOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to create a default application. */
    defaults?: boolean;
}

/** Contains response data for the adminCreateApplication operation. */
export declare type AdminCreateApplicationResponse = ApplicationSummary;

/** Optional parameters. */
export declare interface AdminCreateASecretOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateASecret operation. */
export declare type AdminCreateASecretResponse = Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminCreateAuthProviderOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateAuthProvider operation. */
export declare type AdminCreateAuthProviderResponse = FullProvider;

/** Optional parameters. */
export declare interface AdminCreateCustomResolverOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateCustomResolver operation. */
export declare type AdminCreateCustomResolverResponse = CustomResolver;

/** Optional parameters. */
export declare interface AdminCreateDataApiConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateDataApiConfig operation. */
export declare type AdminCreateDataApiConfigResponse = DataApiConfig;

/** Optional parameters. */
export declare interface AdminCreateDefaultRuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateDefaultRule operation. */
export declare type AdminCreateDefaultRuleResponse = DefaultRule;

/** Optional parameters. */
export declare interface AdminCreateDeploymentDraftOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateDeploymentDraft operation. */
export declare type AdminCreateDeploymentDraftResponse = DeploymentDraft;

/** Optional parameters. */
export declare interface AdminCreateEndpointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateEndpoint operation. */
export declare type AdminCreateEndpointResponse = Endpoint;

/** Optional parameters. */
export declare interface AdminCreateFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateFunction operation. */
export declare type AdminCreateFunctionResponse = Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminCreateNotificationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminCreateRuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateRule operation. */
export declare type AdminCreateRuleResponse = Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminCreateSchemaOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateSchema operation. */
export declare type AdminCreateSchemaResponse = Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminCreateServiceOptionalParams extends coreClient.OperationOptions {
    body?: PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the adminCreateService operation. */
export declare type AdminCreateServiceResponse = Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminCreateSessionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateSession operation. */
export declare type AdminCreateSessionResponse = PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminCreateTriggerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateTrigger operation. */
export declare type AdminCreateTriggerResponse = TriggerResponse;

/** Optional parameters. */
export declare interface AdminCreateUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateUser operation. */
export declare type AdminCreateUserResponse = User;

/** Optional parameters. */
export declare interface AdminCreateValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminCreateValue operation. */
export declare type AdminCreateValueResponse = NewValue;

/** Optional parameters. */
export declare interface AdminCreateWebhookOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteApiKeyOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteApplicationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteAuthProviderOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteCustomResolverOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteDefaultRuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminDeleteDefaultRule operation. */
export declare type AdminDeleteDefaultRuleResponse = BasicError;

/** Optional parameters. */
export declare interface AdminDeleteEndpointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminDeleteEndpoint operation. */
export declare type AdminDeleteEndpointResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface AdminDeleteFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteMessageOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeletePendingUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteRuleOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteSchemaOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteSecretOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteServiceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteSessionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteTriggerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminDeleteTrigger operation. */
export declare type AdminDeleteTriggerResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface AdminDeleteUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteValueOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeleteWebhookOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDeployDraftDiffOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminDeployDraftDiff operation. */
export declare type AdminDeployDraftDiffResponse = Diff;

/** Optional parameters. */
export declare interface AdminDeployDraftOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminDeployDraft operation. */
export declare type AdminDeployDraftResponse = Application;

/** Optional parameters. */
export declare interface AdminDisableApiKeyOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDisableAuthProviderOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDisableUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminDiscardDraftOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminEnableApiKeyOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminEnableAuthProviderOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminEnableDisableHostingOptionalParams extends coreClient.OperationOptions {
    body?: Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema;
}

/** Optional parameters. */
export declare interface AdminEnableUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminExecuteFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminExecuteFunction operation. */
export declare type AdminExecuteFunctionResponse = PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminExecuteFunctionSourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminExecuteFunctionSource operation. */
export declare type AdminExecuteFunctionSourceResponse = Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminExportApplicationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminGenerateSchemaOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGenerateSchema operation. */
export declare type AdminGenerateSchemaResponse = Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminGetAllCustomResolversOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetAllCustomResolvers operation. */
export declare type AdminGetAllCustomResolversResponse = CustomResolver[];

/** Optional parameters. */
export declare interface AdminGetAllDependenciesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetAllDependencies operation. */
export declare type AdminGetAllDependenciesResponse = DependenciesSummary;

/** Optional parameters. */
export declare interface AdminGetAllEndpointsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetAllEndpoints operation. */
export declare type AdminGetAllEndpointsResponse = Endpoint[];

/** Optional parameters. */
export declare interface AdminGetAllHostedAssetsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetAllHostedAssets operation. */
export declare type AdminGetAllHostedAssetsResponse = HostedAssetMetadata[];

/** Optional parameters. */
export declare interface AdminGetAllSecretsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetAllSecrets operation. */
export declare type AdminGetAllSecretsResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminGetApiKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetApiKey operation. */
export declare type AdminGetApiKeyResponse = ApiKeyResponse;

/** Optional parameters. */
export declare interface AdminGetApplicationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetApplication operation. */
export declare type AdminGetApplicationResponse = Application;

/** Optional parameters. */
export declare interface AdminGetAuthProviderOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetAuthProvider operation. */
export declare type AdminGetAuthProviderResponse = FullProvider;

/** Optional parameters. */
export declare interface AdminGetCustomResolverOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetCustomResolver operation. */
export declare type AdminGetCustomResolverResponse = CustomResolver;

/** Optional parameters. */
export declare interface AdminGetDataApiConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetDataApiConfig operation. */
export declare type AdminGetDataApiConfigResponse = DataApiConfig;

/** Optional parameters. */
export declare interface AdminGetDataApiVersionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetDataApiVersions operation. */
export declare type AdminGetDataApiVersionsResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface AdminGetDefaultRuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetDefaultRule operation. */
export declare type AdminGetDefaultRuleResponse = DefaultRule;

/** Optional parameters. */
export declare interface AdminGetEndpointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetEndpoint operation. */
export declare type AdminGetEndpointResponse = Endpoint;

/** Optional parameters. */
export declare interface AdminGetFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetFunction operation. */
export declare type AdminGetFunctionResponse = FunctionModel;

/** Optional parameters. */
export declare interface AdminGetGraphQLValidationSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetGraphQLValidationSettings operation. */
export declare type AdminGetGraphQLValidationSettingsResponse = GraphQLValidationSettings;

/** Optional parameters. */
export declare interface AdminGetHostedAssetOptionalParams extends coreClient.OperationOptions {
    /**
     * Return only those assets where the resource path begins with the
     * specified prefix.
     */
    prefix?: string;
}

/** Contains response data for the adminGetHostedAsset operation. */
export declare type AdminGetHostedAssetResponse = HostedAssetMetadata;

/** Optional parameters. */
export declare interface AdminGetHostingConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetHostingConfig operation. */
export declare type AdminGetHostingConfigResponse = HostingConfiguration;

/** Optional parameters. */
export declare interface AdminGetLogsOptionalParams extends coreClient.OperationOptions {
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
export declare type AdminGetLogsResponse = Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminGetMessageOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetMessage operation. */
export declare type AdminGetMessageResponse = Message;

/** Optional parameters. */
export declare interface AdminGetRuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetRule operation. */
export declare type AdminGetRuleResponse = Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminGetSchemaOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetSchema operation. */
export declare type AdminGetSchemaResponse = Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminGetServiceConfigOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminGetServiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetService operation. */
export declare type AdminGetServiceResponse = Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminGetSyncOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetSync operation. */
export declare type AdminGetSyncResponse = SyncDataResponse;

/** Optional parameters. */
export declare interface AdminGetTriggerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetTrigger operation. */
export declare type AdminGetTriggerResponse = TriggerResponse;

/** Optional parameters. */
export declare interface AdminGetUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetUser operation. */
export declare type AdminGetUserResponse = User;

/** Optional parameters. */
export declare interface AdminGetValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminGetValue operation. */
export declare type AdminGetValueResponse = Value;

/** Optional parameters. */
export declare interface AdminGetWebhookOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminListAllowedRequestOriginsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListAllowedRequestOrigins operation. */
export declare type AdminListAllowedRequestOriginsResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListApiKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListApiKeys operation. */
export declare type AdminListApiKeysResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListApplicationsOptionalParams extends coreClient.OperationOptions {
    /**
     * Specify `product=atlas` to include [Atlas
     * trigger](https://docs.atlas.mongodb.com/triggers) apps.
     */
    product?: string;
}

/** Contains response data for the adminListApplications operation. */
export declare type AdminListApplicationsResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListAppRegionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListAppRegions operation. */
export declare type AdminListAppRegionsResponse = AppProviderRegion[];

/** Optional parameters. */
export declare interface AdminListAuthProvidersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListAuthProviders operation. */
export declare type AdminListAuthProvidersResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListDeploymentDraftsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListDeploymentDrafts operation. */
export declare type AdminListDeploymentDraftsResponse = DeploymentDraft;

/** Optional parameters. */
export declare interface AdminListDeploymentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListDeployments operation. */
export declare type AdminListDeploymentsResponse = Deployment[];

/** Optional parameters. */
export declare interface AdminListDevicesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListDevices operation. */
export declare type AdminListDevicesResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListFunctionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListFunctions operation. */
export declare type AdminListFunctionsResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListNotificationsOptionalParams extends coreClient.OperationOptions {
    /** Only list notifications with the given state. */
    state?: MessageState;
}

/** Contains response data for the adminListNotifications operation. */
export declare type AdminListNotificationsResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListRulesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListRules operation. */
export declare type AdminListRulesResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListSchemasOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListSchemas operation. */
export declare type AdminListSchemasResponse = Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems[];

/** Optional parameters. */
export declare interface AdminListServicesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListServices operation. */
export declare type AdminListServicesResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListTriggersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListTriggers operation. */
export declare type AdminListTriggersResponse = TriggerResponse;

/** Optional parameters. */
export declare interface AdminListUsersOptionalParams extends coreClient.OperationOptions {
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
export declare type AdminListUsersResponse = User[];

/** Optional parameters. */
export declare interface AdminListValuesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListValues operation. */
export declare type AdminListValuesResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminListWebhooksOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminListWebhooks operation. */
export declare type AdminListWebhooksResponse = IncomingWebhook;

/** Optional parameters. */
export declare interface AdminLoginOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminLogin operation. */
export declare type AdminLoginResponse = Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminMeasurementsOptionalParams extends coreClient.OperationOptions {
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
export declare type AdminMeasurementsResponse = PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminModifyASecretOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminModifyCustomResolverOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminModifyDataApiConfigOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminModifyEndpointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminModifyEndpoint operation. */
export declare type AdminModifyEndpointResponse = Endpoint;

/** Optional parameters. */
export declare interface AdminMoveCopyHostedAssetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminRerunPendingUserConfirmationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminResumeTriggerOptionalParams extends coreClient.OperationOptions {
    /** Configuration options for the resume operation */
    body?: PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the adminResumeTrigger operation. */
export declare type AdminResumeTriggerResponse = PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminRunCommandOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminRunGraphQLOperationOptionalParams extends coreClient.OperationOptions {
    body?: Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the adminRunGraphQLOperation operation. */
export declare type AdminRunGraphQLOperationResponse = Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminSendConfirmationEmailOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminSendMessageOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminSetAllowedRequestOriginsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminSetGraphQLValidationSettingsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminSetMessageTypeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateAuthProviderOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateDefaultRuleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminUpdateDefaultRule operation. */
export declare type AdminUpdateDefaultRuleResponse = BasicError;

/** Optional parameters. */
export declare interface AdminUpdateFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminUpdateFunction operation. */
export declare type AdminUpdateFunctionResponse = NewFunction;

/** Optional parameters. */
export declare interface AdminUpdateHostedAssetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateMessageOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminUpdateMessage operation. */
export declare type AdminUpdateMessageResponse = Message;

/** Optional parameters. */
export declare interface AdminUpdateRuleOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateSchemaOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateServiceConfigOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateServiceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUpdateTriggerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminUpdateTrigger operation. */
export declare type AdminUpdateTriggerResponse = ErrorModel;

/** Optional parameters. */
export declare interface AdminUpdateValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminUpdateValue operation. */
export declare type AdminUpdateValueResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AdminUpdateWebhookOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminUploadHostedAssetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminUploadHostedAsset operation. */
export declare type AdminUploadHostedAssetResponse = Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminUserLogoutOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AdminValidateDocumentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminValidateDocuments operation. */
export declare type AdminValidateDocumentsResponse = Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AdminVerifyUserAccessTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the adminVerifyUserAccessToken operation. */
export declare type AdminVerifyUserAccessTokenResponse = PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AllowedIPAccessListCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the allowedIPAccessListCreate operation. */
export declare type AllowedIPAccessListCreateResponse = Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AllowedIPAccessListDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AllowedIPAccessListGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the allowedIPAccessListGet operation. */
export declare type AllowedIPAccessListGetResponse = {
    /** The parsed response body. */
    body: any;
};

/** Optional parameters. */
export declare interface AllowedIPAccessListUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the allowedIPAccessListUpdate operation. */
export declare type AllowedIPAccessListUpdateResponse = PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema;

export declare interface ApiKey {
    id?: string;
    key?: string;
    name?: string;
    disabled?: string;
}

export declare interface ApiKeyResponse {
    id?: string;
    name?: string;
    disabled?: string;
}

export declare interface Application {
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

export declare interface ApplicationSummary {
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

export declare interface AppProviderRegion {
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

/**
 * Defines values for AppProviderRegionDeploymentModelsItem. \
 * {@link KnownAppProviderRegionDeploymentModelsItem} can be used interchangeably with AppProviderRegionDeploymentModelsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GLOBAL** \
 * **LOCAL**
 */
export declare type AppProviderRegionDeploymentModelsItem = string;

export declare interface AssetMetadata {
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

export declare class AtlasAppServicesAPI extends coreClient.ServiceClient {
    $host: string;
    groupId: string;
    appId: string;
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
    constructor(credentials: coreAuth.TokenCredential, groupId: string, appId: string, options?: AtlasAppServicesAPIOptionalParams);
    /**
     * Enumerate available App Services administration authentication providers
     * @param options The options parameters.
     */
    getAdminAuthProviders(options?: GetAdminAuthProvidersOptionalParams): Promise<GetAdminAuthProvidersResponse>;
    /**
     * Authenticate as an App Services administrator. Use [GET
     * /auth/providers](#section/adminGetLogs) to list the available
     * authentication providers.
     *
     * @param provider The authentication provider to use.
     * @param body
     * @param options The options parameters.
     */
    adminLogin(provider: ProviderType, body: PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema, options?: AdminLoginOptionalParams): Promise<AdminLoginResponse>;
    /**
     * Get information about the currently logged in user
     * @param options The options parameters.
     */
    getAdminProfile(options?: GetAdminProfileOptionalParams): Promise<GetAdminProfileResponse>;
    /**
     * Obtain a session access token
     * @param options The options parameters.
     */
    adminCreateSession(options?: AdminCreateSessionOptionalParams): Promise<AdminCreateSessionResponse>;
    /**
     * Delete a session access token
     * @param options The options parameters.
     */
    adminDeleteSession(options?: AdminDeleteSessionOptionalParams): Promise<void>;
    /**
     * Return a list of all supported cloud regions in which you can
     * deploy an Atlas App.
     * @param options The options parameters.
     */
    adminListAppRegions(options?: AdminListAppRegionsOptionalParams): Promise<AdminListAppRegionsResponse>;
    /**
     * List all App Services apps within an Atlas
     * [project/group](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
     * @param options The options parameters.
     */
    adminListApplications(options?: AdminListApplicationsOptionalParams): Promise<AdminListApplicationsResponse>;
    /**
     * Create a new Atlas App Services app
     * @param body The application to create.
     * @param options The options parameters.
     */
    adminCreateApplication(body: NewApplication, options?: AdminCreateApplicationOptionalParams): Promise<AdminCreateApplicationResponse>;
    /**
     * Retrieve an application definition
     * @param options The options parameters.
     */
    adminGetApplication(options?: AdminGetApplicationOptionalParams): Promise<AdminGetApplicationResponse>;
    /**
     * Delete an application
     * @param options The options parameters.
     */
    adminDeleteApplication(options?: AdminDeleteApplicationOptionalParams): Promise<void>;
    /**
     * [Export](https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/export-app#std-label-export-realm-app)
     * an application as a zip file.
     * @param options The options parameters.
     */
    adminExportApplication(options?: AdminExportApplicationOptionalParams): Promise<void>;
    /**
     * Create a trigger
     * @param body The trigger to create.
     * @param options The options parameters.
     */
    adminCreateTrigger(body: TriggerRequest, options?: AdminCreateTriggerOptionalParams): Promise<AdminCreateTriggerResponse>;
    /**
     * List all triggers
     * @param options The options parameters.
     */
    adminListTriggers(options?: AdminListTriggersOptionalParams): Promise<AdminListTriggersResponse>;
    /**
     * Update a trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param body The trigger to update.
     * @param options The options parameters.
     */
    adminUpdateTrigger(triggerId: string, body: TriggerRequest, options?: AdminUpdateTriggerOptionalParams): Promise<AdminUpdateTriggerResponse>;
    /**
     * Retrieve the configuration for a specific trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param options The options parameters.
     */
    adminGetTrigger(triggerId: string, options?: AdminGetTriggerOptionalParams): Promise<AdminGetTriggerResponse>;
    /**
     * Delete a trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param options The options parameters.
     */
    adminDeleteTrigger(triggerId: string, options?: AdminDeleteTriggerOptionalParams): Promise<AdminDeleteTriggerResponse>;
    /**
     * Resume a suspended trigger
     * @param triggerId The unique `_id` value of a trigger.
     * @param options The options parameters.
     */
    adminResumeTrigger(triggerId: string, options?: AdminResumeTriggerOptionalParams): Promise<AdminResumeTriggerResponse>;
    /**
     * List all [values](https://www.mongodb.com/docs/realm/values-and-secrets)
     * defined in an application.
     * @param options The options parameters.
     */
    adminListValues(options?: AdminListValuesOptionalParams): Promise<AdminListValuesResponse>;
    /**
     * Define a [Value](https://www.mongodb.com/docs/realm/values-and-secrets) in
     * an application.
     * @param body The value to create.
     * @param options The options parameters.
     */
    adminCreateValue(body: NewValue, options?: AdminCreateValueOptionalParams): Promise<AdminCreateValueResponse>;
    /**
     * Retrieve a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
     * definition from an application.
     * @param valueId The unique `_id` value of a value.
     * @param options The options parameters.
     */
    adminGetValue(valueId: string, options?: AdminGetValueOptionalParams): Promise<AdminGetValueResponse>;
    /**
     * Delete a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
     * defined in an application.
     * @param valueId The unique `_id` value of a value.
     * @param options The options parameters.
     */
    adminDeleteValue(valueId: string, options?: AdminDeleteValueOptionalParams): Promise<void>;
    /**
     * Update a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
     * definition in an application.
     * @param valueId The unique `_id` value of a value.
     * @param options The options parameters.
     */
    adminUpdateValue(valueId: string, options?: AdminUpdateValueOptionalParams): Promise<AdminUpdateValueResponse>;
    /**
     * List all [data sources](https://www.mongodb.com/docs/atlas/app-services/mongodb/) and [third-party
     * services [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param options The options parameters.
     */
    adminListServices(options?: AdminListServicesOptionalParams): Promise<AdminListServicesResponse>;
    /**
     * Create a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/) or [third-party
     * service [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param options The options parameters.
     */
    adminCreateService(options?: AdminCreateServiceOptionalParams): Promise<AdminCreateServiceResponse>;
    /**
     * Get a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/)
     * or [third-party service
     * [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminGetService(serviceId: string, options?: AdminGetServiceOptionalParams): Promise<AdminGetServiceResponse>;
    /**
     * Delete a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/)
     * or [third-party service
     * [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminDeleteService(serviceId: string, options?: AdminDeleteServiceOptionalParams): Promise<void>;
    /**
     * Update a [service](https://www.mongodb.com/docs/realm/services#std-label-services).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminUpdateService(serviceId: string, options?: AdminUpdateServiceOptionalParams): Promise<void>;
    /**
     * Query a subset of documents in a collection and validate each match against a schema.
     * @param datasourceId The unique `_id` value of a MongoDB data source.
     * @param body
     * @param options The options parameters.
     */
    adminValidateDocuments(datasourceId: string, body: PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema, options?: AdminValidateDocumentsOptionalParams): Promise<AdminValidateDocumentsResponse>;
    /**
     * Run a command associated with a
     * [service](https://www.mongodb.com/docs/realm/services#std-label-services).
     * @param serviceId The unique `_id` value of a service.
     * @param commandName Command name
     * @param options The options parameters.
     */
    adminRunCommand(serviceId: string, commandName: string, options?: AdminRunCommandOptionalParams): Promise<void>;
    /**
     * Get information about the underlying Atlas mongod
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    getBuildInfo(serviceId: string, options?: GetBuildInfoOptionalParams): Promise<GetBuildInfoResponse>;
    /**
     * Retrieve a [service's](https://www.mongodb.com/docs/realm/services#std-label-services)
     * configuration.
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminGetServiceConfig(serviceId: string, options?: AdminGetServiceConfigOptionalParams): Promise<void>;
    /**
     * Update a [service's](https://www.mongodb.com/docs/realm/services#std-label-services) configuration.
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminUpdateServiceConfig(serviceId: string, options?: AdminUpdateServiceConfigOptionalParams): Promise<void>;
    /**
     * List all [data access rules](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminListRules(serviceId: string, options?: AdminListRulesOptionalParams): Promise<AdminListRulesResponse>;
    /**
     * Create a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param body The rule to create.
     * @param options The options parameters.
     */
    adminCreateRule(serviceId: string, body: Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema, options?: AdminCreateRuleOptionalParams): Promise<AdminCreateRuleResponse>;
    /**
     * Get a specific [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param ruleId The unique `_id` value of a rule.
     * @param options The options parameters.
     */
    adminGetRule(serviceId: string, ruleId: string, options?: AdminGetRuleOptionalParams): Promise<AdminGetRuleResponse>;
    /**
     * Delete a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param ruleId The unique `_id` value of a rule.
     * @param options The options parameters.
     */
    adminDeleteRule(serviceId: string, ruleId: string, options?: AdminDeleteRuleOptionalParams): Promise<void>;
    /**
     * Update a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
     * @param serviceId The unique `_id` value of a service.
     * @param ruleId The unique `_id` value of a rule.
     * @param body The new state of the rule.
     * @param options The options parameters.
     */
    adminUpdateRule(serviceId: string, ruleId: string, body: Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema, options?: AdminUpdateRuleOptionalParams): Promise<void>;
    /**
     * Get the current [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminGetDefaultRule(serviceId: string, options?: AdminGetDefaultRuleOptionalParams): Promise<AdminGetDefaultRuleResponse>;
    /**
     * Create [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) for a data source.
     * @param serviceId The unique `_id` value of a service.
     * @param body A default rule configuration object.
     * @param options The options parameters.
     */
    adminCreateDefaultRule(serviceId: string, body: DefaultRule, options?: AdminCreateDefaultRuleOptionalParams): Promise<AdminCreateDefaultRuleResponse>;
    /**
     * Modify the [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) of a data source.
     * @param serviceId The unique `_id` value of a service.
     * @param body The updated default rule configuration object.
     * @param options The options parameters.
     */
    adminUpdateDefaultRule(serviceId: string, body: PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema, options?: AdminUpdateDefaultRuleOptionalParams): Promise<AdminUpdateDefaultRuleResponse>;
    /**
     * Delete the [default roles and
     * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) of a data source.
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminDeleteDefaultRule(serviceId: string, options?: AdminDeleteDefaultRuleOptionalParams): Promise<AdminDeleteDefaultRuleResponse>;
    /**
     * Sample a subset of documents in a collection to generate a JSON schema.
     * @param serviceId The unique `_id` value of a service.
     * @param body
     * @param options The options parameters.
     */
    adminGenerateSchema(serviceId: string, body: PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema, options?: AdminGenerateSchemaOptionalParams): Promise<AdminGenerateSchemaResponse>;
    /**
     * List [webhooks](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param options The options parameters.
     */
    adminListWebhooks(serviceId: string, options?: AdminListWebhooksOptionalParams): Promise<AdminListWebhooksResponse>;
    /**
     * Create a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param body The webhook to create.
     * @param options The options parameters.
     */
    adminCreateWebhook(serviceId: string, body: IncomingWebhook, options?: AdminCreateWebhookOptionalParams): Promise<void>;
    /**
     * Retrieve a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param incomingWebhookId The unique `_id` value of an incoming webhook
     * @param options The options parameters.
     */
    adminGetWebhook(serviceId: string, incomingWebhookId: string, options?: AdminGetWebhookOptionalParams): Promise<void>;
    /**
     * Delete a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param incomingWebhookId The unique `_id` value of an incoming webhook
     * @param options The options parameters.
     */
    adminDeleteWebhook(serviceId: string, incomingWebhookId: string, options?: AdminDeleteWebhookOptionalParams): Promise<void>;
    /**
     * Update a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
     * @param serviceId The unique `_id` value of a service.
     * @param incomingWebhookId The unique `_id` value of an incoming webhook
     * @param body The updated state of the webhook.
     * @param options The options parameters.
     */
    adminUpdateWebhook(serviceId: string, incomingWebhookId: string, body: IncomingWebhook, options?: AdminUpdateWebhookOptionalParams): Promise<void>;
    /**
     * Retrieve partition field data when using [Partition-Based
     * Sync](https://www.mongodb.com/docs/realm/sync/data-access-patterns/partitions/).
     * @param serviceId The Service ID for the linked cluster.
     * @param options The options parameters.
     */
    adminGetSync(serviceId: string, options?: AdminGetSyncOptionalParams): Promise<AdminGetSyncResponse>;
    /**
     * List [push
     * notifications](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
     * @param options The options parameters.
     */
    adminListNotifications(options?: AdminListNotificationsOptionalParams): Promise<AdminListNotificationsResponse>;
    /**
     * Create a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
     * @param body The notification to create.
     * @param options The options parameters.
     */
    adminCreateNotification(body: NewMessage, options?: AdminCreateNotificationOptionalParams): Promise<void>;
    /**
     * Retrieve a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * message.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminGetMessage(messageId: string, options?: AdminGetMessageOptionalParams): Promise<AdminGetMessageResponse>;
    /**
     * Delete a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * message.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminDeleteMessage(messageId: string, options?: AdminDeleteMessageOptionalParams): Promise<void>;
    /**
     * Update a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * message.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminUpdateMessage(messageId: string, options?: AdminUpdateMessageOptionalParams): Promise<AdminUpdateMessageResponse>;
    /**
     * Set a [push
     * notification's](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
     * type.
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminSetMessageType(messageId: string, options?: AdminSetMessageTypeOptionalParams): Promise<void>;
    /**
     * Send a [push
     * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
     * @param messageId Message ID
     * @param options The options parameters.
     */
    adminSendMessage(messageId: string, options?: AdminSendMessageOptionalParams): Promise<void>;
    /**
     * List [users](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param options The options parameters.
     */
    adminListUsers(options?: AdminListUsersOptionalParams): Promise<AdminListUsersResponse>;
    /**
     * Create a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param body The user to create
     * @param options The options parameters.
     */
    adminCreateUser(body: PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema, options?: AdminCreateUserOptionalParams): Promise<AdminCreateUserResponse>;
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
    adminVerifyUserAccessToken(body: PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema, options?: AdminVerifyUserAccessTokenOptionalParams): Promise<AdminVerifyUserAccessTokenResponse>;
    /**
     * Retrieve a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminGetUser(uid: string, options?: AdminGetUserOptionalParams): Promise<AdminGetUserResponse>;
    /**
     * Delete a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminDeleteUser(uid: string, options?: AdminDeleteUserOptionalParams): Promise<void>;
    /**
     * List a user's devices.
     * @param uid UID
     * @param options The options parameters.
     */
    adminListDevices(uid: string, options?: AdminListDevicesOptionalParams): Promise<AdminListDevicesResponse>;
    /**
     * Revoke all of a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts)'s
     * sessions.
     * @param uid UID
     * @param options The options parameters.
     */
    adminUserLogout(uid: string, options?: AdminUserLogoutOptionalParams): Promise<void>;
    /**
     * Enable a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminEnableUser(uid: string, options?: AdminEnableUserOptionalParams): Promise<void>;
    /**
     * Disable a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param uid UID
     * @param options The options parameters.
     */
    adminDisableUser(uid: string, options?: AdminDisableUserOptionalParams): Promise<void>;
    /**
     * Delete a pending [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param email Email address
     * @param options The options parameters.
     */
    adminDeletePendingUser(email: string, options?: AdminDeletePendingUserOptionalParams): Promise<void>;
    /**
     * Send a [confirmation
     * email](https://www.mongodb.com/docs/realm/authentication/email-password).
     * @param email Email address
     * @param options The options parameters.
     */
    adminSendConfirmationEmail(email: string, options?: AdminSendConfirmationEmailOptionalParams): Promise<void>;
    /**
     * Confirm a pending [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param email Email address
     * @param options The options parameters.
     */
    adminConfirmPendingUser(email: string, options?: AdminConfirmPendingUserOptionalParams): Promise<void>;
    /**
     * Reruns a pending user's [confirmation
     * workflow](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
     * @param email Email address
     * @param options The options parameters.
     */
    adminRerunPendingUserConfirmation(email: string, options?: AdminRerunPendingUserConfirmationOptionalParams): Promise<void>;
    /**
     * Execute a [function](https://www.mongodb.com/docs/realm/functions#std-label-functions) for testing.
     * @param userId The user as which to execute the function. Either `user_id` or
     *               `run_as_system` is required. You cannot specify both.
     * @param runAsSystem Determine whether or not to run as system user. Either `run_as_system`
     *                    or `user_id` is required. You cannot specify both.
     * @param body The function to execute.
     * @param options The options parameters.
     */
    adminExecuteFunction(userId: string, runAsSystem: boolean, body: PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema, options?: AdminExecuteFunctionOptionalParams): Promise<AdminExecuteFunctionResponse>;
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
    adminExecuteFunctionSource(userId: string, runAsSystem: boolean, body: Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema, options?: AdminExecuteFunctionSourceOptionalParams): Promise<AdminExecuteFunctionSourceResponse>;
    /**
     * List [authentication
     * providers](https://www.mongodb.com/docs/realm/authentication/providers)
     * within a Atlas App Services app.
     * @param options The options parameters.
     */
    adminListAuthProviders(options?: AdminListAuthProvidersOptionalParams): Promise<AdminListAuthProvidersResponse>;
    /**
     * Create an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param body
     * @param options The options parameters.
     */
    adminCreateAuthProvider(body: NewProvider, options?: AdminCreateAuthProviderOptionalParams): Promise<AdminCreateAuthProviderResponse>;
    /**
     * Retrieve information about one of an application's [authentication
     * providers](https://www.mongodb.com/docs/realm/authentication/providers)
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminGetAuthProvider(providerId: string, options?: AdminGetAuthProviderOptionalParams): Promise<AdminGetAuthProviderResponse>;
    /**
     * Delete an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminDeleteAuthProvider(providerId: string, options?: AdminDeleteAuthProviderOptionalParams): Promise<void>;
    /**
     * Update an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param body
     * @param options The options parameters.
     */
    adminUpdateAuthProvider(providerId: string, body: FullProvider, options?: AdminUpdateAuthProviderOptionalParams): Promise<void>;
    /**
     * Disable an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminDisableAuthProvider(providerId: string, options?: AdminDisableAuthProviderOptionalParams): Promise<void>;
    /**
     * Enable an [authentication
     * provider](https://www.mongodb.com/docs/realm/authentication/providers).
     * @param providerId The unique `_id` value of an authentication provider
     * @param options The options parameters.
     */
    adminEnableAuthProvider(providerId: string, options?: AdminEnableAuthProviderOptionalParams): Promise<void>;
    /**
     * List the allowed [HTTP
     * origins](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
     * from which App Services should allow requests.
     * @param options The options parameters.
     */
    adminListAllowedRequestOrigins(options?: AdminListAllowedRequestOriginsOptionalParams): Promise<AdminListAllowedRequestOriginsResponse>;
    /**
     * Set the allowed [HTTP
     * origins](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
     * from which App Services should allow requests.
     * @param body A list of HTTP origins.
     * @param options The options parameters.
     */
    adminSetAllowedRequestOrigins(body: any, options?: AdminSetAllowedRequestOriginsOptionalParams): Promise<void>;
    /**
     * List the allowed entries in the Access List of your Atlas App Services app.
     * @param options The options parameters.
     */
    allowedIPAccessListGet(options?: AllowedIPAccessListGetOptionalParams): Promise<AllowedIPAccessListGetResponse>;
    /**
     * Create an IP address or CIDR block in the Access List for your App Services
     * app.
     * @param options The options parameters.
     */
    allowedIPAccessListCreate(options?: AllowedIPAccessListCreateOptionalParams): Promise<AllowedIPAccessListCreateResponse>;
    /**
     * Modify an IP address or CIDR block in the Access List of your App Services
     * app
     * @param ipId The IP address entry denoted by `ip_id` with the information given in
     *             the request body
     * @param options The options parameters.
     */
    allowedIPAccessListUpdate(ipId: string, options?: AllowedIPAccessListUpdateOptionalParams): Promise<AllowedIPAccessListUpdateResponse>;
    /**
     * Delete an IP address or CIDR block from the Access List of your App Services
     * app
     * @param ipId The IP address entry denoted by `ip_id` with the information given in
     *             the request body
     * @param options The options parameters.
     */
    allowedIPAccessListDelete(ipId: string, options?: AllowedIPAccessListDeleteOptionalParams): Promise<void>;
    /**
     * Retrieve App Services logs
     * @param options The options parameters.
     */
    adminGetLogs(options?: AdminGetLogsOptionalParams): Promise<AdminGetLogsResponse>;
    /**
     * List log forwarders.
     * @param options The options parameters.
     */
    listLogForwarders(options?: ListLogForwardersOptionalParams): Promise<ListLogForwardersResponse>;
    /**
     * Create a log forwarder.
     * @param body A log forwarder configuration
     * @param options The options parameters.
     */
    createLogForwarder(body: LogForwarder, options?: CreateLogForwarderOptionalParams): Promise<CreateLogForwarderResponse>;
    /**
     * Get a specific log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    getLogForwarder(forwarderId: string, options?: GetLogForwarderOptionalParams): Promise<GetLogForwarderResponse>;
    /**
     * Update a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param body A log forwarder configuration
     * @param options The options parameters.
     */
    updateLogForwarder(forwarderId: string, body: LogForwarder, options?: UpdateLogForwarderOptionalParams): Promise<UpdateLogForwarderResponse>;
    /**
     * Delete a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    deleteGwarder(forwarderId: string, options?: DeleteGwarderOptionalParams): Promise<void>;
    /**
     * Enable a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    enableLogForwarder(forwarderId: string, options?: EnableLogForwarderOptionalParams): Promise<void>;
    /**
     * Disable a log forwarder.
     * @param forwarderId The _id ObjectID of a log forwarder.
     * @param options The options parameters.
     */
    disableLogForwarder(forwarderId: string, options?: DisableLogForwarderOptionalParams): Promise<void>;
    /**
     * List [API keys](https://www.mongodb.com/docs/realm/authentication/api-key)
     * associated with a Atlas App Services app.
     * @param options The options parameters.
     */
    adminListApiKeys(options?: AdminListApiKeysOptionalParams): Promise<AdminListApiKeysResponse>;
    /**
     * Create a new [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param body The API key to create.
     * @param options The options parameters.
     */
    adminCreateApiKey(body: Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema, options?: AdminCreateApiKeyOptionalParams): Promise<AdminCreateApiKeyResponse>;
    /**
     * Retrieve information about an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminGetApiKey(apiKeyId: string, options?: AdminGetApiKeyOptionalParams): Promise<AdminGetApiKeyResponse>;
    /**
     * Delete an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminDeleteApiKey(apiKeyId: string, options?: AdminDeleteApiKeyOptionalParams): Promise<void>;
    /**
     * Enable an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminEnableApiKey(apiKeyId: string, options?: AdminEnableApiKeyOptionalParams): Promise<void>;
    /**
     * Disable an [API
     * key](https://www.mongodb.com/docs/realm/authentication/api-key).
     * @param apiKeyId The unique `_id` value of an API key
     * @param options The options parameters.
     */
    adminDisableApiKey(apiKeyId: string, options?: AdminDisableApiKeyOptionalParams): Promise<void>;
    /**
     * List
     * [secrets](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets#std-label-define-secret)
     * associated with a Atlas App Services app.
     * @param options The options parameters.
     */
    adminGetAllSecrets(options?: AdminGetAllSecretsOptionalParams): Promise<AdminGetAllSecretsResponse>;
    /**
     * Create a new
     * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets).
     * @param body The Secret to create.
     * @param options The options parameters.
     */
    adminCreateASecret(body: Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema, options?: AdminCreateASecretOptionalParams): Promise<AdminCreateASecretResponse>;
    /**
     * Modify a
     * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets)
     * associated with a Atlas App Services app.
     * @param secretId The unique `_id` value of a secret.
     * @param body The modified value of the Secret.
     * @param options The options parameters.
     */
    adminModifyASecret(secretId: string, body: PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema, options?: AdminModifyASecretOptionalParams): Promise<void>;
    /**
     * Delete a
     * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets)
     * associated with a Atlas App Services app.
     * @param secretId The unique `_id` value of a secret.
     * @param options The options parameters.
     */
    adminDeleteSecret(secretId: string, options?: AdminDeleteSecretOptionalParams): Promise<void>;
    /**
     * List [Functions](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param options The options parameters.
     */
    adminListFunctions(options?: AdminListFunctionsOptionalParams): Promise<AdminListFunctionsResponse>;
    /**
     * Create a new [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param body The function to create
     * @param options The options parameters.
     */
    adminCreateFunction(body: NewFunction, options?: AdminCreateFunctionOptionalParams): Promise<AdminCreateFunctionResponse>;
    /**
     * Retrieve a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param functionId The unique `_id` value of a function.
     * @param options The options parameters.
     */
    adminGetFunction(functionId: string, options?: AdminGetFunctionOptionalParams): Promise<AdminGetFunctionResponse>;
    /**
     * Delete a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param functionId The unique `_id` value of a function.
     * @param options The options parameters.
     */
    adminDeleteFunction(functionId: string, options?: AdminDeleteFunctionOptionalParams): Promise<void>;
    /**
     * Update a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
     * @param functionId The unique `_id` value of a function.
     * @param options The options parameters.
     */
    adminUpdateFunction(functionId: string, options?: AdminUpdateFunctionOptionalParams): Promise<AdminUpdateFunctionResponse>;
    /**
     * List [external
     * dependencies](https://www.mongodb.com/docs/realm/functions/dependencies/) uploaded
     * to the Atlas App Services app.
     * @param options The options parameters.
     */
    adminGetAllDependencies(options?: AdminGetAllDependenciesOptionalParams): Promise<AdminGetAllDependenciesResponse>;
    /**
     * Return the 100 most recent application deployments.
     * @param options The options parameters.
     */
    adminListDeployments(options?: AdminListDeploymentsOptionalParams): Promise<AdminListDeploymentsResponse>;
    /**
     * Return the current application deployment draft, if applicable.
     * @param options The options parameters.
     */
    adminListDeploymentDrafts(options?: AdminListDeploymentDraftsOptionalParams): Promise<AdminListDeploymentDraftsResponse>;
    /**
     * Create a new application deployment draft, if none exists.
     * @param options The options parameters.
     */
    adminCreateDeploymentDraft(options?: AdminCreateDeploymentDraftOptionalParams): Promise<AdminCreateDeploymentDraftResponse>;
    /**
     * Discard the specified application deployment draft.
     * @param draftId The unique `_id` value of a draft.
     * @param options The options parameters.
     */
    adminDiscardDraft(draftId: string, options?: AdminDiscardDraftOptionalParams): Promise<void>;
    /**
     * Deploy the specified application deployment draft.
     * @param draftId The unique `_id` value of a draft.
     * @param options The options parameters.
     */
    adminDeployDraft(draftId: string, options?: AdminDeployDraftOptionalParams): Promise<AdminDeployDraftResponse>;
    /**
     * Return a diff between the currently deployed application and the
     * specified draft.
     * @param draftId The unique `_id` value of a draft.
     * @param options The options parameters.
     */
    adminDeployDraftDiff(draftId: string, options?: AdminDeployDraftDiffOptionalParams): Promise<AdminDeployDraftDiffResponse>;
    /**
     * Returns the current hosting configuration. Hosting is active
     * if the response includes `status: "setup_ok"`.
     *
     * @param options The options parameters.
     */
    adminGetHostingConfig(options?: AdminGetHostingConfigOptionalParams): Promise<AdminGetHostingConfigResponse>;
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
    adminEnableDisableHosting(options?: AdminEnableDisableHostingOptionalParams): Promise<void>;
    /**
     * List all hosted assets
     * @param options The options parameters.
     */
    adminGetAllHostedAssets(options?: AdminGetAllHostedAssetsOptionalParams): Promise<AdminGetAllHostedAssetsResponse>;
    /**
     * Move or copy a hosted asset to a new resource path.
     * @param body The hosted asset file and its metadata. (Must use
     *             `Content-Type: multipart/mixed`)
     * @param options The options parameters.
     */
    adminMoveCopyHostedAsset(body: Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema, options?: AdminMoveCopyHostedAssetOptionalParams): Promise<void>;
    /**
     * Retrieve metadata for a specific hosted asset
     * @param path The resource path of a hosted asset.
     * @param options The options parameters.
     */
    adminGetHostedAsset(path: string, options?: AdminGetHostedAssetOptionalParams): Promise<AdminGetHostedAssetResponse>;
    /**
     * Upload or replace a hosted asset at a specific resource path.
     * @param path The resource path of a hosted asset.
     * @param body The hosted asset file and its metadata. (Must use
     *             `Content-Type: multipart/mixed`)
     * @param options The options parameters.
     */
    adminUploadHostedAsset(path: string, body: Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema, options?: AdminUploadHostedAssetOptionalParams): Promise<AdminUploadHostedAssetResponse>;
    /**
     * Update the metadata attributes of a hosted asset at a specific resource
     * path.
     * @param path The resource path of a hosted asset.
     * @param body The new metadata attributes for the hosted asset. These attributes
     *             replace all existing attributes for the file.
     * @param options The options parameters.
     */
    adminUpdateHostedAsset(path: string, body: Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema, options?: AdminUpdateHostedAssetOptionalParams): Promise<void>;
    /**
     * List the request, compute, sync, and data transfer usage in a given
     * period for [billing](https://www.mongodb.com/docs/realm/billing) purposes.
     * @param options The options parameters.
     */
    adminMeasurements(options?: AdminMeasurementsOptionalParams): Promise<AdminMeasurementsResponse>;
    /**
     * List the request, compute, sync, data transfer, and memory usage of a
     * specific app in a given period for
     * [billing](https://www.mongodb.com/docs/realm/billing) purposes.
     * @param options The options parameters.
     */
    adminAppMeasurements(options?: AdminAppMeasurementsOptionalParams): Promise<AdminAppMeasurementsResponse>;
    /**
     * List all defined [schemas](https://www.mongodb.com/docs/realm/schemas).
     * @param options The options parameters.
     */
    adminListSchemas(options?: AdminListSchemasOptionalParams): Promise<AdminListSchemasResponse>;
    /**
     * Define a new [schema](https://www.mongodb.com/docs/realm/schemas) for a linked collection.
     * @param body
     * @param options The options parameters.
     */
    adminCreateSchema(body: Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema, options?: AdminCreateSchemaOptionalParams): Promise<AdminCreateSchemaResponse>;
    /**
     * Get a specific [schema](https://www.mongodb.com/docs/realm/schemas) by its `_id` value.
     * @param schemaId The unique `_id` value of a schema.
     * @param options The options parameters.
     */
    adminGetSchema(schemaId: string, options?: AdminGetSchemaOptionalParams): Promise<AdminGetSchemaResponse>;
    /**
     * Replace an existing [schema](https://www.mongodb.com/docs/realm/schemas) with a new one.
     * @param schemaId The unique `_id` value of a schema.
     * @param body
     * @param options The options parameters.
     */
    adminUpdateSchema(schemaId: string, body: Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema, options?: AdminUpdateSchemaOptionalParams): Promise<void>;
    /**
     * Delete a specific [schema](https://www.mongodb.com/docs/realm/schemas) by its `_id` value.
     * @param schemaId The unique `_id` value of a schema.
     * @param options The options parameters.
     */
    adminDeleteSchema(schemaId: string, options?: AdminDeleteSchemaOptionalParams): Promise<void>;
    /**
     * Get all [endpoint](https://www.mongodb.com/docs/realm/endpoints/) configurations.
     * @param options The options parameters.
     */
    adminGetAllEndpoints(options?: AdminGetAllEndpointsOptionalParams): Promise<AdminGetAllEndpointsResponse>;
    /**
     * Create a new [endpoint](https://www.mongodb.com/docs/realm/endpoints/).
     * @param body A valid [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/) for the new
     *             endpoint.
     * @param options The options parameters.
     */
    adminCreateEndpoint(body: Endpoint, options?: AdminCreateEndpointOptionalParams): Promise<AdminCreateEndpointResponse>;
    /**
     * Get a specific [endpoint](https://www.mongodb.com/docs/realm/endpoints/)'s configuration.
     * @param endpointId The unique `_id` value of an endpoint
     * @param options The options parameters.
     */
    adminGetEndpoint(endpointId: string, options?: AdminGetEndpointOptionalParams): Promise<AdminGetEndpointResponse>;
    /**
     * Modify an existing [endpoint](https://www.mongodb.com/docs/realm/endpoints/) configuration.
     * @param endpointId The unique `_id` value of an endpoint
     * @param body A valid, updated [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/) for the
     *             endpoint.
     * @param options The options parameters.
     */
    adminModifyEndpoint(endpointId: string, body: Endpoint, options?: AdminModifyEndpointOptionalParams): Promise<AdminModifyEndpointResponse>;
    /**
     * Delete an endpoint
     * @param endpointId The unique `_id` value of an endpoint
     * @param options The options parameters.
     */
    adminDeleteEndpoint(endpointId: string, options?: AdminDeleteEndpointOptionalParams): Promise<AdminDeleteEndpointResponse>;
    /**
     * Get your app's [Data
     * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
     * @param options The options parameters.
     */
    adminGetDataApiConfig(options?: AdminGetDataApiConfigOptionalParams): Promise<AdminGetDataApiConfigResponse>;
    /**
     * Create your app's [Data
     * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
     * @param body A valid [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/#appconfig-data-api-endpoints)
     *             for the endpoint.
     * @param options The options parameters.
     */
    adminCreateDataApiConfig(body: DataApiConfig, options?: AdminCreateDataApiConfigOptionalParams): Promise<AdminCreateDataApiConfigResponse>;
    /**
     * Update your app's [Data
     * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
     * @param body A valid [configuration
     *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/#appconfig-data-api-endpoints)
     *             for the endpoint.
     * @param options The options parameters.
     */
    adminModifyDataApiConfig(body: DataApiConfig, options?: AdminModifyDataApiConfigOptionalParams): Promise<void>;
    /**
     * List all possible Data API versions.
     * @param options The options parameters.
     */
    adminGetDataApiVersions(options?: AdminGetDataApiVersionsOptionalParams): Promise<AdminGetDataApiVersionsResponse>;
    /**
     * Run a query or mutation as a system user that bypasses
     * authentication and data access rules. You can access metadata
     * about your API, including its schema, with an
     * [introspection](https://graphql.org/learn/introspection/) query.
     * @param options The options parameters.
     */
    adminRunGraphQLOperation(options?: AdminRunGraphQLOperationOptionalParams): Promise<AdminRunGraphQLOperationResponse>;
    /**
     * Get all [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configurations from your app's GraphQL API.
     * @param options The options parameters.
     */
    adminGetAllCustomResolvers(options?: AdminGetAllCustomResolversOptionalParams): Promise<AdminGetAllCustomResolversResponse>;
    /**
     * Create a new [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/).
     * @param body A valid [custom resolver
     *             configuration](https://www.mongodb.com/docs/realm/manage-apps/configure/config/graphql/#appconfig-custom-resolver)
     *             object.
     * @param options The options parameters.
     */
    adminCreateCustomResolver(body: CustomResolver, options?: AdminCreateCustomResolverOptionalParams): Promise<AdminCreateCustomResolverResponse>;
    /**
     * Get a specific [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configuration.
     * @param customResolverId The unique `_id` value of a custom resolver.
     * @param options The options parameters.
     */
    adminGetCustomResolver(customResolverId: string, options?: AdminGetCustomResolverOptionalParams): Promise<AdminGetCustomResolverResponse>;
    /**
     * Modify an existing [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configuration.
     * @param customResolverId The unique `_id` value of a custom resolver.
     * @param body A valid, updated [custom resolver
     *             configuration](https://www.mongodb.com/docs/realm/manage-apps/configure/config/graphql/#appconfig-custom-resolver)
     *             object.
     * @param options The options parameters.
     */
    adminModifyCustomResolver(customResolverId: string, body: CustomResolver, options?: AdminModifyCustomResolverOptionalParams): Promise<void>;
    /**
     * Delete an existing [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
     * configuration.
     * @param customResolverId The unique `_id` value of a custom resolver.
     * @param options The options parameters.
     */
    adminDeleteCustomResolver(customResolverId: string, options?: AdminDeleteCustomResolverOptionalParams): Promise<void>;
    /**
     * Get the current validation level and action for reads and writes.
     * @param options The options parameters.
     */
    adminGetGraphQLValidationSettings(options?: AdminGetGraphQLValidationSettingsOptionalParams): Promise<AdminGetGraphQLValidationSettingsResponse>;
    /**
     * Set the validation level and action for reads and writes.
     * @param body The updated validation levels and actions.
     * @param options The options parameters.
     */
    adminSetGraphQLValidationSettings(body: GraphQLValidationSettings, options?: AdminSetGraphQLValidationSettingsOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface AtlasAppServicesAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare interface AtlasCluster {
    name?: "mongodb-atlas";
    type?: "mongodb-atlas";
    config?: AtlasClusterConfig;
}

export declare interface AtlasClusterConfig {
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
export declare type AtlasClusterConfigReadPreference = string;

export declare interface AtlasFederatedInstance {
    name?: "mongodb-datalake";
    type?: "mongodb-datalake";
    config?: AtlasFederatedInstanceConfig;
}

export declare interface AtlasFederatedInstanceConfig {
    /**
     * The service name used to refer to the Federated database
     * instance within this Atlas app. The name may be at most
     * 64 characters long and must only contain ASCII letters,
     * numbers, underscores, and hyphens.
     */
    dataLakeName: string;
}

export declare interface BasicError {
    error?: string;
}

export declare interface BuildInfo {
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

export declare interface Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema {
    /** A message describing the error. */
    error?: string;
}

export declare interface Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties extends FieldLevelPermissions, Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1 {
}

export declare interface Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1 {
    /** An object that maps document field names to read and write permissions for the field and its children. */
    fields?: {
        [propertyName: string]: Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties;
    };
}

/** Optional parameters. */
export declare interface CreateLogForwarderOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createLogForwarder operation. */
export declare type CreateLogForwarderResponse = LogForwarder;

export declare interface CustomResolver {
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
export declare interface CustomResolverInputType {
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
export declare type CustomResolverInputTypeFormat = string;

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
export declare interface CustomResolverPayloadType {
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
export declare type CustomResolverPayloadTypeFormat = string;

export declare interface DataApiConfig {
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

export declare interface DataSource {
}

/** A data access rule that define defines fallback user roles and query filters for collection's that don't have more specific permissions defined. */
export declare interface DefaultRule {
    /** The default rule's unique ObjectId identifier. */
    id?: string;
    /** An ordered list of default user roles. */
    roles?: Role[];
    /** A list of default [query filters](https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/config/data_sources/#filters). */
    filters?: Filter[];
}

/** Optional parameters. */
export declare interface DeleteGwarderOptionalParams extends coreClient.OperationOptions {
}

export declare interface DependenciesSummary {
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

export declare interface Dependency {
    /** The name of the uploaded dependency. */
    name?: string;
    /** The version of the uploaded dependency. */
    version?: string;
}

export declare interface Deployment {
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

export declare interface DeploymentDraft {
    /** The unique ID of the draft. */
    id?: string;
    /** The unique `_id` value of the MongoDB Cloud user that created the draft. */
    userId?: string;
    app?: Application;
}

export declare interface Diff {
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
export declare interface DiffHostingFilesDiff {
    added?: string[];
    deleted?: string[];
    modified?: string[];
}

/** Optional parameters. */
export declare interface DisableLogForwarderOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface EnableLogForwarderOptionalParams extends coreClient.OperationOptions {
}

export declare interface Endpoint {
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

/**
 * Defines values for EndpointDataFormat. \
 * {@link KnownEndpointDataFormat} can be used interchangeably with EndpointDataFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **JSON** \
 * **EJSON**
 */
export declare type EndpointDataFormat = string;

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
export declare type EndpointHttpMethod = string;

/**
 * Defines values for EndpointValidationMethod. \
 * {@link KnownEndpointValidationMethod} can be used interchangeably with EndpointValidationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NO_VALIDATION** \
 * **SECRET_AS_QUERY_PARAM** \
 * **VERIFY_PAYLOAD**
 */
export declare type EndpointValidationMethod = string;

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
export declare type Enum10 = string;

/**
 * Defines values for Enum16. \
 * {@link KnownEnum16} can be used interchangeably with Enum16,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P31D** \
 * **PT1H**
 */
export declare type Enum16 = string;

/**
 * Defines values for Enum19. \
 * {@link KnownEnum19} can be used interchangeably with Enum19,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P31D** \
 * **PT1H**
 */
export declare type Enum19 = string;

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
export declare type Enum20 = string;

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
export declare type Enum21 = string;

/**
 * Defines values for Enum8. \
 * {@link KnownEnum8} can be used interchangeably with Enum8,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **0** \
 * **1**
 */
export declare type Enum8 = number;

export declare interface ErrorModel {
    /** A message that describes the error. */
    error?: string;
    /** The error type. */
    errorCode?: string;
}

/** A [rule expression](https://mongodb.com/docs/atlas/app-services/rules/expressions/). */
export declare interface Expression {
}

/** Read and write permissions for a field. */
export declare interface FieldLevelPermissions {
    /** A rule expression that evaluates to `true` if the role can read the field's value. */
    read: Expression;
    /** A rule expression that evaluates to `true` if the role can write the field's value. */
    write: Expression;
}

/** A filter that conditionally modifies incoming query operations before they run. */
export declare interface Filter {
    /** The filter's unique ObjectId identifier. */
    id?: string;
    /** The filter's name. */
    name?: string;
    /** A rule expression that evaluates to `true` if the filter applies to an incoming query. */
    applyWhen?: Expression;
    /** A MongoDB query object that is merged into an incoming query before the operation runs. */
    query?: Record<string, unknown>;
    /** A MongoDB projection object that is merged into an incoming query before the operation runs. */
    projection?: {
        [propertyName: string]: Enum8;
    };
}

export declare interface FullProvider {
    id?: string;
    name?: string;
    type?: ProviderType;
    disabled?: boolean;
    /** Any object */
    config?: Record<string, unknown>;
}

export declare interface FunctionModel {
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

export declare interface Get200ApplicationJsonItemsAllowedIpsItem {
    /** ObjectID */
    id?: string;
    address?: string;
    /** net.IP */
    ip?: string;
    /** net.IPNet */
    network?: string;
    comment?: string;
}

export declare interface Get200ApplicationJsonItemsItem {
}

export declare interface Get200ApplicationJsonPropertiesItemsDataPointsItem {
    /** The ISO 8601 date and time of the data point. */
    timestamp?: string;
    /** The value at the time in the `unit` of the measurement. */
    value?: number;
}

export declare interface Get200ApplicationJsonPropertiesItemsItem {
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

/** Optional parameters. */
export declare interface GetAdminAuthProvidersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAdminAuthProviders operation. */
export declare type GetAdminAuthProvidersResponse = ProviderSummary[];

/** Optional parameters. */
export declare interface GetAdminProfileOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAdminProfile operation. */
export declare type GetAdminProfileResponse = RealmProfile;

/** Optional parameters. */
export declare interface GetBuildInfoOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBuildInfo operation. */
export declare type GetBuildInfoResponse = BuildInfo;

/** Optional parameters. */
export declare interface GetLogForwarderOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getLogForwarder operation. */
export declare type GetLogForwarderResponse = LogForwarder;

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
export declare type GetResponses200ContentApplicationJsonSchemaMeasurementsItemName = string;

/**
 * Defines values for GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits. \
 * {@link KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits} can be used interchangeably with GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **<empty string>** \
 * **HOURS** \
 * **GIGABYTES**
 */
export declare type GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits = string;

/**
 * Defines values for GraphQLValidationAction. \
 * {@link KnownGraphQLValidationAction} can be used interchangeably with GraphQLValidationAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ERROR** \
 * **WARN**
 */
export declare type GraphQLValidationAction = string;

/**
 * Defines values for GraphQLValidationLevel. \
 * {@link KnownGraphQLValidationLevel} can be used interchangeably with GraphQLValidationLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **STRICT** \
 * **OFF**
 */
export declare type GraphQLValidationLevel = string;

export declare interface GraphQLValidationSettings {
    readValidationAction?: GraphQLValidationAction;
    readValidationLevel?: GraphQLValidationLevel;
    writeValidationAction?: GraphQLValidationAction;
    writeValidationLevel?: GraphQLValidationLevel;
}

export declare interface HostedAssetMetadata {
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

export declare interface HostingConfiguration {
    enabled?: boolean;
    status?: HostingConfigurationStatus;
    defaultDomain?: HostingConfigurationDefaultDomain;
}

export declare interface HostingConfigurationDefaultDomain {
    providerType?: string;
    config?: HostingConfigurationDefaultDomainConfig;
}

export declare interface HostingConfigurationDefaultDomainConfig {
    /** Default domain of hosted Atlas App Services app provided by App Services. */
    appDefaultDomain?: string;
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
export declare type HostingConfigurationStatus = string;

export declare interface IncomingWebhook {
    name: string;
    functionSource: string;
    respondResult: boolean;
    options?: IncomingWebhookOptions;
}

export declare interface IncomingWebhookOptions {
    secret?: string;
    secretAsQueryParam?: boolean;
}

/** Known values of {@link AppProviderRegionDeploymentModelsItem} that the service accepts. */
export declare enum KnownAppProviderRegionDeploymentModelsItem {
    /** Global */
    Global = "GLOBAL",
    /** Local */
    Local = "LOCAL"
}

/** Known values of {@link AtlasClusterConfigReadPreference} that the service accepts. */
export declare enum KnownAtlasClusterConfigReadPreference {
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

/** Known values of {@link CustomResolverInputTypeFormat} that the service accepts. */
export declare enum KnownCustomResolverInputTypeFormat {
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

/** Known values of {@link CustomResolverPayloadTypeFormat} that the service accepts. */
export declare enum KnownCustomResolverPayloadTypeFormat {
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

/** Known values of {@link EndpointDataFormat} that the service accepts. */
export declare enum KnownEndpointDataFormat {
    /** Json */
    Json = "JSON",
    /** Ejson */
    Ejson = "EJSON"
}

/** Known values of {@link EndpointHttpMethod} that the service accepts. */
export declare enum KnownEndpointHttpMethod {
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

/** Known values of {@link EndpointValidationMethod} that the service accepts. */
export declare enum KnownEndpointValidationMethod {
    /** NOValidation */
    NOValidation = "NO_VALIDATION",
    /** SecretASQueryParam */
    SecretASQueryParam = "SECRET_AS_QUERY_PARAM",
    /** VerifyPayload */
    VerifyPayload = "VERIFY_PAYLOAD"
}

/** Known values of {@link Enum10} that the service accepts. */
export declare enum KnownEnum10 {
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

/** Known values of {@link Enum16} that the service accepts. */
export declare enum KnownEnum16 {
    /** P31D */
    P31D = "P31D",
    /** PT1H */
    PT1H = "PT1H"
}

/** Known values of {@link Enum19} that the service accepts. */
export declare enum KnownEnum19 {
    /** P31D */
    P31D = "P31D",
    /** PT1H */
    PT1H = "PT1H"
}

/** Known values of {@link Enum20} that the service accepts. */
export declare enum KnownEnum20 {
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

/** Known values of {@link Enum21} that the service accepts. */
export declare enum KnownEnum21 {
    /** EmptyString */
    EmptyString = "<empty string>",
    /** Hours */
    Hours = "HOURS",
    /** Gigabytes */
    Gigabytes = "GIGABYTES",
    /** GigabyteSeconds */
    GigabyteSeconds = "GIGABYTE_SECONDS"
}

/** Known values of {@link Enum8} that the service accepts. */
export declare enum KnownEnum8 {
    /** Zero */
    Zero = 0,
    /** One */
    One = 1
}

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemName} that the service accepts. */
export declare enum KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemName {
    /** RequestCount */
    RequestCount = "request_count",
    /** ComputeTime */
    ComputeTime = "compute_time",
    /** DataOut */
    DataOut = "data_out",
    /** SyncTime */
    SyncTime = "sync_time"
}

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits} that the service accepts. */
export declare enum KnownGetResponses200ContentApplicationJsonSchemaMeasurementsItemUnits {
    /** EmptyString */
    EmptyString = "<empty string>",
    /** Hours */
    Hours = "HOURS",
    /** Gigabytes */
    Gigabytes = "GIGABYTES"
}

/** Known values of {@link GraphQLValidationAction} that the service accepts. */
export declare enum KnownGraphQLValidationAction {
    /** Error */
    Error = "ERROR",
    /** Warn */
    Warn = "WARN"
}

/** Known values of {@link GraphQLValidationLevel} that the service accepts. */
export declare enum KnownGraphQLValidationLevel {
    /** Strict */
    Strict = "STRICT",
    /** OFF */
    OFF = "OFF"
}

/** Known values of {@link HostingConfigurationStatus} that the service accepts. */
export declare enum KnownHostingConfigurationStatus {
    /** SetupOk */
    SetupOk = "setup_ok",
    /** ChangeInProgress */
    ChangeInProgress = "change_in_progress",
    /** ChangeFailed */
    ChangeFailed = "change_failed",
    /** ChangeFailedFatal */
    ChangeFailedFatal = "change_failed_fatal"
}

/** Known values of {@link LogForwardingActionType} that the service accepts. */
export declare enum KnownLogForwardingActionType {
    /** Collection */
    Collection = "collection",
    /** Function */
    Function = "function"
}

/** Known values of {@link LogForwardingPolicyType} that the service accepts. */
export declare enum KnownLogForwardingPolicyType {
    /** Single */
    Single = "single",
    /** Batch */
    Batch = "batch"
}

/** Known values of {@link LogStatus} that the service accepts. */
export declare enum KnownLogStatus {
    /** Error */
    Error = "error",
    /** Success */
    Success = "success"
}

/** Known values of {@link LogType} that the service accepts. */
export declare enum KnownLogType {
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

/** Known values of {@link MessageState} that the service accepts. */
export declare enum KnownMessageState {
    /** Sent */
    Sent = "sent",
    /** Draft */
    Draft = "draft"
}

/** Known values of {@link ProfileType} that the service accepts. */
export declare enum KnownProfileType {
    /** Normal */
    Normal = "normal",
    /** Server */
    Server = "server",
    /** System */
    System = "system",
    /** Unknown */
    Unknown = "unknown"
}

/** Known values of {@link ProviderType} that the service accepts. */
export declare enum KnownProviderType {
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

/** Known values of {@link ThirdPartyServiceType} that the service accepts. */
export declare enum KnownThirdPartyServiceType {
    /** Aws */
    Aws = "aws",
    /** Twilio */
    Twilio = "twilio",
    /** Github */
    Github = "github",
    /** Gcm */
    Gcm = "gcm"
}

/** Known values of {@link TriggerRequestConfigOperationType} that the service accepts. */
export declare enum KnownTriggerRequestConfigOperationType {
    /** Login */
    Login = "LOGIN",
    /** Create */
    Create = "CREATE",
    /** Delete */
    Delete = "DELETE"
}

/** Known values of {@link TriggerRequestConfigOperationTypesItem} that the service accepts. */
export declare enum KnownTriggerRequestConfigOperationTypesItem {
    /** Insert */
    Insert = "INSERT",
    /** Update */
    Update = "UPDATE",
    /** Replace */
    Replace = "REPLACE",
    /** Delete */
    Delete = "DELETE"
}

/** Known values of {@link TriggerRequestType} that the service accepts. */
export declare enum KnownTriggerRequestType {
    /** Database */
    Database = "DATABASE",
    /** Authentication */
    Authentication = "AUTHENTICATION",
    /** Scheduled */
    Scheduled = "SCHEDULED"
}

/** Optional parameters. */
export declare interface ListLogForwardersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listLogForwarders operation. */
export declare type ListLogForwardersResponse = LogForwarder[];

export declare interface LogForwarder {
    id?: string;
    name?: string;
    disabled?: boolean;
    logTypes?: LogType[];
    logStatuses?: LogStatus[];
    policy?: LogForwardingPolicy;
    action?: LogForwardingAction;
}

export declare interface LogForwardingAction {
    type?: LogForwardingActionType;
    name?: string;
    dataSource?: string;
    database?: string;
    collection?: string;
}

/**
 * Defines values for LogForwardingActionType. \
 * {@link KnownLogForwardingActionType} can be used interchangeably with LogForwardingActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **collection** \
 * **function**
 */
export declare type LogForwardingActionType = string;

export declare interface LogForwardingPolicy {
    type?: LogForwardingPolicyType;
}

/**
 * Defines values for LogForwardingPolicyType. \
 * {@link KnownLogForwardingPolicyType} can be used interchangeably with LogForwardingPolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **single** \
 * **batch**
 */
export declare type LogForwardingPolicyType = string;

/**
 * Defines values for LogStatus. \
 * {@link KnownLogStatus} can be used interchangeably with LogStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **error** \
 * **success**
 */
export declare type LogStatus = string;

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
export declare type LogType = string;

export declare interface Message {
    allowedIps?: string;
    appID?: string;
    label?: string;
    message?: string;
    topic?: string;
    created?: string;
    sent?: string;
    state?: MessageState;
}

/**
 * Defines values for MessageState. \
 * {@link KnownMessageState} can be used interchangeably with MessageState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **sent** \
 * **draft**
 */
export declare type MessageState = string;

export declare interface MetadataAttribute {
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

export declare interface NewApplication {
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

export declare interface NewFunction {
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

export declare interface NewMessage {
    label: string;
    message: string;
    topic: string;
    state: MessageState;
}

export declare interface NewProvider {
    name: string;
    type: ProviderType;
    disabled: boolean;
    /** Any object */
    config?: Record<string, unknown>;
}

export declare interface NewValue {
    name: string;
    private: boolean;
    /** Anything */
    value: any;
}

export declare interface Partition {
    key?: string;
    type?: string;
}

export declare interface Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema {
    /** Any object */
    error?: Record<string, unknown>;
    /** Anything */
    logs?: any;
    /** Any object */
    result?: Record<string, unknown>;
    stats?: Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats;
}

export declare interface Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema {
    id?: string;
    /** A valid [schema](https://www.mongodb.com/docs/realm/schemas) for the collection. */
    schema: Record<string, unknown>;
    /** Metadata the describes which linked collection the schema applies to. */
    metadata: SchemaMetadata;
}

export declare interface Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema {
}

export declare interface Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema {
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

export declare interface Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema {
    attributes?: MetadataAttribute[];
}

export declare interface Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema {
}

export declare interface Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema {
    /**
     * Set to `true` to enable App Services Hosting.
     * Set to `false` to disable App Services Hosting.
     *
     */
    enabled?: boolean;
}

export declare interface Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema {
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

export declare interface Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema {
}

export declare interface Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema {
    name: string;
}

export declare interface Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema {
    id?: string;
    /** Any object */
    schema?: Record<string, unknown>;
}

export declare interface Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema {
    errors?: Post200ApplicationJsonPropertiesItemsItem[];
    /** The total number of documents that were sampled. */
    totalProcessedCount?: number;
    /** The total number of documents that failed any validation. */
    totalErrorCount?: number;
}

export declare interface Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems {
    id?: string;
    name?: string;
}

export declare interface Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema {
}

export declare interface Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema {
    error?: ErrorModel;
}

export declare interface Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema {
    /**
     * This JSON expression must evaluate to `true` before the function may
     * run. If this field is blank, it will evaluate to `true`.
     */
    evalSource?: string;
    source: string;
}

export declare interface Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats {
    executionTime?: string;
}

export declare interface Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems {
    id?: string;
    /** Any object */
    schema?: Record<string, unknown>;
    /** Metadata the describes which linked collection the schema applies to. */
    metadata?: SchemaMetadata;
}

export declare interface Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema {
    /** The generated JSON schema */
    schema?: Record<string, unknown>;
}

export declare interface Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema {
    id?: string;
    name?: string;
}

export declare interface Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats {
    executionTime?: string;
}

/** An error encountered while running an operation. */
export declare interface Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems {
    /** A message that describes the error. */
    message: string;
    /** A list of one or more locations in the operation that caused the error. */
    locations: Post200ApplicationJsonPropertiesItemsLocationsItem[];
}

/** The result of the specified operation. */
export declare interface Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema {
    /** The result of a successful operation. If `null`, the operation had errors. */
    data: Record<string, unknown> | null;
    /** A list of errors encountered while running an operation. */
    errors?: Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems[];
}

export declare interface Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema {
    /**
     * An [asset metadata
     * document](https://www.mongodb.com/docs/realm/admin/api/v3#std-label-asset-metadata-document)
     * (encoded as JSON).
     */
    meta?: AssetMetadata;
    /** The asset file to upload (encoded as binary). */
    file?: coreRestPipeline.RequestBodyType;
}

export declare interface Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema {
    id?: string;
    /** Metadata the describes which linked collection the schema applies to. */
    metadata?: SchemaMetadata;
}

export declare interface Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema {
    id?: string;
    name?: string;
}

export declare interface Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema {
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

export declare interface Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema {
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

export declare interface Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema {
}

export declare interface Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema {
    id?: string;
    /** A valid [schema](https://www.mongodb.com/docs/realm/schemas) for the collection. */
    schema: Record<string, unknown>;
    /** Relationships to foreign collections. Each field name is a property in the schema. The corresponding value is a [relationship](https://www.mongodb.com/docs/realm/schemas/relationships/) definition for that field. */
    relationships?: {
        [propertyName: string]: Relationship;
    };
    /** Metadata the describes which linked collection the schema applies to. */
    metadata?: SchemaMetadata;
}

export declare interface Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the function. */
    id?: string;
    /** Name for the function specified in the `name` field of the request. */
    name?: string;
}

export declare interface Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema {
    /** ObjectID */
    id?: string;
    address?: string;
    /** net.IP */
    ip?: string;
    /** net.IPNet */
    network?: string;
    comment?: string;
}

export declare interface Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema {
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

export declare interface Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema {
    name: string;
    value: string;
}

export declare interface PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema {
    /**
     * If `true`, attempts to resume the trigger from the
     * first change event after it failed by using a resume
     * token. Otherwise, resumes the trigger without
     * processing missed events.
     */
    disableToken?: boolean;
}

export declare interface PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems {
    id?: string;
    name?: string;
    disabled?: boolean;
}

export declare interface PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema {
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

export declare interface PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems {
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

export declare interface PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema {
}

export declare interface PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems {
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

export declare interface PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema {
    /** A description of the error that App Services encountered. */
    error?: string;
}

export declare interface PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema {
    /** The service to use when calling this function. */
    service?: string;
    /** The name of the function you want to run. */
    name: string;
    /** Any arguments that your function needs. */
    arguments?: string[];
}

export declare interface PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema {
    /** Any object */
    error?: Record<string, unknown>;
    /** Anything */
    logs?: any;
    /** Any object */
    result?: Record<string, unknown>;
    stats?: Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats;
}

export declare interface PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema {
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

export declare interface PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema {
    id?: string;
    name: string;
    value: string;
}

export declare interface PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema {
    /** The name of the database that contains the collection. */
    databaseName: string;
    /** The name of the collection to sample and generate a schema for. */
    collectionName: string;
    /** The maximum number of documents to include in the sample. */
    limit: number;
}

export declare interface PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema {
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

export declare interface PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems {
    /** The ISO 8601 date and time of the data point. */
    timestamp?: string;
    /** The value at the time in the `unit` of the measurement. */
    value?: number;
}

export declare interface PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema extends DefaultRule {
}

export declare interface PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema {
    username: string;
    apiKey: string;
}

export declare interface PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema {
    token: string;
}

export declare interface PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems {
    id?: string;
    name?: string;
}

export declare interface PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems {
}

export declare interface PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema {
    /** ObjectID */
    id?: string;
    address?: string;
    /** net.IP */
    ip?: string;
    /** net.IPNet */
    network?: string;
    comment?: string;
}

export declare interface PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema {
    error?: string;
}

export declare interface PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema {
    email: string;
    password: string;
}

export declare interface PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems {
    currentIp?: string;
    allowedIps?: Get200ApplicationJsonItemsAllowedIpsItem[];
}

export declare interface PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema {
    accessToken?: string;
}

export declare interface Post200ApplicationJsonPropertiesItemsItem {
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

/** The operation line and column numbers that caused an error. */
export declare interface Post200ApplicationJsonPropertiesItemsLocationsItem {
    line: number;
    column: number;
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
export declare type ProfileType = string;

export declare interface ProviderSummary {
    id?: string;
    name?: string;
    type?: ProviderType;
    disabled?: boolean;
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
export declare type ProviderType = string;

export declare interface RealmProfile {
    userId?: string;
    domainId?: string;
    identities?: ProviderSummary[];
    data?: RealmProfileData;
    type?: ProfileType;
    roles?: RealmProfileRolesItem[];
}

export declare interface RealmProfileData {
    email?: string;
    name?: string;
}

export declare interface RealmProfileRolesItem {
    roleName?: string;
    groupId?: string;
}

/** A [relationship](https://www.mongodb.com/docs/realm/schemas/relationships/) definition. */
export declare interface Relationship {
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

/** A data access role that assigns read and write permissions to a user for each document */
export declare interface Role {
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

/** A data access rule that defines user roles and query filters for a collection in a linked data source. */
export declare interface Rule {
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

/** Metadata the describes which linked collection the schema applies to. */
export declare interface SchemaMetadata {
    /** The data source name. */
    dataSource?: string;
    /** The database name. */
    database?: string;
    /** The collection name. */
    collection?: string;
}

export declare interface SyncDataResponse {
    /** The Service ID for the currently synced cluster, if there is one. */
    serviceId?: string;
    /**
     * A list of valid partition keys based on the cluster's collection
     * schemas.
     */
    partitionFields?: Partition[];
}

/**
 * **THIRD-PARTY SERVICES ARE DEPRECATED**
 *
 * See [Third-Party Services](https://www.mongodb.com/docs/atlas/app-services/reference/services/) for more information.
 */
export declare interface ThirdPartyService {
    /** A unique ID for the third-party service. */
    id?: string;
    /** The third-party service name. */
    name?: string;
    /** The type of third party service. */
    type?: ThirdPartyServiceType;
    version?: number;
}

/** [Deprecated] A rule for a third-party service. */
export declare interface ThirdPartyServiceRule {
    name: string;
    /** Anything */
    actions?: any;
    /** Any object */
    when: Record<string, unknown>;
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
export declare type ThirdPartyServiceType = string;

export declare interface TriggerRequest {
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
export declare interface TriggerRequestConfig {
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

/**
 * Defines values for TriggerRequestConfigOperationType. \
 * {@link KnownTriggerRequestConfigOperationType} can be used interchangeably with TriggerRequestConfigOperationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LOGIN** \
 * **CREATE** \
 * **DELETE**
 */
export declare type TriggerRequestConfigOperationType = string;

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
export declare type TriggerRequestConfigOperationTypesItem = string;

/**
 * Defines values for TriggerRequestType. \
 * {@link KnownTriggerRequestType} can be used interchangeably with TriggerRequestType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DATABASE** \
 * **AUTHENTICATION** \
 * **SCHEDULED**
 */
export declare type TriggerRequestType = string;

export declare interface TriggerResponse {
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

/** Optional parameters. */
export declare interface UpdateLogForwarderOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateLogForwarder operation. */
export declare type UpdateLogForwarderResponse = LogForwarder;

export declare interface User {
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

export declare interface UserProvider {
    id?: string;
    providerType?: ProviderType;
    providerId?: string;
}

/** An EJSON schema validation error. */
export declare interface ValidationError {
}

export declare interface Value {
    id?: string;
    name?: string;
    private?: boolean;
    /** Anything */
    value?: any;
}

export declare interface ValueSummary {
    id?: string;
    name?: string;
    private?: boolean;
}

export { }
