import Link from "next/link";
import { FaSearch } from "react-icons/fa";
export default function BlogBody() {
    return <div style={{ backgroundColor: "#F3F3F3" }}>
        <div className="grid gap-4 grid-cols-12 text-black pt-12 pb-20 px-12 md:px-0">
            <div className="col-span-1"></div>

            {/* left side */}
            <div className="col-span-12 md:col-span-7">
                <div>
                    <div className="w-full lg:flex">
                        <div className="md:w-4/12 mr-6">
                            <img src={`https://i.ibb.co/NT5ZjR2/blog-thumb-1.jpg`} alt="" />
                        </div>
                        <div className="lg:w-8/12">
                            <h2 className="text-xl font-bold">Perseverance of the Saints</h2>
                            <p className="my-2">on 17th June 2014</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet...</p>
                            <button className="btn btn-sm btn-warning font-semibold text-lg mt-2"><Link href='/blog/slug'>Read article &#10141;</Link></button>
                        </div>
                    </div>
                    <div className="w-full lg:flex mt-8">
                        <div className="md:w-4/12 mr-6">
                            <img src={`https://i.ibb.co/NT5ZjR2/blog-thumb-1.jpg`} alt="" />
                        </div>
                        <div className="lg:w-8/12">
                            <h2 className="text-xl font-bold">Lord is Sufficient for all of our needs</h2>
                            <p className="my-2">on 17th June 2014</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet...</p>
                            <button className="btn btn-sm btn-warning font-semibold text-lg mt-2"><Link href='/blog/slug'>Read article &#10141;</Link> </button>
                        </div>
                    </div>
                    <div className="w-full lg:flex mt-8">
                        <div className="md:w-4/12 mr-6">
                            <img src={`https://i.ibb.co/NT5ZjR2/blog-thumb-1.jpg`} alt="" />
                        </div>
                        <div className="lg:w-8/12">
                            <h2 className="text-xl font-bold">Perseverance of the Saints</h2>
                            <p className="my-2">on 17th June 2014</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet...</p>
                            <button className="btn btn-sm btn-warning font-semibold text-lg mt-2"><Link href='/blog/slug'>Read article &#10141;</Link> </button>
                        </div>
                    </div>
                    <div className="w-full lg:flex mt-8">
                        <div className="md:w-4/12 mr-6">
                            <img src={`https://i.ibb.co/NT5ZjR2/blog-thumb-1.jpg`} alt="" />
                        </div>
                        <div className="lg:w-8/12">
                            <h2 className="text-xl font-bold">Lord is Sufficient for all of our needs</h2>
                            <p className="my-2">on 17th June 2014</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet...</p>
                            <button className="btn btn-sm btn-warning font-semibold text-lg mt-2"><Link href='/blog/slug'>Read article &#10141;</Link></button>
                        </div>
                    </div>

                    {/* pagination start here */}
                    <div className="w-full lg:flex mt-14">
                        <div className="md:w-4/12 mr-6">
                            {/* <img src={`https://i.ibb.co/NT5ZjR2/blog-thumb-1.jpg`} alt="" /> */}
                        </div>
                        <div className="w-8/12">
                            <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
                                <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700">
                                    <span className="sr-only">Previous</span>
                                    &#10094;
                                </button>
                                <button type="button" aria-current="page" className="inline-flex bg-yellow-500 items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700">1</button>
                                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">2</button>
                                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">3</button>
                                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">4</button>
                                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">5</button>
                                <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700">
                                    <span className="sr-only">Next</span>
                                    &#10095;
                                </button>
                            </nav>
                        </div>
                    </div>
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
    </div >
}