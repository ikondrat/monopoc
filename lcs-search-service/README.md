# Search service


## prerequisites
* [The Hasura CLI installed](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/)
* [docker installed](https://docs.docker.com/get-docker/)


## run
- Run the services `docker compose up -d`
- Apply repository migrations/seedings with `cd ./backend/ && scripts/init.sh && cd ..`

### be app layer
- open the console `http://localhost:8080/console` and play with api on `http://localhost:8080/console/api/api-explorer`


#### Initial setup
Was done by hasura cli dba tools
1. `hasura metadata export` created actual schema metadata for data layer
2. `hasura migrate create "init" --from-server` created tables structure migration
3. `hasura seed create tables_seed --from-table places` generated seed data

### fe app


## Read more
https://hasura.io/docs/latest/index/

