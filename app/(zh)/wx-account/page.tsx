import RedirectStub from "@/components/RedirectStub";

export const metadata = {
  title: "公众号 - 冯智超的个人网站",
  robots: { index: false },
};

export default function WxAccountPage() {
  return <RedirectStub to="/about/" message="公众号信息已合并到关于页。" linkText="前往关于页 →" />;
}
