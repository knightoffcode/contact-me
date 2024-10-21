import React from 'react';
import Contact from '../../components/Contact';
import ContactInfo from '../../components/ContactInfo';

/**
 *
 * @returns
 */

function Home() {
    return (
        <div className='home'>
            <main className="home__main">
                <ContactInfo />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
