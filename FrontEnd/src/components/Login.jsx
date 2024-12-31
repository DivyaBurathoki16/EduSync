import React from 'react'

const Login = () => {

    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                    <div
                        className="relative px-4 py-10 bg-[#021D3C] mx-8 md:mx-0  rounded-3xl sm:p-10 border  shadow-none transition-all duration-500 cursor-pointer   hover:shadow-[-6px_-6px_15px_#0ea5e9] "
                    >
                        <div className="max-w-md mx-auto text-white">
                            <div className="flex items-center space-x-5 justify-center">
                                <h1 className='text-2xl font-bold'>Login</h1>
                            </div>
                            <div className="mt-5">
                                <label
                                    for="login"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >UID</label
                                >
                                <input
                                    id="login"
                                    type="text"
                                    required
                                    className="border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    for="login"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >Username</label
                                >
                                <input
                                    id="login"
                                    type="text"
                                    required
                                    className="border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    for="login"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >E-mail</label
                                >
                                <input
                                    id="login"
                                    type="email"
                                    className="border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    for="password"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >Password</label
                                >
                                <input
                                    id="password"
                                    type="password"
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <div classname="mt-5">
                                <button
                                    type="submit"
                                    classname="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    Log in
                                </button>
                            </div>
                            <div classname="flex items-center justify-between mt-4">
                                <span classname="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                <a
                                    href="#"
                                    classname="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                >or sign up</a
                                >
                                <span classname="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen ">
                <div className="flex justify-center items-center rounded-3xl gap-16 border w-[40rem] h-[20rem] bg-[#021D3C] shadow-none transition-all duration-500 cursor-pointer   hover:shadow-[-6px_-6px_15px_#0ea5e9] ">
                    <div className="mx-5 flex p-5 rounded-2xl justify-center items-center hover:bg-[#02264F]">
                        <button className="border-none bg-none cursor-pointer flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#ffff"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                            <div className='text-white font-bold text-3xl'>Student</div>
                        </button>
                    </div>
                    <div className="mx-5 flex justify-center items-center p-5 rounded-2xl  hover:bg-[#02264F]">
                        <button className="border-none bg-none cursor-pointer flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#ffff"><path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z" /></svg>
                            <div className='text-white font-bold text-3xl'>Admin</div>
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Login