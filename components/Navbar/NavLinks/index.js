import React, { memo, useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';

import { languageContext } from '../../../contexts/LanguageProvider/context';

function NavLinks() {
    const { asPath } = useRouter();

    const { eng } = useContext(languageContext);

    const [links, setLinks] = useState({ 1: true, 2: false, 3: false });

    useEffect(() => {
        asPath === '/' && setLinks({ 1: true, 2: false, 3: false });
        asPath === '/about' && setLinks({ 1: false, 2: true, 3: false });
        asPath === '/contact' && setLinks({ 1: false, 2: false, 3: true });
    }, [asPath, setLinks]);

    const key1 = eng ? 14 : 15;
    const key2 = eng ? 16 : 17;
    const key3 = eng ? 18 : 19;

    return (
        <AnimatePresence initial={false}>
            <ul className='flex flex-1 justify-evenly py-12 lg:justify-between lg:max-w-xs lg:py-16 xl:py-12'>
                <li>
                    <Link href='/' passHref>
                        <motion.a
                            key={key1}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className={`text-white cursor-pointer font-medium text-base hover:text-secondary transition-colors duration-150 pb-1 border-b-2 ${links[1] ? 'border-secondary' : 'border-transparent'}  hover:border-secondary`}
                        >
                            {eng ? 'Home' : 'Início'}
                        </motion.a>
                    </Link>
                </li>
                <li>
                    <Link href='/about' passHref>
                        <motion.a
                            key={key2}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className={`text-white cursor-pointer font-medium text-base hover:text-secondary transition-colors duration-150 pb-1 border-b-2 ${links[2] ? 'border-secondary' : 'border-transparent'} hover:border-secondary`}
                        >
                            {eng ? 'About' : 'Sobre'}
                        </motion.a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact' passHref>
                        <motion.a
                            key={key3}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            className={`text-white cursor-pointer font-medium text-base hover:text-secondary transition-colors duration-150 pb-1 border-b-2 ${links[3] ? 'border-secondary' : 'border-transparent'} hover:border-secondary`}
                        >
                            {eng ? 'Contact' : 'Contato'}
                        </motion.a>
                    </Link>
                </li>
            </ul>
        </AnimatePresence>
    );
};

//o componente renderiza duas vezes, uma por causa do useState do componente pai que é responsável pelo funcionamento do switch de linguagens e a segunda pelo useContext responsável por alterar a linguagem no context;

//esse memo serve para eliminar essa primeira re-renderização;
export default memo(NavLinks);

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