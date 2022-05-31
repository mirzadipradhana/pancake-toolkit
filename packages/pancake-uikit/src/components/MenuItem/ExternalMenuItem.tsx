import React from "react";
import { StyledExternalMenuItem, StyledMenuItemContainer } from "./styles";
import { ExternalMenuItemProps } from "./types";

const MenuItem: React.FC<ExternalMenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledExternalMenuItem as="a" href={href} $isActive={isActive} $variant={variant} $statusColor={statusColor} target="_blank" {...props}>
        {children}
      </StyledExternalMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
