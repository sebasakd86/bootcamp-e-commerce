import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { DirectoryContext } from "../../providers/directory/directory.provider";
import { useContext } from "react";

const Directory = () => {
    const { sections } = useContext(DirectoryContext);
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>
    );
};
export default Directory;
