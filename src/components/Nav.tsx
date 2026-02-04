import Link from "next/link";

const NAV = [
  { title: 'Text', path: '/text' }
]

export default function Nav() {
  return (
    <nav className="flex justify-around">
      <div>
        <Link href="/">Home</Link>
      </div>
      <ul>
        {NAV.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
