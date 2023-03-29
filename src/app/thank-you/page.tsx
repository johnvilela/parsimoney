export default function ThankYou() {
  return (
    <main className="relative w-screen h-screen bg-white p-4 lg:p-2">
      <div className="w-full h-full top-0 left-0 absolute z-10 bg-gradient-radial from-cyan-100" />

      <div className="relative z-20">
        <h1 className="text-3xl w-full text-center py-2 font-medium tracking-tighter text-stone-800 bg-gradient-to-b from-stone-600 to-stone-900 bg-clip-text text-transparent">PARSIMONEY</h1>

        <div className="flex flex-col items-center justify-center py-56 lg:py-72">
          <p className="text-8xl text-left lg:text-center lg:text-9xl font-black tracking-tighter mb-4 bg-gradient-to-b from-stone-600 to-stone-900 bg-clip-text text-transparent">
            Thank you!
          </p>
          <p className="text-3xl tracking-tighter text-left lg:text-center">
            {"We'll let you know when we're ready to launch."}
          </p>
        </div>
      </div>
    </main>
  )
}
