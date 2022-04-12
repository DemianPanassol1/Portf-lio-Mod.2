import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';
import SectionTitle from '../../SectionTitle';

import styles from './ContactPageContent.module.scss';

const ContactPageContent = () => {
    const { lang } = useLanguageContext();

    return (
        <AnimatePresence initial={false}>
            <section className={styles.container}>
                <SectionTitle
                    title={lang ? 'Contact me' : 'Entre em contato'}
                    subtitle={lang ? 'Send a message to me through here' : 'Envie uma mensagem para mim por aqui'}
                    lang={lang}
                />
            </section>
        </AnimatePresence>
    );
};

export default ContactPageContent;