#! /bin/bash
BASE_DIR=$(git rev-parse --show-toplevel)

# Build TypeScript SDK
TYPESCRIPT_SDK_DIR=${BASE_DIR}/generated/typescript
rm -rf TYPESCRIPT_SDK_DIR/* # remove all contents
autorest --input-file=${BASE_DIR}/openapi-admin-v3.yaml \
--typescript \
--output-folder=$TYPESCRIPT_SDK_DIR \
--package-name=atlas-app-services-admin-sdk \
--add-credentials=none
cd $TYPESCRIPT_SDK_DIR
npm install
npm run build

cd $BASE_DIR
npm install $TYPESCRIPT_SDK_DIR
