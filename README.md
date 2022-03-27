# Camping!

Ok, this is getting somewhere. ;)

## Docker

The only thing you'll need to run with docker right now is the KeyCloak auth server.

```shell
docker run -p 8080:8080 jeffrygonzalez/camping-keycloak-dev:v0.3
```

This takes a _while_ to start up. And the app won't run until it does. Watch the output of the docker run. Go get a mountain dew or something.

## The App

The app is in an nx workspace.

Go into the workspace and run `npm install`.

Install the extensions that are suggested.

You can run the thing by doing:

```shell
npx nx run-many --target=serve --all=true
```

It'll be at `http://localhost:4200`

I (we?) have a lot to do.

If you want to log in, the user is `bob@aol.com` and the password is `TokyoJoe138!`. I have it set to allow you to register a new user through the keycloak UI, but we won't leave that. We'll have an onboarding thing.

Remember if you add a user, it will disappear when you remove and restart the docker image.

Let's chat and talk about it soon.
