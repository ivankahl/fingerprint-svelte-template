# Fingerprint Svelte Template

This template repository is used to demonstrate how to add Fingerprint to a Svelte application to prevent users from registering an excessive number of accounts for a web app.

## Getting Started

Clone this repository and install the dependencies using this command:

```shell
npm i
```

You'll need a Postgres database to store user details. You can use Docker to host one locally using the following command:

```shell
docker run --name svelte-postgres -p 5432:5432 -e POSTGRES_PASSWORD=verysecurepassword -e POSTGRES_DB=svelte -d postgres
```

Copy the `.env.example` file and call it `.env`. Then, update the database details in that file:

```
DB_HOST=<YOUR_DB_HOST>
DB_PORT=<YOUR_DB_PORT>
DB_NAME=<YOUR_DB_NAME>
DB_USER=<YOUR_DB_USER>
DB_PASSWORD=<YOUR_DB_PASSWORD>
```

Once you've configured the database in the app, use the following command to run the Drizzle ORM migrations:

```shell
npm run push
```

Then, start the application using the following command:

```shell
npm run dev
```

## Technologies

The web app is built using Svelte and SvelteKit. In addition to that:

- **Drizzle ORM** is used to access the Postgres database
- **Lucia** is used to manage auth
- **Skeleton** and **Tailwind** are used to build the UI
