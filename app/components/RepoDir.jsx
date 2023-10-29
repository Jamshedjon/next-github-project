import Link from "next/link";

async function fetchContents(name) {
  const req = await fetch(
    `https://api.github.com/repos/Jamshedjon/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await req.json();
  return contents;
}

async function RepoDir({ name }) {
  const contents = await fetchContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <div>
      <h3>Contents Links</h3>
      <ul>
        {dirs.map((dir) => {
          return (
            <li key={dir.url}>
              <Link href={dir.url}>{dir.path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RepoDir;
