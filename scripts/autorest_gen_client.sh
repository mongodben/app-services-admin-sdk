#! /bin/bash
BASE_DIR=$(git rev-parse --show-toplevel)

# Build TypeScript SDK
TYPESCRIPT_SDK_DIR=${BASE_DIR}/generated/typescript
autorest --input-file=${BASE_DIR}/openapi-admin-v3.yaml \
--typescript \
--output-folder=$TYPESCRIPT_SDK_DIR
cd $TYPESCRIPT_SDK_DIR
npm install
npm run build
