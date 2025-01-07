import './page.css';
import Link from 'next/link';
import Footer from '../../components/SmallFooter/footer';

export default function MissionPage() {
    const missionAndVision = [
        {
            title: "Our Mission",
            content:
                "The mission of Smart Village Revolution (SVR) is to empower rural communities through sustainable development and technological innovation. We strive to bridge the urban-rural divide by introducing cutting-edge solutions in education, healthcare, agriculture, and digital connectivity. Our goal is to create self-reliant villages with improved infrastructure, better livelihood opportunities, and access to essential services, ensuring an equitable and prosperous future for all rural citizens.",
            icon: (
                <svg className="svg-container animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Our Vision",
            content:
                "SVR envisions a future where every village becomes a self-sustaining hub of innovation and growth. We aim to transform rural areas into vibrant communities that perfectly balance traditional values with modern advancement. Through the implementation of green technologies, digital transformation, and skill development programs, we aspire to make villages the backbone of national progress. Our vision extends to creating a replicable model of rural development that can be implemented globally, ensuring inclusive growth and sustainable development for rural communities worldwide.",
            icon: (
                <svg className="svg-container animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4V3" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21V20" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 12H21" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H4" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.657 6.343L18.364 5.636" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.636 18.364L6.343 17.657" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.657 17.657L18.364 18.364" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.636 5.636L6.343 6.343" stroke="#2b5d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
    ];

    return (
        <div className="mission-component">
            <div className="back-to-home">
                <Link href="/">
                    <button className="back-button">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="back-icon">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Back to Home
                    </button>
                </Link>
            </div>
            <div className="mission-component-in">
                <div className="mission-component-in-heading">
                    <h1>Mission & Vision of Smart Village Revolution</h1>
                </div>
                <div className="mission-component-in-main">
                    {missionAndVision.map((item, index) => (
                        <div
                            className="mission-component-in-main-box"
                            key={index}
                        >
                            <div className="mission-component-in-main-box-heading">
                                {item.icon}
                                <h1>{item.title}</h1>
                            </div>
                            <div className="mission-component-in-main-box-content">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
