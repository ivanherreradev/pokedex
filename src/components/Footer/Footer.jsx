import style from './styles.module.css';

function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerMadeWith}>Made by Ivan Herrera</div>
      <div className={style.footerLinks}>
        <a
          href="https://github.com/ivanherreradev"
          className={style.footerLink}
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/ivanherreradev/"
          className={style.footerLink}
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}

export default Footer;
