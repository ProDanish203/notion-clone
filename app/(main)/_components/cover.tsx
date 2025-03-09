"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface CoverProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverProps) => {
  const params = useParams();
  const { onReplace } = useCoverImage();

  const removeCover = useMutation(api.documents.removeCover);
  const { edgestore } = useEdgeStore();

  const onRemoveCover = () => {
    removeCover({ id: params.documentId as Id<"documents"> });
    if (url) edgestore.publicFiles.delete({ url: url });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        url ? "bg-muted" : "h-[12vh]"
      )}
    >
      {!!url && (
        <Image priority src={url} alt="Cover" fill className="objecr-cover" />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => onReplace(url)}
            className="cursor-pointer text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemoveCover}
            className="cursor-pointer text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

const CoverSkeleton = () => {
  return <Skeleton className="w-full h-[12vh]" />;
};

CoverSkeleton.displayName = "Cover.Skeleton";
Cover.Skeleton = CoverSkeleton;
