import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiTwitter,
  FiPhone,
} from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

import { Container, FooterAbout, FooterContact } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterAbout>
        <h2>Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae
          distinctio, ipsum, doloremque exercitationem quam eos, qui expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta
          assumenda labore error sunt consequuntur incidunt nostrum voluptates
          ducimus eius reprehenderit numquam, non est aliquam dolores doloribus
          esse nihil accusamus!
        </p>
      </FooterAbout>
      <FooterContact>
        <h2>Contatos</h2>
        <p>
          <FiMapPin />
          Lorem ipsum dolor sit amet, 478
        </p>
        <p>
          <FiPhone />
          (47) 00000-0000
        </p>
        <p>
          <AiOutlineMail />
          johndoe@example.com
        </p>
        <h3>Siga-nos</h3>
        <div>
          <FiFacebook />
          <FiInstagram />
          <FiLinkedin />
          <FiTwitter />
        </div>
      </FooterContact>
    </Container>
  );
};

export default Footer;
