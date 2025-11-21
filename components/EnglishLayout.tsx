import Header from "./Header";
import Footer from "./Footer";

interface EnglishLayoutProps {
  children: React.ReactNode;
}

export default function EnglishLayout({ children }: EnglishLayoutProps) {
  return (
    <div className="container">
      <Header lang="en" />
      <main className="site-content">{children}</main>
      <Footer lang="en" />
    </div>
  );
}
