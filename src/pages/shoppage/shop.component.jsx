import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss'
import { useSelector } from 'react-redux'
import { selectCollections } from '../../redux/ducks/shopDucks'

const ShopPage = () => {
    const collections = useSelector(selectCollections);
    console.log(collections);
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