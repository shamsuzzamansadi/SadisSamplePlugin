<?php declare(strict_types=1);

namespace SadisSamplePlugin\Core\Content\Bundle;

use SadisSamplePlugin\Core\Content\Bundle\Aggregate\BundleProduct\BundleProductDefinition;
use SadisSamplePlugin\Core\Content\Bundle\Aggregate\BundleTranslation\BundleTranslationDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FloatField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslatedField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslationsAssociationField;


class BundleDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'sadis-sample-plugin_bundle';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    // since my entity definition doesn't know my entity class here we are introducing that
    // via getEntityClass
    public function getEntityClass(): string
    {
        return BundleEntity::class;
    }

    //for custom entity collection
    public function getCollectionClass(): string
    {
        return BundleCollection::class;
    }


    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            new TranslatedField('name'),
            (new StringField('discount_type', 'discountType'))->addFlags(new Required()),
            (new FloatField('discount', 'discount'))->addFlags(new Required()),
            new TranslationsAssociationField(BundleTranslationDefinition::class, 'sadis_sample_plugin_bundle_id'),
            new ManyToManyAssociationField('products', ProductDefinition::class, BundleProductDefinition::class, 'bundle_id', 'product_id'),
        ]);
    }
}