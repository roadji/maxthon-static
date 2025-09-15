import { Metadata } from 'next'
import TourListingClient from '@/components/tours/TourListingClient'

export const metadata: Metadata = {
      title: 'Tours – 遨遊國際交流中心',
  description: 'Explore our international tours and exchange programs',
}

export default async function TourListingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <TourListingClient lang={lang} />
  )
} 