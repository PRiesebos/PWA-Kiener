module.exports = {
    pwa: {
        themeColor: "#1e1e1e",
        name: "PWA-Webshop",

        // configure the workbox plugin
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: "src/firebase-messaging-sw.js",
        },
    },
};
