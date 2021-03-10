import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/ducks/shopDucks';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss'
const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview)
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    );
}
 
export default CollectionsOverview;