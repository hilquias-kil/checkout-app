import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8 lg:w-[340px] flex flex-col items-center lg:px-0 m-auto">
      <h2 className="text-2xl mb-4">Não encontrado</h2>
      <p className="text-center">
        Não foi possível encontrar o recurso solicitado
      </p>
      <Link href="/">Voltar para inicio</Link>
    </div>
  );
}
