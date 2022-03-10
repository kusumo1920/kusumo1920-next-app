import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import { FaTwitter, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export default function Header({ navItems }) {
  const navItemComponents = navItems.map((navItem) => {
    return (
      <li key={navItem.path} className={styles.navItem}>
        <Link href={`${navItem.path}`}>
          <a>{navItem.name}</a>
        </Link>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/kusumo1920-logo.png"
              alt="Kusumo1920 Logo"
              width={150}
              height={30}
            />
          </a>
        </Link>
      </div>
      <div className={styles.headerNav}>
        <nav>
          <ul className={styles.navItemsList}>{navItemComponents}</ul>
        </nav>
      </div>
      <div className={styles.headerSocialMedia}>
        <ul className={styles.socialMediaItemsList}>
          <li className={styles.socialMediaItem}>
            <a href="https://twitter.com/kusumo1920">
              <FaTwitter size="1em" color="black" />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a>
              <FaFacebookF size="1em" color="black" />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a>
              <FaTelegramPlane size="1em" color="black" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
