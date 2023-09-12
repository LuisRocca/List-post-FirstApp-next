import Link from "next/link";
const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Posts", route: "/posts" },
];

export function Navigation() {
  return (
    <header >
      <nav className="border rounded-sm border-sky-500 bg-blue-500 p-4 mb-4">
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-4">
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      </nav>
    </header>
  );
}
