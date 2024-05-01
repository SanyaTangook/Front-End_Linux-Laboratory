import Link from "next/link";

export default function lab() {
  return (
    <>
      <header>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/Home">Home</Link>
            </li>
            <li>
              <Link href="/Room">Room</Link>
            </li>
            <li>
              <Link href='#'>Lab</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
