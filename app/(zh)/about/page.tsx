export const metadata = {
  title: "关于 - 冯智超的个人网站",
};

export default function AboutPage() {
  return (
    <section className="about">
      <div className="hero">
        <h1>关于我</h1>
      </div>

      <div className="about-bio">
        <p>
          Hello，Hello，我是<strong>冯智超</strong>。从小就喜欢计算机和编程，如今依然乐在其中。
        </p>
        <p>这里放着我做的一些小工具，和写下的一些文章——欢迎随便逛逛。</p>
      </div>

      <div className="find-me-label">找到我</div>
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
          <span className="contact-name">B站</span>
          <span className="contact-desc">space.bilibili.com/266165600</span>
        </a>
        <div className="contact-card wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="qrcode" src="/images/assets/weixin_mp_qrcode.jpeg" alt="冯智超的公众号二维码" />
          <div>
            <div className="contact-name">微信公众号</div>
            <div className="contact-desc">所有文章都会同步到公众号，扫码订阅，第一时间收到新文章的推送。</div>
          </div>
        </div>
      </div>
    </section>
  );
}
