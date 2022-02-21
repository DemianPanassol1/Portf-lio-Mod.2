import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { languageContext } from '../../contexts/LanguageProvider/context';

function Footer() {

    const { eng } = useContext(languageContext);

    const key1 = eng ? 20 : 21;

    return (
        <AnimatePresence initial={false}>
            <footer className='bg-primary'>
                <section className='flex flex-col items-center max-w-7xl mx-auto px-4 pt-10 pb-12 xl:flex-row-reverse xl:py-12'>
                    <div className='flex w-[220px] mx-auto justify-between mb-8 xl:mb-0 xl:mr-0'>
                        <a
                            href="https://www.linkedin.com/in/demian-panassol-malaguti-b15729202/"
                            target="_blank"
                            className='footer-item'
                        >
                            <i
                                className="fa-brands fa-linkedin-in text-white"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/demianpanassol/"
                            target="_blank"
                            className='footer-item'
                        >
                            <i
                                className="fa-brands fa-instagram text-white"
                            />
                        </a>
                        <a
                            href="https://github.com/DemianPanassol1"
                            target="_blank"
                            className='footer-item'
                        >
                            <i
                                className="fa-brands fa-github text-white"
                            />
                        </a>
                    </div>

                    <motion.p
                        key={key1}
                        initial='initial'
                        animate='animate'
                        transition={transition}
                        variants={variants}
                        className='text-secondary text-center text-base w-2/3 mx-auto xl:text-left xl:ml-0 xl:h-fit'
                    >
                        {eng ? <>CopyRight &copy; 2022. All Rights Reserved</> : <>CopyRight &copy; 2022. Todos os Direitos Reservados</>}
                    </motion.p>

                </section>
            </footer>
        </AnimatePresence>
    );
};

export default Footer;

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
};

const transition = {
    duration: .4
};