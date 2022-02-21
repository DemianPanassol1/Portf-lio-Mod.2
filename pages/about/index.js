import React, { useContext } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { languageContext } from '../../contexts/LanguageProvider/context';
import about from '../../public/img/png/foto_sobre.png';

function AboutPage() {
    const { eng } = useContext(languageContext);

    const key1 = eng ? 1 : 0;
    const key2 = eng ? 2 : 3;
    const key3 = eng ? 4 : 5;
    const key4 = eng ? 6 : 7;
    const key5 = eng ? 8 : 9;
    const key6 = eng ? 10 : 11;
    const key7 = eng ? 12 : 13;

    return (
        <AnimatePresence initial={false}>
            <main
                className='px-4 lg:px-8 xl:px-4 mx-auto max-w-7xl'
            >
                <div className='text-center mt-10 mb-8 md:mt-16 md:mb-12 xl:mt-20 xl:mb-16'>
                    <motion.h2
                        key={key1}
                        initial='initial'
                        animate='animate'
                        transition={transition}
                        variants={variants}
                        className='xl:text-h2xl'
                    >
                        {eng ? 'About me' : 'Sobre mim'}
                    </motion.h2>

                    <span className='block w-64 h-[2px] mx-auto bg-secondary my-4'></span>

                    <motion.p
                        key={key2}
                        initial='initial'
                        animate='animate'
                        transition={transition}
                        variants={variants}
                    >
                        {eng ? 'A little about me and what I do' : 'Um pouco sobre mim e o que faço'}
                    </motion.p>
                </div>

                <div className='flex flex-col lg:flex-row-reverse xl:max-w-[996px] mx-auto'>
                    <div className='relative mx-auto w-[260px] h-[265px] md:w-[324px] md:h-[331px] xl:w-[376px] xl:h-[384px]'>
                        <Image
                            src={about}
                            layout={'fill'}
                            objectFit={'cover'}
                            objectPosition={'bottom'}
                            priority
                            alt={eng ? 'A picture of myself' : 'Uma foto de perfil minha'}
                        />
                    </div>

                    <section className='flex-1 mt-10 lg:mr-4 lg:mt-0 xl:mr-8'>
                        <motion.h4
                            key={key3}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className='mb-6 xl:text-h4xl'
                        >
                            {eng ? "I'm Demian..." : 'Meu nome é Demian...'}
                        </motion.h4>

                        <motion.p
                            key={key4}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className='mb-4'
                        >
                            {eng ? "I'm 21 years old and I've been working as a web and mobile developer for over a year. Although I started programming at 12 and got involved in technology since then, it was only in the midst of the Corona virus pandemic that I decided to focus my career on this sector." : 'Tenho 21 anos e trabalho como desenvolvedor web e mobile por mais de um ano. Apesar de começar a programar aos 12 e me envolver na área da tecnologia desde então, foi só em meio a pandemia do Corona vírus que decidi focar minha carreira nesse setor.'}
                        </motion.p>

                        <motion.p
                            key={key5}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className='mb-4'
                        >
                            {eng ? "It might have been a reckless (even a little stupid) move, but I don't regret it for a second. I like to study and learn, and this is an ideal job market for that. Besides, nothing makes me happy than knowing that there is still so much more to explore." : 'Pode ter sido uma ação imprudente (até mesmo um pouco estúpida), mas não me arrependo nem por um segundo. Gosto de estudar e aprender, e esse é um ramo do mercado de trabalho ideal para isso. Além do mais, nada me faz feliz do que saber que há ainda muito mais a ser explorado.'}
                        </motion.p>

                        <motion.p
                            key={key6}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className='mb-4'
                        >
                            {eng ? 'Developer primarily focused on JavaScript, I have extensive knowledge of React, NextJS and React Native, in addition to several other libraries and frameworks. I also have backend knowledge with NodeJS and MongoDB as a database.' : 'Desenvolvedor focado primariamente em JavaScript, tenho extenso conhecimento em React, NextJS e React Native, além de diversas outras bibliotecas e frameworks. Também possuo conhecimento em back-end com NodeJS e MongoDB como banco de dados.'}
                        </motion.p>

                        <motion.p
                            key={key7}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className='mb-24'
                        >
                            {eng ? 'I always like to learn new technologies to apply them in my projects. Dedicated and hardworking, JavaScript for me is an excellent tool within the job market, both because of its practicality and scope in the Web world.' : 'Gosto sempre de aprender novas tecnologias para aplicá-las em meus projetos. Dedicado e esforçado, JavaScript para mim é uma excelente ferramenta dentro do mercado de trabalho, tanto devido sua praticidade e abrangência no mundo Web.'}
                        </motion.p>
                    </section>
                </div>
            </main>
        </AnimatePresence>
    );
};

export default AboutPage;

const variants = {
    initial: {
        translateX: -100,
        opacity: 0
    },
    animate: {
        translateX: 0,
        opacity: 1
    }
};

const transition = {
    duration: .4
};