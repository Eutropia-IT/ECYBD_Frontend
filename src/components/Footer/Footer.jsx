import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#FEE6F4" }}>
            <svg className='w-full' height="73" viewBox="0 0 1920 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V66.4912C191.79 70.4094 374.98 59.3567 547.571 46.4912C563.471 45.3216 579.37 44.0936 595.269 42.924C787.759 28.3041 982.349 12.9825 1197.14 15.614C1439.43 18.538 1686.41 44.0351 1920.4 72.9825V0H0Z" fill="#18299D" />
            </svg>

            <footer className="footer p-10  " style={{ backgroundColor: "#FEE6F4" }}>
                <div>
                    <span className="font-bold text-xl">Episcopal Commission for <br /> Youth Bangladesh</span>
                    <a className="link link-hover">Dhaka, Bangladesh, 1207</a>
                    <a className="link link-hover">+8801743-452800</a>
                    <a className="link link-hover">ec_y2009@yahoo.com</a>

                    <div>
                        <h5 className='font-bold mt-6'>Follow us on social media</h5>
                        <div className='flex mt-4'>
                            <a> <img className='w-2/6' src={"https://i.ibb.co/WycqD3t/facebook.png"} alt="" /></a>
                            <a> <img className='w-2/6' src={"https://i.ibb.co/KDNJ8TJ/twitter.png"} alt="" /></a>
                            <a> <img className='w-2/6' src={"https://i.ibb.co/KDNJ8TJ/twitter.png"} alt="" /></a>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <span className=" font-bold text-xl">Navigation</span>
                    <a className="link link-hover font-bold">Home</a>
                    <a className="link link-hover font-bold">Contact Us</a>
                    <a className="link link-hover font-bold">Publication </a>
                    <a className="link link-hover font-bold">Support Us</a>
                </div>
                <div>
                    <span className=" font-bold text-xl">Watch this video</span>
                    <a className="link link-hover">
                        <iframe className='w-5/6' height="150" src="https://www.youtube.com/embed/ZRZngn_GdXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </a>
                </div>
                <div>
                    <span className=" font-bold text-xl">Recognised by</span>
                    <div className="form-control">
                        <div className='grid gap-3 grid-cols-2'>
                            <img className='w-3/6' src={'https://i.ibb.co/wpwXr0W/Logo-1.png'} alt="" />
                            <img className='w-3/6' src={'https://i.ibb.co/wpwXr0W/Logo-1.png'} alt="" />
                            <img className='w-3/6' src={'https://i.ibb.co/wpwXr0W/Logo-1.png'} alt="" />
                            <img className='w-3/6' src={'https://i.ibb.co/wpwXr0W/Logo-1.png'} alt="" />
                            <img className='w-3/6' src={'https://i.ibb.co/wpwXr0W/Logo-1.png'} alt="" />
                            <img className='w-3/6' src={'https://i.ibb.co/wpwXr0W/Logo-1.png'} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;