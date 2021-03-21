import { withRouter } from "react-router-dom";
import { Fragment } from "react";
import {
    MenuItemBackgroundImage,
    MenuItemContainer,
    MenuItemContainerLarge,
    MenuItemContent,
    MenuItemSubTitle,
    MenuItemTitle,
} from "./menu-item.styles";
import { ThemeProvider } from "styled-components";

const MenuItem = ({
    title,
    subtitle = "SHOP NOW",
    imageUrl,
    size,
    linkUrl,
    match,
    history,
}) => {
    const handleClick = (e) => history.push(`${match.url}${linkUrl}`);
    const renderComponent = () => {
        console.log(imageUrl);
        return (
            <Fragment>
                <MenuItemBackgroundImage imageUrl={imageUrl} />
                <MenuItemContent>
                    <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
                    <MenuItemSubTitle>{subtitle}</MenuItemSubTitle>
                </MenuItemContent>
            </Fragment>
        );
    };
    return (
        <Fragment>
            {size ? (
                <MenuItemContainerLarge onClick={handleClick}>
                    {renderComponent()}
                </MenuItemContainerLarge>
            ) : (
                <MenuItemContainer onClick={handleClick}>
                    {renderComponent()}
                </MenuItemContainer>
            )}
        </Fragment>
    );
};

export default withRouter(MenuItem); //Like this we have access to history
