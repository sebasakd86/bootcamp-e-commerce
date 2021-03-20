import styled, { css } from "styled-components";

const CSSInput = css`
    color: black;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`;
const CSSShrink = css`
    @mixin {
        top: -14px;
        font-size: 12px;
        color: $main-color;
    }
`;

export const FormInputGroup = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const FormInputGroupInput = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;
    &:focus {
        outline: none;
    }
    &:focus ~ label {
        @include ${CSSShrink};
    }
`;
export const FormInputGroupLabel = styled.label`
    ${CSSInput}
`;
export const FormInputGroupLabelShrink = styled.label`
    ${CSSInput}
    ${CSSShrink}
`;
