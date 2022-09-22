#! /bin/bash
BASE_DIR=$(git rev-parse --show-toplevel)

# Build TypeScript SDK
TYPESCRIPT_GENERATED_SDK_DIR=${BASE_DIR}/app-services-admin-sdk-generated
# rm -rf TYPESCRIPT_SDK_DIR/* # remove all contents
autorest --input-file=${BASE_DIR}/openapi-admin-v3.yaml \
--typescript \
--output-folder=$TYPESCRIPT_GENERATED_SDK_DIR \
--package-name=app-services-admin-sdk-generated \
--add-credentials=none
cd $TYPESCRIPT_GENERATED_SDK_DIR
npm install
npm run build

# Create workspaces sym links
cd $BASE_DIR
npm install 

