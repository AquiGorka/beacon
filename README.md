# Beacon

> https://www.notion.so/axleapi/Beacon-Front-End-Take-Home-de15076acad0462d8ebcf99e98efec62

## Installing

1. Check if your `Node.js` version is >= **14**.
2. Change or configurate the name of your extension on `src/manifest`.
3. Run `npm install` to install the dependencies.

## Developing

Run the following commands:

```shell
$ cd beacon

$ npm run dev
```

### Chrome Extension Developer Mode

1. set your Chrome browser 'Developer mode' up
2. click 'Load unpacked', and select `beacon/build` folder

### Nomal FrontEnd Developer Mode

1. access `http://0.0.0.0:3000/sidepanel.html`

## Packing

After the development of your extension run the command:

```shell
$ npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.
