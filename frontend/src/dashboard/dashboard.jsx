import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="h-screen flex flex-col bg-gray-900 text-white">
        <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bank</h1>
          <button
            onClick={() => handleNavigation("/")}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </header>

        <main className="flex-grow bg-gray-700 p-6 flex flex-col items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-md">
            <img
              src="/images.png"
              alt="Profile"
              className="rounded-full mx-auto mb-4 border-4 border-gray-600 "
            />
            <h2 className="text-2xl font-bold">Chetan Jani</h2>
            <p className="text-gray-400">Account No: 1234567890</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-md">
            <button
              onClick={() => handleNavigation("/transfer")}
              className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700"
            >
              Transfer
            </button>
            <button
              onClick={() => handleNavigation("/deposit")}
              className="bg-green-600 py-3 rounded-lg hover:bg-green-700"
            >
              Deposit
            </button>
            <button
              onClick={() => handleNavigation("/transaction-history")}
              className="bg-yellow-600 py-3 rounded-lg hover:bg-yellow-700"
            >
              Transaction History
            </button>
            <button
              onClick={() => handleNavigation("/balance")}
              className="bg-purple-600 py-3 rounded-lg hover:bg-purple-700"
            >
              Balance
            </button>
          </div>
        </main>

        <footer className="bg-gray-800 py-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bank. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
