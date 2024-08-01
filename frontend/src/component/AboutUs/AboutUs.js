import React from 'react';
import "./Aboutus.css";

const AboutUs = () => {
    return (
        <>
            <div className="center1">
                <div className="container2">
                    <div style={{ padding: '5vmax' }}>
                        <div>
                            {/* <img
                                src="L&Tlogo_4.jpg"
                                alt="logo"
                                style={{
                                    height: '163px',
                                    width: '176px',
                                    marginLeft: '165px',
                                    borderRadius: '50%'
                                }} */}
                        </div>
                        <h1 style={{ marginLeft: '6.5vmax', fontWeight: '600', textDecoration: 'underline', fontSize: '50px', paddingBottom:'1.5vmax'}}>
                            About Us
                        </h1>
                        <p className='para'>
                            At Lilac&Trinkets, we believe in the power of small businesses and the creativity of home makers. Our
                            journey began with a simple idea – to create a platform that empowers individuals to showcase their
                            talents, share their crafts, and connect with a community that appreciates the unique and handmade.
                        </p>
                        <p className='para'>
                            Our Mission: Empowering Dreams, Celebrating Creativity
                        </p>
                        <p className='para'>
                            Our mission is to provide a space for small businesses and home makers to thrive. We understand the
                            passion and dedication that goes into every creation, and we are committed to offering a platform
                            that not only showcases your products but also tells the story behind each piece.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/premium-photo/delicious-aesthetic-cupcake-abstract-seasonal-holiday-generative-ai_863013-1408.jpg"
                            alt=""
                            className="image1"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="Images">
                <div className="im_pr">
                    <img
                        className="im_pr"
                        src="https://media.gettyimages.com/id/1169365178/photo/cute-young-woman-in-white-t-shirt.jpg?s=612x612&w=gi&k=20&c=L98OcncEk8VZd8Tbt2JHfaUC9M62qQmk6wFbstyiMD4="
                        alt="Aditi Bari"
                    />
                    <div style={{ paddingLeft: '50px' }}>Aditi Bari</div>
                </div> */}
                {/* Other team members */}
            {/* </div> */}
        </>
    );
};

export default AboutUs;
