export const metadata = {
  title: "About - Feng Zhichao's Website",
};

export default function EnAboutPage() {
  return (
    <section className="about">
      <div className="hero">
        <h1>About</h1>
      </div>

      <div className="about-bio">
        <p>
          Hello, hello — I&apos;m <strong>Feng Zhichao</strong>. I&apos;ve loved computers and programming since I was
          a kid, and I still do.
        </p>
        <p>Here you&apos;ll find some small tools I&apos;ve built and a few things I&apos;ve written — feel free to look around.</p>
      </div>

      <div className="find-me-label">FIND ME</div>
      <div className="find-me">
        <a className="contact-card" href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
          <span className="contact-name">GitHub</span>
          <span className="contact-desc">github.com/flanker</span>
        </a>
        <a
          className="contact-card"
          href="https://space.bilibili.com/266165600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-name">Bilibili</span>
          <span className="contact-desc">space.bilibili.com/266165600</span>
        </a>
        <div className="contact-card wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="qrcode" src="/images/assets/weixin_mp_qrcode.jpeg" alt="WeChat official account QR code" />
          <div>
            <div className="contact-name">WeChat Official Account</div>
            <div className="contact-desc">
              All posts are also published on my WeChat official account. Scan to subscribe.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
