import React from 'react';

const Footer = () => {
    return (
        <div className='text-black' style={{ backgroundColor: "#FEE6F4" }}>
            <svg width="100%" height="100%" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_25_407)">
                    <path d="M0 0V64.152V66.4912V97.6608L0.299984 74.8538C114.394 86.6667 257.787 86.9006 391.68 80.8772C547.172 73.8597 695.364 59.1228 845.556 46.7836C995.748 34.4444 1154.24 24.2105 1308.23 26.8421C1454.32 29.2982 1584.12 43.0994 1713.71 55.4386C1773.81 61.1696 1836 66.6082 1900.2 70.5263C1906.9 71.345 1913.7 72.1637 1920.4 73.0409V71.7544V70.7018V0H0Z" fill="white" />
                    <path d="M0 0V66.4912C191.79 70.4094 374.98 59.3567 547.571 46.4912C563.471 45.3216 579.37 44.0936 595.269 42.924C787.759 28.3041 982.349 12.9825 1197.14 15.614C1439.43 18.538 1686.41 44.0351 1920.4 72.9825V0H0Z" fill="#18299D" />
                    <path d="M1197.24 15.5556C982.349 12.9825 787.859 28.3041 595.369 42.8655C579.47 44.0936 563.571 45.2632 547.672 46.4328C375.081 59.2983 191.89 70.4094 0.100098 66.4328V100L0.400082 77.193C114.494 89.0059 257.887 89.2398 391.78 83.2164C547.272 76.1989 695.464 61.462 845.656 49.1228C995.848 36.7837 1154.34 26.5497 1308.33 29.1813C1454.42 31.6375 1584.22 45.4386 1713.81 57.7778C1780.21 64.0936 1849.1 70.0585 1920.5 74.0351V72.9825C1686.51 43.9182 1439.43 18.4211 1197.24 15.5556Z" fill="#F3F3F3" />
                </g>
                <defs>
                    <clipPath id="clip0_25_407">
                        <rect width="1920" height="100" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <footer className="grid gap-4 md:gap-14 text-center lg:gap-4 grid-cols-12 px-6 lg:px-0 py-14" style={{ backgroundColor: "#FEE6F4" }}>
                <div className=" text-white  items-center justify-center h-full hidden lg:block lg:col-span-1"></div>
                <div className=" flex  justify-center h-full col-span-12 md:col-span-6 lg:col-span-3">
                    <div className='md:text-left'>
                        <span className="font-bold text-xl">Episcopal Commission for Youth Bangladesh</span>
                        <p className="link link-hover mt-4">Dhaka, Bangladesh, 1207</p>
                        <p className="link link-hover">+8801743-452800</p>
                        <p className="link link-hover">ec_y2009@yahoo.com</p>

                        <div>
                            <h5 className='font-bold mt-6'>Follow us on social media</h5>
                            <div className='grid grid-cols-3 w-4/6 mx-auto md:mx-0 mt-2'>
                                <p> <img className='w-4/6 cursor-pointer' src={"https://i.ibb.co/WycqD3t/facebook.png"} alt="" /></p>
                                <p> <img className='w-4/6 cursor-pointer' src={"https://i.ibb.co/KDNJ8TJ/twitter.png"} alt="" /></p>
                                <p> <img className='w-4/6 cursor-pointer' src={"https://i.ibb.co/KDNJ8TJ/twitter.png"} alt="" /></p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex  justify-center h-full col-span-12 md:col-span-6 lg:col-span-1">
                    <div className='md:text-left'>
                        <h4 className="font-bold text-xl mb-4">Navigation</h4>
                        <p className="link link-hover font-bold mt-1">+ Home</p>
                        <p className="link link-hover font-bold mt-1">+ Contact Us</p>
                        <p className="link link-hover font-bold mt-1">+ Publication </p>
                        <p className="link link-hover font-bold mt-1">+ Support Us</p>
                    </div>
                </div>

                <div className="flex justify-center h-full col-span-12 md:col-span-6 lg:col-span-3 lg:ml-20">
                    <div className='md:text-left'>
                        <span className=" font-bold text-xl mb-4">Watch this video</span>
                        <a className="link link-hover">
                            <iframe className='w-11/12 mt-4' height="150" src="https://www.youtube.com/embed/ZRZngn_GdXY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center h-full col-span-12 md:col-span-6 lg:col-span-3">
                    <div className='md:text-left'>
                        <span className=" font-bold text-xl ">Recognised by</span>
                        <div className="form-control mt-4">
                            <div className='grid gap-3 grid-cols-2 ml-24 md:ml-0'>
                                <img className='w-4/6' src={'https://i.ibb.co/0XcfqLh/Dicastery-for-the-Laity-Family-and-Life-Logo-300x170-png.png'} alt="" />
                                <img className='w-4/6' src={'https://i.ibb.co/HNKdxNv/UNECOSOC-Logo-300x191-jpg.png'} alt="" />
                                <img className='w-4/6' src={'https://i.ibb.co/XbJ5Tyy/Unesco-Logo-png.png'} alt="" />
                                <img className='w-4/6' src={'https://i.ibb.co/kcpSnPH/Vatican-State-Department-logo-120x120-png.png'} alt="" />
                                <img className='w-4/6' src={'https://i.ibb.co/FYJCWMt/GCCM-Logo-jpeg.png'} alt="" />
                                <img className='w-4/6' src={'https://i.ibb.co/th1zkyg/UN-MGCY-Logo-272x182-jpeg.png'} alt="" />
                                <img className='w-4/6 mx-auto text-center ml-24 md:ml-20 lg:ml-14' src={'https://i.ibb.co/yWPsz0f/ICYMO-Logo-300x66-png.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" text-white  items-center justify-center h-full hidden md:block lg:col-span-1"></div>
            </footer>
        </div>
    );
};

export default Footer;