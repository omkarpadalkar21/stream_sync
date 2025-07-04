import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={
          "flex w-full max-w-[520px] flex-col gap-6 border-none bg-[var(--color-dark-1)] px-6 py-9 text-white"
        }
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className={"flex flex-col gap-6"}>
          {image && (
            <div className={"flex justify-center"}>
              <Image src={image} alt={"image"} width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className={
              "bg-[var(--color-blue-1)] focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt={"button-icon"}
                width={13}
                height={13}
              />
            )}
            &nbsp;
            {buttonText || "Schedule meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default MeetingModal;
