import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepos = async (name) => {
  const req = await fetch(`https://api.github.com/repos/Jamshedjon/${name}`);
  const repos = await req.json();
  return repos;
};
async function Repo({ name }) {
  const repo = await fetchRepos(name);
  return (
    <div>
      <>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <div className="repo-details">
          <span>
            <FaStar />
            {repo.stargazers_count}
          </span>
          <span>
            <FaCodeBranch />
            {repo.forks_count}
          </span>
          <span>
            <FaEye />
            {repo.watchers_count}
          </span>
          <span>{repo.created_at.substring(0, 10)}</span>
        </div>
      </>
    </div>
  );
}

export default Repo;
