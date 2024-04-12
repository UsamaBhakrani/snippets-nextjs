"use client";

import type { Snippet } from "@prisma/client";
interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  return <div>Client Component has snippet with title {snippet.title} </div>;
};

export default SnippetEditForm;