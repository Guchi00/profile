import styled from "styled-components";
import { Link } from 'react-router-dom'; 

export const Parent = styled.div`
    background-color: #f5efe0;
`;

export const Text = styled.div`
    height: 500px;
    width: 60%;
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
`;

export const TextItemHello = styled.h6`
    font-size: 15px;
    margin: 0px;
    color: #d70b28;
    font-weight: 100;
`;

export const TextItemIam = styled.h1`
    color: black;
    font-size: 50px;
    margin: 0px;
`;

export const TextItemOccupation = styled.h1`
    font-family: 'Poppins', sans-serif;
    margin: 0px;
`;

export const TextItemIamDescription = styled.p`
//    font-size: 16px;
`;

export const DownloadCv = styled.div`
height: 30px;
width: 130px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;
background-color: #d70b28;
margin-top: 10px;
`;

export const DownloadCvItem = styled(Link)`
font-size: 12px;
text-decoration: none;
color: white;
font-family: 'Poppins', sans-serif;
`;


export const Image = styled.image`
    width: 40%;
`;
