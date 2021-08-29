/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/servic.jpg';
import Member2 from 'assets/service.jpg';
import Member4 from 'assets/avatar.jpg';


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Sibajene Sikasukwe',
    title: 'Sibajene Sikasukwe',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/tuuleonline',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/siba7269/',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: 'https://linkedin.com/in/sibajene-sikasukwe',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Lee Sikasukwe',
    title: 'Lee Sikasukwe',
    designation: 'Software Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Lisa Sikasukwe',
    title: 'Lisa Sikasukwe',
    designation: 'Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
        slogan="Our Team"
        title="Most Qualified Developers"
        />

        <Grid sx={styles.grid}>
          {data.map((item) =>(
            <TeamCard 
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
            designation={item.designation}
            social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
