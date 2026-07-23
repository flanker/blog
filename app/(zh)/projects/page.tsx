import RedirectStub from "@/components/RedirectStub";

export const metadata = {
  title: "项目 - 冯智超的个人网站",
  robots: { index: false },
};

export default function ProjectsPage() {
  return <RedirectStub to="/" message="项目已合并到首页。" linkText="前往首页 →" />;
}
