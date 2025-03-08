"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";
import { ThemeToggle } from "@/components/theme-toggle";

export const SettingsModal = () => {
  const { isOpen, onClose, onOpen } = useSettings();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Notion looks on your device.
            </span>
          </div>
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
