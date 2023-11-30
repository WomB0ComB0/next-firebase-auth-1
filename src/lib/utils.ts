import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = '/assets/images/og.png',
  icons = '/assets/svgs/logo.svg',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@OdnisMike',
    },
    icons: [
      {
        url: icons,
        href: icons,
      }
    ],
    metadataBase: new URL('https://www.auth-test-37db9.web.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
