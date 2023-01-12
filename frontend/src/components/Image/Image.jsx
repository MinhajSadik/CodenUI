import Image from 'next/image';
import React from 'react';

export default function Image({ src, alt, ...rest }) {
  return <Image src={src} alt={alt} {...rest} />;
}
