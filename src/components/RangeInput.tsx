import React from 'react'
import styled from 'styled-components/macro'

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1rem;
  background: ${({ theme }) => theme.textSecondary};
  outline: none;
  border-radius: 25px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    background: ${({ theme }) => theme.accent};
    cursor: pointer;
    border-radius: 50%;
  }
`

interface RangeInputProps {
  value: number | string
  min: string
  max: string
  step: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RangeInput: React.FC<RangeInputProps> = ({
  value,
  min,
  max,
  step,
  onChange
}) => (
  <Input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={onChange}
  />
)
