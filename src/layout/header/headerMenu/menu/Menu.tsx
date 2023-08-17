import React from 'react';
import {S} from './../HeaderMenu_Styles'

export const Menu: React.FC<{ menuItems: Array<string> }> = (
    props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {
                props.menuItems.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.Link href="">
                            {item}
                            <S.Mask>
                                <span> {item}</span>
                            </S.Mask>
                            <S.Mask>
                                <span> {item}</span>
                            </S.Mask>
                        </S.Link>
                    </S.MenuItem>
                })
            }
        </ul>
    );
};

/*const Link = styled.a`
   font-family: 'Josefin Sans', sans-serif;
   font-weight: 400;
   font-size: 30px;
   text-align: center;
   color: transparent;
 
`

const Mask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 50%;
   overflow-y: hidden;
   color: ${theme.colors.accent};
   
   &+& {
    top: 50%;
    span {
        display: inline-block;
        transform: translateY(-50%);
    }
   }
   
`

const ListItem = styled.li`
   position: relative;
   
   &::before{
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
   }
   
   &:hover{
        &::before{
        transform: scale(1);
        }
        ${Mask}{
            transform: skewX(12deg) translateX(1px);
            color: ${theme.colors.font};
   
            &+${Mask}{
                transform: skewX(12deg) translateX(-1px);
            }
        }
    }
`*/

