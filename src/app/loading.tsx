import Image from "next/image";

export default function Loading() {
  return (
    <div className="p-8 lg:w-[340px] gap-4 flex justify-center lg:px-0 m-auto">
      <p>Carregando</p>
      <Image
        src="/loader.svg"
        width={24}
        height={24}
        alt="Carregando..."
        className="animate-spin"
      />
    </div>
  );
}
