// components/TopBar.tsx
import { Gift } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">
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
