import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  AtlasAppServicesAPIOptionalParams,
  GetAdminAuthProvidersOptionalParams,
  GetAdminAuthProvidersResponse,
  PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema,
  ProviderType,
  AdminLoginOptionalParams,
  AdminLoginResponse,
  GetAdminProfileOptionalParams,
  GetAdminProfileResponse,
  AdminCreateSessionOptionalParams,
  AdminCreateSessionResponse,
  AdminDeleteSessionOptionalParams,
  AdminListAppRegionsOptionalParams,
  AdminListAppRegionsResponse,
  AdminListApplicationsOptionalParams,
  AdminListApplicationsResponse,
  NewApplication,
  AdminCreateApplicationOptionalParams,
  AdminCreateApplicationResponse,
  AdminGetApplicationOptionalParams,
  AdminGetApplicationResponse,
  AdminDeleteApplicationOptionalParams,
  AdminExportApplicationOptionalParams,
  TriggerRequest,
  AdminCreateTriggerOptionalParams,
  AdminCreateTriggerResponse,
  AdminListTriggersOptionalParams,
  AdminListTriggersResponse,
  AdminUpdateTriggerOptionalParams,
  AdminUpdateTriggerResponse,
  AdminGetTriggerOptionalParams,
  AdminGetTriggerResponse,
  AdminDeleteTriggerOptionalParams,
  AdminDeleteTriggerResponse,
  AdminResumeTriggerOptionalParams,
  AdminResumeTriggerResponse,
  AdminListValuesOptionalParams,
  AdminListValuesResponse,
  NewValue,
  AdminCreateValueOptionalParams,
  AdminCreateValueResponse,
  AdminGetValueOptionalParams,
  AdminGetValueResponse,
  AdminDeleteValueOptionalParams,
  AdminUpdateValueOptionalParams,
  AdminUpdateValueResponse,
  AdminListServicesOptionalParams,
  AdminListServicesResponse,
  AdminCreateServiceOptionalParams,
  AdminCreateServiceResponse,
  AdminGetServiceOptionalParams,
  AdminGetServiceResponse,
  AdminDeleteServiceOptionalParams,
  AdminUpdateServiceOptionalParams,
  PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema,
  AdminValidateDocumentsOptionalParams,
  AdminValidateDocumentsResponse,
  AdminRunCommandOptionalParams,
  GetBuildInfoOptionalParams,
  GetBuildInfoResponse,
  AdminGetServiceConfigOptionalParams,
  AdminUpdateServiceConfigOptionalParams,
  AdminListRulesOptionalParams,
  AdminListRulesResponse,
  Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema,
  AdminCreateRuleOptionalParams,
  AdminCreateRuleResponse,
  AdminGetRuleOptionalParams,
  AdminGetRuleResponse,
  AdminDeleteRuleOptionalParams,
  Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema,
  AdminUpdateRuleOptionalParams,
  AdminGetDefaultRuleOptionalParams,
  AdminGetDefaultRuleResponse,
  DefaultRule,
  AdminCreateDefaultRuleOptionalParams,
  AdminCreateDefaultRuleResponse,
  PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema,
  AdminUpdateDefaultRuleOptionalParams,
  AdminUpdateDefaultRuleResponse,
  AdminDeleteDefaultRuleOptionalParams,
  AdminDeleteDefaultRuleResponse,
  PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema,
  AdminGenerateSchemaOptionalParams,
  AdminGenerateSchemaResponse,
  AdminListWebhooksOptionalParams,
  AdminListWebhooksResponse,
  IncomingWebhook,
  AdminCreateWebhookOptionalParams,
  AdminGetWebhookOptionalParams,
  AdminDeleteWebhookOptionalParams,
  AdminUpdateWebhookOptionalParams,
  AdminGetSyncOptionalParams,
  AdminGetSyncResponse,
  AdminListNotificationsOptionalParams,
  AdminListNotificationsResponse,
  NewMessage,
  AdminCreateNotificationOptionalParams,
  AdminGetMessageOptionalParams,
  AdminGetMessageResponse,
  AdminDeleteMessageOptionalParams,
  AdminUpdateMessageOptionalParams,
  AdminUpdateMessageResponse,
  AdminSetMessageTypeOptionalParams,
  AdminSendMessageOptionalParams,
  AdminListUsersOptionalParams,
  AdminListUsersResponse,
  PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema,
  AdminCreateUserOptionalParams,
  AdminCreateUserResponse,
  PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema,
  AdminVerifyUserAccessTokenOptionalParams,
  AdminVerifyUserAccessTokenResponse,
  AdminGetUserOptionalParams,
  AdminGetUserResponse,
  AdminDeleteUserOptionalParams,
  AdminListDevicesOptionalParams,
  AdminListDevicesResponse,
  AdminUserLogoutOptionalParams,
  AdminEnableUserOptionalParams,
  AdminDisableUserOptionalParams,
  AdminDeletePendingUserOptionalParams,
  AdminSendConfirmationEmailOptionalParams,
  AdminConfirmPendingUserOptionalParams,
  AdminRerunPendingUserConfirmationOptionalParams,
  PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema,
  AdminExecuteFunctionOptionalParams,
  AdminExecuteFunctionResponse,
  Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema,
  AdminExecuteFunctionSourceOptionalParams,
  AdminExecuteFunctionSourceResponse,
  AdminListAuthProvidersOptionalParams,
  AdminListAuthProvidersResponse,
  NewProvider,
  AdminCreateAuthProviderOptionalParams,
  AdminCreateAuthProviderResponse,
  AdminGetAuthProviderOptionalParams,
  AdminGetAuthProviderResponse,
  AdminDeleteAuthProviderOptionalParams,
  FullProvider,
  AdminUpdateAuthProviderOptionalParams,
  AdminDisableAuthProviderOptionalParams,
  AdminEnableAuthProviderOptionalParams,
  AdminListAllowedRequestOriginsOptionalParams,
  AdminListAllowedRequestOriginsResponse,
  AdminSetAllowedRequestOriginsOptionalParams,
  AllowedIPAccessListGetOptionalParams,
  AllowedIPAccessListGetResponse,
  AllowedIPAccessListCreateOptionalParams,
  AllowedIPAccessListCreateResponse,
  AllowedIPAccessListUpdateOptionalParams,
  AllowedIPAccessListUpdateResponse,
  AllowedIPAccessListDeleteOptionalParams,
  AdminGetLogsOptionalParams,
  AdminGetLogsResponse,
  ListLogForwardersOptionalParams,
  ListLogForwardersResponse,
  LogForwarder,
  CreateLogForwarderOptionalParams,
  CreateLogForwarderResponse,
  GetLogForwarderOptionalParams,
  GetLogForwarderResponse,
  UpdateLogForwarderOptionalParams,
  UpdateLogForwarderResponse,
  DeleteGwarderOptionalParams,
  EnableLogForwarderOptionalParams,
  DisableLogForwarderOptionalParams,
  AdminListApiKeysOptionalParams,
  AdminListApiKeysResponse,
  Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema,
  AdminCreateApiKeyOptionalParams,
  AdminCreateApiKeyResponse,
  AdminGetApiKeyOptionalParams,
  AdminGetApiKeyResponse,
  AdminDeleteApiKeyOptionalParams,
  AdminEnableApiKeyOptionalParams,
  AdminDisableApiKeyOptionalParams,
  AdminGetAllSecretsOptionalParams,
  AdminGetAllSecretsResponse,
  Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema,
  AdminCreateASecretOptionalParams,
  AdminCreateASecretResponse,
  PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema,
  AdminModifyASecretOptionalParams,
  AdminDeleteSecretOptionalParams,
  AdminListFunctionsOptionalParams,
  AdminListFunctionsResponse,
  NewFunction,
  AdminCreateFunctionOptionalParams,
  AdminCreateFunctionResponse,
  AdminGetFunctionOptionalParams,
  AdminGetFunctionResponse,
  AdminDeleteFunctionOptionalParams,
  AdminUpdateFunctionOptionalParams,
  AdminUpdateFunctionResponse,
  AdminGetAllDependenciesOptionalParams,
  AdminGetAllDependenciesResponse,
  AdminListDeploymentsOptionalParams,
  AdminListDeploymentsResponse,
  AdminListDeploymentDraftsOptionalParams,
  AdminListDeploymentDraftsResponse,
  AdminCreateDeploymentDraftOptionalParams,
  AdminCreateDeploymentDraftResponse,
  AdminDiscardDraftOptionalParams,
  AdminDeployDraftOptionalParams,
  AdminDeployDraftResponse,
  AdminDeployDraftDiffOptionalParams,
  AdminDeployDraftDiffResponse,
  AdminGetHostingConfigOptionalParams,
  AdminGetHostingConfigResponse,
  AdminEnableDisableHostingOptionalParams,
  AdminGetAllHostedAssetsOptionalParams,
  AdminGetAllHostedAssetsResponse,
  Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema,
  AdminMoveCopyHostedAssetOptionalParams,
  AdminGetHostedAssetOptionalParams,
  AdminGetHostedAssetResponse,
  Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema,
  AdminUploadHostedAssetOptionalParams,
  AdminUploadHostedAssetResponse,
  Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema,
  AdminUpdateHostedAssetOptionalParams,
  AdminMeasurementsOptionalParams,
  AdminMeasurementsResponse,
  AdminAppMeasurementsOptionalParams,
  AdminAppMeasurementsResponse,
  AdminListSchemasOptionalParams,
  AdminListSchemasResponse,
  Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema,
  AdminCreateSchemaOptionalParams,
  AdminCreateSchemaResponse,
  AdminGetSchemaOptionalParams,
  AdminGetSchemaResponse,
  Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema,
  AdminUpdateSchemaOptionalParams,
  AdminDeleteSchemaOptionalParams,
  AdminGetAllEndpointsOptionalParams,
  AdminGetAllEndpointsResponse,
  Endpoint,
  AdminCreateEndpointOptionalParams,
  AdminCreateEndpointResponse,
  AdminGetEndpointOptionalParams,
  AdminGetEndpointResponse,
  AdminModifyEndpointOptionalParams,
  AdminModifyEndpointResponse,
  AdminDeleteEndpointOptionalParams,
  AdminDeleteEndpointResponse,
  AdminGetDataApiConfigOptionalParams,
  AdminGetDataApiConfigResponse,
  DataApiConfig,
  AdminCreateDataApiConfigOptionalParams,
  AdminCreateDataApiConfigResponse,
  AdminModifyDataApiConfigOptionalParams,
  AdminGetDataApiVersionsOptionalParams,
  AdminGetDataApiVersionsResponse,
  AdminRunGraphQLOperationOptionalParams,
  AdminRunGraphQLOperationResponse,
  AdminGetAllCustomResolversOptionalParams,
  AdminGetAllCustomResolversResponse,
  CustomResolver,
  AdminCreateCustomResolverOptionalParams,
  AdminCreateCustomResolverResponse,
  AdminGetCustomResolverOptionalParams,
  AdminGetCustomResolverResponse,
  AdminModifyCustomResolverOptionalParams,
  AdminDeleteCustomResolverOptionalParams,
  AdminGetGraphQLValidationSettingsOptionalParams,
  AdminGetGraphQLValidationSettingsResponse,
  GraphQLValidationSettings,
  AdminSetGraphQLValidationSettingsOptionalParams
} from "./models";

export class AtlasAppServicesAPI extends coreClient.ServiceClient {
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
  constructor(
    credentials: coreAuth.TokenCredential,
    groupId: string,
    appId: string,
    options?: AtlasAppServicesAPIOptionalParams
  ) {
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
    const defaults: AtlasAppServicesAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-atlas-app-services-admin-sdk-generated/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ??
        options.baseUri ??
        "https://realm.mongodb.com/api/admin/v3.0"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
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
  getAdminAuthProviders(
    options?: GetAdminAuthProvidersOptionalParams
  ): Promise<GetAdminAuthProvidersResponse> {
    return this.sendOperationRequest(
      { options },
      getAdminAuthProvidersOperationSpec
    );
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
  adminLogin(
    provider: ProviderType,
    body: PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema,
    options?: AdminLoginOptionalParams
  ): Promise<AdminLoginResponse> {
    return this.sendOperationRequest(
      { provider, body, options },
      adminLoginOperationSpec
    );
  }

  /**
   * Get information about the currently logged in user
   * @param options The options parameters.
   */
  getAdminProfile(
    options?: GetAdminProfileOptionalParams
  ): Promise<GetAdminProfileResponse> {
    return this.sendOperationRequest({ options }, getAdminProfileOperationSpec);
  }

  /**
   * Obtain a session access token
   * @param options The options parameters.
   */
  adminCreateSession(
    options?: AdminCreateSessionOptionalParams
  ): Promise<AdminCreateSessionResponse> {
    return this.sendOperationRequest(
      { options },
      adminCreateSessionOperationSpec
    );
  }

  /**
   * Delete a session access token
   * @param options The options parameters.
   */
  adminDeleteSession(
    options?: AdminDeleteSessionOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      adminDeleteSessionOperationSpec
    );
  }

  /**
   * Return a list of all supported cloud regions in which you can
   * deploy an Atlas App.
   * @param options The options parameters.
   */
  adminListAppRegions(
    options?: AdminListAppRegionsOptionalParams
  ): Promise<AdminListAppRegionsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListAppRegionsOperationSpec
    );
  }

  /**
   * List all App Services apps within an Atlas
   * [project/group](https://docs.atlas.mongodb.com/tutorial/manage-projects/).
   * @param options The options parameters.
   */
  adminListApplications(
    options?: AdminListApplicationsOptionalParams
  ): Promise<AdminListApplicationsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListApplicationsOperationSpec
    );
  }

  /**
   * Create a new Atlas App Services app
   * @param body The application to create.
   * @param options The options parameters.
   */
  adminCreateApplication(
    body: NewApplication,
    options?: AdminCreateApplicationOptionalParams
  ): Promise<AdminCreateApplicationResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateApplicationOperationSpec
    );
  }

  /**
   * Retrieve an application definition
   * @param options The options parameters.
   */
  adminGetApplication(
    options?: AdminGetApplicationOptionalParams
  ): Promise<AdminGetApplicationResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetApplicationOperationSpec
    );
  }

  /**
   * Delete an application
   * @param options The options parameters.
   */
  adminDeleteApplication(
    options?: AdminDeleteApplicationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      adminDeleteApplicationOperationSpec
    );
  }

  /**
   * [Export](https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/export-app#std-label-export-realm-app)
   * an application as a zip file.
   * @param options The options parameters.
   */
  adminExportApplication(
    options?: AdminExportApplicationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      adminExportApplicationOperationSpec
    );
  }

  /**
   * Create a trigger
   * @param body The trigger to create.
   * @param options The options parameters.
   */
  adminCreateTrigger(
    body: TriggerRequest,
    options?: AdminCreateTriggerOptionalParams
  ): Promise<AdminCreateTriggerResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateTriggerOperationSpec
    );
  }

  /**
   * List all triggers
   * @param options The options parameters.
   */
  adminListTriggers(
    options?: AdminListTriggersOptionalParams
  ): Promise<AdminListTriggersResponse> {
    return this.sendOperationRequest(
      { options },
      adminListTriggersOperationSpec
    );
  }

  /**
   * Update a trigger
   * @param triggerId The unique `_id` value of a trigger.
   * @param body The trigger to update.
   * @param options The options parameters.
   */
  adminUpdateTrigger(
    triggerId: string,
    body: TriggerRequest,
    options?: AdminUpdateTriggerOptionalParams
  ): Promise<AdminUpdateTriggerResponse> {
    return this.sendOperationRequest(
      { triggerId, body, options },
      adminUpdateTriggerOperationSpec
    );
  }

  /**
   * Retrieve the configuration for a specific trigger
   * @param triggerId The unique `_id` value of a trigger.
   * @param options The options parameters.
   */
  adminGetTrigger(
    triggerId: string,
    options?: AdminGetTriggerOptionalParams
  ): Promise<AdminGetTriggerResponse> {
    return this.sendOperationRequest(
      { triggerId, options },
      adminGetTriggerOperationSpec
    );
  }

  /**
   * Delete a trigger
   * @param triggerId The unique `_id` value of a trigger.
   * @param options The options parameters.
   */
  adminDeleteTrigger(
    triggerId: string,
    options?: AdminDeleteTriggerOptionalParams
  ): Promise<AdminDeleteTriggerResponse> {
    return this.sendOperationRequest(
      { triggerId, options },
      adminDeleteTriggerOperationSpec
    );
  }

  /**
   * Resume a suspended trigger
   * @param triggerId The unique `_id` value of a trigger.
   * @param options The options parameters.
   */
  adminResumeTrigger(
    triggerId: string,
    options?: AdminResumeTriggerOptionalParams
  ): Promise<AdminResumeTriggerResponse> {
    return this.sendOperationRequest(
      { triggerId, options },
      adminResumeTriggerOperationSpec
    );
  }

  /**
   * List all [values](https://www.mongodb.com/docs/realm/values-and-secrets)
   * defined in an application.
   * @param options The options parameters.
   */
  adminListValues(
    options?: AdminListValuesOptionalParams
  ): Promise<AdminListValuesResponse> {
    return this.sendOperationRequest({ options }, adminListValuesOperationSpec);
  }

  /**
   * Define a [Value](https://www.mongodb.com/docs/realm/values-and-secrets) in
   * an application.
   * @param body The value to create.
   * @param options The options parameters.
   */
  adminCreateValue(
    body: NewValue,
    options?: AdminCreateValueOptionalParams
  ): Promise<AdminCreateValueResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateValueOperationSpec
    );
  }

  /**
   * Retrieve a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
   * definition from an application.
   * @param valueId The unique `_id` value of a value.
   * @param options The options parameters.
   */
  adminGetValue(
    valueId: string,
    options?: AdminGetValueOptionalParams
  ): Promise<AdminGetValueResponse> {
    return this.sendOperationRequest(
      { valueId, options },
      adminGetValueOperationSpec
    );
  }

  /**
   * Delete a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
   * defined in an application.
   * @param valueId The unique `_id` value of a value.
   * @param options The options parameters.
   */
  adminDeleteValue(
    valueId: string,
    options?: AdminDeleteValueOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { valueId, options },
      adminDeleteValueOperationSpec
    );
  }

  /**
   * Update a [value](https://www.mongodb.com/docs/realm/values-and-secrets)
   * definition in an application.
   * @param valueId The unique `_id` value of a value.
   * @param options The options parameters.
   */
  adminUpdateValue(
    valueId: string,
    options?: AdminUpdateValueOptionalParams
  ): Promise<AdminUpdateValueResponse> {
    return this.sendOperationRequest(
      { valueId, options },
      adminUpdateValueOperationSpec
    );
  }

  /**
   * List all [data sources](https://www.mongodb.com/docs/atlas/app-services/mongodb/) and [third-party
   * services [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
   * @param options The options parameters.
   */
  adminListServices(
    options?: AdminListServicesOptionalParams
  ): Promise<AdminListServicesResponse> {
    return this.sendOperationRequest(
      { options },
      adminListServicesOperationSpec
    );
  }

  /**
   * Create a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/) or [third-party
   * service [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
   * @param options The options parameters.
   */
  adminCreateService(
    options?: AdminCreateServiceOptionalParams
  ): Promise<AdminCreateServiceResponse> {
    return this.sendOperationRequest(
      { options },
      adminCreateServiceOperationSpec
    );
  }

  /**
   * Get a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/)
   * or [third-party service
   * [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminGetService(
    serviceId: string,
    options?: AdminGetServiceOptionalParams
  ): Promise<AdminGetServiceResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminGetServiceOperationSpec
    );
  }

  /**
   * Delete a [data source](https://www.mongodb.com/docs/atlas/app-services/mongodb/)
   * or [third-party service
   * [Deprecated]](https://www.mongodb.com/docs/atlas/app-services/reference/services/).
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminDeleteService(
    serviceId: string,
    options?: AdminDeleteServiceOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminDeleteServiceOperationSpec
    );
  }

  /**
   * Update a [service](https://www.mongodb.com/docs/realm/services#std-label-services).
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminUpdateService(
    serviceId: string,
    options?: AdminUpdateServiceOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminUpdateServiceOperationSpec
    );
  }

  /**
   * Query a subset of documents in a collection and validate each match against a schema.
   * @param datasourceId The unique `_id` value of a MongoDB data source.
   * @param body
   * @param options The options parameters.
   */
  adminValidateDocuments(
    datasourceId: string,
    body: PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema,
    options?: AdminValidateDocumentsOptionalParams
  ): Promise<AdminValidateDocumentsResponse> {
    return this.sendOperationRequest(
      { datasourceId, body, options },
      adminValidateDocumentsOperationSpec
    );
  }

  /**
   * Run a command associated with a
   * [service](https://www.mongodb.com/docs/realm/services#std-label-services).
   * @param serviceId The unique `_id` value of a service.
   * @param commandName Command name
   * @param options The options parameters.
   */
  adminRunCommand(
    serviceId: string,
    commandName: string,
    options?: AdminRunCommandOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, commandName, options },
      adminRunCommandOperationSpec
    );
  }

  /**
   * Get information about the underlying Atlas mongod
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  getBuildInfo(
    serviceId: string,
    options?: GetBuildInfoOptionalParams
  ): Promise<GetBuildInfoResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      getBuildInfoOperationSpec
    );
  }

  /**
   * Retrieve a [service's](https://www.mongodb.com/docs/realm/services#std-label-services)
   * configuration.
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminGetServiceConfig(
    serviceId: string,
    options?: AdminGetServiceConfigOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminGetServiceConfigOperationSpec
    );
  }

  /**
   * Update a [service's](https://www.mongodb.com/docs/realm/services#std-label-services) configuration.
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminUpdateServiceConfig(
    serviceId: string,
    options?: AdminUpdateServiceConfigOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminUpdateServiceConfigOperationSpec
    );
  }

  /**
   * List all [data access rules](https://www.mongodb.com/docs/atlas/app-services/rules).
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminListRules(
    serviceId: string,
    options?: AdminListRulesOptionalParams
  ): Promise<AdminListRulesResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminListRulesOperationSpec
    );
  }

  /**
   * Create a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
   * @param serviceId The unique `_id` value of a service.
   * @param body The rule to create.
   * @param options The options parameters.
   */
  adminCreateRule(
    serviceId: string,
    body: Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema,
    options?: AdminCreateRuleOptionalParams
  ): Promise<AdminCreateRuleResponse> {
    return this.sendOperationRequest(
      { serviceId, body, options },
      adminCreateRuleOperationSpec
    );
  }

  /**
   * Get a specific [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
   * @param serviceId The unique `_id` value of a service.
   * @param ruleId The unique `_id` value of a rule.
   * @param options The options parameters.
   */
  adminGetRule(
    serviceId: string,
    ruleId: string,
    options?: AdminGetRuleOptionalParams
  ): Promise<AdminGetRuleResponse> {
    return this.sendOperationRequest(
      { serviceId, ruleId, options },
      adminGetRuleOperationSpec
    );
  }

  /**
   * Delete a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
   * @param serviceId The unique `_id` value of a service.
   * @param ruleId The unique `_id` value of a rule.
   * @param options The options parameters.
   */
  adminDeleteRule(
    serviceId: string,
    ruleId: string,
    options?: AdminDeleteRuleOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, ruleId, options },
      adminDeleteRuleOperationSpec
    );
  }

  /**
   * Update a [data access rule](https://www.mongodb.com/docs/atlas/app-services/rules).
   * @param serviceId The unique `_id` value of a service.
   * @param ruleId The unique `_id` value of a rule.
   * @param body The new state of the rule.
   * @param options The options parameters.
   */
  adminUpdateRule(
    serviceId: string,
    ruleId: string,
    body: Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema,
    options?: AdminUpdateRuleOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, ruleId, body, options },
      adminUpdateRuleOperationSpec
    );
  }

  /**
   * Get the current [default roles and
   * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules).
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminGetDefaultRule(
    serviceId: string,
    options?: AdminGetDefaultRuleOptionalParams
  ): Promise<AdminGetDefaultRuleResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminGetDefaultRuleOperationSpec
    );
  }

  /**
   * Create [default roles and
   * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) for a data source.
   * @param serviceId The unique `_id` value of a service.
   * @param body A default rule configuration object.
   * @param options The options parameters.
   */
  adminCreateDefaultRule(
    serviceId: string,
    body: DefaultRule,
    options?: AdminCreateDefaultRuleOptionalParams
  ): Promise<AdminCreateDefaultRuleResponse> {
    return this.sendOperationRequest(
      { serviceId, body, options },
      adminCreateDefaultRuleOperationSpec
    );
  }

  /**
   * Modify the [default roles and
   * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) of a data source.
   * @param serviceId The unique `_id` value of a service.
   * @param body The updated default rule configuration object.
   * @param options The options parameters.
   */
  adminUpdateDefaultRule(
    serviceId: string,
    body: PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema,
    options?: AdminUpdateDefaultRuleOptionalParams
  ): Promise<AdminUpdateDefaultRuleResponse> {
    return this.sendOperationRequest(
      { serviceId, body, options },
      adminUpdateDefaultRuleOperationSpec
    );
  }

  /**
   * Delete the [default roles and
   * filters](https://www.mongodb.com/docs/atlas/app-services/rules/#default-rules) of a data source.
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminDeleteDefaultRule(
    serviceId: string,
    options?: AdminDeleteDefaultRuleOptionalParams
  ): Promise<AdminDeleteDefaultRuleResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminDeleteDefaultRuleOperationSpec
    );
  }

  /**
   * Sample a subset of documents in a collection to generate a JSON schema.
   * @param serviceId The unique `_id` value of a service.
   * @param body
   * @param options The options parameters.
   */
  adminGenerateSchema(
    serviceId: string,
    body: PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema,
    options?: AdminGenerateSchemaOptionalParams
  ): Promise<AdminGenerateSchemaResponse> {
    return this.sendOperationRequest(
      { serviceId, body, options },
      adminGenerateSchemaOperationSpec
    );
  }

  /**
   * List [webhooks](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
   * @param serviceId The unique `_id` value of a service.
   * @param options The options parameters.
   */
  adminListWebhooks(
    serviceId: string,
    options?: AdminListWebhooksOptionalParams
  ): Promise<AdminListWebhooksResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminListWebhooksOperationSpec
    );
  }

  /**
   * Create a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
   * @param serviceId The unique `_id` value of a service.
   * @param body The webhook to create.
   * @param options The options parameters.
   */
  adminCreateWebhook(
    serviceId: string,
    body: IncomingWebhook,
    options?: AdminCreateWebhookOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, body, options },
      adminCreateWebhookOperationSpec
    );
  }

  /**
   * Retrieve a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
   * @param serviceId The unique `_id` value of a service.
   * @param incomingWebhookId The unique `_id` value of an incoming webhook
   * @param options The options parameters.
   */
  adminGetWebhook(
    serviceId: string,
    incomingWebhookId: string,
    options?: AdminGetWebhookOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, incomingWebhookId, options },
      adminGetWebhookOperationSpec
    );
  }

  /**
   * Delete a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
   * @param serviceId The unique `_id` value of a service.
   * @param incomingWebhookId The unique `_id` value of an incoming webhook
   * @param options The options parameters.
   */
  adminDeleteWebhook(
    serviceId: string,
    incomingWebhookId: string,
    options?: AdminDeleteWebhookOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, incomingWebhookId, options },
      adminDeleteWebhookOperationSpec
    );
  }

  /**
   * Update a [webhook](https://www.mongodb.com/docs/realm/services#std-label-service-webhooks).
   * @param serviceId The unique `_id` value of a service.
   * @param incomingWebhookId The unique `_id` value of an incoming webhook
   * @param body The updated state of the webhook.
   * @param options The options parameters.
   */
  adminUpdateWebhook(
    serviceId: string,
    incomingWebhookId: string,
    body: IncomingWebhook,
    options?: AdminUpdateWebhookOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { serviceId, incomingWebhookId, body, options },
      adminUpdateWebhookOperationSpec
    );
  }

  /**
   * Retrieve partition field data when using [Partition-Based
   * Sync](https://www.mongodb.com/docs/realm/sync/data-access-patterns/partitions/).
   * @param serviceId The Service ID for the linked cluster.
   * @param options The options parameters.
   */
  adminGetSync(
    serviceId: string,
    options?: AdminGetSyncOptionalParams
  ): Promise<AdminGetSyncResponse> {
    return this.sendOperationRequest(
      { serviceId, options },
      adminGetSyncOperationSpec
    );
  }

  /**
   * List [push
   * notifications](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
   * @param options The options parameters.
   */
  adminListNotifications(
    options?: AdminListNotificationsOptionalParams
  ): Promise<AdminListNotificationsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListNotificationsOperationSpec
    );
  }

  /**
   * Create a [push
   * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
   * @param body The notification to create.
   * @param options The options parameters.
   */
  adminCreateNotification(
    body: NewMessage,
    options?: AdminCreateNotificationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateNotificationOperationSpec
    );
  }

  /**
   * Retrieve a [push
   * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
   * message.
   * @param messageId Message ID
   * @param options The options parameters.
   */
  adminGetMessage(
    messageId: string,
    options?: AdminGetMessageOptionalParams
  ): Promise<AdminGetMessageResponse> {
    return this.sendOperationRequest(
      { messageId, options },
      adminGetMessageOperationSpec
    );
  }

  /**
   * Delete a [push
   * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
   * message.
   * @param messageId Message ID
   * @param options The options parameters.
   */
  adminDeleteMessage(
    messageId: string,
    options?: AdminDeleteMessageOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { messageId, options },
      adminDeleteMessageOperationSpec
    );
  }

  /**
   * Update a [push
   * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
   * message.
   * @param messageId Message ID
   * @param options The options parameters.
   */
  adminUpdateMessage(
    messageId: string,
    options?: AdminUpdateMessageOptionalParams
  ): Promise<AdminUpdateMessageResponse> {
    return this.sendOperationRequest(
      { messageId, options },
      adminUpdateMessageOperationSpec
    );
  }

  /**
   * Set a [push
   * notification's](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications)
   * type.
   * @param messageId Message ID
   * @param options The options parameters.
   */
  adminSetMessageType(
    messageId: string,
    options?: AdminSetMessageTypeOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { messageId, options },
      adminSetMessageTypeOperationSpec
    );
  }

  /**
   * Send a [push
   * notification](https://www.mongodb.com/docs/realm/push-notifications#std-label-push-notifications).
   * @param messageId Message ID
   * @param options The options parameters.
   */
  adminSendMessage(
    messageId: string,
    options?: AdminSendMessageOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { messageId, options },
      adminSendMessageOperationSpec
    );
  }

  /**
   * List [users](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param options The options parameters.
   */
  adminListUsers(
    options?: AdminListUsersOptionalParams
  ): Promise<AdminListUsersResponse> {
    return this.sendOperationRequest({ options }, adminListUsersOperationSpec);
  }

  /**
   * Create a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param body The user to create
   * @param options The options parameters.
   */
  adminCreateUser(
    body: PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema,
    options?: AdminCreateUserOptionalParams
  ): Promise<AdminCreateUserResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateUserOperationSpec
    );
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
  adminVerifyUserAccessToken(
    body: PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema,
    options?: AdminVerifyUserAccessTokenOptionalParams
  ): Promise<AdminVerifyUserAccessTokenResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminVerifyUserAccessTokenOperationSpec
    );
  }

  /**
   * Retrieve a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param uid UID
   * @param options The options parameters.
   */
  adminGetUser(
    uid: string,
    options?: AdminGetUserOptionalParams
  ): Promise<AdminGetUserResponse> {
    return this.sendOperationRequest(
      { uid, options },
      adminGetUserOperationSpec
    );
  }

  /**
   * Delete a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param uid UID
   * @param options The options parameters.
   */
  adminDeleteUser(
    uid: string,
    options?: AdminDeleteUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { uid, options },
      adminDeleteUserOperationSpec
    );
  }

  /**
   * List a user's devices.
   * @param uid UID
   * @param options The options parameters.
   */
  adminListDevices(
    uid: string,
    options?: AdminListDevicesOptionalParams
  ): Promise<AdminListDevicesResponse> {
    return this.sendOperationRequest(
      { uid, options },
      adminListDevicesOperationSpec
    );
  }

  /**
   * Revoke all of a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts)'s
   * sessions.
   * @param uid UID
   * @param options The options parameters.
   */
  adminUserLogout(
    uid: string,
    options?: AdminUserLogoutOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { uid, options },
      adminUserLogoutOperationSpec
    );
  }

  /**
   * Enable a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param uid UID
   * @param options The options parameters.
   */
  adminEnableUser(
    uid: string,
    options?: AdminEnableUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { uid, options },
      adminEnableUserOperationSpec
    );
  }

  /**
   * Disable a [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param uid UID
   * @param options The options parameters.
   */
  adminDisableUser(
    uid: string,
    options?: AdminDisableUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { uid, options },
      adminDisableUserOperationSpec
    );
  }

  /**
   * Delete a pending [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param email Email address
   * @param options The options parameters.
   */
  adminDeletePendingUser(
    email: string,
    options?: AdminDeletePendingUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { email, options },
      adminDeletePendingUserOperationSpec
    );
  }

  /**
   * Send a [confirmation
   * email](https://www.mongodb.com/docs/realm/authentication/email-password).
   * @param email Email address
   * @param options The options parameters.
   */
  adminSendConfirmationEmail(
    email: string,
    options?: AdminSendConfirmationEmailOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { email, options },
      adminSendConfirmationEmailOperationSpec
    );
  }

  /**
   * Confirm a pending [user](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param email Email address
   * @param options The options parameters.
   */
  adminConfirmPendingUser(
    email: string,
    options?: AdminConfirmPendingUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { email, options },
      adminConfirmPendingUserOperationSpec
    );
  }

  /**
   * Reruns a pending user's [confirmation
   * workflow](https://www.mongodb.com/docs/realm/authentication#std-label-user-accounts).
   * @param email Email address
   * @param options The options parameters.
   */
  adminRerunPendingUserConfirmation(
    email: string,
    options?: AdminRerunPendingUserConfirmationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { email, options },
      adminRerunPendingUserConfirmationOperationSpec
    );
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
  adminExecuteFunction(
    userId: string,
    runAsSystem: boolean,
    body: PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema,
    options?: AdminExecuteFunctionOptionalParams
  ): Promise<AdminExecuteFunctionResponse> {
    return this.sendOperationRequest(
      { userId, runAsSystem, body, options },
      adminExecuteFunctionOperationSpec
    );
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
  adminExecuteFunctionSource(
    userId: string,
    runAsSystem: boolean,
    body: Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema,
    options?: AdminExecuteFunctionSourceOptionalParams
  ): Promise<AdminExecuteFunctionSourceResponse> {
    return this.sendOperationRequest(
      { userId, runAsSystem, body, options },
      adminExecuteFunctionSourceOperationSpec
    );
  }

  /**
   * List [authentication
   * providers](https://www.mongodb.com/docs/realm/authentication/providers)
   * within a Atlas App Services app.
   * @param options The options parameters.
   */
  adminListAuthProviders(
    options?: AdminListAuthProvidersOptionalParams
  ): Promise<AdminListAuthProvidersResponse> {
    return this.sendOperationRequest(
      { options },
      adminListAuthProvidersOperationSpec
    );
  }

  /**
   * Create an [authentication
   * provider](https://www.mongodb.com/docs/realm/authentication/providers).
   * @param body
   * @param options The options parameters.
   */
  adminCreateAuthProvider(
    body: NewProvider,
    options?: AdminCreateAuthProviderOptionalParams
  ): Promise<AdminCreateAuthProviderResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateAuthProviderOperationSpec
    );
  }

  /**
   * Retrieve information about one of an application's [authentication
   * providers](https://www.mongodb.com/docs/realm/authentication/providers)
   * @param providerId The unique `_id` value of an authentication provider
   * @param options The options parameters.
   */
  adminGetAuthProvider(
    providerId: string,
    options?: AdminGetAuthProviderOptionalParams
  ): Promise<AdminGetAuthProviderResponse> {
    return this.sendOperationRequest(
      { providerId, options },
      adminGetAuthProviderOperationSpec
    );
  }

  /**
   * Delete an [authentication
   * provider](https://www.mongodb.com/docs/realm/authentication/providers).
   * @param providerId The unique `_id` value of an authentication provider
   * @param options The options parameters.
   */
  adminDeleteAuthProvider(
    providerId: string,
    options?: AdminDeleteAuthProviderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { providerId, options },
      adminDeleteAuthProviderOperationSpec
    );
  }

  /**
   * Update an [authentication
   * provider](https://www.mongodb.com/docs/realm/authentication/providers).
   * @param providerId The unique `_id` value of an authentication provider
   * @param body
   * @param options The options parameters.
   */
  adminUpdateAuthProvider(
    providerId: string,
    body: FullProvider,
    options?: AdminUpdateAuthProviderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { providerId, body, options },
      adminUpdateAuthProviderOperationSpec
    );
  }

  /**
   * Disable an [authentication
   * provider](https://www.mongodb.com/docs/realm/authentication/providers).
   * @param providerId The unique `_id` value of an authentication provider
   * @param options The options parameters.
   */
  adminDisableAuthProvider(
    providerId: string,
    options?: AdminDisableAuthProviderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { providerId, options },
      adminDisableAuthProviderOperationSpec
    );
  }

  /**
   * Enable an [authentication
   * provider](https://www.mongodb.com/docs/realm/authentication/providers).
   * @param providerId The unique `_id` value of an authentication provider
   * @param options The options parameters.
   */
  adminEnableAuthProvider(
    providerId: string,
    options?: AdminEnableAuthProviderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { providerId, options },
      adminEnableAuthProviderOperationSpec
    );
  }

  /**
   * List the allowed [HTTP
   * origins](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
   * from which App Services should allow requests.
   * @param options The options parameters.
   */
  adminListAllowedRequestOrigins(
    options?: AdminListAllowedRequestOriginsOptionalParams
  ): Promise<AdminListAllowedRequestOriginsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListAllowedRequestOriginsOperationSpec
    );
  }

  /**
   * Set the allowed [HTTP
   * origins](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
   * from which App Services should allow requests.
   * @param body A list of HTTP origins.
   * @param options The options parameters.
   */
  adminSetAllowedRequestOrigins(
    body: any,
    options?: AdminSetAllowedRequestOriginsOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      adminSetAllowedRequestOriginsOperationSpec
    );
  }

  /**
   * List the allowed entries in the Access List of your Atlas App Services app.
   * @param options The options parameters.
   */
  allowedIPAccessListGet(
    options?: AllowedIPAccessListGetOptionalParams
  ): Promise<AllowedIPAccessListGetResponse> {
    return this.sendOperationRequest(
      { options },
      allowedIPAccessListGetOperationSpec
    );
  }

  /**
   * Create an IP address or CIDR block in the Access List for your App Services
   * app.
   * @param options The options parameters.
   */
  allowedIPAccessListCreate(
    options?: AllowedIPAccessListCreateOptionalParams
  ): Promise<AllowedIPAccessListCreateResponse> {
    return this.sendOperationRequest(
      { options },
      allowedIPAccessListCreateOperationSpec
    );
  }

  /**
   * Modify an IP address or CIDR block in the Access List of your App Services
   * app
   * @param ipId The IP address entry denoted by `ip_id` with the information given in
   *             the request body
   * @param options The options parameters.
   */
  allowedIPAccessListUpdate(
    ipId: string,
    options?: AllowedIPAccessListUpdateOptionalParams
  ): Promise<AllowedIPAccessListUpdateResponse> {
    return this.sendOperationRequest(
      { ipId, options },
      allowedIPAccessListUpdateOperationSpec
    );
  }

  /**
   * Delete an IP address or CIDR block from the Access List of your App Services
   * app
   * @param ipId The IP address entry denoted by `ip_id` with the information given in
   *             the request body
   * @param options The options parameters.
   */
  allowedIPAccessListDelete(
    ipId: string,
    options?: AllowedIPAccessListDeleteOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { ipId, options },
      allowedIPAccessListDeleteOperationSpec
    );
  }

  /**
   * Retrieve App Services logs
   * @param options The options parameters.
   */
  adminGetLogs(
    options?: AdminGetLogsOptionalParams
  ): Promise<AdminGetLogsResponse> {
    return this.sendOperationRequest({ options }, adminGetLogsOperationSpec);
  }

  /**
   * List log forwarders.
   * @param options The options parameters.
   */
  listLogForwarders(
    options?: ListLogForwardersOptionalParams
  ): Promise<ListLogForwardersResponse> {
    return this.sendOperationRequest(
      { options },
      listLogForwardersOperationSpec
    );
  }

  /**
   * Create a log forwarder.
   * @param body A log forwarder configuration
   * @param options The options parameters.
   */
  createLogForwarder(
    body: LogForwarder,
    options?: CreateLogForwarderOptionalParams
  ): Promise<CreateLogForwarderResponse> {
    return this.sendOperationRequest(
      { body, options },
      createLogForwarderOperationSpec
    );
  }

  /**
   * Get a specific log forwarder.
   * @param forwarderId The _id ObjectID of a log forwarder.
   * @param options The options parameters.
   */
  getLogForwarder(
    forwarderId: string,
    options?: GetLogForwarderOptionalParams
  ): Promise<GetLogForwarderResponse> {
    return this.sendOperationRequest(
      { forwarderId, options },
      getLogForwarderOperationSpec
    );
  }

  /**
   * Update a log forwarder.
   * @param forwarderId The _id ObjectID of a log forwarder.
   * @param body A log forwarder configuration
   * @param options The options parameters.
   */
  updateLogForwarder(
    forwarderId: string,
    body: LogForwarder,
    options?: UpdateLogForwarderOptionalParams
  ): Promise<UpdateLogForwarderResponse> {
    return this.sendOperationRequest(
      { forwarderId, body, options },
      updateLogForwarderOperationSpec
    );
  }

  /**
   * Delete a log forwarder.
   * @param forwarderId The _id ObjectID of a log forwarder.
   * @param options The options parameters.
   */
  deleteGwarder(
    forwarderId: string,
    options?: DeleteGwarderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { forwarderId, options },
      deleteGwarderOperationSpec
    );
  }

  /**
   * Enable a log forwarder.
   * @param forwarderId The _id ObjectID of a log forwarder.
   * @param options The options parameters.
   */
  enableLogForwarder(
    forwarderId: string,
    options?: EnableLogForwarderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { forwarderId, options },
      enableLogForwarderOperationSpec
    );
  }

  /**
   * Disable a log forwarder.
   * @param forwarderId The _id ObjectID of a log forwarder.
   * @param options The options parameters.
   */
  disableLogForwarder(
    forwarderId: string,
    options?: DisableLogForwarderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { forwarderId, options },
      disableLogForwarderOperationSpec
    );
  }

  /**
   * List [API keys](https://www.mongodb.com/docs/realm/authentication/api-key)
   * associated with a Atlas App Services app.
   * @param options The options parameters.
   */
  adminListApiKeys(
    options?: AdminListApiKeysOptionalParams
  ): Promise<AdminListApiKeysResponse> {
    return this.sendOperationRequest(
      { options },
      adminListApiKeysOperationSpec
    );
  }

  /**
   * Create a new [API
   * key](https://www.mongodb.com/docs/realm/authentication/api-key).
   * @param body The API key to create.
   * @param options The options parameters.
   */
  adminCreateApiKey(
    body: Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema,
    options?: AdminCreateApiKeyOptionalParams
  ): Promise<AdminCreateApiKeyResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateApiKeyOperationSpec
    );
  }

  /**
   * Retrieve information about an [API
   * key](https://www.mongodb.com/docs/realm/authentication/api-key).
   * @param apiKeyId The unique `_id` value of an API key
   * @param options The options parameters.
   */
  adminGetApiKey(
    apiKeyId: string,
    options?: AdminGetApiKeyOptionalParams
  ): Promise<AdminGetApiKeyResponse> {
    return this.sendOperationRequest(
      { apiKeyId, options },
      adminGetApiKeyOperationSpec
    );
  }

  /**
   * Delete an [API
   * key](https://www.mongodb.com/docs/realm/authentication/api-key).
   * @param apiKeyId The unique `_id` value of an API key
   * @param options The options parameters.
   */
  adminDeleteApiKey(
    apiKeyId: string,
    options?: AdminDeleteApiKeyOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { apiKeyId, options },
      adminDeleteApiKeyOperationSpec
    );
  }

  /**
   * Enable an [API
   * key](https://www.mongodb.com/docs/realm/authentication/api-key).
   * @param apiKeyId The unique `_id` value of an API key
   * @param options The options parameters.
   */
  adminEnableApiKey(
    apiKeyId: string,
    options?: AdminEnableApiKeyOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { apiKeyId, options },
      adminEnableApiKeyOperationSpec
    );
  }

  /**
   * Disable an [API
   * key](https://www.mongodb.com/docs/realm/authentication/api-key).
   * @param apiKeyId The unique `_id` value of an API key
   * @param options The options parameters.
   */
  adminDisableApiKey(
    apiKeyId: string,
    options?: AdminDisableApiKeyOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { apiKeyId, options },
      adminDisableApiKeyOperationSpec
    );
  }

  /**
   * List
   * [secrets](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets#std-label-define-secret)
   * associated with a Atlas App Services app.
   * @param options The options parameters.
   */
  adminGetAllSecrets(
    options?: AdminGetAllSecretsOptionalParams
  ): Promise<AdminGetAllSecretsResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetAllSecretsOperationSpec
    );
  }

  /**
   * Create a new
   * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets).
   * @param body The Secret to create.
   * @param options The options parameters.
   */
  adminCreateASecret(
    body: Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema,
    options?: AdminCreateASecretOptionalParams
  ): Promise<AdminCreateASecretResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateASecretOperationSpec
    );
  }

  /**
   * Modify a
   * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets)
   * associated with a Atlas App Services app.
   * @param secretId The unique `_id` value of a secret.
   * @param body The modified value of the Secret.
   * @param options The options parameters.
   */
  adminModifyASecret(
    secretId: string,
    body: PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema,
    options?: AdminModifyASecretOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { secretId, body, options },
      adminModifyASecretOperationSpec
    );
  }

  /**
   * Delete a
   * [Secret](https://www.mongodb.com/docs/realm/values-and-secrets/define-and-manage-secrets)
   * associated with a Atlas App Services app.
   * @param secretId The unique `_id` value of a secret.
   * @param options The options parameters.
   */
  adminDeleteSecret(
    secretId: string,
    options?: AdminDeleteSecretOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { secretId, options },
      adminDeleteSecretOperationSpec
    );
  }

  /**
   * List [Functions](https://www.mongodb.com/docs/realm/functions#std-label-functions).
   * @param options The options parameters.
   */
  adminListFunctions(
    options?: AdminListFunctionsOptionalParams
  ): Promise<AdminListFunctionsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListFunctionsOperationSpec
    );
  }

  /**
   * Create a new [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
   * @param body The function to create
   * @param options The options parameters.
   */
  adminCreateFunction(
    body: NewFunction,
    options?: AdminCreateFunctionOptionalParams
  ): Promise<AdminCreateFunctionResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateFunctionOperationSpec
    );
  }

  /**
   * Retrieve a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
   * @param functionId The unique `_id` value of a function.
   * @param options The options parameters.
   */
  adminGetFunction(
    functionId: string,
    options?: AdminGetFunctionOptionalParams
  ): Promise<AdminGetFunctionResponse> {
    return this.sendOperationRequest(
      { functionId, options },
      adminGetFunctionOperationSpec
    );
  }

  /**
   * Delete a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
   * @param functionId The unique `_id` value of a function.
   * @param options The options parameters.
   */
  adminDeleteFunction(
    functionId: string,
    options?: AdminDeleteFunctionOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { functionId, options },
      adminDeleteFunctionOperationSpec
    );
  }

  /**
   * Update a [Function](https://www.mongodb.com/docs/realm/functions#std-label-functions).
   * @param functionId The unique `_id` value of a function.
   * @param options The options parameters.
   */
  adminUpdateFunction(
    functionId: string,
    options?: AdminUpdateFunctionOptionalParams
  ): Promise<AdminUpdateFunctionResponse> {
    return this.sendOperationRequest(
      { functionId, options },
      adminUpdateFunctionOperationSpec
    );
  }

  /**
   * List [external
   * dependencies](https://www.mongodb.com/docs/realm/functions/dependencies/) uploaded
   * to the Atlas App Services app.
   * @param options The options parameters.
   */
  adminGetAllDependencies(
    options?: AdminGetAllDependenciesOptionalParams
  ): Promise<AdminGetAllDependenciesResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetAllDependenciesOperationSpec
    );
  }

  /**
   * Return the 100 most recent application deployments.
   * @param options The options parameters.
   */
  adminListDeployments(
    options?: AdminListDeploymentsOptionalParams
  ): Promise<AdminListDeploymentsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListDeploymentsOperationSpec
    );
  }

  /**
   * Return the current application deployment draft, if applicable.
   * @param options The options parameters.
   */
  adminListDeploymentDrafts(
    options?: AdminListDeploymentDraftsOptionalParams
  ): Promise<AdminListDeploymentDraftsResponse> {
    return this.sendOperationRequest(
      { options },
      adminListDeploymentDraftsOperationSpec
    );
  }

  /**
   * Create a new application deployment draft, if none exists.
   * @param options The options parameters.
   */
  adminCreateDeploymentDraft(
    options?: AdminCreateDeploymentDraftOptionalParams
  ): Promise<AdminCreateDeploymentDraftResponse> {
    return this.sendOperationRequest(
      { options },
      adminCreateDeploymentDraftOperationSpec
    );
  }

  /**
   * Discard the specified application deployment draft.
   * @param draftId The unique `_id` value of a draft.
   * @param options The options parameters.
   */
  adminDiscardDraft(
    draftId: string,
    options?: AdminDiscardDraftOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { draftId, options },
      adminDiscardDraftOperationSpec
    );
  }

  /**
   * Deploy the specified application deployment draft.
   * @param draftId The unique `_id` value of a draft.
   * @param options The options parameters.
   */
  adminDeployDraft(
    draftId: string,
    options?: AdminDeployDraftOptionalParams
  ): Promise<AdminDeployDraftResponse> {
    return this.sendOperationRequest(
      { draftId, options },
      adminDeployDraftOperationSpec
    );
  }

  /**
   * Return a diff between the currently deployed application and the
   * specified draft.
   * @param draftId The unique `_id` value of a draft.
   * @param options The options parameters.
   */
  adminDeployDraftDiff(
    draftId: string,
    options?: AdminDeployDraftDiffOptionalParams
  ): Promise<AdminDeployDraftDiffResponse> {
    return this.sendOperationRequest(
      { draftId, options },
      adminDeployDraftDiffOperationSpec
    );
  }

  /**
   * Returns the current hosting configuration. Hosting is active
   * if the response includes `status: "setup_ok"`.
   *
   * @param options The options parameters.
   */
  adminGetHostingConfig(
    options?: AdminGetHostingConfigOptionalParams
  ): Promise<AdminGetHostingConfigResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetHostingConfigOperationSpec
    );
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
  adminEnableDisableHosting(
    options?: AdminEnableDisableHostingOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      adminEnableDisableHostingOperationSpec
    );
  }

  /**
   * List all hosted assets
   * @param options The options parameters.
   */
  adminGetAllHostedAssets(
    options?: AdminGetAllHostedAssetsOptionalParams
  ): Promise<AdminGetAllHostedAssetsResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetAllHostedAssetsOperationSpec
    );
  }

  /**
   * Move or copy a hosted asset to a new resource path.
   * @param body The hosted asset file and its metadata. (Must use
   *             `Content-Type: multipart/mixed`)
   * @param options The options parameters.
   */
  adminMoveCopyHostedAsset(
    body: Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema,
    options?: AdminMoveCopyHostedAssetOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      adminMoveCopyHostedAssetOperationSpec
    );
  }

  /**
   * Retrieve metadata for a specific hosted asset
   * @param path The resource path of a hosted asset.
   * @param options The options parameters.
   */
  adminGetHostedAsset(
    path: string,
    options?: AdminGetHostedAssetOptionalParams
  ): Promise<AdminGetHostedAssetResponse> {
    return this.sendOperationRequest(
      { path, options },
      adminGetHostedAssetOperationSpec
    );
  }

  /**
   * Upload or replace a hosted asset at a specific resource path.
   * @param path The resource path of a hosted asset.
   * @param body The hosted asset file and its metadata. (Must use
   *             `Content-Type: multipart/mixed`)
   * @param options The options parameters.
   */
  adminUploadHostedAsset(
    path: string,
    body: Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema,
    options?: AdminUploadHostedAssetOptionalParams
  ): Promise<AdminUploadHostedAssetResponse> {
    return this.sendOperationRequest(
      { path, body, options },
      adminUploadHostedAssetOperationSpec
    );
  }

  /**
   * Update the metadata attributes of a hosted asset at a specific resource
   * path.
   * @param path The resource path of a hosted asset.
   * @param body The new metadata attributes for the hosted asset. These attributes
   *             replace all existing attributes for the file.
   * @param options The options parameters.
   */
  adminUpdateHostedAsset(
    path: string,
    body: Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema,
    options?: AdminUpdateHostedAssetOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { path, body, options },
      adminUpdateHostedAssetOperationSpec
    );
  }

  /**
   * List the request, compute, sync, and data transfer usage in a given
   * period for [billing](https://www.mongodb.com/docs/realm/billing) purposes.
   * @param options The options parameters.
   */
  adminMeasurements(
    options?: AdminMeasurementsOptionalParams
  ): Promise<AdminMeasurementsResponse> {
    return this.sendOperationRequest(
      { options },
      adminMeasurementsOperationSpec
    );
  }

  /**
   * List the request, compute, sync, data transfer, and memory usage of a
   * specific app in a given period for
   * [billing](https://www.mongodb.com/docs/realm/billing) purposes.
   * @param options The options parameters.
   */
  adminAppMeasurements(
    options?: AdminAppMeasurementsOptionalParams
  ): Promise<AdminAppMeasurementsResponse> {
    return this.sendOperationRequest(
      { options },
      adminAppMeasurementsOperationSpec
    );
  }

  /**
   * List all defined [schemas](https://www.mongodb.com/docs/realm/schemas).
   * @param options The options parameters.
   */
  adminListSchemas(
    options?: AdminListSchemasOptionalParams
  ): Promise<AdminListSchemasResponse> {
    return this.sendOperationRequest(
      { options },
      adminListSchemasOperationSpec
    );
  }

  /**
   * Define a new [schema](https://www.mongodb.com/docs/realm/schemas) for a linked collection.
   * @param body
   * @param options The options parameters.
   */
  adminCreateSchema(
    body: Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema,
    options?: AdminCreateSchemaOptionalParams
  ): Promise<AdminCreateSchemaResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateSchemaOperationSpec
    );
  }

  /**
   * Get a specific [schema](https://www.mongodb.com/docs/realm/schemas) by its `_id` value.
   * @param schemaId The unique `_id` value of a schema.
   * @param options The options parameters.
   */
  adminGetSchema(
    schemaId: string,
    options?: AdminGetSchemaOptionalParams
  ): Promise<AdminGetSchemaResponse> {
    return this.sendOperationRequest(
      { schemaId, options },
      adminGetSchemaOperationSpec
    );
  }

  /**
   * Replace an existing [schema](https://www.mongodb.com/docs/realm/schemas) with a new one.
   * @param schemaId The unique `_id` value of a schema.
   * @param body
   * @param options The options parameters.
   */
  adminUpdateSchema(
    schemaId: string,
    body: Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema,
    options?: AdminUpdateSchemaOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { schemaId, body, options },
      adminUpdateSchemaOperationSpec
    );
  }

  /**
   * Delete a specific [schema](https://www.mongodb.com/docs/realm/schemas) by its `_id` value.
   * @param schemaId The unique `_id` value of a schema.
   * @param options The options parameters.
   */
  adminDeleteSchema(
    schemaId: string,
    options?: AdminDeleteSchemaOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { schemaId, options },
      adminDeleteSchemaOperationSpec
    );
  }

  /**
   * Get all [endpoint](https://www.mongodb.com/docs/realm/endpoints/) configurations.
   * @param options The options parameters.
   */
  adminGetAllEndpoints(
    options?: AdminGetAllEndpointsOptionalParams
  ): Promise<AdminGetAllEndpointsResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetAllEndpointsOperationSpec
    );
  }

  /**
   * Create a new [endpoint](https://www.mongodb.com/docs/realm/endpoints/).
   * @param body A valid [configuration
   *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/) for the new
   *             endpoint.
   * @param options The options parameters.
   */
  adminCreateEndpoint(
    body: Endpoint,
    options?: AdminCreateEndpointOptionalParams
  ): Promise<AdminCreateEndpointResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateEndpointOperationSpec
    );
  }

  /**
   * Get a specific [endpoint](https://www.mongodb.com/docs/realm/endpoints/)'s configuration.
   * @param endpointId The unique `_id` value of an endpoint
   * @param options The options parameters.
   */
  adminGetEndpoint(
    endpointId: string,
    options?: AdminGetEndpointOptionalParams
  ): Promise<AdminGetEndpointResponse> {
    return this.sendOperationRequest(
      { endpointId, options },
      adminGetEndpointOperationSpec
    );
  }

  /**
   * Modify an existing [endpoint](https://www.mongodb.com/docs/realm/endpoints/) configuration.
   * @param endpointId The unique `_id` value of an endpoint
   * @param body A valid, updated [configuration
   *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/) for the
   *             endpoint.
   * @param options The options parameters.
   */
  adminModifyEndpoint(
    endpointId: string,
    body: Endpoint,
    options?: AdminModifyEndpointOptionalParams
  ): Promise<AdminModifyEndpointResponse> {
    return this.sendOperationRequest(
      { endpointId, body, options },
      adminModifyEndpointOperationSpec
    );
  }

  /**
   * Delete an endpoint
   * @param endpointId The unique `_id` value of an endpoint
   * @param options The options parameters.
   */
  adminDeleteEndpoint(
    endpointId: string,
    options?: AdminDeleteEndpointOptionalParams
  ): Promise<AdminDeleteEndpointResponse> {
    return this.sendOperationRequest(
      { endpointId, options },
      adminDeleteEndpointOperationSpec
    );
  }

  /**
   * Get your app's [Data
   * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
   * @param options The options parameters.
   */
  adminGetDataApiConfig(
    options?: AdminGetDataApiConfigOptionalParams
  ): Promise<AdminGetDataApiConfigResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetDataApiConfigOperationSpec
    );
  }

  /**
   * Create your app's [Data
   * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
   * @param body A valid [configuration
   *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/#appconfig-data-api-endpoints)
   *             for the endpoint.
   * @param options The options parameters.
   */
  adminCreateDataApiConfig(
    body: DataApiConfig,
    options?: AdminCreateDataApiConfigOptionalParams
  ): Promise<AdminCreateDataApiConfigResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateDataApiConfigOperationSpec
    );
  }

  /**
   * Update your app's [Data
   * API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/) configuration.
   * @param body A valid [configuration
   *             object](https://www.mongodb.com/docs/realm/manage-apps/configure/config/http_endpoints/#appconfig-data-api-endpoints)
   *             for the endpoint.
   * @param options The options parameters.
   */
  adminModifyDataApiConfig(
    body: DataApiConfig,
    options?: AdminModifyDataApiConfigOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      adminModifyDataApiConfigOperationSpec
    );
  }

  /**
   * List all possible Data API versions.
   * @param options The options parameters.
   */
  adminGetDataApiVersions(
    options?: AdminGetDataApiVersionsOptionalParams
  ): Promise<AdminGetDataApiVersionsResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetDataApiVersionsOperationSpec
    );
  }

  /**
   * Run a query or mutation as a system user that bypasses
   * authentication and data access rules. You can access metadata
   * about your API, including its schema, with an
   * [introspection](https://graphql.org/learn/introspection/) query.
   * @param options The options parameters.
   */
  adminRunGraphQLOperation(
    options?: AdminRunGraphQLOperationOptionalParams
  ): Promise<AdminRunGraphQLOperationResponse> {
    return this.sendOperationRequest(
      { options },
      adminRunGraphQLOperationOperationSpec
    );
  }

  /**
   * Get all [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
   * configurations from your app's GraphQL API.
   * @param options The options parameters.
   */
  adminGetAllCustomResolvers(
    options?: AdminGetAllCustomResolversOptionalParams
  ): Promise<AdminGetAllCustomResolversResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetAllCustomResolversOperationSpec
    );
  }

  /**
   * Create a new [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/).
   * @param body A valid [custom resolver
   *             configuration](https://www.mongodb.com/docs/realm/manage-apps/configure/config/graphql/#appconfig-custom-resolver)
   *             object.
   * @param options The options parameters.
   */
  adminCreateCustomResolver(
    body: CustomResolver,
    options?: AdminCreateCustomResolverOptionalParams
  ): Promise<AdminCreateCustomResolverResponse> {
    return this.sendOperationRequest(
      { body, options },
      adminCreateCustomResolverOperationSpec
    );
  }

  /**
   * Get a specific [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
   * configuration.
   * @param customResolverId The unique `_id` value of a custom resolver.
   * @param options The options parameters.
   */
  adminGetCustomResolver(
    customResolverId: string,
    options?: AdminGetCustomResolverOptionalParams
  ): Promise<AdminGetCustomResolverResponse> {
    return this.sendOperationRequest(
      { customResolverId, options },
      adminGetCustomResolverOperationSpec
    );
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
  adminModifyCustomResolver(
    customResolverId: string,
    body: CustomResolver,
    options?: AdminModifyCustomResolverOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { customResolverId, body, options },
      adminModifyCustomResolverOperationSpec
    );
  }

  /**
   * Delete an existing [custom resolver](https://www.mongodb.com/docs/realm/graphql/custom-resolvers/)
   * configuration.
   * @param customResolverId The unique `_id` value of a custom resolver.
   * @param options The options parameters.
   */
  adminDeleteCustomResolver(
    customResolverId: string,
    options?: AdminDeleteCustomResolverOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { customResolverId, options },
      adminDeleteCustomResolverOperationSpec
    );
  }

  /**
   * Get the current validation level and action for reads and writes.
   * @param options The options parameters.
   */
  adminGetGraphQLValidationSettings(
    options?: AdminGetGraphQLValidationSettingsOptionalParams
  ): Promise<AdminGetGraphQLValidationSettingsResponse> {
    return this.sendOperationRequest(
      { options },
      adminGetGraphQLValidationSettingsOperationSpec
    );
  }

  /**
   * Set the validation level and action for reads and writes.
   * @param body The updated validation levels and actions.
   * @param options The options parameters.
   */
  adminSetGraphQLValidationSettings(
    body: GraphQLValidationSettings,
    options?: AdminSetGraphQLValidationSettingsOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      adminSetGraphQLValidationSettingsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAdminAuthProvidersOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const adminLoginOperationSpec: coreClient.OperationSpec = {
  path: "/auth/providers/{provider}/login",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.provider],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAdminProfileOperationSpec: coreClient.OperationSpec = {
  path: "/auth/profile",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RealmProfile
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateSessionOperationSpec: coreClient.OperationSpec = {
  path: "/auth/session",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteSessionOperationSpec: coreClient.OperationSpec = {
  path: "/auth/session",
  httpMethod: "DELETE",
  responses: { 401: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const adminListAppRegionsOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const adminListApplicationsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  queryParameters: [Parameters.product],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateApplicationOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ApplicationSummary
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.defaults],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetApplicationOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteApplicationOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  serializer
};
const adminExportApplicationOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/export",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  serializer
};
const adminCreateTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/triggers",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.TriggerResponse
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminListTriggersOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/triggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminUpdateTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}",
  httpMethod: "PUT",
  responses: {
    204: {},
    409: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.triggerId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.triggerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteTriggerOperationSpec: coreClient.OperationSpec = {
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
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.triggerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminResumeTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}/resume",
  httpMethod: "PUT",
  responses: {
    204: {},
    404: {
      bodyMapper:
        Mappers.PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body3,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.triggerId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminListValuesOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/values",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateValueOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/values",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.NewValue
    }
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetValueOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/values/{valueId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Value
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.valueId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteValueOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/values/{valueId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.valueId
  ],
  serializer
};
const adminUpdateValueOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/values/{valueId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.valueId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminListServicesOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateServiceOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema
    },
    409: {}
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetServiceOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteServiceOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  serializer
};
const adminUpdateServiceOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
  httpMethod: "PATCH",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  serializer
};
const adminValidateDocumentsOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{datasourceId}/commands/validate_documents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body6,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminRunCommandOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/{commandName}",
  httpMethod: "POST",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.commandName
  ],
  serializer
};
const getBuildInfoOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/build_info",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildInfo
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminGetServiceConfigOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/config",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  serializer
};
const adminUpdateServiceConfigOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/config",
  httpMethod: "PATCH",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  serializer
};
const adminListRulesOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema
    },
    409: {}
  },
  requestBody: Parameters.body7,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.ruleId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.ruleId
  ],
  serializer
};
const adminUpdateRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
  httpMethod: "PUT",
  responses: { 200: {} },
  requestBody: Parameters.body8,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.ruleId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetDefaultRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DefaultRule
    },
    404: {
      bodyMapper: Mappers.BasicError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateDefaultRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.DefaultRule
    },
    400: {
      bodyMapper: Mappers.BasicError
    }
  },
  requestBody: Parameters.body9,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminUpdateDefaultRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.BasicError
    }
  },
  requestBody: Parameters.body10,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminDeleteDefaultRuleOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/default_rule",
  httpMethod: "DELETE",
  responses: {
    204: {},
    404: {
      bodyMapper: Mappers.BasicError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminGenerateSchemaOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/generate_schema",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body11,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminListWebhooksOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IncomingWebhook
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateWebhookOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks",
  httpMethod: "POST",
  responses: { 201: {} },
  requestBody: Parameters.body12,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetWebhookOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.incomingWebhookId
  ],
  serializer
};
const adminDeleteWebhookOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.incomingWebhookId
  ],
  serializer
};
const adminUpdateWebhookOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
  httpMethod: "PUT",
  responses: { 200: {} },
  requestBody: Parameters.body12,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.serviceId,
    Parameters.incomingWebhookId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetSyncOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/sync/data",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncDataResponse
    }
  },
  queryParameters: [Parameters.serviceId1],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminListNotificationsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  queryParameters: [Parameters.state],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateNotificationOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications",
  httpMethod: "POST",
  responses: { 201: {} },
  requestBody: Parameters.body13,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetMessageOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Message
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.messageId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteMessageOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.messageId
  ],
  serializer
};
const adminUpdateMessageOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Message
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.messageId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminSetMessageTypeOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}/type",
  httpMethod: "PUT",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.messageId
  ],
  serializer
};
const adminSendMessageOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/push/notifications/{messageId}/send",
  httpMethod: "POST",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.messageId
  ],
  serializer
};
const adminListUsersOperationSpec: coreClient.OperationSpec = {
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
  queryParameters: [Parameters.after, Parameters.sort, Parameters.desc],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.User
    }
  },
  requestBody: Parameters.body14,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminVerifyUserAccessTokenOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/verify_token",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body15,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/{uid}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.uid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/{uid}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.uid
  ],
  serializer
};
const adminListDevicesOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/{uid}/devices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.uid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminUserLogoutOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/{uid}/logout",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.uid
  ],
  serializer
};
const adminEnableUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/{uid}/enable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.uid
  ],
  serializer
};
const adminDisableUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/users/{uid}/disable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.uid
  ],
  serializer
};
const adminDeletePendingUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.email
  ],
  serializer
};
const adminSendConfirmationEmailOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/send_confirm",
  httpMethod: "POST",
  responses: { 200: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.email
  ],
  serializer
};
const adminConfirmPendingUserOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/confirm",
  httpMethod: "POST",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.email
  ],
  serializer
};
const adminRerunPendingUserConfirmationOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/run_confirm",
  httpMethod: "POST",
  responses: { 202: {}, 400: {}, 404: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.email
  ],
  serializer
};
const adminExecuteFunctionOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/debug/execute_function",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body16,
  queryParameters: [Parameters.userId, Parameters.runAsSystem],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminExecuteFunctionSourceOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/debug/execute_function_source",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body17,
  queryParameters: [Parameters.userId, Parameters.runAsSystem],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminListAuthProvidersOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateAuthProviderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.FullProvider
    }
  },
  requestBody: Parameters.body18,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetAuthProviderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FullProvider
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.providerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteAuthProviderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.providerId
  ],
  serializer
};
const adminUpdateAuthProviderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}",
  httpMethod: "PATCH",
  responses: { 204: {} },
  requestBody: Parameters.body19,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.providerId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminDisableAuthProviderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}/disable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.providerId
  ],
  serializer
};
const adminEnableAuthProviderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/auth_providers/{providerId}/enable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.providerId
  ],
  serializer
};
const adminListAllowedRequestOriginsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/security/allowed_request_origins",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminSetAllowedRequestOriginsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/security/allowed_request_origins",
  httpMethod: "POST",
  responses: { 204: {} },
  requestBody: Parameters.body20,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const allowedIPAccessListGetOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/security/access_list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const allowedIPAccessListCreateOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/security/access_list",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const allowedIPAccessListUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/security/access_list/{ipId}",
  httpMethod: "PATCH",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.ipId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const allowedIPAccessListDeleteOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/security/access_list/{ipId}",
  httpMethod: "DELETE",
  responses: { 404: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.ipId
  ],
  serializer
};
const adminGetLogsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema
    }
  },
  queryParameters: [
    Parameters.coId,
    Parameters.errorsOnly,
    Parameters.userId1,
    Parameters.startDate,
    Parameters.endDate,
    Parameters.skip,
    Parameters.limit,
    Parameters.typeParam
  ],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogForwardersOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const createLogForwarderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/log_forwarders",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.LogForwarder
    }
  },
  requestBody: Parameters.body21,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLogForwarderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogForwarder
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.forwarderId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateLogForwarderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LogForwarder
    }
  },
  requestBody: Parameters.body21,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.forwarderId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteGwarderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.forwarderId
  ],
  serializer
};
const enableLogForwarderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}/enable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.forwarderId
  ],
  serializer
};
const disableLogForwarderOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/log_forwarders/{forwarderId}/disable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.forwarderId
  ],
  serializer
};
const adminListApiKeysOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/api_keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateApiKeyOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/api_keys",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ApiKey
    }
  },
  requestBody: Parameters.body22,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetApiKeyOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeyResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.apiKeyId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteApiKeyOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.apiKeyId
  ],
  serializer
};
const adminEnableApiKeyOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}/enable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.apiKeyId
  ],
  serializer
};
const adminDisableApiKeyOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/api_keys/{apiKeyId}/disable",
  httpMethod: "PUT",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.apiKeyId
  ],
  serializer
};
const adminGetAllSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/secrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateASecretOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/secrets",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body23,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminModifyASecretOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/secrets/{secretId}",
  httpMethod: "PUT",
  responses: { 204: {} },
  requestBody: Parameters.body24,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.secretId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminDeleteSecretOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/secrets/{secretId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.secretId
  ],
  serializer
};
const adminListFunctionsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/functions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateFunctionOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/functions",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body25,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetFunctionOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/functions/{functionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.functionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeleteFunctionOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/functions/{functionId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.functionId
  ],
  serializer
};
const adminUpdateFunctionOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/functions/{functionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NewFunction
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.functionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminGetAllDependenciesOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/dependencies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DependenciesSummary
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminListDeploymentsOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminListDeploymentDraftsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/drafts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentDraft
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateDeploymentDraftOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/drafts",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentDraft
    },
    409: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDiscardDraftOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/drafts/{draftId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.draftId
  ],
  serializer
};
const adminDeployDraftOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/drafts/{draftId}/deployment",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Application
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.draftId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminDeployDraftDiffOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/drafts/{draftId}/diff",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Diff
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.draftId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminGetHostingConfigOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/hosting/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HostingConfiguration
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminEnableDisableHostingOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/hosting/config",
  httpMethod: "PATCH",
  responses: { 204: {} },
  requestBody: Parameters.body26,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetAllHostedAssetsOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminMoveCopyHostedAssetOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/hosting/assets",
  httpMethod: "POST",
  responses: { 204: {} },
  requestBody: Parameters.body27,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetHostedAssetOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HostedAssetMetadata
    },
    404: {
      bodyMapper:
        Mappers.PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.path, Parameters.prefix],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminUploadHostedAssetOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {
      bodyMapper:
        Mappers.Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body28,
  queryParameters: [Parameters.path],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminUpdateHostedAssetOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
  httpMethod: "PATCH",
  responses: { 204: {}, 400: {} },
  requestBody: Parameters.body29,
  queryParameters: [Parameters.path],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminMeasurementsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/measurements",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.start, Parameters.end, Parameters.granularity],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminAppMeasurementsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/measurements",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.start, Parameters.end, Parameters.granularity1],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminListSchemasOperationSpec: coreClient.OperationSpec = {
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
              className:
                "Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems"
            }
          }
        }
      }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateSchemaOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/schemas",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body30,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetSchemaOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.schemaId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminUpdateSchemaOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
  httpMethod: "PUT",
  responses: { 204: {} },
  requestBody: Parameters.body31,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.schemaId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminDeleteSchemaOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.schemaId
  ],
  serializer
};
const adminGetAllEndpointsOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateEndpointOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/endpoints",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Endpoint
    }
  },
  requestBody: Parameters.body32,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetEndpointOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/endpoints/{endpointId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Endpoint
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.endpointId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminModifyEndpointOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/endpoints/{endpointId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Endpoint
    }
  },
  requestBody: Parameters.body32,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.endpointId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminDeleteEndpointOperationSpec: coreClient.OperationSpec = {
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
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.endpointId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminGetDataApiConfigOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/data_api/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataApiConfig
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateDataApiConfigOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/data_api/config",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.DataApiConfig
    }
  },
  requestBody: Parameters.body33,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminModifyDataApiConfigOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/data_api/config",
  httpMethod: "PATCH",
  responses: { 204: {} },
  requestBody: Parameters.body33,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetDataApiVersionsOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminRunGraphQLOperationOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/graphql",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body34,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetAllCustomResolversOperationSpec: coreClient.OperationSpec = {
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
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminCreateCustomResolverOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CustomResolver
    }
  },
  requestBody: Parameters.body35,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminGetCustomResolverOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomResolver
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.customResolverId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const adminModifyCustomResolverOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
  httpMethod: "PUT",
  responses: { 204: {} },
  requestBody: Parameters.body35,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.customResolverId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const adminDeleteCustomResolverOperationSpec: coreClient.OperationSpec = {
  path:
    "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.appId,
    Parameters.customResolverId
  ],
  serializer
};
const adminGetGraphQLValidationSettingsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/validation_settings/graphql",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GraphQLValidationSettings
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.accept],
  serializer
};
const adminSetGraphQLValidationSettingsOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/apps/{appId}/validation_settings/graphql",
  httpMethod: "PUT",
  responses: { 204: {} },
  requestBody: Parameters.body36,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
