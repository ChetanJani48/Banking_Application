import React from "react";
import { useNavigate } from "react-router-dom";

export function Deposit() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <h1
          onClick={handleNavigateToDashboard}
          className="text-2xl font-bold cursor-pointer"
        >
          Bank
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Log Out
        </button>
      </header>

      <main className="flex-grow bg-gray-700 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Deposit Money</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="deposit-amount"
              className="block mb-1 text-gray-300"
            >
              Amount
            </label>
            <input
              id="deposit-amount"
              type="number"
              placeholder="Enter amount to deposit"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
          >
            Deposit
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 py-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Bank. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
