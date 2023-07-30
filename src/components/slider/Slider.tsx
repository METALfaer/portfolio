import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>WWWWWWWWWWWWWWWWWWWW</Text>
                    <Name>Name Names</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border:1px solid red;
    max-width: 500px;
    display: flex;
    flex-derection: column;
    align-items: center
`

const Slide = styled.div`
text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`

`

const Pagination = styled.span`
    span{
        display:    inline-block;
        width:  10px;
        height: 10px;
        margin: 5px;
        background-color: lightpink;
    }
`
