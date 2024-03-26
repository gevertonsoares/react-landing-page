import styled from 'styled-components';

interface ContactProps {
    $display: 'flex' | 'block';
    $alignItems?: 'center' | 'start' | 'end';
    $justifyContent?: 'center' | 'start' | 'end' | 'space-evenly' | 'space-around'| 'space-between';
    $direction?: 'row' | 'column';
    $reverse?: boolean;
    $fluid?: boolean;
    $wrap?: boolean;
    $height?: '200px' | '300px' | '400px';
}

export const Contact = styled.div<ContactProps>`
    color: white;
    background-color: rgb(36, 36, 36);
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$reverse ? `${props.$direction}-reverse`: props.$direction};
    align-items: ${(props) => props.$alignItems ?? 'stretch'};
    justify-content: ${(props) => props.$justifyContent ?? 'start'};
    max-width: ${(props) => props.$fluid ? '100%' : '1140px'};
    flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
    margin: 0 auto;
    height: ${(props) => props.$height};
`;