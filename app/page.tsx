import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[1200px] m-auto">
      <h1 className="mb-5">Hello next js</h1>
      <Image src='https://q-xx.bstatic.com/xdata/images/hotel/max750/80400793.jpg?k=a25286921f81153b87996f52e8f3fa85fe59c3bae51424d3c1623f7805f5c380&o=' alt='not found' width={500} height={500} />
    </main>
  );
}
