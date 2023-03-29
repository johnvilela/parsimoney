import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-md-l-secondary-container grid place-items-center">
      <Image alt="Parsimoney logo" src='/logo-bg.png' width={1000} height={200} />
    </main>
  )
}
