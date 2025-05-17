import React from 'react';

const Footer = () => {
    const linksData=[
        { "id": 1, "link": "FAQ" },
        { "id": 2, "link": "Investor Relations" },
        { "id": 3, "link": "Privacy" },
        { "id": 4, "link": "Speed Test" },
        { "id": 5, "link": "Help Center" },
        { "id": 6, "link": "Jobs" },
        { "id": 7, "link": "Cookie Preferences" },
        { "id": 8, "link": "Legal Notices" },
        { "id": 9, "link": "Account" },
        { "id": 10, "link": "Ways to Watch" },
        { "id": 11, "link": "Corporate Information" },
        { "id": 12, "link": "Only on Netflix" },
        { "id": 13, "link": "Media Center" },
        { "id": 14, "link": "Terms of Use" },
        { "id": 15, "link": "Contact Us" }
    ]
    return (
        <footer className=" text-white py-10">
            
        
            <div className="max-w-screen-xl m-5 px-4 items-center">
            <p className="text-center mb-6">Ready to watch?Enter your email to create or restart your membership.</p>
            <form className="flex flex-col  m-9 mt-0 items-center">
                <div className="flex w-[600px] ">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="p-3 rounded-l border border-gray-600 bg-black focus:outline-none focus:ring-2 focus:ring-red-600 flex-grow"
                    />
                    <button type="submit" className="bg-red-600 py-3 ml-2 rounded-r w-48 font-bold hover:bg-red-700 transition duration-200">
                        Get Started
                    </button>
                </div>
            </form>
                <p className="text-start mb-6 ">
                    <a href="#" className="hover:underline">Questions? Call 800-032-0481</a>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-neutral-300">
                    {linksData.map((link) => (
                        <ul key={link.id} className="list-none">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">{link.link}</a>
                            </li>
                        </ul>
                    ))}
                </div>
                <p className="text-center text-sm mt-6">
                    © {new Date().getFullYear()} Netflix, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;