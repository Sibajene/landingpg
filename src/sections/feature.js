/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Advanced users can easily edit images online, as well as add HTML, Javascript, and sitewide CSS. Take complete control of your website.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Our sites look awesome on any device. They’re super fast to help you get noticed by Google. We make it easy to update and expand without the need for specialized technical knowledge.Once your site is published, we provide all the tools to grow. We help you get site traffic and engage your visitors.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'No technical experience required! Make your free website with our easy drag & drop functionality. Everything you need is at your fingertips',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Known for award-winning customer support, Yola is available 24/7 to assist you as you make your free website and expand your online presence.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature'}}>
      <Container>
        <SectionHeader
        slogan="Quality Features"
        title="Amazing usefull features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) =>(
            <FeatureCard 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
