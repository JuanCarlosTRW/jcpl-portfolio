'use client'

import dynamic from 'next/dynamic'

const FragmentArchive3D = dynamic(
  () => import('@/components/FragmentArchive3D'),
  { ssr: false }
)

export default function FragmentArchiveClient() {
  return <FragmentArchive3D />
}
