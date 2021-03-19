import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { selectDirectorySection } from "../../redux/ducks/directoryDucks";
import { DirectoryContainer } from "./directory.style";

const Directory = () => {
    const sections = useSelector(selectDirectorySection);
    return (
        <DirectoryContainer>
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </DirectoryContainer>
    );
};
export default Directory;
