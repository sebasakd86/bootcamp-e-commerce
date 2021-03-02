import { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';
import './shop.styles.scss'

const ShopPage = () => {
    const [collections, setcollections] = useState(SHOP_DATA);
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    );
}

export default ShopPage;