import Link from "next/link";

export default function RateCard() {
  return (
    <main className="pt-16">
      <div className="flex flex-col space-y-4">
        <Link href={"/RateCard/StudioAndOutdoor"} className="underline">
          Studio And Outdoor
        </Link>
        <Link href={"/RateCard/Wedding"} className="underline">
          Wedding
        </Link>
      </div>
    </main>
  );
}
