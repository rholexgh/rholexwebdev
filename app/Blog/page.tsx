import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rholexgh - Blog",
  description: "Professional Portrait | Retouching Studio.",
  openGraph: {
    title: "Rholexgh — Blog.",
    description: "Professional Portrait | Retouching Studio.",
    url: "https://www.rholexghstudios.com/",
    siteName: "Rholexgh Studios",
    images: "/Assets/img/me/iamjulius_s.png",
    locale: "en-US",
    type: "website",
  },
};
export default function Blog() {
  return (
    <main className="pt-16">
      <section className="flex min-h-[80vh] flex-col items-center justify-center p-4">
        <div className="text-lg font-black">Blog Page Coming Soon.</div>
      </section>
    </main>
  );
}
