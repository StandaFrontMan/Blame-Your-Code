import Link from "next/link";

type Props = {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  formData: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};

export default function RegistrationFormView({
  formData,
  handleSubmit,
  handleChange,
}: Props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-gray-700 text-white shadow-xl rounded-xl md:flex-row md:space-y-0 ">
        <form
          className="flex flex-col justify-center p-8 md:p-8"
          onSubmit={handleSubmit}
        >
          <span className=" text-4xl font-medium justify-center items-center flex">
            Create an Account !
          </span>

          <div className="py-2 mt-4">
            <input
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-normal placeholder:text-gray-500 text-black"
              placeholder="User Name..."
              type="name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="py-2">
            <input
              className="w-full p-2 border placeholder:font-normal border-gray-300 rounded-md  placeholder:text-gray-500 text-black"
              placeholder="Email..."
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="py-2">
            <input
              className="w-full p-2 border placeholder:font-normal border-gray-300 rounded-md  placeholder:text-gray-500 text-black"
              placeholder="Password..."
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="py-2">
            <input
              className="w-full p-2 border placeholder:font-normal border-gray-300 rounded-md  placeholder:text-gray-500 text-black"
              placeholder="Confirm Password..."
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button className=" w-full p-2 my-4 bg-black text-white rounded-lg hover:bg-sky-700 transition-all  ">
            Sign Up
          </button>
          {/* <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            Sign in with Google
          </button> */}

          <div className=" grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-300" />
            <p className="text-center ">Or</p>
            <hr className="border-gray-300" />
          </div>

          <button className="gsi-material-button relative flex items-center justify-center border border-transparent text-white p-2 my-4  rounded-md text-base font-medium bg-black hover:bg-sky-700 transition-all focus:outline-none focus:ring focus:border-red-700 active:bg-red-800">
            <div className="gsi-material-button-content-wrapper flex items-center space-x-2">
              <div className="gsi-material-button-icon">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="gsi-material-button-contents">
                Continue with Google
              </span>
            </div>
          </button>
          <div className="text-center text-gray-400 mt-2">
            <Link href="/pages/authPage">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
