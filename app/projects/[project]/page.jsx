import ProjectDetail from "@/components/ProjectDetail";

const page = ({ params }) => {
  const project = params.project;

  return <ProjectDetail project={project} />;
};

export default page;
