import { PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema as PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchemaMapper, NewApplication as NewApplicationMapper, TriggerRequest as TriggerRequestMapper, PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema as PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchemaMapper, NewValue as NewValueMapper, PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema as PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchemaMapper, PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema as PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchemaMapper, Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema as Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchemaMapper, Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema as Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchemaMapper, DefaultRule as DefaultRuleMapper, PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema as PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchemaMapper, PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema as PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchemaMapper, IncomingWebhook as IncomingWebhookMapper, NewMessage as NewMessageMapper, PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema as PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchemaMapper, PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema as PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchemaMapper, PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema as PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchemaMapper, Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema as Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchemaMapper, NewProvider as NewProviderMapper, FullProvider as FullProviderMapper, LogForwarder as LogForwarderMapper, Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema as Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchemaMapper, Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema as Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchemaMapper, PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema as PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchemaMapper, NewFunction as NewFunctionMapper, Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema as Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchemaMapper, Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema as Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchemaMapper, Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema as Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchemaMapper, Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema as Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchemaMapper, Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema as Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchemaMapper, Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema as Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchemaMapper, Endpoint as EndpointMapper, DataApiConfig as DataApiConfigMapper, Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema as Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchemaMapper, CustomResolver as CustomResolverMapper, GraphQLValidationSettings as GraphQLValidationSettingsMapper } from "../models/mappers";
export const accept = {
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
export const $host = {
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
export const contentType = {
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
export const body = {
    parameterPath: "body",
    mapper: PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchemaMapper
};
export const provider = {
    parameterPath: "provider",
    mapper: {
        serializedName: "provider",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const groupId = {
    parameterPath: "groupId",
    mapper: {
        serializedName: "groupId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const product = {
    parameterPath: ["options", "product"],
    mapper: {
        serializedName: "product",
        type: {
            name: "String"
        }
    }
};
export const body1 = {
    parameterPath: "body",
    mapper: NewApplicationMapper
};
export const defaults = {
    parameterPath: ["options", "defaults"],
    mapper: {
        serializedName: "defaults",
        type: {
            name: "Boolean"
        }
    }
};
export const appId = {
    parameterPath: "appId",
    mapper: {
        serializedName: "appId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body2 = {
    parameterPath: "body",
    mapper: TriggerRequestMapper
};
export const triggerId = {
    parameterPath: "triggerId",
    mapper: {
        serializedName: "triggerId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body3 = {
    parameterPath: ["options", "body"],
    mapper: PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchemaMapper
};
export const body4 = {
    parameterPath: "body",
    mapper: NewValueMapper
};
export const valueId = {
    parameterPath: "valueId",
    mapper: {
        serializedName: "valueId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body5 = {
    parameterPath: ["options", "body"],
    mapper: PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchemaMapper
};
export const serviceId = {
    parameterPath: "serviceId",
    mapper: {
        serializedName: "serviceId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body6 = {
    parameterPath: "body",
    mapper: PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchemaMapper
};
export const datasourceId = {
    parameterPath: "datasourceId",
    mapper: {
        serializedName: "datasourceId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const commandName = {
    parameterPath: "commandName",
    mapper: {
        serializedName: "commandName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body7 = {
    parameterPath: "body",
    mapper: Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchemaMapper
};
export const ruleId = {
    parameterPath: "ruleId",
    mapper: {
        serializedName: "ruleId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body8 = {
    parameterPath: "body",
    mapper: Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchemaMapper
};
export const body9 = {
    parameterPath: "body",
    mapper: DefaultRuleMapper
};
export const body10 = {
    parameterPath: "body",
    mapper: PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchemaMapper
};
export const body11 = {
    parameterPath: "body",
    mapper: PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body12 = {
    parameterPath: "body",
    mapper: IncomingWebhookMapper
};
export const incomingWebhookId = {
    parameterPath: "incomingWebhookId",
    mapper: {
        serializedName: "incomingWebhookId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const serviceId1 = {
    parameterPath: "serviceId",
    mapper: {
        serializedName: "service_id",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const state = {
    parameterPath: ["options", "state"],
    mapper: {
        serializedName: "state",
        type: {
            name: "String"
        }
    }
};
export const body13 = {
    parameterPath: "body",
    mapper: NewMessageMapper
};
export const messageId = {
    parameterPath: "messageId",
    mapper: {
        serializedName: "messageId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const after = {
    parameterPath: ["options", "after"],
    mapper: {
        serializedName: "after",
        type: {
            name: "String"
        }
    }
};
export const sort = {
    parameterPath: ["options", "sort"],
    mapper: {
        serializedName: "sort",
        type: {
            name: "String"
        }
    }
};
export const desc = {
    parameterPath: ["options", "desc"],
    mapper: {
        serializedName: "desc",
        type: {
            name: "Boolean"
        }
    }
};
export const body14 = {
    parameterPath: "body",
    mapper: PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body15 = {
    parameterPath: "body",
    mapper: PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchemaMapper
};
export const uid = {
    parameterPath: "uid",
    mapper: {
        serializedName: "uid",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const email = {
    parameterPath: "email",
    mapper: {
        serializedName: "email",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body16 = {
    parameterPath: "body",
    mapper: PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchemaMapper
};
export const userId = {
    parameterPath: "userId",
    mapper: {
        serializedName: "user_id",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const runAsSystem = {
    parameterPath: "runAsSystem",
    mapper: {
        serializedName: "run_as_system",
        required: true,
        type: {
            name: "Boolean"
        }
    }
};
export const body17 = {
    parameterPath: "body",
    mapper: Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchemaMapper
};
export const body18 = {
    parameterPath: "body",
    mapper: NewProviderMapper
};
export const providerId = {
    parameterPath: "providerId",
    mapper: {
        serializedName: "providerId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body19 = {
    parameterPath: "body",
    mapper: FullProviderMapper
};
export const body20 = {
    parameterPath: "body",
    mapper: {
        serializedName: "body",
        required: true,
        type: {
            name: "any"
        }
    }
};
export const ipId = {
    parameterPath: "ipId",
    mapper: {
        serializedName: "ipId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const coId = {
    parameterPath: ["options", "coId"],
    mapper: {
        serializedName: "co_id",
        type: {
            name: "String"
        }
    }
};
export const errorsOnly = {
    parameterPath: ["options", "errorsOnly"],
    mapper: {
        serializedName: "errors_only",
        type: {
            name: "Boolean"
        }
    }
};
export const userId1 = {
    parameterPath: ["options", "userId"],
    mapper: {
        serializedName: "user_id",
        type: {
            name: "String"
        }
    }
};
export const startDate = {
    parameterPath: ["options", "startDate"],
    mapper: {
        serializedName: "start_date",
        type: {
            name: "String"
        }
    }
};
export const endDate = {
    parameterPath: ["options", "endDate"],
    mapper: {
        serializedName: "end_date",
        type: {
            name: "String"
        }
    }
};
export const skip = {
    parameterPath: ["options", "skip"],
    mapper: {
        serializedName: "skip",
        type: {
            name: "Number"
        }
    }
};
export const limit = {
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
export const typeParam = {
    parameterPath: ["options", "type"],
    mapper: {
        serializedName: "type",
        type: {
            name: "String"
        }
    }
};
export const body21 = {
    parameterPath: "body",
    mapper: LogForwarderMapper
};
export const forwarderId = {
    parameterPath: "forwarderId",
    mapper: {
        serializedName: "forwarderId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body22 = {
    parameterPath: "body",
    mapper: Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchemaMapper
};
export const apiKeyId = {
    parameterPath: "apiKeyId",
    mapper: {
        serializedName: "apiKeyId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body23 = {
    parameterPath: "body",
    mapper: Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body24 = {
    parameterPath: "body",
    mapper: PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchemaMapper
};
export const secretId = {
    parameterPath: "secretId",
    mapper: {
        serializedName: "secretId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body25 = {
    parameterPath: "body",
    mapper: NewFunctionMapper
};
export const functionId = {
    parameterPath: "functionId",
    mapper: {
        serializedName: "functionId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const draftId = {
    parameterPath: "draftId",
    mapper: {
        serializedName: "draftId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body26 = {
    parameterPath: ["options", "body"],
    mapper: Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchemaMapper
};
export const body27 = {
    parameterPath: "body",
    mapper: Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchemaMapper
};
export const path = {
    parameterPath: "path",
    mapper: {
        serializedName: "path",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const prefix = {
    parameterPath: ["options", "prefix"],
    mapper: {
        serializedName: "prefix",
        type: {
            name: "String"
        }
    }
};
export const body28 = {
    parameterPath: "body",
    mapper: Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchemaMapper
};
export const body29 = {
    parameterPath: "body",
    mapper: Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchemaMapper
};
export const start = {
    parameterPath: ["options", "start"],
    mapper: {
        serializedName: "start",
        type: {
            name: "String"
        }
    }
};
export const end = {
    parameterPath: ["options", "end"],
    mapper: {
        serializedName: "end",
        type: {
            name: "String"
        }
    }
};
export const granularity = {
    parameterPath: ["options", "granularity"],
    mapper: {
        serializedName: "granularity",
        type: {
            name: "String"
        }
    }
};
export const granularity1 = {
    parameterPath: ["options", "granularity"],
    mapper: {
        serializedName: "granularity",
        type: {
            name: "String"
        }
    }
};
export const body30 = {
    parameterPath: "body",
    mapper: Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchemaMapper
};
export const schemaId = {
    parameterPath: "schemaId",
    mapper: {
        serializedName: "schemaId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body31 = {
    parameterPath: "body",
    mapper: Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchemaMapper
};
export const body32 = {
    parameterPath: "body",
    mapper: EndpointMapper
};
export const endpointId = {
    parameterPath: "endpointId",
    mapper: {
        serializedName: "endpointId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body33 = {
    parameterPath: "body",
    mapper: DataApiConfigMapper
};
export const body34 = {
    parameterPath: ["options", "body"],
    mapper: Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body35 = {
    parameterPath: "body",
    mapper: CustomResolverMapper
};
export const customResolverId = {
    parameterPath: "customResolverId",
    mapper: {
        serializedName: "customResolverId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body36 = {
    parameterPath: "body",
    mapper: GraphQLValidationSettingsMapper
};
//# sourceMappingURL=parameters.js.map