import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };

  let a = 0;
  const addData = () => {
    a = a + 1;
    console.log("Value (without useState):", a);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Counter Demo dengan useState</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Perbedaan antara state dengan useState vs variable biasa
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* WITH useState - Left Column */}
        <div className="bg-linear-to-br from-blue-50 via-blue-100 to-blue-50 border-3 border-blue-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-500 rounded-full animate-pulse"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              Dengan useState ✓
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-3 uppercase tracking-wide">
              Current Count:
            </p>
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-blue-600 mb-2 text-center">
              {count}
            </div>
            <div className="h-1 bg-linear-to-r from-blue-300 to-blue-600 rounded-full mb-4"></div>
            <p className="text-center text-green-600 font-semibold">
              ✓ UI akan terupdate secara real-time
            </p>
          </div>

          <button
            onClick={addValue}
            className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base mb-4">
          
            ➕ Increment Count
          </button>

          <div className="bg-blue-100 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-blue-300 space-y-2">
            <p className="text-xs sm:text-sm text-blue-900 font-semibold">
              💡 Penjelasan:
            </p>
            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
              useState membuat komponen re-render setiap kali state berubah.
              Nilai akan terlihat di UI secara langsung.
            </p>
          </div>
        </div>

        {/* WITHOUT useState - Right Column */}
        <div className="bg-linear-to-br from-orange-50 via-orange-100 to-orange-50 border-3 border-orange-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-orange-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900">
              Tanpa useState ✗
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-2 border-orange-200">
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-3 uppercase tracking-wide">
              Current Value:
            </p>
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-600 mb-2 text-center">
              0
            </div>
            <div className="h-1 bg-linear-to-r from-orange-300 to-orange-600 rounded-full mb-4"></div>
            <p className="text-center text-red-600 font-semibold">
              ✗ UI tidak akan berubah (hanya console.log)
            </p>
          </div>

          <button
            onClick={addData}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base mb-4">
          
            ➕ Increment Value
          </button>

          <div className="bg-orange-100 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-orange-300 space-y-2">
            <p className="text-xs sm:text-sm text-orange-900 font-semibold">
              💡 Penjelasan:
            </p>
            <p className="text-xs sm:text-sm text-orange-800 leading-relaxed">
              Variabel biasa tidak trigger re-render. Perubahan hanya bisa
              dilihat di Console Browser (F12).
            </p>
          </div>
        </div>
      </div>

      {/* Key Differences Section */}
      <div className="bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl p-1 shadow-2xl mb-8">
        <div className="bg-white rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 Perbedaan Utama
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-100">
                  <span className="text-xl sm:text-2xl">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-2">
                  useState
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Membuat state yang reactive. React akan otomatis re-render
                  komponen saat state berubah, sehingga UI selalu sinkron dengan
                  data.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-orange-100">
                  <span className="text-xl sm:text-2xl">✗</span>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-orange-900 mb-2">
                  Variable Biasa
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Perubahan nilai tidak akan memicu re-render. Komponen tidak
                  tahu ada perubahan, jadi UI tetap sama meskipun nilai berubah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Console Tips */}
      <div className="bg-yellow-50 border-3 border-yellow-400 rounded-2xl p-6 shadow-lg">
        <p className="text-yellow-900 font-semibold mb-2">
          💻 💡 Tips Debugging:
        </p>
        <p className="text-yellow-800">
          Buka Developer Tools dengan menekan{" "}
          <span className="font-bold bg-yellow-200 px-2 py-1 rounded">F12</span>{" "}
          atau{" "}
          <span className="font-bold bg-yellow-200 px-2 py-1 rounded">
            Ctrl+Shift+I
          </span>{" "}
          untuk melihat Console output dari tombol "Tanpa useState".
        </p>
      </div>
    </div>
  );
};

// === simple code ===

// import { useState } from "react";
// export const Counter = () => {
//   const [count, setCount] = useState(0);
//   const addValue = () => {
//     setCount(count + 1);
//   };

//   const a = 0;
//   const addData = () => {
//     a + 1;
//     console.log(a);
//   };
//   return (
//     <div className="bg-zinc-50 border p-4 rounded-2xl">
//       Curent Count : {count}
//       <button onClick={addValue}>Add Value</button>
//       <button onClick={addData}>Add Value</button>
//     </div>
//   );
// };
