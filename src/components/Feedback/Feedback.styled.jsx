import styled from "styled-components";

export const Btn = styled.button`
    font-size: ${p => p.theme.fontSizes.m};
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.sm};
    transition: transform 500ms ease 0s;
    padding: ${p => p.theme.space[3]}px;
    cursor: pointer;

    :hover{
        background-color: ${p => p.theme.colors.secondary};
        color: ${p => p.theme.colors.background};
    }
`;