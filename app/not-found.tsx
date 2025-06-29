import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1>404 - 页面未找到</h1>
      <p style={{ fontSize: "1.2rem", margin: "2rem 0" }}>抱歉，您访问的页面不存在。</p>
      <p>
        <Link href="/" style={{ fontSize: "1.1rem" }}>
          返回首页
        </Link>
      </p>
    </div>
  );
}
