#!/bin/sh

ALLOW_NET="deno.land,0.0.0.0"
ALLOW_READ="./public"
ENTRY_FILE="./index.ts"

deno run --config tsconfig.json \
    --allow-net=$ALLOW_NET \
    --allow-read=$ALLOW_READ \
    --unstable --watch $ENTRY_FILE \
    --message=Hello