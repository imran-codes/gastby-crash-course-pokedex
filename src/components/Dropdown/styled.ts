import styled from "styled-components"

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const Option = styled.option`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
`
