import RedirectStub from "@/components/RedirectStub";

export const metadata = {
  title: "Projects - Feng Zhichao's Website",
  robots: { index: false },
};

export default function EnProjectsPage() {
  return <RedirectStub to="/en/" message="Projects now live on the home page." linkText="Go to home →" />;
}
