export default function ContactAddress() {
    return <div style={{ backgroundColor: "#F3F3F3" }}>
        <div className="py-20 text-black">
            <div className="grid gap-6 grid-cols-12">
                <div className="col-span-1"></div>
                {/* left side */}
                <div className="col-span-12 md:col-span-5 mx-auto md:mx-0">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg" />
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text">Email ID</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-lg" />
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" className="input input-bordered w-full max-w-lg" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-32 w-full max-w-lg"></textarea>
                    </div>
                    <div className=" ">
                        <input className="btn btn-sm btn-warning font-bold text-lg mt-8" type="submit" value="SEND MESSAGE" />
                    </div>
                </div>
                {/* right side */}
                <div className="col-span-12 md:col-span-5 mx-auto md:mx-0">
                    <h2 className="text-xl font-bold">OUR ADDRESS</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 mx-auto md:mx-0 ">
                        <div className="text-sm">
                            <p>Catholic Church</p>
                            <p>121 King Street, Melbourne</p>
                            <p>Victoria 3000 Australia</p>
                        </div>
                        <div className="text-sm">
                            <p>Phone: +61 3 8376 6284</p>
                            <p>Fax: +61 38 376 6284</p>
                            <p>Email: mail@catholicwebsite.com</p>
                        </div>
                    </div>
                    <hr className="my-10" />
                    <h2 className="text-xl font-bold">Another ADDRESS</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 ">
                        <div className="text-sm">
                            <p>Catholic Church</p>
                            <p>121 King Street, Melbourne</p>
                            <p>Victoria 3000 Australia</p>
                        </div>
                        <div className="text-sm">
                            <p>Phone: +61 3 8376 6284</p>
                            <p>Fax: +61 38 376 6284</p>
                            <p>Email: mail@catholicwebsite.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    </div>
}