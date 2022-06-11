import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  href: string;
}

export function ActiveLink({ children, href }: Props) {
  let activeClassName = "text-sky-400 font-extrabold";
  const router = useRouter();

  return (
    <>
      <Link href={href} passHref>
        <a className={router.pathname === href ? activeClassName : ""}>
          {children}
        </a>
      </Link>
    </>
  );
}
