import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Rectangle-14s.webp'
import timer from '../../../assets/images/Rectangle-14.webp'

const worksItems = ['All', 'lending page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Work</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'}
                      text={'wwwwwwwwwwwwww'}
                      src={socialImg}
                />
                <Work title={'Timer'}
                      text={'oooooooooooooooooo'}
                      src={timer}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #feefff;
   
`
