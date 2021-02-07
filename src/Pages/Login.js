const Login = () => {
    return (
        <div className="w-full h-screen text-white font-bold bg-gradient-to-r from-blue-400 to-purple-900 flex items-center justify-center">
            <form action="/POST" className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center ">
                    <label className="mt-3 text-lg">
                        Username
                    </label>
                    <input type="text" className="my-3 shadow-sm text-gray-600 px-2 border rounded focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none">
                    </input>
                </div>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <label className="mt-3 text-lg">
                        Password
                    </label>
                    <input  type="password" className="my-3 shadow-sm text-gray-600 px-2 border rounded focus:border-purple-700 focus:ring-purple-700 outline-none">
                    </input>
                </div>
                <button className="shadow-md w-60 p-1 my-5 bg-blue-400 hover:bg-blue-600 font-bold rounded">
                    Log in
                </button>
                <p className="font-normal text-sm text-center">
                    No account?, <a href="" className="font-bold text-blue-200 "> Sign in</a>
                </p>
            </form>
            <div className="absolute top-2 p-2 bg-gradient-to-r from-red-500 to-red-600 rounded 
            shadow-md text-white transition-all transition-500 
            ease-in-out flex item-center">
                <span className="flex rounded-full bg-red-800 px-2 py-1 font-bold mr-3"> !</span>
                <span className="mr-2 text-left flex-auto">No input information</span>
            </div>
        </div>
    )
}

//focus ponerle color, ring ponerle collor, outline quitarlo

export default Login