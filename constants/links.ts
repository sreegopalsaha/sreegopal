export interface LinkItem {
  num: string;
  title: string;
  sub: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: LinkItem[] = [
  {
    num: "01",
    title: "GitHub",
    sub: "Code / Open Source",
    href: "https://github.com/sreegopalsaha",
    external: true,
  },
  {
    num: "02",
    title: "LinkedIn",
    sub: "Professional",
    href: "https://www.linkedin.com/in/sreegopalsaha/",
    external: true,
  },
  {
    num: "03",
    title: "Instagram",
    sub: "Personal / Work",
    href: "https://instagram.com/sreegopalsaha",
    external: true,
  },
  {
    num: "04",
    title: "X",
    sub: "Thoughts",
    href: "https://x.com/sreegopalsaha",
    external: true,
  },
  {
    num: "05",
    title: "Blog",
    sub: "Notes / Ideas",
    href: "https://sreegopal.vercel.app",
    external: true,
  },
  {
    num: "06",
    title: "Email",
    sub: "Say hello",
    href: "mailto:sreegopal0101@gmail.com",
    external: false,
  },
];
