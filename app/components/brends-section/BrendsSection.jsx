import { Button, Container, Description, DisplayDiv, Heading, Navbar, P, SmallDiv } from '@/app/styled-components'
import Image from 'next/image'
import React from 'react'

const BrendsSection = () => {
    const smallDiv = [
        {
            image: './easy.svg',
            title: 'EASY',
            description: 'Use it 10-12 minutes per day'
        },
        {
            image: './quick.svg',
            title: 'QUICK',
            description: 'Improvement as soon as 3 weeks*'
        },
        {
            image: './effective.svg',
            title: 'EFFECTIVE',
            description: '90%+ experience results*'
        },
        {
            image: './natural.svg',
            title: 'NATURAL',
            description: 'Noninvasive and hormone-free'
        },
        {
            image: './app-enabled.svg',
            title: 'APP-ENABLED',
            description: 'Log, Track, Manage and Learn'
        },

    ]
    return (
        <Container>
            <Navbar>
                <img src="./allure.svg" alt="" />
                <img src="./inc.svg" alt="" />
                <img src="./goop.svg" alt="" />
                <img src="./newbeauty.svg" alt="" />
                <img src="./vogue.svg" alt="" />
            </Navbar>
            <Navbar>
                <Image
                    src='/qoraqiz.png'
                    width={530}
                    height={600}
                    alt='qora qiz'
                />
                <DisplayDiv>
                    <Heading $smaller>10 Minutes to Improved Vaginal Tone</Heading>
                    <Description $smaller>Improve your pelvic floor and sexual function</Description>
                    <P>Natural lubrication, better sensation, and a feeling of tightness, all thanks to vFit Gold’s red-light.</P>
                    <P> Lie back and relax as you enjoy the 10-minute, app guided vFit sessions in the privacy of your home. No doctors visit needed. Bonus: You’ll also become educated and empowered on your health as you improve your vaginal wellness.</P>
                    <P>Trusted by over 1,000 medical professionals, you can feel good knowing pleasure and confidence are possible again.</P>
                    <Button $tomato>how it works</Button>
                </DisplayDiv>
            </Navbar>
            <Navbar>
                {
                    smallDiv.map((info, index) =>
                        <SmallDiv key={index}>
                            <Image
                                src={info.image}
                                width={40}
                                height={40}
                                alt={info.title}
                            />
                            <Heading $small>{info.title}</Heading>
                            <P $small>{info.description}</P>
                        </SmallDiv>
                    )
                }
            </Navbar>

        </Container>
    )
}

export default BrendsSection