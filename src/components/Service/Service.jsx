
const Service = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-5xl mb-10">Our Services</h2>
            <div className="hero h-[200px] lg:h-[600px] border border-[#b45309]" style={{ backgroundImage: 'url(https://i.ibb.co/g38V61y/istockphoto-983207864-2048x2048.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">

                </div>
            </div>

            <div className=" grid lg:grid-cols-3 gap-8 h-64 lg:-mt-28 max-w-7xl mx-auto mb-10">
                <div className="bg-[#020617] text-center border border-[#b45309]">

                    <img className="w-14 rounded-full flex ml-[180px] lg:ml-[170px] mt-6 lg:mt-12" src="https://i.ibb.co/jGRTVW9/360-F-282943611-ga5-Ru-A5ni-WY8w-EUm-R8-Zj-NT9-Ay-Et0a-RD6.jpg" alt="" />
                    <p className="text-white font-semibold mt-2">Awesome Painter</p>
                    <p className="text-white font-semibold mt-2 mb-6">Donec faucibus convallis vehic. Nunc cursus et.</p>
                </div>

                {/* 2nd */}
                <div className="bg-[#020617] text-center border border-[#b45309]">

                    <img className="w-14 rounded-full flex  ml-[180px] lg:ml-[170px] lg:mt-12 mt-6" src="https://i.ibb.co/zb0TyHs/repair-thin-line-icon-settings-outline-vector-logo-illustration-wrench-screwdriver-linear-pictogram.webp" alt="" />
                    <p className="text-white font-semibold mt-2">Best Equipment</p>
                    <p className="text-white font-semibold mt-2 mb-6">Donec faucibus convallis vehic. Nunc cursus et.</p>
                </div>
                {/* 3rd */}
                <div className="bg-[#020617] mb-60 lg:mb-0 text-center border border-[#b45309] ">

                    <img className="w-14 rounded-full flex ml-[180px] lg:ml-[170px] lg:mt-12 mt-6" src="https://i.ibb.co/X59Jmpf/attachment-94779480.jpg" alt="" />
                    <p className="text-white font-semibold mt-2">Excellent Materials</p>
                    <p className="text-white font-semibold mt-2 mb-6">Donec faucibus convallis vehic. Nunc cursus et.</p>
                </div>
            </div>


        </div>
    );
};

export default Service;