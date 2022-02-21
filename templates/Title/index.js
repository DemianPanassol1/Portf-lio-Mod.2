import React, { useContext } from 'react';
import Head from 'next/head';

import { languageContext } from '../../contexts/LanguageProvider/context';

function Title() {
    const { eng } = useContext(languageContext);

    return (
        <Head>
            <meta
                name='description'
                content={eng ? "Portfolio about me, Demian Panassol, where I try to show a little of what I know and do. I'm always learning something new, so what I present here may not be in line with my current skills." : 'Portfólio sobre mim, Demian Panassol, onde busco mostrar um pouco do que eu sei e faço. Sempre estou aprendendo algo novo, então o que apresento aqui pode não estar de acordo com as minhas habilidades atuais.'}
            />

            <title>
                {eng ? 'Portfolio | Demian Panassol' : 'Portfólio | Demian Panassol'}
            </title>
        </Head>
    );
};

export default Title;