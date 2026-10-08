import type { Metadata } from "next";
import SiteDocument from "@/components/SiteDocument";

export const metadata: Metadata = {
  title: "404 - 页面未找到",
  robots: { index: false },
};

// The app has one root layout per language, so the 404 page renders its own document.
export default function GlobalNotFound() {
  return (
    <SiteDocument lang="zh">
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1>404 - 页面未找到</h1>
        <p style={{ fontSize: "1.2rem", margin: "2rem 0" }}>抱歉，您访问的页面不存在。</p>
        <p>
          <a href="/" style={{ fontSize: "1.1rem" }}>
            返回首页
          </a>
        </p>
      </div>
    </SiteDocument>
  );
}
