import type { ProductCardViewProps } from '../../components/ProductCardView';
import { CommerceProductCardView } from '../../commerce/components/CommerceProductCardView';

export function ElectronicsProductCardView(props: ProductCardViewProps) {
  const specification = props.product.electronics?.specifications ?? {};
  return <CommerceProductCardView {...props} domainDetails={<p className="muted" data-domain-renderer="electronics">{[props.product.electronics?.modelNumber, specification.storage, specification.memory].filter(Boolean).join(' · ')}</p>} />;
}
