import React from 'react';
import {GoMarkGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';
import {FaInstagram} from 'react-icons/fa'

function Footer () {
    return(
        <footer>
            
                <a href='https://github.com/blueink38'  className='text-white px-3' target='_blank' rel="noreferrer"><GoMarkGithub size={24} /></a>
                <a href='https://www.linkedin.com/in/jason-fletcher-024105b//' className='text-white' target='_blank' rel="noreferrer"><GrLinkedin size={24}/></a>
                <a href='https://www.instagram.com/munclesuperstar/' className='text-white px-3' target='_blank' rel="noreferrer"><FaInstagram size={24}/></a>
            
        </footer>
    );
}

export default Footer;

