type FAQItem = {
  question: string;
  answer: string;
};

export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What is the mission of Strategic Global Solutions?',
    answer:
      'Strategic Solutions Global is a Leadership Institute for Emerging, Senior & Executive leaders across Africa & The Diaspora. We equip corporate, tech, business and government leaders with the precise strategies and tactics to enhance their leadership capacity to increase their global influence and impact.',
  },
  {
    question: 'How can I join the Global LeadHERs Accelerator?',
    answer:
      'To join the accelerator, visit our "Programs & Initiatives" page and follow the application process outlined for the Global LeadHERs Accelerator.',
  },
  {
    question:
      'What makes the LeadHERship Collective LinkedIn community unique?',
    answer:
      'The LeadHERship Collective offers a private & exclusive curated space on LinkedIn, transcending personal and professional boundaries, fostering intentional connections, and providing a sense of belonging. Apply to be a member of the LeadHERship Collective today!',
  },
  {
    question: 'What services does Strategic Solutions Global offer?',
    answer:
      'Our institute is inclusive of high-level trainings & development, executive coaching  practical assignments, bi-weekly accountability partnerships, 1:1 coaching/strategy sessions, and an exclusive 7-day LeadHERship Retreat.',
  },
  {
    question: 'What is the Global LeadHERs Accelerator?',
    answer:
      'The program includes high-level development, monthly meetups, practical assignments, bi-weekly accountability partnerships, 1:1 coaching/strategy sessions, and an exclusive 7-day LeadHERship Retreat.',
  },
  {
    question: 'What is the vision of Strategic Global Solutions?',
    answer:
      'To build a coalition of female change agents who collaborate to catalyze significant change across the globe',
  },
  {
    question: 'How can I stay updated on upcoming events and initiatives?',
    answer:
      'Subscribe to our newsletter, follow us on social media, and regularly check our website for the latest updates on events, initiatives, and opportunities.',
  },
  {
    question: 'How can my company partner with Strategic Global Solutions?',
    answer:
      'Contact us directly through the provided contact information on our website to discuss potential partnerships and collaborations.',
  },
];
