import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Header lang="zh" />
      <main className="site-content">{children}</main>
      <Footer lang="zh" />
    </div>
  );
}
