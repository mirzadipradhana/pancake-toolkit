import { FlexProps } from "../Box";
import { DropdownMenuItemType } from "../DropdownMenu/types";

export type SubMenuItemsType = {
  label: string;
  href: string;
  type?: DropdownMenuItemType;
};

export interface SubMenuItemsProps extends FlexProps {
  items: SubMenuItemsType[];
  activeItem?: string;
}
