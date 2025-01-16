"use client";
import { Navbar } from "@/components/navbar";
import { TemplatesGallery } from "@/app/(home)/templates-gallery";
import { useSearchParams } from "@/hooks/use-search-params";

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "@/components/documents-table";

const Home = () => {
  const [search] = useSearchParams();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 },
  );

  return (
    <div className={"min-h-screen flex flex-col"}>
      <div className={"fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4"}>
        <Navbar />
      </div>
      <div className={"mt-16"}>
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          status={status}
          loadMore={loadMore}
        />
      </div>
    </div>
  );
};

export default Home;
