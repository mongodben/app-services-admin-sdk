import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
export class AtlasAppServicesAPI extends coreClient.ServiceClient {
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
                coreRestPipeline.bearerTokenAuthenticationPolicyName);
            if (!bearerTokenAuthenticationPolicyFound) {
                this.pipeline.removePolicy({
                    name: coreRestPipeline.bearerTokenAuthenticationPolicyName
                });
                this.pipeline.addPolicy(coreRestPipeline.bearerTokenAuthenticationPolicy({
                    scopes: `${optionsWithDefaults.baseUri}/.default`,
                    challengeCallbacks: {
                        authorizeRequestOnChallenge: coreClient.authorizeRequestOnClaimChallenge
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
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
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
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const adminLoginOperationSpec = {
    path: "/auth/providers/{provider}/login",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body,
    urlParameters: [Parameters.$host, Parameters.provider],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const getAdminProfileOperationSpec = {
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
const adminCreateSessionOperationSpec = {
    path: "/auth/session",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const adminDeleteSessionOperationSpec = {
    path: "/auth/session",
    httpMethod: "DELETE",
    responses: { 401: {} },
    urlParameters: [Parameters.$host],
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
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
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
    queryParameters: [Parameters.product],
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminCreateApplicationOperationSpec = {
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
const adminGetApplicationOperationSpec = {
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
const adminDeleteApplicationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}",
    httpMethod: "DELETE",
    responses: { 204: {} },
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    serializer
};
const adminExportApplicationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/export",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    serializer
};
const adminCreateTriggerOperationSpec = {
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
const adminListTriggersOperationSpec = {
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
const adminUpdateTriggerOperationSpec = {
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
const adminGetTriggerOperationSpec = {
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
        Parameters.$host,
        Parameters.groupId,
        Parameters.appId,
        Parameters.triggerId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const adminResumeTriggerOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/triggers/{triggerId}/resume",
    httpMethod: "PUT",
    responses: {
        204: {},
        404: {
            bodyMapper: Mappers.PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema
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
const adminListValuesOperationSpec = {
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
const adminCreateValueOperationSpec = {
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
const adminGetValueOperationSpec = {
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
const adminDeleteValueOperationSpec = {
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
const adminUpdateValueOperationSpec = {
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
const adminListServicesOperationSpec = {
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
const adminCreateServiceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema
        },
        409: {}
    },
    requestBody: Parameters.body5,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminGetServiceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema
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
const adminDeleteServiceOperationSpec = {
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
const adminUpdateServiceOperationSpec = {
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
const adminValidateDocumentsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{datasourceId}/commands/validate_documents",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema
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
const adminRunCommandOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/{commandName}",
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
const getBuildInfoOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/build_info",
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
const adminGetServiceConfigOperationSpec = {
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
const adminUpdateServiceConfigOperationSpec = {
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
const adminListRulesOperationSpec = {
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
const adminCreateRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema
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
const adminGetRuleOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/rules/{ruleId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema
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
const adminDeleteRuleOperationSpec = {
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
const adminUpdateRuleOperationSpec = {
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
const adminGetDefaultRuleOperationSpec = {
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
const adminCreateDefaultRuleOperationSpec = {
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
const adminUpdateDefaultRuleOperationSpec = {
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
const adminDeleteDefaultRuleOperationSpec = {
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
const adminGenerateSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/commands/generate_schema",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema
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
const adminListWebhooksOperationSpec = {
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
const adminCreateWebhookOperationSpec = {
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
const adminGetWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
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
const adminDeleteWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
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
const adminUpdateWebhookOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/services/{serviceId}/incoming_webhooks/{incomingWebhookId}",
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
const adminGetSyncOperationSpec = {
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
const adminListNotificationsOperationSpec = {
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
const adminCreateNotificationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/push/notifications",
    httpMethod: "POST",
    responses: { 201: {} },
    requestBody: Parameters.body13,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminGetMessageOperationSpec = {
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
const adminDeleteMessageOperationSpec = {
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
const adminUpdateMessageOperationSpec = {
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
const adminSetMessageTypeOperationSpec = {
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
const adminSendMessageOperationSpec = {
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
    queryParameters: [Parameters.after, Parameters.sort, Parameters.desc],
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminCreateUserOperationSpec = {
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
const adminVerifyUserAccessTokenOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/users/verify_token",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body15,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminGetUserOperationSpec = {
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
const adminDeleteUserOperationSpec = {
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
const adminListDevicesOperationSpec = {
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
const adminUserLogoutOperationSpec = {
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
const adminEnableUserOperationSpec = {
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
const adminDisableUserOperationSpec = {
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
const adminDeletePendingUserOperationSpec = {
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
const adminSendConfirmationEmailOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/send_confirm",
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
const adminConfirmPendingUserOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/confirm",
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
const adminRerunPendingUserConfirmationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/user_registrations/by_email/{email}/run_confirm",
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
const adminExecuteFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/debug/execute_function",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body16,
    queryParameters: [Parameters.userId, Parameters.runAsSystem],
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminExecuteFunctionSourceOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/debug/execute_function_source",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body17,
    queryParameters: [Parameters.userId, Parameters.runAsSystem],
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminCreateAuthProviderOperationSpec = {
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
const adminGetAuthProviderOperationSpec = {
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
const adminDeleteAuthProviderOperationSpec = {
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
const adminUpdateAuthProviderOperationSpec = {
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
const adminDisableAuthProviderOperationSpec = {
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
const adminEnableAuthProviderOperationSpec = {
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
const adminListAllowedRequestOriginsOperationSpec = {
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
const adminSetAllowedRequestOriginsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/allowed_request_origins",
    httpMethod: "POST",
    responses: { 204: {} },
    requestBody: Parameters.body20,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.contentType],
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const allowedIPAccessListCreateOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/access_list",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const allowedIPAccessListUpdateOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/security/access_list/{ipId}",
    httpMethod: "PATCH",
    responses: {
        201: {
            bodyMapper: Mappers.PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema
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
const allowedIPAccessListDeleteOperationSpec = {
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
const adminGetLogsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/logs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const createLogForwarderOperationSpec = {
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
const getLogForwarderOperationSpec = {
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
const updateLogForwarderOperationSpec = {
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
const deleteGwarderOperationSpec = {
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
const enableLogForwarderOperationSpec = {
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
const disableLogForwarderOperationSpec = {
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
const adminListApiKeysOperationSpec = {
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
const adminCreateApiKeyOperationSpec = {
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
const adminGetApiKeyOperationSpec = {
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
const adminDeleteApiKeyOperationSpec = {
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
const adminEnableApiKeyOperationSpec = {
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
const adminDisableApiKeyOperationSpec = {
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
const adminGetAllSecretsOperationSpec = {
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
const adminCreateASecretOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/secrets",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body23,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminModifyASecretOperationSpec = {
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
const adminDeleteSecretOperationSpec = {
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
const adminListFunctionsOperationSpec = {
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
const adminCreateFunctionOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/functions",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body25,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminGetFunctionOperationSpec = {
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
const adminDeleteFunctionOperationSpec = {
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
const adminUpdateFunctionOperationSpec = {
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
const adminGetAllDependenciesOperationSpec = {
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminListDeploymentDraftsOperationSpec = {
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
const adminCreateDeploymentDraftOperationSpec = {
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
const adminDiscardDraftOperationSpec = {
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
const adminDeployDraftOperationSpec = {
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
const adminDeployDraftDiffOperationSpec = {
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
const adminGetHostingConfigOperationSpec = {
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
const adminEnableDisableHostingOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/config",
    httpMethod: "PATCH",
    responses: { 204: {} },
    requestBody: Parameters.body26,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.contentType],
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminMoveCopyHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets",
    httpMethod: "POST",
    responses: { 204: {} },
    requestBody: Parameters.body27,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminGetHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.HostedAssetMetadata
        },
        404: {
            bodyMapper: Mappers.PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.path, Parameters.prefix],
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminUploadHostedAssetOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/hosting/assets/asset",
    httpMethod: "PUT",
    responses: {
        204: {},
        400: {
            bodyMapper: Mappers.Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body28,
    queryParameters: [Parameters.path],
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminUpdateHostedAssetOperationSpec = {
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
const adminMeasurementsOperationSpec = {
    path: "/groups/{groupId}/measurements",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Mappers.Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.start, Parameters.end, Parameters.granularity],
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminAppMeasurementsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/measurements",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: Mappers.Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.start, Parameters.end, Parameters.granularity1],
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminCreateSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body30,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const adminGetSchemaOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/schemas/{schemaId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema
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
const adminUpdateSchemaOperationSpec = {
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
const adminDeleteSchemaOperationSpec = {
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminCreateEndpointOperationSpec = {
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
const adminGetEndpointOperationSpec = {
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
const adminModifyEndpointOperationSpec = {
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
        Parameters.$host,
        Parameters.groupId,
        Parameters.appId,
        Parameters.endpointId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const adminGetDataApiConfigOperationSpec = {
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
const adminCreateDataApiConfigOperationSpec = {
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
const adminModifyDataApiConfigOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/data_api/config",
    httpMethod: "PATCH",
    responses: { 204: {} },
    requestBody: Parameters.body33,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.contentType],
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminRunGraphQLOperationOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body34,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept, Parameters.contentType],
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
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.accept],
    serializer
};
const adminCreateCustomResolverOperationSpec = {
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
const adminGetCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
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
const adminModifyCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
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
const adminDeleteCustomResolverOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/graphql/custom_resolvers/{customResolverId}",
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
const adminGetGraphQLValidationSettingsOperationSpec = {
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
const adminSetGraphQLValidationSettingsOperationSpec = {
    path: "/groups/{groupId}/apps/{appId}/validation_settings/graphql",
    httpMethod: "PUT",
    responses: { 204: {} },
    requestBody: Parameters.body36,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.appId],
    headerParameters: [Parameters.contentType],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=atlasAppServicesAPI.js.map