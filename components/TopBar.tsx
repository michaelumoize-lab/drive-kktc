// components/TopBar.tsx
import { Gift } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Gift className="w-4 h-4" />
        <span>
          Get FREE Road Trip Guide upon signup!{" "}
          <a href="#" className="underline font-semibold hover:no-underline">
            Sign up now
          </a>
        </span>
      </div>
    </div>
  );
}
