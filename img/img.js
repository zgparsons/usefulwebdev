const captureWebsite = require('capture-website');

const options = {
    width: 1800,
    height: 900,
    overwrite: true,
    // add css selectors to set 'visibility:hidden'
    hideElements: [
        '#qc-cmp2-ui',
        '.sc-VigVT',
        '.grid-item--ad'
    ]
};

process.setMaxListeners(0);

// When adding a new post add url and filename to
// this array, run code ('node img.js') and rebuild site
const items = [
    ['https://bulma.io/', 'bulma'],
    ['https://deno.land/', 'deno'],
    ['https://eleventy-base-blog.netlify.app/', 'eleventy-base-blog'],
    ['https://www.11ty.dev/', 'eleventy'],
    ['https://www.flaticon.com/', 'flat-icon'],
    ['https://fontawesome.com/', 'font-awesome'],
    ['https://git-scm.com/', 'git'],
    ['https://github.com/', 'github'],
    ['https://www.happyhues.co/', 'happy-hues'],
    ['https://htmlhead.dev/', 'html-head'],
    ['https://htmlcolorcodes.com/', 'html-color-codes'],
    ['https://hylia.website/', 'hylia'],
    ['https://javascript.info/', 'javascript-info'],
    ['https://developer.mozilla.org/en-US/', 'mdn-web-docs'],
    ['https://www.netlify.com/', 'netlify'],
    ['https://nodejs.org/en/', 'node'],
    ['https://www.notion.so/', 'notion'],
    ['https://www.npmjs.com/', 'npm'],
    ['https://mozilla.github.io/nunjucks/', 'nunjucks'],
    ['https://sass-lang.com/', 'sass'],
    ['https://simpleicons.org/', 'simple-icons'],
    ['https://code.visualstudio.com/', 'vs-code']
    // ...
];

(async () => {
    await Promise.all(items.map(([url, filename]) => {
        return captureWebsite.file(url, `${filename}.png`, options);
    }));
})();