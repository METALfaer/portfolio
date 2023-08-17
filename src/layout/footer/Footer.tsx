import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';

const socialItemData = [
    {iconId: 'React'},
    {iconId: 'React'},
    {iconId: 'React'},
    {iconId: 'React'},
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>
                    Ruslan
                </S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return (
                            <S.SocialItem>
                                <S.SocialLink>
                                    <Icon
                                        key={index}
                                        iconId={s.iconId}
                                        height={'21px'}
                                        width={'21px'}
                                        viewBox={'0 0 21px 21px'}/>
                                </S.SocialLink>
                            </S.SocialItem>)
                    })}

                    {/*<SocialItem>
                        <SocialLink>
                            <Icon iconId={'React'}
                                  height={'21px'}
                                  width={'21px'}
                                  viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'React'}
                                  height={'21px'}
                                  width={'21px'}
                                  viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'React'}
                                  height={'21px'}
                                  width={'21px'}
                                  viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'React'}
                                  height={'21px'}
                                  width={'21px'}
                                  viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>*/}
                </S.SocialList>
                <S.Copyright>
                    © 2023 Svetlana Dyablo, All Rights Reserved.
                </S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};

/*const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
   
  }
`

const Name = styled.span`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 22,
    Fmin: 16
})};
  /!*font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px;*!/
  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`
const SocialItem = styled.li`

`*/
