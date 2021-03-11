const { Component } = Shopware;

Component.extend('sadis-sample-plugin-bundle-create', 'sadis-sample-plugin-bundle-detail', {
    methods: {
        getBundle() {
            this.bundle = this.repository.create(Shopware.Context.api);
        },

        onClickSave() {
            this.isLoading = true;

            this.repository
                .save(this.bundle, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.$router.push({ name: 'sadis-sample-plugin.bundle.detail', params: { id: this.bundle.id } });
                }).catch((exception) => {
                    this.isLoading = false;

                    this.createNotificationError({
                        title: this.$t('sadis-sample-plugin-bundle.detail.errorTitle'),
                        message: exception
                    });
                });
        }
    }
});
