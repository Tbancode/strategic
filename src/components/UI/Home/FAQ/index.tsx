'use client';
import { FAQWrapper, FAQInner, FAQHeader } from './styles';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import ic_chevron_right from '../../../../../public/svgs/ic_chevron_right.svg';
import { Accordion, AccordionItem, Answer, Question } from './styles';
import { animate, faqData } from './constants';
import Image from 'next/image';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.3,
  });
  return (
    <FAQWrapper>
      <FAQInner>
        <FAQHeader>
          <h1>Frequently Asked Questions</h1>
        </FAQHeader>
        <Accordion ref={accordionRef}>
          {faqData.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              key={index}
              className={openItem !== null && openItem === index ? 'open' : ''}
            >
              <Question
                className={
                  openItem !== null && openItem === index ? 'open' : ''
                }
                onClick={() => toggleItem(index)}
              >
                {item.question}
                <Image src={ic_chevron_right} alt="cheveron down" />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </FAQInner>
    </FAQWrapper>
  );
};

export default FAQ;
