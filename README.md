# Tan+Cheek Shopify Theme

The scripts are currently configured to update the Active theme on https://tan-cheek.myshopify.com/

## Getting started

1. Install [Shopify Theme Kit](https://shopify.github.io/themekit/)
1. Get the config details on [Dashlane Secure Notes - Tan+Cheek](https://www.dashlane.com/)
1. Use `npm i` to install any necessary dependencies to run the project

## Pull Production

To download all the latest version of the theme from the production environment run the [following script](https://shopify.dev/themes/tools/theme-kit/getting-started#step-4-set-up-your-config-file)

> The private keys/variable can be found in the [Dashlane Secure Notes - Tan+Cheek](https://www.dashlane.com/)

```bash
theme get --password="[your-password]" --store="[your-store.myshopify.com]" --themeid="[your-theme-id]"
```

## Development Mode

To automatically upload your changes to Shopify use `npm start` on terminal.
