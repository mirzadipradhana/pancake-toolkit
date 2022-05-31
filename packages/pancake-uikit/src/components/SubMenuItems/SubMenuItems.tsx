import React from "react";
import { Box } from "../Box";
import { DropdownMenuItemType } from "../DropdownMenu/types";
import MenuItem from "../MenuItem/MenuItem";
import ExternalMenuItem from "../MenuItem/ExternalMenuItem";
import StyledSubMenuItems from "./styles";
import { SubMenuItemsProps } from "./types";

const SubMenuItems: React.FC<SubMenuItemsProps> = ({ items = [], activeItem, ...props }) => {
  
  return (
    <StyledSubMenuItems isHasSubItems={items.length > 0} justifyContent={["start", null, "center"]} {...props} pl={["12px", null, "0px"]}>
      {items.map(
        ({ label, href, type }) =>
          label && type === DropdownMenuItemType.EXTERNAL_LINK ? (
            <Box key={label} mr="20px">
              <ExternalMenuItem href={href} isActive={href === activeItem} variant="subMenu">
                {label}
              </ExternalMenuItem>
            </Box>
          ) : label && (
            <Box key={label} mr="20px">
              <MenuItem href={href} isActive={href === activeItem} variant="subMenu">
                {label}
              </MenuItem>
            </Box>
          )
      )}
    </StyledSubMenuItems>
  );
};

export default SubMenuItems;
