import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(3.456);
  const [usdValue, setUsdValue] = useState(100000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-16 bg-red-50 font-sans">
      <header className="w-full bg-red-600 p-8 shadow-lg text-center">
        <h1 className="text-5xl font-extrabold text-white">
          Crypto Master
        </h1>
      </header>

      <section className="mt-12 flex flex-col items-center w-full max-w-3xl">
        <div className="bg-red-100 p-8 rounded-lg shadow-lg w-full text-center">
          <h2 className="text-3xl font-bold text-red-800">Total Balance</h2>
          <p className="mt-4 text-6xl font-extrabold text-red-900">{balance} BTC</p>
          <p className="mt-2 text-xl text-red-700">~ ${usdValue.toLocaleString()} USD</p>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-3xl">
        <div className="bg-red-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-800">Transaction History</h2>
          <ul className="mt-4 text-left text-red-700">
            <li className="mb-2">-0.234 BTC to <span className="font-semibold">1A2b3C4d</span></li>
            <li className="mb-2">+0.567 BTC from <span className="font-semibold">5D6e7F8g</span></li>
            <li className="mb-2">-0.100 BTC to <span className="font-semibold">9H0i1J2k</span></li>
          </ul>
        </div>

        <div className="bg-red-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-800">Transfer Crypto</h2>
          <form className="mt-4 flex flex-col items-center">
            <label className="w-full text-left text-sm text-red-700 mb-2" htmlFor="address">
              Recipient Address
            </label>
            <input
              className="input-field w-full mb-4"
              type="text"
              id="address"
              placeholder="Enter recipient address"
            />
            <label className="w-full text-left text-sm text-red-700 mb-2" htmlFor="amount">
              Amount (BTC)
            </label>
            <input
              className="input-field w-full mb-4"
              type="number"
              id="amount"
              placeholder="Enter amount"
            />
            <button
              type="submit"
              className="submit-button w-full"
            >
              Transfer
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-16 w-full bg-red-600 p-4 text-center">
        <p className="text-white">© 2024 Crypto Master</p>
      </footer>
    </main>
  );
}
