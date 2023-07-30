import React from 'react';
import photo from '../../../assets/images/Ruslan.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi there</span>
                    <Name>I am Ruslan Konychev</Name>
                    <MainTitle>The Web Deweloper</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Name = styled.h2`

`

const MainTitle = styled.h1`

`

const StyledMain = styled.div`
min-height: 100vh;
background-color: lightblue
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;
`
