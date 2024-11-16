'use client';

import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface WalletLinkProps {
  icon: string;
  name: string;
  notify?: string | null;
  comingSoon?: boolean;
  routeName?: string | null;
}

const WalletLink: React.FC<WalletLinkProps> = ({
  icon,
  name,
  notify,
  comingSoon,
  routeName,
}) => {
  const pathname = usePathname();

  const isActive = routeName && pathname.startsWith(routeName);
  const activeClass = isActive
    ? ' text-[#1D2433]'
    : 'text-[#647995] lg:opacity-[100%] opacity-[59%]';
  const activeTextClass = isActive ? ' text-[#1D2433]' : 'text-[#647995]';

  return (
    <Link href={routeName || ''} className="">
      <motion.div
        className={`font-light flex gap-[8px] flex-col font-Poppins underline-none rounded-[13px]  !mt-0 items-center w-fit lg:w-full  ${activeClass}`}
        whileHover={{
          color: '#1D2433',
          transition: { duration: 0.4 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-[1.7rem] h-[32px] w-auto object-contain flex items-start justify-start">
          <Image
            src={icon}
            className="lg:w-[32px] w-auto lg:h-[32px] object-cover"
            width="36"
            height="36"
            alt={`${name} icon`}
          />
        </span>
        <h4
          className={`lg:text-[12px] text-[12px] flex gap-[8px] items-center ${activeTextClass}`}
        >
          {name}
          {(notify || comingSoon) && (
            <span
              className={`text-sm lg:flex hidden items-center justify-center rounded-full ${
                comingSoon
                  ? 'bg-[#FFEE94] text-[#434343] px-2'
                  : 'bg-[#CE1126] text-white size-6'
              }`}
            >
              {comingSoon ? 'Coming Soon' : notify}
            </span>
          )}
        </h4>
      </motion.div>
    </Link>
  );
};

export default WalletLink;
