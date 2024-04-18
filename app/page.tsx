import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Link href="/journal-without-database">1. Journal without database</Link>
      <Link href="/journal-with-database">2. eJournal with database</Link>
    </div>
  )
}