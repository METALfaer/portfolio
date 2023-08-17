import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';

const skillData = [
    {
        iconId: 'React',
        title: 'html5',
        description: 'oooooooooooooooooooo',
    },
    {
        iconId: 'React',
        title: 'css',
        description: 'ffffffffffffffffffffffffff',
    },
    {
        iconId: 'React',
        title: 'React',
        description: 'fwwwwwwwwwwwwwwwwww',
    },
    {
        iconId: 'React',
        title: 'React',
        description: 'rrrrrrrrrrrrrrrrrrrrrr',
    },
    {
        iconId: 'React',
        title: 'React',
        description: 'tttttttttttttttttttttttttttt',
    },
    {
        iconId: 'React',
        title: 'React',
        description: 'yyyyyyyyyyyyyyyyyyyyyyyyyyy',
    }
]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((skill, index) => {
                        return <Skill
                            key={index}
                            iconId={skill.iconId}
                            title={skill.title}
                            description={skill.description}/>
                    })}
                    {/*<Skill iconId={'React'} title={'html5'}
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
                           description={'yyyyyyyyyyyyyyyyyyyyyyyyyyy'}/>*/}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

