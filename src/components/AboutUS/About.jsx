export default function About() {
    return <>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 pt-6"  style={{backgroundColor: "#F3F3F3"}}>
            <div>
                <img className="w-full object-scale-down  h-auto" src={'https://i.ibb.co/jrPkCrp/div-bg-image.png'} alt="img" />
            </div>
            <div className="">

                <h2 className="text-center font-extrabold mb-6 mx-auto text-3xl pt-10 underline" style={{ color:"#18299D"}}>About Us</h2>

                <p className="text-justify mx-auto align-center w-5/6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </>
}