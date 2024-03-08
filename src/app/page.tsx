import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div className="relative">
          <Image
            src="/images/longimg.png"
            alt="main"
            width={1980}
            height={100}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-white font-light text-[80px] ">
            Welcom to CrokyTimer !
          </span>
          <span></span>
        </div>
      </div>
    </main>
  );
}
