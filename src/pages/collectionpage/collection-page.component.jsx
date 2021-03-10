import "./collection-page.styles.scss";
import { useSelector } from 'react-redux'
import { selectCollection } from "../../redux/ducks/shopDucks";


const CollectionPage = ({ match }) => {
    const collection = useSelector(selectCollection(match.params.collectionId))
    console.log(collection);
    return (
        <div className='category'>
            <h2>{match.params.collectionId}</h2>
        </div>
    );
};

export default CollectionPage;
