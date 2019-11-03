module.exports = {
    title: 'Goyave',
    description: 'An Elegant Golang Web Framework',
    dest: '../docs',
    base: '/goyave/',
    head: [
        ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: `/goyave_16.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: `/goyave_32.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "64x64", href: `/goyave_64.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "128x128", href: `/goyave_128.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "256x256", href: `/goyave_256.png` }],
        ['link', { rel: 'icon', type: "image/png", sizes: "512x512", href: `/goyave_512.png` }],
    ],
    themeConfig: {
        repo: 'System-Glitch/goyave',
        editLinks: true,
        docsDir: 'docs_src/src',
        smoothScroll: true,
        logo: '/goyave_64.png',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/guide/': getGuideSidebar(),
                }
            }
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
    ],
    extraWatchFiles: [
        '.vuepress/nav/en.js',
    ]
    
}

function getGuideSidebar () {
    return [
        {
            title: 'Guide',
            collapsable: true,
            children: [
                '',
                'installation',
                'upgrade-guide',
                'configuration',
                'contribution-guide',
                'architecture-concepts',
                'deployment',
            ]
        },
        {
            title: 'The Basics',
            collapsable: true,
            children: [
                'basics/routing',
                'basics/middlewares',
                'basics/requests',
                'basics/controllers',
                'basics/database',
                'basics/responses',
                'basics/validation',
            ]
        },
        {
            title: 'Advanced',
            collapsable: true,
            children: [
                'advanced/helpers',
                'advanced/authentication',
                'advanced/localization',
                'advanced/testing',
                'advanced/plugins',
            ]
        }
    ]
}