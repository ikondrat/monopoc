# Search service
This is example of search service based on feeding the data from external source (e.g. third party api)

![hasura-data-layer-architecture](/lcs-architecture.drawio.png)

Few answers why we can't use third party provider right away:
- direct parsing will affect service time, it will not be possible to guarantee performance in this case
- there is not guarantee what you will have data, third party api can be unavailble
- third party api has unnormalised structure and quite possible can be changed which will lead to broken service
- data-feed allows to use other data providers as well with normalised structure, allows as well make updates by demand on regular basis

## prerequisites
* [The Hasura CLI installed](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/)
* [docker installed](https://docs.docker.com/get-docker/)


## run
- Run first BE part `docker-compose up backend -d`
- Apply repository migrations/seedings with `cd ./backend/ && scripts/init.sh && cd ..`
- Run FE part  `docker compose up frontend -d`
- BE part available on http://localhost:8080
- FE part should be available http://localhost:3000

### be app layer
Implemented with using Hasura, it is convinient instrument for fast prototyping and high load prooved by me

- open the console `http://localhost:8080/console` and play with api on `http://localhost:8080/console/api/api-explorer`

#### Initial setup
Was done by hasura cli dba tools
1. `hasura metadata export` created actual schema metadata for data layer
2. `hasura migrate create "init" --from-server` created tables structure migration
3. `hasura seed create tables_seed --from-table places` generated seed data

#### Read more
https://hasura.io/docs/latest/index/

### fe app layer
Implemented with using Nextjs + React + Matetial UI library
 
- open the console `http://localhost:3000` and type something to start selecting



