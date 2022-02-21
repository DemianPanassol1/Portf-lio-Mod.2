import React, { useContext, useEffect, useState } from 'react';

import Image from 'next/image';

import { motion } from "framer-motion";

import NavLinks from '../../components/Navbar/NavLinks';

import brazil from '../../public/img/svg/brazil.svg';
import unitedStates from '../../public/img/svg/united_states.svg';

import { dispatchLanguageContext } from '../../contexts/LanguageProvider/context';
import { switchLang } from '../../contexts/LanguageProvider/action';

function Header() {

    const dispatch = useContext(dispatchLanguageContext);

    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        switchLang(dispatch, enabled);
    }, [enabled])

    const toggleSwitch = () => setEnabled(!enabled);

    return (
        <header className='bg-primary'>
            <section className='flex flex-col max-w-7xl mx-auto px-4 pt-8 lg:flex-row lg:justify-between lg:pt-0 lg:px-8 xl:pt-0 xl:px-4'>
                <div className='flex items-center lg:h-fit lg:mt-12 xl:my-auto'>
                    <div className='flex items-center'>
                        <Image
                            src={brazil}
                            width={24}
                            height={24}
                            alt='Bandeira do Brasil'
                        />
                        <small className={`text-white h-fit ml-2 border-b-2 transition duration-200 ${!enabled ? 'border-secondary' : 'border-transparent'}`}>
                            BRA
                        </small>
                    </div>

                    <div className="switch" data-enabled={enabled} onClick={toggleSwitch}>
                        <motion.div className="handle" layout transition={{ type: "spring", stiffness: 700, damping: 30 }} />
                    </div>

                    <div className='flex items-center'>
                        <Image
                            src={unitedStates}
                            width={24} height={24}
                            alt='Bandeira dos EUA'
                        />
                        <small className={`text-white h-fit ml-2 border-b-2 transition duration-200 ${enabled ? 'border-secondary' : 'border-transparent'}`}>
                            ENG
                        </small>
                    </div>
                </div>

                <NavLinks />

            </section>
        </header>
    );
};

export default Header;