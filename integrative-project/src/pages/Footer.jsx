import BrandMark from '../components/BrandMark'

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <BrandMark />
          <p className="mt-4 text-sm leading-relaxed text-mist">
            A playthrough tracker for IPT1. Chapter names and objectives are ours; full walkthroughs belong to IGN
            and the games belong to their publishers.
          </p>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} GameThrough. For personal use.</p>
      </div>
    </footer>
  )
}
