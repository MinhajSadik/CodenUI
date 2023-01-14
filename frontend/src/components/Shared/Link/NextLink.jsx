import Link from 'next/link';
import React from 'react';

export default function NextLink({ path, children, ...rest }) {
  return (
    <Link href={path} {...rest}>
      {children}
    </Link>
  );
}
