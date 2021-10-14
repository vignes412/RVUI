import React from 'react'
import './Button.module.css'
import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: String;
  onClick?: () => void;
  theme: Theme;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  label,
  theme = {
    backGroundColor: "#1ea7fd",
    fontColor: "#fff",
    border: "1px solid black"
  },
  ...props
}: ButtonProps) => {
  const PrimaryButton = styled.button`
    background-color: ${(props) => theme.backGroundColor};
    font-size: 32px;
    color: white;
  `
  const SecondaryButton = styled.button`
    background-color: ${(props) => theme.backGroundColor};
    font-size: 32px;
    color: white;
  `
  const StyledButton = primary ? PrimaryButton : SecondaryButton
  return (
    <StyledButton type='button' {...props}>
      {label}
    </StyledButton>
  )
}
