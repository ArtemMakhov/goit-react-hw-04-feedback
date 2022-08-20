import styled from "styled-components";

export const List = styled.ul`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Item = styled.li`
 padding:${p => p.theme.space[3]}px;
 font-weight: ${p => p.theme.fontWeights.bold};
 font-size: ${p => p.theme.fontSizes.m};
 line-height: ${p => p.theme.lineHeights.body};
`;

