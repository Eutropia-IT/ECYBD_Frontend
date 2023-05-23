import { AiFillCaretRight } from "react-icons/ai";
export default function AboutBody() {
    return <div style={{ backgroundColor: "#F3F3F3" }}>
        <div className="py-10 text-black">
            <div className="grid gap-4 lg:grid-cols-12 px-20 lg:px-0 text-black">
                <div className="col-span-1"></div>

                {/* Left side */}
                <div className="col-span-7">

                    {/* body first step */}
                    <div>
                        <h4 className="text-2xl">
                            Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </h4>
                        <p className="mt-6">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <p className="mt-5">
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                    </div>

                    {/* body second step */}
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Sub-heading</h2>
                        <p className="mt-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="mt-3">Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                    </div>

                    {/* body third step */}
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Another Heading</h2>
                        <p className="mt-3">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                        <p className="mt-3">Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                    </div>
                </div>

                {/* right side */}
                <div className="col-span-7 lg:col-span-3">
                    <div style={{ backgroundColor: "#FEF0F8" }}>
                        <div className="px-10 py-7">
                            <h2 className="uppercase text-2xl font-bold mb-8 text-cenrer">RECENT Blogs</h2>
                            <img src={`https://i.ibb.co/jrPkCrp/div-bg-image.png`} alt="img" />

                            <div>
                                <div className="flex py-6">
                                    <AiFillCaretRight className="inline"></AiFillCaretRight>
                                    <p>Heavens and the earth</p>
                                </div>
                                <hr />
                                <div className="flex py-6">
                                    <AiFillCaretRight className="inline"></AiFillCaretRight>
                                    <p>Prayer and petition</p>

                                </div>
                                <hr />
                                <div className="flex py-6">
                                    <AiFillCaretRight className="inline"></AiFillCaretRight>
                                    <p> Fruit of the Spirit</p>

                                </div>
                                <hr />
                                <div className="flex py-6">
                                    <AiFillCaretRight className="inline"></AiFillCaretRight>
                                    <p>Do not be afraid; keep on...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    </div>
}