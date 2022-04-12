import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';
import SectionTitle from '../../SectionTitle';

import styles from './AboutPageContent.module.scss';

const AboutPageContent = () => {

    const { lang } = useLanguageContext();

    return (
        <AnimatePresence initial={false}>
            <section className={styles.container}>
                <SectionTitle
                    title={lang ? 'About me' : 'Sobre mim'}
                    subtitle={lang ? 'A little about me and what I do' : 'Um pouco sobre mim e o que faço'}
                    lang={lang}
                />

            </section>
        </AnimatePresence>
    );
};


export default AboutPageContent;