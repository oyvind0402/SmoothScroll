import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, SignUpLink, BtnWrap, ImgWrap, Img } from './SignUpElements'


const SignUpSection = () => {
        const src = require('../../images/svg-3.svg').default;
        const alt = 'Card';

        return (
        <>
            <InfoContainer id="signup">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Join our team</TopLine>
                                <Heading>Creating an account is extremely easy</Heading>
                                <Subtitle>Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.</Subtitle>
                                <BtnWrap>
                                    <SignUpLink to="/signin"
                                    smooth={ true }
                                    duration={ 500 }
                                    spy={ true }
                                    exact="true"
                                    offset={ -80 }
                                    >Start Now
                                    </SignUpLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={ src } alt={ alt }/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SignUpSection