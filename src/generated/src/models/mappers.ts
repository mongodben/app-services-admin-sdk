import * as coreClient from "@azure/core-client";

export const ProviderSummary: coreClient.CompositeMapper = {
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

export const PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsMc7PriAuthProvidersProviderLoginPostRequestbodyContentApplicationJsonSchema",
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

export const Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths14Ndy59AuthProvidersProviderLoginPostResponses200ContentApplicationJsonSchema",
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

export const RealmProfile: coreClient.CompositeMapper = {
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

export const RealmProfileData: coreClient.CompositeMapper = {
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

export const RealmProfileRolesItem: coreClient.CompositeMapper = {
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

export const PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsZzrdxiAuthSessionPostResponses201ContentApplicationJsonSchema",
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

export const AppProviderRegion: coreClient.CompositeMapper = {
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

export const NewApplication: coreClient.CompositeMapper = {
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

export const DataSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataSource"
  }
};

export const AtlasCluster: coreClient.CompositeMapper = {
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

export const AtlasClusterConfig: coreClient.CompositeMapper = {
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

export const AtlasFederatedInstance: coreClient.CompositeMapper = {
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

export const AtlasFederatedInstanceConfig: coreClient.CompositeMapper = {
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

export const ApplicationSummary: coreClient.CompositeMapper = {
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

export const Application: coreClient.CompositeMapper = {
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

export const TriggerRequest: coreClient.CompositeMapper = {
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

export const TriggerRequestConfig: coreClient.CompositeMapper = {
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

export const TriggerResponse: coreClient.CompositeMapper = {
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

export const ErrorModel: coreClient.CompositeMapper = {
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

export const PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsAl5Xz1GroupsGroupidAppsAppidTriggersTriggeridResumePutRequestbodyContentApplicationJsonSchema",
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

export const PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsCf456BGroupsGroupidAppsAppidTriggersTriggeridResumePutResponses404ContentApplicationJsonSchema",
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

export const NewValue: coreClient.CompositeMapper = {
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

export const Value: coreClient.CompositeMapper = {
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

export const PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsC5B4C0GroupsGroupidAppsAppidServicesPostRequestbodyContentApplicationJsonSchema"
  }
};

export const ThirdPartyService: coreClient.CompositeMapper = {
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

export const Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths4Mdtz4GroupsGroupidAppsAppidServicesPostResponses201ContentApplicationJsonSchema"
  }
};

export const Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths15Kf8MtGroupsGroupidAppsAppidServicesServiceidGetResponses200ContentApplicationJsonSchema"
  }
};

export const PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsB14EgvGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostRequestbodyContentApplicationJsonSchema",
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

export const Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1D7VdskGroupsGroupidAppsAppidServicesDatasourceidCommandsValidateDocumentsPostResponses200ContentApplicationJsonSchema",
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

export const Post200ApplicationJsonPropertiesItemsItem: coreClient.CompositeMapper = {
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

export const ValidationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationError"
  }
};

export const BuildInfo: coreClient.CompositeMapper = {
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

export const Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Hmg352GroupsGroupidAppsAppidServicesServiceidRulesPostRequestbodyContentApplicationJsonSchema"
  }
};

export const Rule: coreClient.CompositeMapper = {
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

export const Role: coreClient.CompositeMapper = {
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
              className:
                "Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties"
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

export const Expression: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Expression"
  }
};

export const FieldLevelPermissions: coreClient.CompositeMapper = {
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

export const Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1",
    modelProperties: {
      fields: {
        serializedName: "fields",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className:
                "Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties"
            }
          }
        }
      }
    }
  }
};

export const Filter: coreClient.CompositeMapper = {
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

export const ThirdPartyServiceRule: coreClient.CompositeMapper = {
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

export const Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Xkr6YwGroupsGroupidAppsAppidServicesServiceidRulesPostResponses201ContentApplicationJsonSchema",
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

export const Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths19Hf66PGroupsGroupidAppsAppidServicesServiceidRulesRuleidGetResponses200ContentApplicationJsonSchema"
  }
};

export const Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths12Rch2LGroupsGroupidAppsAppidServicesServiceidRulesRuleidPutRequestbodyContentApplicationJsonSchema"
  }
};

export const DefaultRule: coreClient.CompositeMapper = {
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

export const BasicError: coreClient.CompositeMapper = {
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

export const PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsEosdivGroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostRequestbodyContentApplicationJsonSchema",
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

export const Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Nahxo7GroupsGroupidAppsAppidServicesServiceidCommandsGenerateSchemaPostResponses200ContentApplicationJsonSchema",
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

export const IncomingWebhook: coreClient.CompositeMapper = {
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

export const IncomingWebhookOptions: coreClient.CompositeMapper = {
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

export const SyncDataResponse: coreClient.CompositeMapper = {
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

export const Partition: coreClient.CompositeMapper = {
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

export const NewMessage: coreClient.CompositeMapper = {
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

export const Message: coreClient.CompositeMapper = {
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

export const User: coreClient.CompositeMapper = {
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

export const PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsWo17E3GroupsGroupidAppsAppidUsersPostRequestbodyContentApplicationJsonSchema",
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

export const PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsPxhuxcGroupsGroupidAppsAppidUsersVerifyTokenPostRequestbodyContentApplicationJsonSchema",
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

export const PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsGr0E9XGroupsGroupidAppsAppidUsersVerifyTokenPostResponses200ContentApplicationJsonSchema",
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

export const PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsCkw3PdGroupsGroupidAppsAppidDebugExecuteFunctionPostRequestbodyContentApplicationJsonSchema",
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

export const PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsCx7Db8GroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchema",
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
          className:
            "Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats"
        }
      }
    }
  }
};

export const Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1R5V25JGroupsGroupidAppsAppidDebugExecuteFunctionPostResponses200ContentApplicationJsonSchemaPropertiesStats",
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

export const Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Ilu72TGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostRequestbodyContentApplicationJsonSchema",
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

export const Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths12N567CGroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchema",
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
          className:
            "Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats"
        }
      }
    }
  }
};

export const Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Kyzak1GroupsGroupidAppsAppidDebugExecuteFunctionSourcePostResponses200ContentApplicationJsonSchemaPropertiesStats",
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

export const NewProvider: coreClient.CompositeMapper = {
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

export const FullProvider: coreClient.CompositeMapper = {
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

export const Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths7Myom4GroupsGroupidAppsAppidSecurityAccessListPostResponses201ContentApplicationJsonSchema",
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

export const PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsUj8PqvGroupsGroupidAppsAppidSecurityAccessListIpidPatchResponses201ContentApplicationJsonSchema",
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

export const Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Xpjtj3GroupsGroupidAppsAppidLogsGetResponses200ContentApplicationJsonSchema",
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

export const Get200ApplicationJsonPropertiesItemsItem: coreClient.CompositeMapper = {
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

export const LogForwarder: coreClient.CompositeMapper = {
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

export const LogForwardingPolicy: coreClient.CompositeMapper = {
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

export const LogForwardingAction: coreClient.CompositeMapper = {
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

export const Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1A076TeGroupsGroupidAppsAppidApiKeysPostRequestbodyContentApplicationJsonSchema",
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

export const ApiKey: coreClient.CompositeMapper = {
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

export const ApiKeyResponse: coreClient.CompositeMapper = {
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

export const Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths8D96VfGroupsGroupidAppsAppidSecretsPostRequestbodyContentApplicationJsonSchema",
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

export const Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Qdl5K8GroupsGroupidAppsAppidSecretsPostResponses201ContentApplicationJsonSchema",
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

export const PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsE6Or7GGroupsGroupidAppsAppidSecretsSecretidPutRequestbodyContentApplicationJsonSchema",
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

export const NewFunction: coreClient.CompositeMapper = {
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

export const Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths77X4O2GroupsGroupidAppsAppidFunctionsPostResponses201ContentApplicationJsonSchema",
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

export const FunctionModel: coreClient.CompositeMapper = {
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

export const DependenciesSummary: coreClient.CompositeMapper = {
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

export const Dependency: coreClient.CompositeMapper = {
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

export const Deployment: coreClient.CompositeMapper = {
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

export const DeploymentDraft: coreClient.CompositeMapper = {
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

export const Diff: coreClient.CompositeMapper = {
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

export const DiffHostingFilesDiff: coreClient.CompositeMapper = {
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

export const HostingConfiguration: coreClient.CompositeMapper = {
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

export const HostingConfigurationDefaultDomain: coreClient.CompositeMapper = {
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

export const HostingConfigurationDefaultDomainConfig: coreClient.CompositeMapper = {
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

export const Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths15Q0U6OGroupsGroupidAppsAppidHostingConfigPatchRequestbodyContentApplicationJsonSchema",
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

export const HostedAssetMetadata: coreClient.CompositeMapper = {
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

export const MetadataAttribute: coreClient.CompositeMapper = {
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

export const Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths16QkhibGroupsGroupidAppsAppidHostingAssetsPostRequestbodyContentApplicationJsonSchema",
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

export const PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsVq8AfjGroupsGroupidAppsAppidHostingAssetsAssetGetResponses404ContentApplicationJsonSchema",
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

export const Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1VemwxtGroupsGroupidAppsAppidHostingAssetsAssetPutRequestbodyContentApplicationJsonSchema",
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

export const AssetMetadata: coreClient.CompositeMapper = {
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

export const Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1If64WwGroupsGroupidAppsAppidHostingAssetsAssetPutResponses400ContentApplicationJsonSchema",
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

export const Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths15Eoeb2GroupsGroupidAppsAppidHostingAssetsAssetPatchRequestbodyContentApplicationJsonSchema",
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

export const PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsDivwkGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchema",
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
              className:
                "PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems"
            }
          }
        }
      }
    }
  }
};

export const PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsC8GdluGroupsGroupidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems",
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

export const Get200ApplicationJsonPropertiesItemsDataPointsItem: coreClient.CompositeMapper = {
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

export const Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components111Bo3NResponsesClienterrorresponseContentApplicationJsonSchema",
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

export const Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths7Rfo7YGroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchema",
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
              className:
                "PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems"
            }
          }
        }
      }
    }
  }
};

export const PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsB7Wdh8GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItems",
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
              className:
                "PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems"
            }
          }
        }
      }
    }
  }
};

export const PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsLsjdv5GroupsGroupidAppsAppidMeasurementsGetResponses200ContentApplicationJsonSchemaPropertiesMeasurementsItemsPropertiesDataPointsItems",
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

export const Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1M41YytGroupsGroupidAppsAppidSchemasGetResponses200ContentApplicationJsonSchemaItems",
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

export const SchemaMetadata: coreClient.CompositeMapper = {
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

export const Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths12O5QjeGroupsGroupidAppsAppidSchemasPostRequestbodyContentApplicationJsonSchema",
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

export const Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Xhp9XfGroupsGroupidAppsAppidSchemasPostResponses200ContentApplicationJsonSchema",
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

export const Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1D1Cp9VGroupsGroupidAppsAppidSchemasSchemaidGetResponses200ContentApplicationJsonSchema",
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

export const Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths66O0HbGroupsGroupidAppsAppidSchemasSchemaidPutRequestbodyContentApplicationJsonSchema",
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

export const Relationship: coreClient.CompositeMapper = {
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

export const Endpoint: coreClient.CompositeMapper = {
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

export const DataApiConfig: coreClient.CompositeMapper = {
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

export const Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Yo7XpqGroupsGroupidAppsAppidGraphqlPostRequestbodyContentApplicationJsonSchema",
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

export const Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Vcdn4XGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchema",
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
              className:
                "Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems"
            }
          }
        }
      }
    }
  }
};

export const Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1T9HmjbGroupsGroupidAppsAppidGraphqlPostResponses200ContentApplicationJsonSchemaPropertiesErrorsItems",
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

export const Post200ApplicationJsonPropertiesItemsLocationsItem: coreClient.CompositeMapper = {
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

export const CustomResolver: coreClient.CompositeMapper = {
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

export const CustomResolverInputType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomResolverInputType"
  }
};

export const CustomResolverPayloadType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomResolverPayloadType"
  }
};

export const GraphQLValidationSettings: coreClient.CompositeMapper = {
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

export const UserProvider: coreClient.CompositeMapper = {
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

export const ValueSummary: coreClient.CompositeMapper = {
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

export const Get200ApplicationJsonItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Get200ApplicationJsonItemsItem"
  }
};

export const PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsQr6Zx4GroupsGroupidAppsAppidServicesServiceidRulesGetResponses200ContentApplicationJsonSchemaItems"
  }
};

export const PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsYfsu1FGroupsGroupidAppsAppidSecurityAccessListGetResponses200ContentApplicationJsonSchemaItems",
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

export const Get200ApplicationJsonItemsAllowedIpsItem: coreClient.CompositeMapper = {
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

export const PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsApim5NGroupsGroupidAppsAppidApiKeysGetResponses200ContentApplicationJsonSchemaItems",
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

export const Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Flw4TvGroupsGroupidAppsAppidSecretsGetResponses200ContentApplicationJsonSchemaItems",
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

export const PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsQa4K7EGroupsGroupidAppsAppidFunctionsGetResponses200ContentApplicationJsonSchemaItems",
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

export const Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components1Xirox5SchemasNestablefieldlevelpermissionsAdditionalproperties",
    modelProperties: {
      ...FieldLevelPermissions.type.modelProperties,
      ...Components5X7Pu6SchemasNestablefieldlevelpermissionsAdditionalpropertiesAllof1
        .type.modelProperties
    }
  }
};

export const PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsMaqrrhGroupsGroupidAppsAppidServicesServiceidDefaultRulePutRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      ...DefaultRule.type.modelProperties
    }
  }
};
