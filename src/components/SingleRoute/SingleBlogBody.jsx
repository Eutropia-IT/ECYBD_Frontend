import { FaSearch } from "react-icons/fa";
export default function SingleBlogBody() {
    return <div style={{ backgroundColor: "#F3F3F3" }}>
        <div className="grid gap-4 grid-cols-12 text-black pt-12 pb-20 px-12 md:px-0">
            <div className="col-span-1"></div>

            {/* left side */}
            <div className="col-span-12 md:col-span-7">
                <div>
                    <h4 className="text-2xl">
                        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo.
                    </h4>
                    <p className="mt-6">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p className="mt-3">
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <blockquote className="my-4 pl-8" style={{
                        borderLeft: "5px solid #787878"
                    }}>
                        <h2 className="text-xl">Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</h2>
                    </blockquote>
                    <p className="mt-3">
                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                    <p className="mt-3">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                </div>

                <div className="mt-4">
                    <h3 className="text-2xl font-bold">Sub-heading</h3>
                    <p className="mt-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p className="mt-3">Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                </div>

                <div className="mt-4">
                    <h3 className="text-2xl font-bold">Another heading</h3>
                    <p className="mt-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <div className="mt-3 ml-10">
                        <div className="flex">
                            <li></li>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        </div>
                        <div className="flex">
                            <li></li>
                            <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </div>
                        <div className="flex">
                            <li></li>
                            <p>Nulla vitae elit libero, a pharetra augue.</p>
                        </div>
                    </div>
                    <p className="mt-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p className="mt-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                </div>

                <hr className="my-6" />

                {/* add your comment section */}
                <div className="mt-6">
                    <h2 className="text-4xl font-bold">Add your comment</h2>
                    <hr className="my-4" />

                    <form action="">
                        <div className="grid gap-4 md:grid-cols-3 text-black">
                            <input type="text" placeholder="Your name" className="input border-1 border-gray-400 w-full" />
                            <input type="email" placeholder="Your email" className="input border-1 border-gray-400 w-full" />
                            <input type="text" placeholder="Website (optional)" className="input border-1 border-gray-400 w-full" />
                        </div>
                        <textarea className="textarea border-1 border-gray-400 mt-4 h-32 w-full" placeholder="Your comment"></textarea>
                        <input className="uppercase btn btn-warning text-lg mt-4" type="submit" value="submit your comment" />
                    </form>
                </div>
            </div>


            {/* right side */}
            <div className="col-span-12 md:col-span-3">
                {/* search button */}
                <div className="grid grid-cols-12 text-black cursor-pointer mt-10 md:mt-0">
                    <input className="col-span-10 p-2 px-6 border-2 border-gray-400 border-r-0 rounded-l-md" type="search" name="" id="" placeholder="search.." />
                    <div className="cursor-pointer">
                        <button className="col-span-2 btn btn-white rounded-none rounded-r-md">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* blog archives */}
                <div className="mt-10 text-black">
                    <div className="flex justify-between p-2">
                        <p>March 2014</p>
                        <p className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full">23</p>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                        <p>February 2014</p>
                        <p className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full">17</p>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                        <p>January 2014</p>
                        <p className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full">34</p>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                        <p>December 2013</p>
                        <p className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full">28</p>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                        <p>November 2013</p>
                        <p className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full">12</p>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                        <p>October 2013</p>
                        <p className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full">28</p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    </div>
}