import styled from 'styled-components';

interface ContainerProps {
    $display: 'flex' | 'block';
    $widht?: '200px' | '300px' | '400px';
    $height?: '200px' | '300px' | '400px';
    $alignItems?: 'center' | 'start' | 'end';
    $justifyContent?: 'center' | 'start' | 'end' | 'space-evenly' | 'space-around'| 'space-between';
    $direction?: 'row' | 'column';
    $reverse?: boolean;
    $fluid?: boolean;
    $wrap?: boolean;
    $gap?: '20px' | '10px'
    $padding?: '50px' | '100px'
}

export const Container = styled.div<ContainerProps>`
    background-color: rgb(212, 218, 224);
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$reverse ? `${props.$direction}-reverse`: props.$direction};
    align-items: ${(props) => props.$alignItems ?? 'stretch'};
    justify-content: ${(props) => props.$justifyContent ?? 'start'};
    max-width: ${(props) => props.$fluid ? '100%' : '1140px'};
    flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
    margin: 0 auto;
    height: ${(props) => props.$height};
    width: ${(props) => props.$widht};
    gap: ${(props) => props.$gap};
    padding: ${(props) => props.$padding};

    @media (min-width: 1140px) {
        justify-content: space-between;
    }
`;