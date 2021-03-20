// import "./home.styles.scss";
import Directory from "../../components/directory/directory.component";
import { DirectoryProvider } from "../../providers/directory/directory.provider";
import HomePageContainer from "./homepage.styles";
const HomePage = () => {
    return (
        <HomePageContainer>
            <DirectoryProvider>
                <Directory />
            </DirectoryProvider>
        </HomePageContainer>
    );
};

export default HomePage;
