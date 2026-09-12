export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat md:p-6 bg-blue-200"
      // style={{
      //   backgroundImage: "url('/bg.jpg')",
      // }}
    >
      <div className="md:min-h-[calc(100vh-3rem)] rounded-3xl bg-white/10 md:p-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:min-h-screen">
        {children}
      </div>
    </div>
  );
}
