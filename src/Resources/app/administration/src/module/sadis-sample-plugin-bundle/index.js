import './page/sadis-sample-plugin-bundle-list';
import './page/sadis-sample-plugin-bundle-detail';
import './page/sadis-sample-plugin-bundle-create';
import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

const { Module } = Shopware;

Module.register('sadis-sample-plugin-bundle', {
    type: 'plugin',
    name: 'Bundle',
    title: 'sadis-sample-plugin-bundle.general.mainMenuItemGeneral',
    description: 'sw-property.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        list: {
            component: 'sadis-sample-plugin-bundle-list',
            path: 'list'
        },
        detail: {
            component: 'sadis-sample-plugin-bundle-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sadis-sample-plugin.bundle.list'
            }
        },
        create: {
            component: 'sadis-sample-plugin-bundle-create',
            path: 'create',
            meta: {
                parentPath: 'sadis-sample-plugin.bundle.list'
            }
        }
    },

    navigation: [{
        label: 'sadis-sample-plugin-bundle.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'sadis-sample-plugin.bundle.list',
        icon: 'default-shopping-paper-bag-product',
        position: 100
    }]
});