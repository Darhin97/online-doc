import { Editor } from "@/app/documents/[documentId]/editor";
import { Toolbar } from "@/app/documents/[documentId]/toolbar";
import Navbar from "@/app/documents/[documentId]/navbar";

const DocumentIdPage = async () => {
  return (
    <div className={"min-h-screen bg-[#fafbfd]"}>
      <div
        className={
          "flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 ring-0 z-10 bg-[#fafbfd] print:hidden w-full"
        }
      >
        <Navbar />
        <Toolbar />
      </div>
      <div className={"pt-[114px] print:pt-0"}>
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
