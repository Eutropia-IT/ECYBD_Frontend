export default function AboutOurTeam() {
    return <>
        <div style={{ backgroundColor: "#F3F3F3" }}>
            <div className="text-black mt-18 mx-20 mb-20">
                <h1 className="mb-12 text-2xl font-bold text-center uppercase underline underline-offset-4 decoration-4 decoration-red-600" style={{ color: "#18299D" }}>Executive & Commission Members</h1>

                <div className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    <div className="card  shadow-xl border-b-4 border-blue-700" style={{ backgroundColor: "#f9f1e6" }}>
                        <figure className="md:px-10 md:pt-10">
                            <img src={'https://i.ibb.co/Y7zxKX4/23.jpg'} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-red-600">Mark Zimmer </h2>
                            <p>Pastor</p>
                        </div>
                    </div>
                    <div className="card  shadow-xl border-b-4 border-blue-700" style={{ backgroundColor: "#f9f1e6" }}>
                        <figure className="md:px-10 md:pt-10">
                            <img src={'https://i.ibb.co/9YH18zX/22.jpg'} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center " >
                            <h2 className="card-title text-red-600">Rebecca Martinez</h2>
                            <p>Parish Secretary</p>
                        </div>
                    </div>
                    <div className="card shadow-xl border-b-4 border-blue-700" style={{ backgroundColor: "#f9f1e6" }}>
                        <figure className="md:px-10 md:pt-10">
                            <img src={'https://i.ibb.co/ccHyy4D/20.jpg'} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-red-600">John Wilson</h2>
                            <p>Deacon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}