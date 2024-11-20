import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate("/dashboard");
  };

  return (
    <>
      <div class="bg-gray-900 flex justify-center items-center h-screen">
        <div class="bg-gray-600 w-full max-w-sm rounded-lg p-8">
          <h2 class="text-center text-white font-bold text-2xl mb-6">Login</h2>
          <form action="" onSubmit={handleLogin}>
            <div class="mb-3">
              <label for="" class="block mb-1 text-gray-300">
                Email
              </label>
              <input
                class="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
                type="email"
                name=""
                placeholder="Email"
                id=""
              />
            </div>
            <div class="mb-4">
              <label for="" class="block mb-1 text-gray-300">
                Password
              </label>
              <input
                class="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
                type="password"
                name=""
                placeholder="Password"
                id=""
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-800 py-2 text-white hover:bg-blue-900 rounded-md shadow-2xl"
            >
              Login
            </button>
          </form>
          <p class="text-center text-gray-300 mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
