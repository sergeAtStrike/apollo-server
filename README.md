## Motivation: What is this and Why ?

For aour admin app - We are currently using a mock development server running locally at port 4000, It may be an idea to have a dev server permanently deployed to a remote host, that has:

- GraphQL
- Database instead of mock api

## Current repo

It is a graphQL API server achieved with the tech stack:

- @apollo/server with express
- typescript with tsc transpiler into `dist/` directory for production
- PostgreSQL Database via Prisma ORM - which actually does all heavy lifting stuff (eg all one-to-many, many-to-many relationships related fetching)

## Possible future plan

At current stage - it is serving some dummy data, unrelated to our admin app - just a sa proof of concept
if the POC approved - it may be possible to create a development DB with dev/mock data for our Admin app followed up by update server's schema and resolvers accordingly.
