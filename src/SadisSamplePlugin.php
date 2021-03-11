<?php declare(strict_types=1);

namespace SadisSamplePlugin;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\DataAbstractionLayer\Indexing\EntityIndexerRegistry;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;


class SadisSamplePlugin extends Plugin
{
    // this function is going to do something when it is activated
    public function activate(ActivateContext $activateContext): void
    {
        $registry = $this->container->get(EntityIndexerRegistry::class);
        $registry->sendIndexingMessage(['product.indexer']);

        $authorName = $this->container->getParameter("sadiz_smaple_plugin.author.name");

        var_dump($authorName);
    }

    //this function is uninstal function for the plugin
    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);

        if ($context->keepUserData()) {
            return;
        }

        //need to do something more? I do not know yet
        $connection = $this->container->get(Connection::class);

        $connection->executeUpdate('DROP TABLE IF EXISTS `sadis-sample-plugin_bundle_product`');
        $connection->executeUpdate('DROP TABLE IF EXISTS `sadis-sample-plugin_bundle_translation`');
        $connection->executeUpdate('DROP TABLE IF EXISTS `sadis-sample-plugin_bundle`');
        $connection->executeUpdate('ALTER TABLE `product` DROP COLUMN `bundles`');
    }
}