import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "@/components/icons/ArrowLeft";

export function Header() {
  return (
    <header className="p-8 lg:py-8 lg:px-16 flex items-center justify-between after:content-['']">
      <Link href="/">
        <ArrowLeft />
      </Link>
      <Image src="/logo.svg" width={42} height={29} alt="logo" />
    </header>
  );
}
