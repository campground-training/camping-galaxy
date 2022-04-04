# Camping!

Ok, this is getting somewhere. ;)

## Status Stuff

[![CI Build](https://github.com/campground-training/camping-galaxy/actions/workflows/nx-build.yml/badge.svg?branch=main)](https://github.com/campground-training/camping-galaxy/actions/workflows/nx-build.yml)

## Docker

You will no longer need any Docker images running locally for this to work.

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

Creating a new user causes a bad gateway thing on the redirect. We could fix it but we are going to add an onboarding thing anyhow.

Remember if you add a user, it will disappear when you remove and restart the docker image.

Let's chat and talk about it soon.
