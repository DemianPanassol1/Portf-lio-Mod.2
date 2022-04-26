import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { transitionContent, variantsContent } from '../../../lib/helpers';
import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';

import SectionTitle from '../../SectionTitle';

import styles from './AboutPageContent.module.scss';

const AboutPageContent = () => {
	const { lang } = useLanguageContext();

	const key1 = lang ? 1 : 0;
	const key2 = lang ? 2 : 3;
	const key3 = lang ? 4 : 5;
	const key4 = lang ? 6 : 7;
	const key5 = lang ? 8 : 9;

	return (
		<section className={styles.container}>
			<SectionTitle
				title={lang ? 'About me' : 'Sobre mim'}
				subtitle={
					lang
						? 'A little about me and what I do'
						: 'Um pouco sobre mim e o que faço'
				}
				lang={lang}
			/>

			<div className={styles.containerBody}>
				<div className={styles.containerBodyImage}>
					<Image
						src={'/img/png/foto_sobre.png'}
						alt={
							lang ? 'Picture of me' : 'Uma foto de perfil minha'
						}
						layout="fill"
						objectPosition="center bottom"
						objectFit="cover"
						priority
						title={
							lang ? 'I, Demian Panassol' : 'Eu, Demian Panassol'
						}
					/>
				</div>

				<div className={styles.containerBodyContent}>
					<motion.h4
						key={key1}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
					>
						{lang ? "I'm Demian..." : 'Meu nome é Demian...'}
					</motion.h4>

					<motion.p
						key={key2}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
					>
						{lang
							? "I'm 21 years old and I've been working as a web and mobile developer for over a year. Although I started coding at 12 and have been involved in tech ever since, it was only in the midst of a pandemic that I decided to focus my career on this sector."
							: 'Tenho 21 anos e trabalho como desenvolvedor web e mobile por mais de um ano. Apesar de começar a programar aos 12 e me envolver na área da tecnologia desde então, foi só em meio a uma pandemia que decidi focar minha carreira nesse setor.'}
					</motion.p>

					<motion.p
						key={key3}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
					>
						{lang
							? "It may have been a reckless (even stupid) action, which I don't regret for a second. I like to study and learn, and this is an ideal job market for that. Besides, nothing makes me happy than knowing that there is still so much more to explore."
							: 'Pode ter sido uma ação imprudente (até mesmo estúpida), a qual não me arrependo nem um segundo. Gosto de estudar e aprender, e esse é um ramo do mercado de trabalho ideal para isso. Além do mais, nada me faz feliz do que saber que há ainda muito mais a ser explorado.'}
					</motion.p>

					<motion.p
						key={key4}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
					>
						{lang
							? 'Developer primarily focused on JavaScript, I have extensive knowledge of React, NextJS and React Native, in addition to several other libraries and frameworks. I also have backend knowledge with NodeJS and MongoDB as a database.'
							: 'Desenvolvedor focado primariamente em JavaScript, tenho extenso conhecimento em React, NextJS e React Native, além de diversas outras bibliotecas e frameworks. Também possuo conhecimento em back-end com NodeJS e MongoDB como banco de dados.'}
					</motion.p>

					<motion.p
						key={key5}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
					>
						{lang
							? 'I enjoy learning new technologies to apply them in my projects. Dedicated and hardworking, JavaScript for me is an excellent tool within the job market, both because of its practicality and scope in the Web world.'
							: 'Gosto de aprender novas tecnologias para aplicá-las em meus projetos. Dedicado e esforçado, JavaScript para mim é uma excelente ferramenta dentro do mercado de trabalho, tanto devido sua praticidade e abrangência no mundo Web.'}
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default AboutPageContent;
