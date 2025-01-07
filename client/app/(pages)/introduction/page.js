import './page.css';
import Link from 'next/link';
import Footer from '../../components/SmallFooter/footer';

export default function IntroductionPage() {
    const introSections = [
        {
            title: "What is SVR?",
            content: "Smart Village Revolution (SVR) is a comprehensive rural transformation initiative that combines traditional wisdom with modern innovation. Our program focuses on creating sustainable, self-reliant villages through the integration of technology, education, and sustainable practices. We work to preserve cultural heritage while introducing modern solutions that enhance the quality of life in rural communities.",
            icon: (
                <svg className="svg-container animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Our Approach",
            content: "We implement a holistic approach to rural development, addressing key areas such as digital literacy, sustainable agriculture, renewable energy, and healthcare accessibility. By combining local knowledge with modern expertise, we create tailored solutions that respect traditional values while embracing technological advancement. Our methodology ensures community participation and long-term sustainability.",
            icon: (
                <svg className="svg-container animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Impact Areas",
            content: "Our initiatives create meaningful impact across multiple sectors including education, healthcare, agriculture, and environmental conservation. We focus on implementing renewable energy solutions, improving digital connectivity, enhancing agricultural practices, and establishing better healthcare facilities. Each project is designed to create lasting positive change in rural communities.",
            icon: (
                <svg className="svg-container animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8v8M8 12h8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Join the Revolution",
            content: "Smart Village Revolution welcomes individuals, organizations, and communities to be part of this transformative journey. Whether you're an expert in technology, education, healthcare, or agriculture, or simply passionate about rural development, your contribution can make a significant difference. Join us in building a future where every village thrives with prosperity and innovation.",
            icon: (
                <svg className="svg-container animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ];

    return (
        <div className="introduction-component">
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
            <div className="introduction-component-in">
                <div className="introduction-component-in-heading">
                    <h1>Introduction to Smart Village Revolution</h1>
                </div>
                <div className="introduction-component-in-main">
                    {introSections.map((item, index) => (
                        <div
                            className="introduction-component-in-main-box"
                            key={index}
                        >
                            <div className="introduction-component-in-main-box-heading">
                                {item.icon}
                                <h1>{item.title}</h1>
                            </div>
                            <div className="introduction-component-in-main-box-content">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 