import styled from "styled-components";
import { Flex, FlexProps } from "../Box";

interface StyledSubMenuItems extends FlexProps {
  isHasSubItems?: boolean
}

const StyledSubMenuItems = styled(Flex)<StyledSubMenuItems>`
  background-color: ${({ theme }) => `${theme.colors.backgroundAlt2}`};
  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);
  ${({ isHasSubItems }) => isHasSubItems ? `height: 60px;` : ''}
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledSubMenuItems;
