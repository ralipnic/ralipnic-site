import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  platform: string;
  url: string;
  handle: string;
  description?: string;
  variant?: "default" | "large";
  icon?: React.ReactNode;
}

export default function SocialButton({
  platform,
  url,
  handle,
  description,
  variant = "default",
  icon,
}: SocialButtonProps) {
  if (variant === "large") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center gap-5 p-6 border border-void-800 rounded-sm",
          "bg-void-900 hover:bg-void-800 hover:border-blood-700",
          "transition-all duration-200"
        )}
      >
        {icon && (
          <div className="w-12 h-12 rounded-sm bg-void-800 group-hover:bg-blood-900/40 flex items-center justify-center transition-colors flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <p className="text-white font-semibold text-base mb-0.5">{platform}</p>
          <p className="text-void-400 text-sm">{handle}</p>
          {description && (
            <p className="text-void-600 text-xs mt-1">{description}</p>
          )}
        </div>
        <ExternalLink
          size={16}
          className="text-void-600 group-hover:text-blood-500 transition-colors flex-shrink-0"
        />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 border border-void-700",
        "text-sm text-void-300 hover:text-white hover:border-blood-600",
        "transition-all duration-150 rounded-sm"
      )}
    >
      {icon}
      <span>{platform}</span>
      <ExternalLink size={12} className="opacity-50" />
    </a>
  );
}
