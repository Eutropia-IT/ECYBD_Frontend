import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 ml-10">
            <h4 className="text-lg font-bold mb-4">ABOUT THE CHURCH</h4>
            <p className="text-sm">
            For the word of God is living and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes.
            </p>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 ml-16">
            <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                Upcoming events
                </a>
                <hr/>
              </li>
              
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                Ministries
                </a>
                <hr/>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                Recent Sermons

                </a>
                <hr/>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                Contact us
                </a>
                <hr/>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-8 ml-16">
            <h4 className="text-lg font-bold mb-4">OUR ADDRESS</h4>
            <p className="text-sm">
            Catholic Church <br/>
            121 King Street, Melbourne <br/>
            Victoria 3000 Australia <br/>
            </p>
            <p>
            Phone: +61 3 8376 6284 <br/>
            Email: mail@catholicwebsite.com
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 ml-16">
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex items-center">
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
          Copyright &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
