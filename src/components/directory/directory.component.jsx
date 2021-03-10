import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from 'react-redux';
import { selectDirectorySection } from '../../redux/ducks/directoryDucks'
import './directory.styles.scss'

const Directory = () => {
  const sections = useSelector(selectDirectorySection);  
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)
      }
    </div>
  );
}
export default Directory;