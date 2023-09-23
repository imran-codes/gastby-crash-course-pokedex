import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Search = styled.input`
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
