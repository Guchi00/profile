import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Parent = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: right;
  border: solid 1px grey;
  background-color: #f5efe0;
`;

export const MenuItem = styled(Link)`
  padding: 10px 20px;
  color: #000;
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  &:hover {
    color: #d70b28;
    text-decoration:  underline;
  }
`;

export const MenuItemContact = styled(Link)`
  padding: 10px 20px;
  color: #000;
  font-size: 13px;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin-right: 50px;
  border-left: 1px solid #d70b28;
  height: 15px;
  &:hover {
    color: #d70b28;
    text-decoration:  underline;
  }
`;