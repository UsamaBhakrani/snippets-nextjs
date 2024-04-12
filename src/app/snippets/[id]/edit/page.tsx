interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = ({ params }: SnippetEditPageProps) => {
  const id = parseInt(params.id);

  return <div>SnippetEditPage {id}</div>;
};

export default SnippetEditPage;
