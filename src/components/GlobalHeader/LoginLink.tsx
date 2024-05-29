import Link from 'next/link';
import { TbUserCircle } from 'react-icons/tb';

type LoginLinkProps = {
  isMobile: boolean;
};

const LoginLink = ({ isMobile }: LoginLinkProps) => {
  if (isMobile) {
    return (
      <Link href="/login" className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer">
        Login
      </Link>
    );
  }

  return (
    <div className="hidden md:flex ml-6">
      <Link href="/login" className="text-slate-600 hover:text-blue-300 transition-transform duration-300 transform cursor-pointer">
        <TbUserCircle size={32} />
      </Link>
    </div>
  );
};

export default LoginLink;
