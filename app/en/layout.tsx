import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Feng Zhichao's Personal Website",
  description:
    "Feng Zhichao's notes on tech leadership, engineering practice, and product development.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container">
        <Header lang="en" />
        <main className="site-content">{children}</main>
        <Footer lang="en" />
      </div>
    </>
  );
}
