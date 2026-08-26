import { ElectronicsProductCardView } from '../accelerators/electronics/ElectronicsProductCardView';
import { PRODUCT_CARD_RENDERER, storefrontRendererRegistry } from '../rendering/storefrontRendererRegistry';
import { storefrontPageRendererRegistry } from '../rendering/storefrontPageRendererRegistry';
import { StorefrontPage } from '../pages/StorefrontPage';
storefrontRendererRegistry.register({ key: PRODUCT_CARD_RENDERER, layer: 'domain', domain: 'electronics', component: ElectronicsProductCardView });
storefrontRendererRegistry.register({ key: 'agora.electronics.product-card', layer: 'domain', domain: 'electronics', component: ElectronicsProductCardView });
storefrontPageRendererRegistry.register({ key: 'agora.electronics.page.home', layer: 'domain', domain: 'electronics', component: StorefrontPage });
export const activeDomains = ['electronics'] as const;
