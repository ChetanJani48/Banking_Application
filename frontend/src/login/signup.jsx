import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); 
    navigate("/dashboard"); 
  };
  return (
    <>
      <div class="bg-gray-900 flex justify-center items-center h-screen">
        <div class="bg-gray-600 w-full max-w-sm rounded-lg p-8">
          <h2 class="text-center text-white font-bold text-2xl mb-6">
            Sign Up
          </h2>
          <form action="" onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="username" className="block mb-1 text-gray-300">
                Username
              </label>
              <input
                id="username"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="block mb-1 text-gray-300">
                Email
              </label>
              <input
                id="email"
                class="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="block mb-1 text-gray-300">
                Password
              </label>
              <input
                id="password"
                class="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="mb-4">
              <label for="confirm-password" class="block mb-1 text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                class="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-800 py-2 text-white hover:bg-blue-900 rounded-md shadow-2xl"
            >
              Sign Up
            </button>
          </form>
          <p class="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
