import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async ({ params }: SnippetEditPageProps) => {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
