import { AnchorHTMLAttributes } from "react";
import { Colors } from "../../theme";
import { TextProps } from "../Text";

export type MenuItemVariant = "default" | "subMenu";

export interface MenuItemProps {
  isActive?: boolean;
  href: string;
  variant?: MenuItemVariant;
  statusColor?: keyof Colors;
}

export interface ExternalMenuItemProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  isActive?: boolean;
  href: string;
  variant?: MenuItemVariant;
  statusColor?: keyof Colors;
}

export type StyledMenuItemProps = {
  $isActive?: boolean;
  $variant?: MenuItemVariant;
  $statusColor?: keyof Colors;
};
