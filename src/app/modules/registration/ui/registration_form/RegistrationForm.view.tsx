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
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center">
        <input
          className="px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white"
          placeholder="User Name..."
          type="name"
          name="name"
          value={formData.username}
          onChange={handleChange}
          required
        />
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
        <input
          className="px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white"
          placeholder="Confirm Password..."
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button className="py-2 px-2 mx-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg duration-150">
          Register
        </button>
      </div>
    </form>
  );
}
