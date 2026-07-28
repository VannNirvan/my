export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-bg__base" />
      <div className="ambient-bg__grid" />
      <div className="ambient-bg__glow ambient-bg__glow--a" />
      <div className="ambient-bg__glow ambient-bg__glow--b" />
      <div className="ambient-bg__glow ambient-bg__glow--c" />
      <div className="ambient-bg__vignette" />
    </div>
  )
}
