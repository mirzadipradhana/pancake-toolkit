import React from "react";
import styled, { keyframes } from "styled-components";
import SpinnerIcon from "./SpinnerIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingSpinnerIcon = styled(SpinnerIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 256 }) => {
  return (
    <Container>
      <FloatingSpinnerIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
