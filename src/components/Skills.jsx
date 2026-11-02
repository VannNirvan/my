const skillItems = [
  { name: 'SQL Injection (SQLi)', desc: 'Manipulasi query database via input tidak terfilter untuk bypass autentikasi login, ekstraksi basis data, hingga pengambilalihan kontrol sistem.' },
  { name: 'Broken Access Control (BAC)', desc: 'Kelemahan pembatasan otorisasi yang memungkinkan user mengakses endpoint, data pribadi, atau fungsi administratif tanpa hak akses sah.' },
  { name: 'RCE (Remote Code Execution)', desc: 'Celah kritis tingkat tinggi yang memungkinkan penyerang mengeksekusi perintah shell arbitrari secara langsung pada server target.' },
  { name: 'HTML Injection', desc: 'Penyisipan markup HTML mentah ke dalam halaman web akibat minimnya sanitasi input, berisiko defacement visual dan phishing tersembunyi.' },
  { name: 'IDOR (Insecure Direct Obj Ref)', desc: 'Ekstraksi atau manipulasi data pengguna lain dengan mengganti parameter ID pada request tanpa otorisasi yang valid.' },
  { name: 'No Rate Limit', desc: 'Tidak adanya pembatasan jumlah percobaan request pada endpoint sensitif seperti login & OTP, yang membuka celah brute-force.' },
  { name: 'Broken Link Hijacking', desc: 'Pengambilalihan akun sosial media atau domain eksternal yang sudah mati namun masih tertaut di halaman aplikasi.' },
  { name: 'Information Disclosure', desc: 'Kebocoran data rahasia seperti API keys, credentials, atau file sensitif yang terekspos di repo publik atau JS bundle.' },
  { name: 'Account Takeover (ATO)', desc: 'Pengambilalihan akun penuh melalui eksekusi celah logika autentikasi, reset password, atau token session poisoning.' },
  { name: 'CSRF (Cross-Site Request Forgery)', desc: 'Eksploitasi korban yang terautentikasi untuk melakukan aksi berbahaya seperti pengubahan email/password tanpa disadari.' },
  { name: 'API Token Leaked', desc: 'Terpaparnya akses token rahasia (AWS, Stripe, Firebase) yang memungkinkan pengaksesan infrastruktur tanpa izin.' },
  { name: 'Open Redirect', desc: 'Pengalihan parameter URL tidak terfilter yang mengarahkan pengguna ke domain phishing liar milik penyerang.' },
  { name: 'OAuth Misconfiguration', desc: 'Kesalahan validasi redirect_uri atau token exchange yang memungkinkan pencurian token otorisasi OAuth.' },
  { name: 'Session Hijacking', desc: 'Pencurian token sesi aktif melalui serangan XSS atau jaringan yang tidak terenkripsi dengan aman.' },
  { name: 'SSRF (Server-Side Request Forgery)', desc: 'Memaksa server aplikasi melakukan HTTP request ke jaringan internal atau metadata cloud tersembunyi.' },
  { name: 'Subdomain Takeover', desc: 'Klaim balik DNS record CNAME yang mengarah ke layanan cloud mati (AWS S3, GitHub Pages, Heroku).' },
  { name: 'Business Logic Error', desc: 'Celah pada logika bisnis aplikasi yang memungkinkan pemalsuan harga, kupon berulang, atau bypass alur transaksi.' },
  { name: 'Path Traversal', desc: 'Manipulasi input file path (../../) untuk membaca file sensitif seperti /etc/passwd pada server web.' },
  { name: 'XXE (XML External Entity)', desc: 'Eksploitasi parser XML untuk membaca file lokal server atau melakukan SSRF ke sistem internal.' },
  { name: 'LFI (Local File Inclusion)', desc: 'Inklusi file lokal server yang tidak tervalidasi sehingga file eksekusi atau konfigurasi dapat dibaca.' },
]

const TAG_COLORS = [
  { bg: 'rgba(59,130,246,0.09)', border: 'rgba(59,130,246,0.25)', text: '#7da4ff' },
  { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.1)', text: 'rgba(255,255,255,0.65)' },
]

export default function Skills() {
  const renderTags = (reversed = false) => {
    const list = reversed ? [...skillItems].reverse() : skillItems
    const doubled = [...list, ...list]
    return doubled.map((item, i) => {
      const color = TAG_COLORS[i % TAG_COLORS.length]
      return (
        <div
          key={i}
          className="marquee-tag"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '0.4rem',
            padding: '1.1rem 1.6rem',
            borderRadius: '10px',
            border: `1px solid ${color.border}`,
            background: color.bg,
            flexShrink: 0,
            backdropFilter: 'blur(12px)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            width: '360px',
            whiteSpace: 'normal',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ opacity: 0.7, fontSize: '0.8rem', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>{'>'}</span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
              fontWeight: 700,
              color: color.text,
              letterSpacing: '0.02em',
            }}>
              {item.name}
            </span>
          </div>
          <p style={{
            fontSize: '0.78rem',
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            margin: 0,
          }}>
            {item.desc}
          </p>
        </div>
      )
    })
  }

  return (
    <section id="skills" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(6,8,16,0.5), transparent)' }} />
      <div style={{ position: 'absolute', top: '20%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(59,130,246,0.04)', filter: 'blur(90px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(59,130,246,0.03)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="site-container" style={{ position: 'relative', marginBottom: '3rem' }}>
        <div className="reveal-element section-header-centered">
          <div className="section-header-line" />
          <h2 className="section-header-title">
            What I'm <span style={{ color: 'var(--color-text-secondary)', fontWeight: 300 }}>Learning</span>
          </h2>
          <div className="section-header-line" />
        </div>
        <p className="reveal-element" style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '1rem' }}>
          // vulnerabilities &amp; security concepts I actively explore
        </p>
      </div>

      {/* Row 1 — left to right (slow motion 95s) */}
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="marquee-outer">
          <div className="marquee-track marquee-ltr" style={{ gap: '1.5rem', animationDuration: '95s' }}>
            {renderTags(false)}
          </div>
        </div>
      </div>

      {/* Row 2 — right to left (slow motion 105s) */}
      <div style={{ position: 'relative' }}>
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="marquee-outer">
          <div className="marquee-track marquee-rtl" style={{ gap: '1.5rem', animationDuration: '105s' }}>
            {renderTags(true)}
          </div>
        </div>
      </div>
    </section>
  )
}
