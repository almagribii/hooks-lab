import { useState } from "react";

export const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleState = () => {
    setIsVisible(!isVisible);
  };

  let isVisibleVar = false;
  const toggleVar = () => {
    isVisibleVar = !isVisibleVar;
    console.log("Value (without useState):", isVisibleVar);
    alert(
      "Variabel berubah menjadi: " +
        isVisibleVar +
        "\nTapi UI tidak ter-update!"
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Toggle Demo dengan useState
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Perbedaan reaktivitas saat menyembunyikan elemen UI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-linear-to-br from-blue-50 via-blue-100 to-blue-50 border-3 border-blue-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full ${
                isVisible ? "bg-green-500 animate-pulse" : "bg-blue-500"
              }`}
            ></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              Dengan useState ✓
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-2 border-blue-200 min-h-180px flex flex-col justify-center">
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-3 uppercase tracking-wide">
              Status Visibilitas:
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-600 mb-2 text-center">
              {isVisible ? "TAMPIL" : "HIDDEN"}
            </div>
            {isVisible && (
              <p className="text-center text-blue-800 bg-blue-50 p-2 rounded-lg border border-blue-100 mt-2">
                🔓 Password Terlihat: 123456
              </p>
            )}
            <div className="h-1 bg-linear-to-r from-blue-300 to-blue-600 rounded-full my-4"></div>
            <p className="text-center text-green-600 font-semibold">
              ✓ UI merespon perubahan state
            </p>
          </div>

          <button
            onClick={toggleState}
            className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base mb-4">
          
            🔄 Toggle Visibility
          </button>

          <div className="bg-blue-100 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-blue-300 space-y-2">
            <p className="text-xs sm:text-sm text-blue-900 font-semibold">
              💡 Penjelasan:
            </p>
            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
              Memanggil setter function memicu render ulang. React mengecek
              kondisi isVisible dan memperbarui DOM secara otomatis.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-br from-orange-50 via-orange-100 to-orange-50 border-3 border-orange-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-orange-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900">
              Tanpa useState ✗
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-2 border-orange-200 min-h-180px flex flex-col justify-center">
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-3 uppercase tracking-wide">
              Status Visibilitas:
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-600 mb-2 text-center">
              HIDDEN
            </div>
            <div className="h-1 bg-linear-to-r from-orange-300 to-orange-600 rounded-full my-4"></div>
            <p className="text-center text-red-600 font-semibold">
              ✗ Elemen tidak akan pernah muncul
            </p>
          </div>

          <button
            onClick={toggleVar}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base mb-4">
          
            🔄 Toggle Visibility
          </button>

          <div className="bg-orange-100 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-orange-300 space-y-2">
            <p className="text-xs sm:text-sm text-orange-900 font-semibold">
              💡 Penjelasan:
            </p>
            <p className="text-xs sm:text-sm text-orange-800 leading-relaxed">
              Variabel berubah di latar belakang, namun karena tidak ada signal
              re-render ke React, elemen tetap dalam kondisi awal.
            </p>
          </div>
        </div>
      </div>

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
                  useState (Reactive)
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Menyimpan data di dalam memori React. Saat data berubah, React
                  melakukan sinkronisasi ulang antara kode dan tampilan layar.
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
                  Variable Biasa (Static)
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Hanya data sementara di memori JavaScript. Perubahannya tidak
                  didengar oleh mesin render React, sehingga UI terlihat "mati".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-3 border-yellow-400 rounded-2xl p-6 shadow-lg">
        <p className="text-yellow-900 font-semibold mb-2">
          💻 💡 Tips Debugging:
        </p>
        <p className="text-yellow-800">
          Perhatikan <strong>Alert</strong> dan <strong>Console</strong> pada
          tombol oranye. Meskipun data berganti antara true/false, teks "HIDDEN"
          di atas tidak akan berubah.
        </p>
      </div>
    </div>
  );
};

// === Simply Code ===

// import { useState } from "react";
// export const Toogle = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     const handleToogle = () => {
//         setIsVisible(!isVisible);
//     }
//     return (
//       <div>
//         <h1 className="text-3xl font-bold mb-6">Toggle dengan useState</h1>

//         <button
//           onClick={handleToogle}
//           className="bg-blue-100 border-blue-100 rounded-full px-4 py-2 hover:bg-blue-200 transition"
//         >
//           Toogle
//         </button>
//         {isVisible && (
//           <div>
//             Ini Adalah Kalimat tersembunyi yang muncul ketika tombol Toogle di
//             klik.
//           </div>
//         )}
//       </div>
//     );
// }
