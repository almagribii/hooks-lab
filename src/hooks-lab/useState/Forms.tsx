import { useState } from "react";

export const Forms = () => {
  // WITH useState - Form 1
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    birthdate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data (with useState):", formData);
    alert(
      `✓ Data Submitted \n\nNama Lengkap: ${formData.fullname}\nEmail: ${formData.email}\nTanggal Lahir: ${formData.birthdate}`
    );
  };

  // WITHOUT useState - Form 2
  let ordinaryFormData = {
    fullname: "",
    email: "",
    birthdate: "",
  };

  const handleChangeOrdinary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    ordinaryFormData[name as keyof typeof ordinaryFormData] = value;
  };

  const handleSubmitOrdinary = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data (without useState):", ordinaryFormData);
    alert(
      `✗ Data Submitted (Check Console!)\n\nNama Lengkap: ${ordinaryFormData.fullname}\nEmail: ${ordinaryFormData.email}\nTanggal Lahir: ${ordinaryFormData.birthdate}\n\n(Lihat Console untuk hasil yang sebenarnya)`
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Form Demo dengan useState
        </h1>
        <p className="text-lg text-gray-600">
          Perbedaan penggunaan useState vs variabel biasa dalam form handling
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* FORM WITH useState */}
        <div className="bg-linear-to-br from-blue-50 via-blue-100 to-blue-50 border-3 border-blue-400 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
            <h2 className="text-3xl font-bold text-blue-900">
              Form dengan useState ✓
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Fullname Input */}
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Masukkan nama..."
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <p className="text-xs text-blue-700 mt-2">
                📝 State:{" "}
                <span className="font-bold bg-blue-200 px-2 py-1 rounded">
                  {formData.fullname || "kosong"}
                </span>
              </p>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email..."
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <p className="text-xs text-blue-700 mt-2">
                📝 State:{" "}
                <span className="font-bold bg-blue-200 px-2 py-1 rounded">
                  {formData.email || "kosong"}
                </span>
              </p>
            </div>

            {/* Birthdate Input */}
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">
                Tanggal Lahir
              </label>
              <input
                type="text"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                placeholder="Masukkan tanggal lahir..."
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <p className="text-xs text-blue-700 mt-2">
                📝 State:{" "}
                <span className="font-bold bg-blue-200 px-2 py-1 rounded">
                  {formData.birthdate || "kosong"}
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-lg"
            >
              ✓ Submit Form
            </button>
          </form>

          <div className="mt-6 bg-blue-100 rounded-xl p-5 border-2 border-blue-300 space-y-2">
            <p className="text-sm text-blue-900 font-bold">💡 Keuntungan:</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ State terupdate secara real-time</li>
              <li>✓ UI selalu sinkron dengan data</li>
              <li>✓ Mudah untuk validasi dan form handling</li>
              <li>✓ React track perubahan otomatis</li>
            </ul>
          </div>
        </div>

        {/* FORM WITHOUT useState */}
        <div className="bg-linear-to-br from-orange-50 via-orange-100 to-orange-50 border-3 border-orange-400 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-orange-900">
              Form tanpa useState ✗
            </h2>
          </div>

          <form onSubmit={handleSubmitOrdinary} className="space-y-5">
            {/* Fullname Input */}
            <div>
              <label className="block text-sm font-bold text-orange-900 mb-2 uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="fullname"
                onChange={handleChangeOrdinary}
                placeholder="Masukkan nama..."
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all bg-orange-50"
              />
              <p className="text-xs text-orange-700 mt-2">
                ⚠️ Tidak ada state tracking (value tidak ditampilkan)
              </p>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold text-orange-900 mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChangeOrdinary}
                placeholder="Masukkan email..."
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all bg-orange-50"
              />
              <p className="text-xs text-orange-700 mt-2">
                ⚠️ Tidak ada state tracking (value tidak ditampilkan)
              </p>
            </div>

            {/* Birthdate Input */}
            <div>
              <label className="block text-sm font-bold text-orange-900 mb-2 uppercase tracking-wider">
                Tanggal Lahir
              </label>
              <input
                type="text"
                name="birthdate"
                onChange={handleChangeOrdinary}
                placeholder="Masukkan tanggal lahir..."
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all bg-orange-50"
              />
              <p className="text-xs text-orange-700 mt-2">
                ⚠️ Tidak ada state tracking (value tidak ditampilkan)
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-lg"
            >
              ✗ Submit Form
            </button>
          </form>

          <div className="mt-6 bg-orange-100 rounded-xl p-5 border-2 border-orange-300 space-y-2">
            <p className="text-sm text-orange-900 font-bold">⚠️ Kekurangan:</p>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>✗ Tidak bisa menampilkan value real-time</li>
              <li>✗ UI tidak terupdate otomatis</li>
              <li>✗ Sulit untuk validasi form</li>
              <li>✗ Data hanya terlihat di Console (F12)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Differences */}
      <div className="bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl p-1 shadow-2xl mb-8">
        <div className="bg-white rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 Perbedaan Utama dalam Form Handling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-900 mb-4">
                ✓ Dengan useState
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>📊 State terupdate real-time saat user input</li>
                <li>🔄 Component re-render otomatis</li>
                <li>✅ Bisa menampilkan value di UI saat typing</li>
                <li>🛡️ Validasi form lebih mudah</li>
                <li>💾 Data selalu tersimpan di state</li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-300">
              <h4 className="text-lg font-bold text-orange-900 mb-4">
                ✗ Tanpa useState
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>❌ Tidak ada real-time state tracking</li>
                <li>🚫 Component tidak re-render otomatis</li>
                <li>👻 Value tidak ditampilkan di UI</li>
                <li>⚠️ Validasi form lebih rumit</li>
                <li>🔍 Data hanya bisa dilihat di Console</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 border-3 border-yellow-400 rounded-2xl p-6 shadow-lg">
        <p className="text-yellow-900 font-bold mb-3">💻 💡 Tips:</p>
        <p className="text-yellow-800 mb-3">
          Buka Developer Console dengan{" "}
          <span className="font-bold bg-yellow-200 px-2 py-1 rounded">F12</span>{" "}
          untuk melihat perbedaan output antara kedua form saat submit!
        </p>
        <p className="text-yellow-800 text-sm">
          Form kiri (useState): Data ditampilkan di UI & Console | Form kanan:
          Data hanya di Console, UI tidak berubah
        </p>
      </div>
    </div>
  );
};

// === simply code ===

// import { useState } from "react";

// export const Forms = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     birthdate: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = () => {
//     const currentValue = () => {
//       console.log(formData);
//     };
//     currentValue();
//     alert(
//       `Data Submitted \n Nama Lengkap: ${formData.fullname}, \n Email: ${formData.email},\n Tanggal Lahir: ${formData.birthdate}`
//     );
//   };

//   const SubmitOrdinay = () => {};

//   const ChangeOrdinary = () => {};
//   return (
//     <div>
//       <form action="" className="bg-blue-400 p-4 rounded-2xl w-200 mx-auto">
//         <label htmlFor="fullname" className="block mb-2 font-semibold">
//           Nama Lengkap
//         </label>
//         <input
//           name="fullname"
//           className="border rounded-2xl px-4 py-1 w-full"
//           value={formData.fullname}
//           onChange={handleChange}
//           placeholder="Masukkan nama..."
//         />
//         <label htmlFor="fullname" className="block mb-2 font-semibold">
//           Email
//         </label>
//         <input
//           name="email"
//           className="border rounded-2xl px-4 py-1 w-full"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Masukkan email..."
//         />
//         <label htmlFor="fullname" className="block mb-2 font-semibold">
//           Tempat Tanggal Lahir
//         </label>
//         <input
//           name="birthdate"
//           className="border rounded-2xl px-4 py-1 w-full"
//           value={formData.birthdate}
//           onChange={handleChange}
//           placeholder="Masukkan tempat tanggal lahir..."
//         />
//         <button
//           type="submit"
//           className="mt-4 bg-white px-4 py-2 rounded-2xl font-semibold hover:bg-gray-200"
//           onClick={handleSubmit}
//         >
//           Submit Form
//         </button>
//       </form>
//     </div>
//   );
// };
