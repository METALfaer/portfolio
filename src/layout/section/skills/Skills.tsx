import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                My Skills
            </SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'React'} title={'html5'}
                       description={'oooooooooooooooooooo'}/>
                <Skill iconId={'React'} title={'css'}
                       description={'ffffffffffffffffffffffffff'}/>
                <Skill iconId={'React'} title={'React'}
                       description={'fwwwwwwwwwwwwwwwwww'}/>
                <Skill iconId={'React'} title={'React'}
                       description={'rrrrrrrrrrrrrrrrrrrrrr'}/>
                <Skill iconId={'React'} title={'React'}
                       description={'tttttttttttttttttttttttttttt'}/>
                <Skill iconId={'React'} title={'React'}
                       description={'yyyyyyyyyyyyyyyyyyyyyyyyyyy'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
background-color: yellow;
min-height: 100vh;
`