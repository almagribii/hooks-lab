import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts";

export const FetchingData = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchCount, setFetchCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPost(data.slice(0, 5)); 
      setFetchCount((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("useEffect triggered! Fetching data...");
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Hook Lab: useEffect
        </h1>
        <p className="text-lg text-gray-600">
          Side Effect: Mengambil data dari API saat komponen pertama kali dimuat
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* LEFT COLUMN: VISUAL UI STATE */}
        <div className="bg-linear-to-br from-indigo-50 via-indigo-100 to-indigo-50 border-3 border-indigo-400 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-indigo-500 rounded-full animate-pulse"></div>
            <h2 className="text-3xl font-bold text-indigo-900">
              Data UI State
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border-2 border-indigo-200 min-h-400px">
            <p className="text-sm text-gray-500 font-semibold mb-4 uppercase tracking-wide">
              Result from {url}:
            </p>

            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                <p className="text-indigo-600 font-medium">Fetching Data...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {post.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-indigo-50 rounded-lg border border-indigo-100"
                  >
                    <h4 className="font-bold text-indigo-900 text-sm capitalize">
                      {item.title}
                    </h4>
                    <p className="text-xs text-indigo-700 line-clamp-1">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-indigo-100 rounded-xl p-5 border-2 border-indigo-300">
            <p className="text-sm text-indigo-900 font-semibold mb-1">
              💡 Penjelasan UI:
            </p>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Data di atas disimpan di dalam <b>useState</b>. Saat{" "}
              <b>useEffect</b> selesai mengambil data, state diupdate dan UI
              dirender ulang secara otomatis.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: EFFECT LOGIC & TRACE */}
        <div className="bg-linear-to-br from-emerald-50 via-emerald-100 to-emerald-50 border-3 border-emerald-400 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-emerald-900">
              Effect Trace
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6 shadow-lg border-2 border-emerald-200 min-h-400px font-mono">
            <p className="text-xs text-emerald-400 font-semibold mb-4 uppercase tracking-wide">
              Console Output Simulator:
            </p>
            <div className="space-y-3 text-sm">
              <div className="text-emerald-300">
                <span className="text-gray-500">[1]</span> Component Mounted...
              </div>
              <div className="text-emerald-300 font-bold">
                <span className="text-gray-500">[2]</span> useEffect()
                Triggered!
              </div>
              <div className="text-blue-300">
                <span className="text-gray-500">[3]</span> GET {url} status 200
              </div>
              <div className="text-emerald-300">
                <span className="text-gray-500">[4]</span> setPost(data) called
              </div>
              <div className="text-yellow-300 italic">
                <span className="text-gray-500">[5]</span> Total Fetch:{" "}
                {fetchCount} times
              </div>
            </div>

            <div className="mt-20 p-4 bg-slate-800 rounded-lg border border-slate-700">
              <code className="text-xs text-pink-400">
                useEffect(() ={">"} {"{"} <br />
                &nbsp;&nbsp;fetchData(); <br />
                {"}"}, []);
              </code>
            </div>
          </div>

          <button
            onClick={() => fetchData()}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg active:scale-95 text-lg mb-4"
          >
            🔄 Re-fetch Data
          </button>

          <div className="bg-emerald-100 rounded-xl p-5 border-2 border-emerald-300">
            <p className="text-sm text-emerald-900 font-semibold mb-1">
              💡 Penjelasan Effect:
            </p>
            <p className="text-sm text-emerald-800 leading-relaxed">
              Dependency array{" "}
              <code className="bg-emerald-200 px-1 rounded">[]</code> memastikan
              fetch hanya jalan <b>sekali</b> saat komponen muncul (mount).
            </p>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-linear-to-r from-indigo-500 to-emerald-500 rounded-3xl p-1 shadow-2xl">
        <div className="bg-white rounded-[22px] p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Kenapa Pakai useEffect?
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Tanpa useEffect, proses <b>fetchData()</b> akan terpanggil
            terus-menerus setiap kali komponen re-render, yang bisa menyebabkan
            aplikasi <i>crash</i> atau terkena <i>rate limit</i> API.
          </p>
        </div>
      </div>
    </div>
  );
};

// === Simply Code ===
// import { useEffect, useState } from "react";

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const url = "https://jsonplaceholder.typicode.com/posts";

// export const FetchingData = () => {
//   const [post, setPost] = useState<Post[]>([]);
//   const fetchData = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log("data", data);
//       setPost(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {post?.map((item) => (
//         <div
//           key={item.id}
//           style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}
//         >
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//           <small>
//             ID: {item.id} | User ID: {item.userId}
//           </small>
//         </div>
//       ))}
//     </div>
//   );
// };
