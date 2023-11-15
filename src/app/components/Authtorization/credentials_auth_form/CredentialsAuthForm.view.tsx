import { FormEventHandler } from "react";

type Props = {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  formData: {
    email: string;
    password: string;
  };
};

export default function CredentialsAuthFormView({
  handleChange,
  handleSubmit,
  formData,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white"
          placeholder="Email..."
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white"
          placeholder="Password..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="buttonBlock">
          <button className="py-2 px-2 mx-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg duration-150">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
