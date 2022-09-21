import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { AtlasAppServicesAPIOptionalParams, GetAdminAuthProvidersOptionalParams, GetAdminAuthProvidersResponse, PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema, ProviderType, AdminLoginOptionalParams, AdminLoginResponse, GetAdminProfileOptionalParams, GetAdminProfileResponse, AdminCreateSessionOptionalParams, AdminCreateSessionResponse, AdminDeleteSessionOptionalParams, AdminListAppRegionsOptionalParams, AdminListAppRegionsResponse, AdminListApplicationsOptionalParams, AdminListApplicationsResponse, NewApplication, AdminCreateApplicationOptionalParams, AdminCreateApplicationResponse, AdminGetApplicationOptionalParams, AdminGetApplicationResponse, AdminDeleteApplicationOptionalParams, AdminExportApplicationOptionalParams, TriggerRequest, AdminCreateTriggerOptionalParams, AdminCreateTriggerResponse, AdminListTriggersOptionalParams, AdminListTriggersResponse, AdminUpdateTriggerOptionalParams, AdminUpdateTriggerResponse, AdminGetTriggerOptionalParams, AdminGetTriggerResponse, AdminDeleteTriggerOptionalParams, AdminDeleteTriggerResponse, AdminResumeTriggerOptionalParams, AdminResumeTriggerResponse, AdminListValuesOptionalParams, AdminListValuesResponse, NewValue, AdminCreateValueOptionalParams, AdminCreateValueResponse, AdminGetValueOptionalParams, AdminGetValueResponse, AdminDeleteValueOptionalParams, AdminUpdateValueOptionalParams, AdminUpdateValueResponse, AdminListServicesOptionalParams, AdminListServicesResponse, AdminCreateServiceOptionalParams, AdminCreateServiceResponse, AdminGetServiceOptionalParams, AdminGetServiceResponse, AdminDeleteServiceOptionalParams, AdminUpdateServiceOptionalParams, PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema, AdminValidateDocumentsOptionalParams, AdminValidateDocumentsResponse, AdminRunCommandOptionalParams, GetBuildInfoOptionalParams, GetBuildInfoResponse, AdminGetServiceConfigOptionalParams, AdminUpdateServiceConfigOptionalParams, AdminListRulesOptionalParams, AdminListRulesResponse, Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema, AdminCreateRuleOptionalParams, AdminCreateRuleResponse, AdminGetRuleOptionalParams, AdminGetRuleResponse, AdminDeleteRuleOptionalParams, Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema, AdminUpdateRuleOptionalParams, AdminGetDefaultRuleOptionalParams, AdminGetDefaultRuleResponse, DefaultRule, AdminCreateDefaultRuleOptionalParams, AdminCreateDefaultRuleResponse, PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema, AdminUpdateDefaultRuleOptionalParams, AdminUpdateDefaultRuleResponse, AdminDeleteDefaultRuleOptionalParams, AdminDeleteDefaultRuleResponse, PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema, AdminGenerateSchemaOptionalParams, AdminGenerateSchemaResponse, AdminListWebhooksOptionalParams, AdminListWebhooksResponse, IncomingWebhook, AdminCreateWebhookOptionalParams, AdminGetWebhookOptionalParams, AdminDeleteWebhookOptionalParams, AdminUpdateWebhookOptionalParams, AdminGetSyncOptionalParams, AdminGetSyncResponse, AdminListNotificationsOptionalParams, AdminListNotificationsResponse, NewMessage, AdminCreateNotificationOptionalParams, AdminGetMessageOptionalParams, AdminGetMessageResponse, AdminDeleteMessageOptionalParams, AdminUpdateMessageOptionalParams, AdminUpdateMessageResponse, AdminSetMessageTypeOptionalParams, AdminSendMessageOptionalParams, AdminListUsersOptionalParams, AdminListUsersResponse, PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema, AdminCreateUserOptionalParams, AdminCreateUserResponse, PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema, AdminVerifyUserAccessTokenOptionalParams, AdminVerifyUserAccessTokenResponse, AdminGetUserOptionalParams, AdminGetUserResponse, AdminDeleteUserOptionalParams, AdminListDevicesOptionalParams, AdminListDevicesResponse, AdminUserLogoutOptionalParams, AdminEnableUserOptionalParams, AdminDisableUserOptionalParams, AdminDeletePendingUserOptionalParams, AdminSendConfirmationEmailOptionalParams, AdminConfirmPendingUserOptionalParams, AdminRerunPendingUserConfirmationOptionalParams, PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema, AdminExecuteFunctionOptionalParams, AdminExecuteFunctionResponse, Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema, AdminExecuteFunctionSourceOptionalParams, AdminExecuteFunctionSourceResponse, AdminListAuthProvidersOptionalParams, AdminListAuthProvidersResponse, NewProvider, AdminCreateAuthProviderOptionalParams, AdminCreateAuthProviderResponse, AdminGetAuthProviderOptionalParams, AdminGetAuthProviderResponse, AdminDeleteAuthProviderOptionalParams, FullProvider, AdminUpdateAuthProviderOptionalParams, AdminDisableAuthProviderOptionalParams, AdminEnableAuthProviderOptionalParams, AdminListAllowedRequestOriginsOptionalParams, AdminListAllowedRequestOriginsResponse, AdminSetAllowedRequestOriginsOptionalParams, AllowedIPAccessListGetOptionalParams, AllowedIPAccessListGetResponse, AllowedIPAccessListCreateOptionalParams, AllowedIPAccessListCreateResponse, AllowedIPAccessListUpdateOptionalParams, AllowedIPAccessListUpdateResponse, AllowedIPAccessListDeleteOptionalParams, AdminGetLogsOptionalParams, AdminGetLogsResponse, ListLogForwardersOptionalParams, ListLogForwardersResponse, LogForwarder, CreateLogForwarderOptionalParams, CreateLogForwarderResponse, GetLogForwarderOptionalParams, GetLogForwarderResponse, UpdateLogForwarderOptionalParams, UpdateLogForwarderResponse, DeleteGwarderOptionalParams, EnableLogForwarderOptionalParams, DisableLogForwarderOptionalParams, AdminListApiKeysOptionalParams, AdminListApiKeysResponse, Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema, AdminCreateApiKeyOptionalParams, AdminCreateApiKeyResponse, AdminGetApiKeyOptionalParams, AdminGetApiKeyResponse, AdminDeleteApiKeyOptionalParams, AdminEnableApiKeyOptionalParams, AdminDisableApiKeyOptionalParams, AdminGetAllSecretsOptionalParams, AdminGetAllSecretsResponse, Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema, AdminCreateASecretOptionalParams, AdminCreateASecretResponse, PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema, AdminModifyASecretOptionalParams, AdminDeleteSecretOptionalParams, AdminListFunctionsOptionalParams, AdminListFunctionsResponse, NewFunction, AdminCreateFunctionOptionalParams, AdminCreateFunctionResponse, AdminGetFunctionOptionalParams, AdminGetFunctionResponse, AdminDeleteFunctionOptionalParams, AdminUpdateFunctionOptionalParams, AdminUpdateFunctionResponse, AdminGetAllDependenciesOptionalParams, AdminGetAllDependenciesResponse, AdminListDeploymentsOptionalParams, AdminListDeploymentsResponse, AdminListDeploymentDraftsOptionalParams, AdminListDeploymentDraftsResponse, AdminCreateDeploymentDraftOptionalParams, AdminCreateDeploymentDraftResponse, AdminDiscardDraftOptionalParams, AdminDeployDraftOptionalParams, AdminDeployDraftResponse, AdminDeployDraftDiffOptionalParams, AdminDeployDraftDiffResponse, AdminGetHostingConfigOptionalParams, AdminGetHostingConfigResponse, AdminEnableDisableHostingOptionalParams, AdminGetAllHostedAssetsOptionalParams, AdminGetAllHostedAssetsResponse, Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema, AdminMoveCopyHostedAssetOptionalParams, AdminGetHostedAssetOptionalParams, AdminGetHostedAssetResponse, Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema, AdminUploadHostedAssetOptionalParams, AdminUploadHostedAssetResponse, Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema, AdminUpdateHostedAssetOptionalParams, AdminMeasurementsOptionalParams, AdminMeasurementsResponse, AdminAppMeasurementsOptionalParams, AdminAppMeasurementsResponse, AdminListSchemasOptionalParams, AdminListSchemasResponse, Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema, AdminCreateSchemaOptionalParams, AdminCreateSchemaResponse, AdminGetSchemaOptionalParams, AdminGetSchemaResponse, Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema, AdminUpdateSchemaOptionalParams, AdminDeleteSchemaOptionalParams, AdminGetAllEndpointsOptionalParams, AdminGetAllEndpointsResponse, Endpoint, AdminCreateEndpointOptionalParams, AdminCreateEndpointResponse, AdminGetEndpointOptionalParams, AdminGetEndpointResponse, AdminModifyEndpointOptionalParams, AdminModifyEndpointResponse, AdminDeleteEndpointOptionalParams, AdminDeleteEndpointResponse, AdminGetDataApiConfigOptionalParams, AdminGetDataApiConfigResponse, DataApiConfig, AdminCreateDataApiConfigOptionalParams, AdminCreateDataApiConfigResponse, AdminModifyDataApiConfigOptionalParams, AdminGetDataApiVersionsOptionalParams, AdminGetDataApiVersionsResponse, AdminRunGraphQLOperationOptionalParams, AdminRunGraphQLOperationResponse, AdminGetAllCustomResolversOptionalParams, AdminGetAllCustomResolversResponse, CustomResolver, AdminCreateCustomResolverOptionalParams, AdminCreateCustomResolverResponse, AdminGetCustomResolverOptionalParams, AdminGetCustomResolverResponse, AdminModifyCustomResolverOptionalParams, AdminDeleteCustomResolverOptionalParams, AdminGetGraphQLValidationSettingsOptionalParams, AdminGetGraphQLValidationSettingsResponse, GraphQLValidationSettings, AdminSetGraphQLValidationSettingsOptionalParams } from "./models";
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
//# sourceMappingURL=atlasAppServicesAPI.d.ts.map