# Apache OzHera(Incubating) Site

This is a repository of [Apache OzHera(Incubating) website](https://ozhera.apache.org).
The repository of Apache OzHera(Incubating) can be found [here](https://github.com/apache/ozhera).

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
## deploy

merge code to **preview** branch, Visit https://ozhera.staged.apache.org/.

merge code to **asf-site** branch, Visit https://ozhera.apache.org/en/. Note that not everyone has permission to merge code into the asf-site branch.
