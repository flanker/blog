import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Feng Zhichao's Personal Website",
  description:
    "This is Feng Zhichao's personal website, a blog about Tech Lead, technology, and product development. Topics include development technologies, engineering practices, self-management, team management, and project management.",
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
