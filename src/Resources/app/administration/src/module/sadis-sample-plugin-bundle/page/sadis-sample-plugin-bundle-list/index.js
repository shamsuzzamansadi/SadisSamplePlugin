import template from './sadis-sample-plugin-bundle-list.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('sadis-sample-plugin-bundle-list', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            repository: null,
            bundles: null
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return [{
                property: 'name',
                dataIndex: 'name',
                label: this.$t('sadis-sample-plugin-bundle.list.columnName'),
                routerLink: 'sadis-sample-plugin.bundle.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true
            }, {
                property: 'discount',
                dataIndex: 'discount',
                label: this.$t('sadis-sample-plugin-bundle.list.columnDiscount'),
                inlineEdit: 'number',
                allowResize: true
            }, {
                property: 'discountType',
                dataIndex: 'discountType',
                label: this.$t('sadis-sample-plugin-bundle.list.columnDiscountType'),
                allowResize: true
            }];
        }
    },

    created() {
        this.repository = this.repositoryFactory.create('sadis-sample-plugin_bundle');

        this.repository
            .search(new Criteria(), Shopware.Context.api)
            .then((result) => {
                this.bundles = result;
            });
    }
});
