import Header from "../../components/Header";
import ProjectCreation from "../../features/projects/components/ProjectCreation";
import ProjectList from "../../features/projects/components/ProjectList";

function Lobby() {
  return (
    <>
      <Header />
      <main css={{ padding: "50px" }}>
        <ProjectCreation />
        <ProjectList />
      </main>
    </>
  );
}

export default Lobby;
