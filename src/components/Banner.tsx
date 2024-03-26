import styled from 'styled-components';
import img from '../assets/image-2.jpg';


export const Banner = styled.div`
    height: 70vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), ${`url(${img})`};
    background-size: cover;
    background-position: center;   
    `