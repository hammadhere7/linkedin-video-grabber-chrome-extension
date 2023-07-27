<img src="src/assets/img/icon128.png" width="64"/>

# LinkedIn Video Grabber Chrome Extension With React

An extension to download LinkedIn videos in your home feed. On each video you can see the download icon and clicking on that icon will download the video to your computer. You can then share that downloaded video (.mp4) via email, WhatsApp etc.

### Development Tools

This extension is open source, you can fork this repository and make your own chrome extension in React. The extension uses: 

- React 
- Webpack Server for bundling and development


## Customisation Guide

### Installation

1. Check if your [Node.js](https://nodejs.org/) version is >= **18**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:

   - Access `chrome://extensions/`
   - Check `Developer mode`
   - Click on `Load unpacked extension`
   - Select the `build` folder.


## Structure of Source Code

You are free to modiy the extension code in any way. But be sure that all your extension's code must be placed in the `src` folder. Please all your extension source code inside this folder. 

## Webpack auto-reload and HRM

To make your workflow much more efficient this boilerplate uses the [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) to development (started with `npm start`) with auto reload feature that reloads the browser automatically every time that you save some file in your editor.

You can run the dev mode on other port if you want. Just specify the env var `port` like this:

```
$ PORT=6002 npm run start
```

## Content Scripts

Although this boilerplate uses the webpack dev server, it's also prepared to write all your bundles files on the disk at every code change, so you can point, on your extension manifest, to your bundles that you want to use as [content scripts](https://developer.chrome.com/extensions/content_scripts).
## Packing

After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Resources:

- [Webpack documentation](https://webpack.js.org/concepts/)
- [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted)

---

Hammad Rasheed | [Website](https://github.com/hammadhere7)
