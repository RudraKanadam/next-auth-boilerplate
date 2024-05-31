import Link from "next/link";
import { Button } from "@/components/ui/button";

type LoginLinkProps = {
  isMobile: boolean;
};

const LoginLink = ({ isMobile }: LoginLinkProps) => {
  if (isMobile) {
    return (
      <Link
        href="/auth/login"
        className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer"
      >
        Login
      </Link>
    );
  }

  return (
    <div className="hidden md:flex ml-6">
      <Link
        href="/auth/login"
        className="text-slate-600 hover:text-blue-300 transition-transform duration-300 transform cursor-pointer"
      >
        <Button variant="link" className="hover:text-blue-500">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default LoginLink;
