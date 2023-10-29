import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
async function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Repo name={name} />
      <RepoDir name={name} />
    </div>
  );
}

export default RepoPage;
