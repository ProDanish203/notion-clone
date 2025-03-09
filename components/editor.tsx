"use client";
import React, { useEffect, useRef, useState } from "react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import useDebounce from "@/hooks/use-debounce";

interface EditorProps {
  onChange?: (content: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  // Prevent re-rendering
  const isInitialMount = useRef(true);
  const contentChanged = useRef(false);

  const [content, setContent] = useState<string>(initialContent || "");
  const debouncedContent = useDebounce<string>(content, 1500);
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const { url } = await edgestore.publicFiles.upload({ file });
    return url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  const { resolvedTheme } = useTheme();

  const handleEditorChange = () => {
    contentChanged.current = true;
    const newContent = JSON.stringify(editor.document, null, 2);
    setContent(newContent);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (contentChanged.current && onChange) {
      onChange(debouncedContent);
      contentChanged.current = false;
    }
  }, [debouncedContent, onChange]);

  return (
    <>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={handleEditorChange}
        editable={editable}
      />
    </>
  );
};

export default Editor;
