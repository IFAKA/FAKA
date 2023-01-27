"use client";

import { CONTACTS } from "@/services";
import Link from "next/link";

const Footer = () => (
  <div className="flex">
    {CONTACTS.map(({ href, icon, title }) => (
      <div key={href} className="p-2">
        <Link href={href} title={title}>
          {icon}
        </Link>
      </div>
    ))}
  </div>
);

export default Footer;
