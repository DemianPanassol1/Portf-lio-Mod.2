import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';

import { clearAlert } from '../../../contexts/AlertProvider/action';
import { alertContext, dispacthAlertContext } from '../../../contexts/AlertProvider/context';
import { languageContext } from '../../../contexts/LanguageProvider/context';

function Alert() {
    const { eng } = useContext(languageContext);

    const { alertSuccess, alertError } = useContext(alertContext);
    const dispatch = useContext(dispacthAlertContext);

    const message = (eng, alertSuccess, alertError) => alertSuccess.br !== null && (eng ? alertSuccess.eng : alertSuccess.br) || alertError.br !== null && (eng ? alertError.eng : alertError.br) || false;
    const color = (alertSuccess, alertError) => alertSuccess.br !== null ? 'bg-green-600' : (alertError.br !== null && 'bg-red-500');

    useEffect(() => {
        (alertSuccess.br || alertError.br !== null) && window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [alertSuccess, alertError]);

    return (
        message(eng, alertSuccess, alertError) && (
            <motion.div
                key={color}
                initial='initial'
                animate='animate'
                variants={variants}
                className={`flex justify-between rounded-sm items-center px-3 py-3 mb-8  ${color(alertSuccess, alertError)}`}
            >
                <p className='text-white text-left mr-2'>
                    {message(eng, alertSuccess, alertError)}
                </p>

                <span
                    onClick={() => clearAlert(dispatch)}
                    className='w-8 h-8 flex justify-center items-center cursor-pointer'
                >
                    <i className='fa fa-times text-white' />
                </span>
            </motion.div>
        )
    );
};

export default Alert;

const variants = {
    initial: {
        translateY: -100,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1
    }
};