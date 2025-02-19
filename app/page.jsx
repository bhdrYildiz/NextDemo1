import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/hakkimizda">Hakkimizda Sayfası</Link>
      <br />
      <Link href="docs/post-1">Post-1</Link>
      <br />
      <Link href="docs/post-2">Post-2</Link>
      <br />
      <Link
        target="_blank"
        className="tests"
        href={{
          pathname: "/hakkimizda",
          query: {
            name: "Next.js",
            surname: "ff",
          },
        }}
      >
        Hakkimizda obje ile
      </Link>
    </div>
  );
}
