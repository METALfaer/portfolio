import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Rectangle-14s.webp'
import timer from '../../../assets/images/Rectangle-14.webp'
import {Container} from "../../../components/Container";

const worksItems = ['All', 'lending page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Work</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work title={'Social Network'}
                          text={'wwwwwwwwwwwwww'}
                          src={socialImg}
                    />
                    <Work title={'Timer'}
                          text={'oooooooooooooooooo'}
                          src={timer}
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

   
`
