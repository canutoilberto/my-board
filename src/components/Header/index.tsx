import Link from "next/link";
import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo do My-borad" />
        </Link>

        <nav>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/board" legacyBehavior>
            <a>My Board</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
