import Layout from '../templates/Layout';
import '../styles/globals.css';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial='initial'
        animate='animate'
        transition={transition}
        variants={variants}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
};

export default MyApp;

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
};

const transition = {
  duration: .8
};

{/* <motion.div
  key={router.route}
  initial='initial'
  animate='animate'
  transition={{ duration: .6 }}
  variants={{
    initial: {
      translateX: -100,
      opacity: 0
    },
    animate: {
      translateX: 0,
      opacity: 1
    }
  }}
> */}