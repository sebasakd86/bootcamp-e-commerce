import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
`;
export const CollectionItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    &:hover {
        opacity: 0.8;
    }
`;

export const CollectionItemFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 10px;
`;
export const CollectionItemNameSpan = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;
export const CollectionItemPriceSpan = styled.span`
    width: 10%;
`;
export const CollectionItemButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;

    &:hover {
        opacity: 0.85;
        display: flex;
    }
`;
