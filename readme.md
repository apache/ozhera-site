# Ozhera Site

This is a repository of [Apache ozhera website](https://ozhera.apache.org).
The repository of Apache ozhera can be found [here](https://github.com/apache/ozhera).

To get in touch with us please use the dev@ozhera.apache.org mailing list.

# Environment setup

This website use [vitepress](https://vitepress.dev/guide/what-is-vitepress), you need to install the following runtime environment:

- [Node.js](https://nodejs.org/)，v18 or above.
- install pnpm

```bash
npm install -g pnpm
```

# Getting started

## install dependencies
```bash
pnpm install
``` 

## local debugging

```bash
pnpm run docs:dev
```

## build

```bash
pnpm run docs:build
```
