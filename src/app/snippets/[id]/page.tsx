import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async ({ params }: SnippetShowProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });
  if (!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
};

export default SnippetShowPage;
