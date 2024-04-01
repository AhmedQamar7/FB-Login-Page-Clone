import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">

      {/* Left Side  */}

      <div className="text-3xl w-1/2">

        <Image
          src={"/facebook/logo.svg"}
          width={300}
          height={100}
          alt="FaceBook Logo"
        />


        <p className="ml-8 -mt-3">
          Facebook helps you connect and share with the people in your life.
        </p>

      </div>

      {/* Right Side  */}

      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">

        <input className="my-2 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600" type="text"
          placeholder="Email or Phone Number"></input>

        <input className="my-2 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600" type="password" placeholder="Password"></input>

        <button className="bg-blue-600 my-2 rounded-md py-2 text-lg font-bold text-white hover:bg-blue-700">
          Log In
        </button>

        <p className="text-blue-600 text-sm my-2 hover:underline cursor-pointer text-center">
          Forgot Password?
        </p>

        <span className="my-2">
          <hr />
        </span>

        <button className="bg-green-500 my-2 rounded-md py-2 text-lg font-bold text-white hover:bg-green-600 w-fit px-2 mx-auto">
          Create New Account
          </button>

      </div>

    </div>
  );
}
