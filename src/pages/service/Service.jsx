import React from 'react';
import '../service/Service.css';
import Card from '../../components/card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import Google from '../../assets/google.jpg';
import Ui from '../../assets/ui-ux.jpg';
import Web from '../../assets/web.jpg';
import Code from '../../assets/code.jpg';
import Ment from '../../assets/ment1.jpg';
import C from '../../assets/c.jpg';
import Logo from '../../assets/logo.webp';

const Service = () => {
    const handleChatClick = () => {
        alert('Chat button clicked!');
    };

    return (
        <div className="services">
            <h1>
                Got a Brilliant Idea? Let Me Bring It to Life! Choose the Perfect Package Below and Let's Make It Happen!
            </h1>
            <h2>Our services</h2>
            <br />
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                    1100: { slidesPerView: 4 },
                }}
            >
                <SwiperSlide>
                    <Card
                        imageSrc={Google}
                        title="Google Business Profile"
                        description="Looking to take your business to the next level? I specialize in creating and managing Google Business Profiles to help businesses boost their online visibility, attract more customers, and stand out in the market. Let me help you get noticed online and grow your brand!"
                        price="800"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        imageSrc={Logo}
                        title="Logo Design"
                        description="Do you need a logo with a unique and memorable story? A logo that captures the essence of your business, serves your needs, or breathes new life into your brand? I offer high-quality designs tailored to make a lasting impression and elevate your identity."
                        price="400"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        imageSrc={Ui}
                        title="UI/UX Designer"
                        description="Looking for someone to turn your ideas into reality for your website or mobile app? I specialize in creating fully functional and interactive designs that are visually stunning, with a focus on crafting user-friendly interfaces and seamless experiences."
                        price="1500"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        imageSrc={Web}
                        title="Website Development"
                        description="Looking for a web developer? I build responsive, user-friendly websites tailored to your needs, whether it’s a landing page, web application, or portfolio. I ensure your site is functional, optimized, and delivers a great user experience. 3-page website"
                        price="2000"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        imageSrc={Code}
                        title="Code Maintenance"
                        description="Looking for a skilled web developer to maintain and improve your website? I specialize in modifying, updating, and enhancing your site to fix bugs, improve functionality, and adapt to evolving requirements."
                        price="800"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        imageSrc={Ment}
                        title="Mentorship"
                        description="Are you a beginner or someone looking to step into the web development industry but don’t know where to start? I’m here to guide you! Whether you're a student or self-learning, I’ll help you navigate the industry and set you on the right path."
                        price="400"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        imageSrc={C}
                        title="Collaboration"
                        description="Are you a designer looking for a developer to turn your designs into awesome products? Or maybe you're a developer searching for a skilled collaborator to bring your vision to life?"
                        price="400"
                        buttonLabel="Let’s Chat"
                        onButtonClick={handleChatClick}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Service;
