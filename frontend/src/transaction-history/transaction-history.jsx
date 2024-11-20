import React from "react";
import { useNavigate } from "react-router-dom";

export function TransactionHistory() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const transactions = [
    {
      id: 1,
      date: "2024-11-20",
      type: "Transfer",
      amount: "$200",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-11-18",
      type: "Deposit",
      amount: "$500",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-11-17",
      type: "Transfer",
      amount: "$100",
      status: "failed",
    },
    {
      id: 4,
      date: "2024-11-15",
      type: "Transfer",
      amount: "$50",
      status: "Completed",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <h1
          onClick={() => navigate("/dashboard")}
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
        <h1 className="text-3xl font-bold mb-6 text-center">
          Transaction History
        </h1>

        <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <table className="min-w-full text-sm text-gray-400">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Transaction ID</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Amount</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4">{transaction.id}</td>
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">{transaction.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`${
                        transaction.status === "Completed"
                          ? "bg-green-600"
                          : "bg-red-700"
                      } text-white px-3 py-1 rounded-full`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="bg-gray-800 py-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Bank. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
