import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const spanWidth = css`
    width: 23%;
`;

export const CheckoutItemSpanNombre = styled.span`
    ${spanWidth}
`;
export const CheckoutItemSpanQuantity = styled.span`
    ${spanWidth}
    padding-left: 20px;
    display: flex;
`;

const arrow = css`
    cursor: pointer;
`;
export const CheckoutItemArrow = styled.div`
    ${arrow}
`;

export const CheckoutItemSpanValue = styled.div`
    margin: 0 10px;
`;

export const CheckoutItemSpanPrice = styled.span`
    ${spanWidth}
`;
export const CheckoutItemRemove = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
