import React, { useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Alert from '../../components/Utils/Alert';
import SendMessageBtn from '../../components/Utils/Button/SendMessage';

import { sendMessageToUser } from '../../contexts/AlertProvider/action';
import { dispacthAlertContext } from '../../contexts/AlertProvider/context';
import { languageContext } from '../../contexts/LanguageProvider/context';

function ContactPage() {

    const { eng } = useContext(languageContext);
    const dispatch = useContext(dispacthAlertContext);

    const form = useRef();
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const message = useRef();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            message: message.current.value
        };

        if (await sendMessageToUser(dispatch, data)) {
            form.current.reset();
        };
    };

    const key1 = eng ? 22 : 23;
    const key2 = eng ? 24 : 25;
    const key3 = eng ? 26 : 27;
    const key4 = eng ? 28 : 29;
    const key5 = eng ? 30 : 31;
    const key6 = eng ? 32 : 33;
    const key7 = eng ? 34 : 35;

    return (
        <AnimatePresence initial={false}>
            <main>
                <div className='px-4 lg:px-8 xl:px-4 mx-auto max-w-7xl text-center mt-10 mb-8 md:mt-16 md:mb-12 xl:mt-16'>
                    <Alert />
                    <motion.h2
                        key={key1}
                        initial='initial'
                        animate='animate'
                        transition={transition}
                        variants={variants}
                        className='xl:text-h2xl'
                    >
                        {eng ? 'Contact me' : 'Entre em contato'}
                    </motion.h2>
                    <span className='block w-64 h-[2px] mx-auto bg-secondary my-4'></span>
                    <motion.p
                        key={key2}
                        initial='initial'
                        animate='animate'
                        transition={transition}
                        variants={variants}
                    >
                        {eng ? 'Send a message to me through here' : 'Envie uma mensagem para mim por aqui'}
                    </motion.p>
                </div>

                <form
                    onSubmit={onFormSubmit}
                    ref={form}
                    className='w-full px-4 lg:px-8 xl:px-4 max-w-7xl mx-auto mb-16 lg:mb-24 lg:max-w-lg xl:max-w-[690px] xl:-translate-x-[153px]'
                >
                    <div className='max-w-lg'>
                        <motion.input
                            key={key3}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            ref={name}
                            type="text"
                            placeholder={eng ? 'Name' : 'Nome'}
                            className='mb-6 w-full border-black'
                        />
                        <motion.input
                            key={key4}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            ref={email}
                            type="email"
                            placeholder='Email'
                            className='mb-6 w-full border-black'
                        />
                        <motion.input
                            key={key5}
                            initial='initial'
                            animate='animate'
                            transition={transition}
                            variants={variants}
                            ref={phone}
                            type="number"
                            placeholder={eng ? 'Phone' : 'Telefone'}
                            className='mb-6 w-full border-black'
                        />
                    </div>
                    <motion.textarea
                        key={key6}
                        initial='initial'
                        animate='animate'
                        transition={transition}
                        variants={variants}
                        ref={message}
                        placeholder={eng ? 'Message' : 'Mensagem'}
                        className='w-full h-[150px] border-black'
                    />
                    <div className='w-fit ml-auto'>
                        <SendMessageBtn />
                    </div>
                </form>

                <section className='bg-secondary py-10  mb-24 '>
                    <div className='flex flex-col mx-auto lg:max-w-lg lg:flex-row lg:justify-between xl:max-w-[600px]'>
                        <div className='text-center mb-8 lg:mb-0'>
                            <i className="fas text-h1 fa-phone mb-2"></i>
                            <motion.h5
                                key={key7}
                                initial='initial'
                                animate='animate'
                                transition={transition}
                                variants={variants}
                                className='mb-4 font-bold'
                            >
                                {eng ? 'Phone' : 'Telefone'}
                            </motion.h5>
                            <a href="tel:+5554991967411">
                                <p>+55 54 991967411</p>
                            </a>
                        </div>
                        <div className='text-center'>
                            <i className="fas text-h1 fa-envelope mb-2"></i>
                            <h5 className='mb-4 font-bold'>Email</h5>
                            <a href="mailto:demianpanassol01@gmail.com">
                                <p>demianpanassol01@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </AnimatePresence>
    );
};

export default ContactPage;

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