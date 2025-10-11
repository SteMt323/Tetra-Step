/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'figma:*' {
  const value: any;
  export default value;
}

// Provisional module declarations for packages without bundled types
declare module 'lucide-react';
declare module 'recharts';
declare module 'react-day-picker';
declare module 'embla-carousel-react';
declare module 'cmdk';
declare module 'input-otp';
declare module 'react-resizable-panels';
declare module 'vaul';
declare module 'sonner';
declare module 'react-day-picker/*';
declare module '@radix-ui/*';
declare module 'class-variance-authority';
declare module 'class-variance-authority' {
  export function cva(...args: any[]): any;
  export type VariantProps<T> = any;
}

declare module 'sonner' {
  export const Toaster: any;
  export type ToasterProps = any;
}

declare module 'embla-carousel-react' {
  export type UseEmblaCarouselType = any;
  const EmblaCarousel: any;
  export default EmblaCarousel;
}

declare module 'input-otp' {
  export const OTPInput: any;
  export const OTPInputContext: any;
}
