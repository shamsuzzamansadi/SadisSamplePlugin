import '../core/component/sadis-sample-plugin-cart-contains-bundle';

const { Application } = Shopware;

Application.addServiceProviderDecorator('ruleConditionDataProviderService', (ruleConditionService) => {
    ruleConditionService.addCondition('SadisSamplePluginContainsBundle', {
        component: 'sadis-sample-plugin-cart-contains-bundle',
        label: 'sw-condition.condition.cartContainsBundle.label',
        scopes: ['cart']
    });

    return ruleConditionService;
});
