#!/usr/bin/env bash
set -e

# apply metadata
hasura metadata apply

# create tables
hasura migrate apply --all-databases

# seed data
hasura seed apply --database-name localdb

# update metadata to reflect changes
hasura metadata reload