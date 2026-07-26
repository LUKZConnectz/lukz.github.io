import type React from "react";

type IconName = "chart" | "eye" | "link" | "shield" | "user" | "palette" | "widget" | "music" | "settings" | "gem" | "sparkles" | "logout" | "external" | "chevron";

function Icon({ name, size = 24, className = "" }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16V9" /><path d="M12 16V6" /><path d="M16 16v-4" /></>,
    eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="3" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1" /></>,
    shield: <path d="M12 3 5 6v5c0 5 3.2 8.6 7 10 3.8-1.4 7-5 7-10V6l-7-3Z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.2-3.6 1.6 1.6 0 0 1 1-2.9H17a4 4 0 0 0 0-8 8.9 8.9 0 0 0-5-3.5Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7.5" r="1" /><circle cx="14" cy="7.5" r="1" /></>,
    widget: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    music: <><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.8 2.8-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.6V21h-4v-.1a1.8 1.8 0 0 0-1-1.6 1.8 1.8 0 0 0-2 .4l-.1.1-2.8-2.8.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1H3v-4h.1a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0-.4-2l-.1-.1 2.8-2.8.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.6V3h4v.1a1.8 1.8 0 0 0 1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1 2.8 2.8-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1h.1v4h-.1a1.8 1.8 0 0 0-1.6 1Z" /></>,
    gem: <><path d="M6 3h12l4 6-10 12L2 9l4-6Z" /><path d="m2 9 20 0" /></>,
    sparkles: <><path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /></>,
    logout: <><path d="M14 8V5a2 2 0 0 0-2-2H5v18h7a2 2 0 0 0 2-2v-3" /><path d="M9 12h12" /><path d="m18 9 3 3-3 3" /></>,
    external: <><path d="M7 17 17 7" /><path d="M9 7h8v8" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
  };
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{paths[name]}</svg>;
}

const navSections = [
  { title: "แดชบอร์ด", items: [{ label: "ภาพรวม", icon: "chart" as IconName, active: true }] },
  { title: "ปรับแต่ง", items: ["โปรไฟล์:user", "รูปลักษณ์:palette", "ลิงก์:link", "เหรียญตรา:shield", "วิดเจ็ต:widget", "เพลง:music"].map((value) => { const [label, icon] = value.split(":"); return { label, icon: icon as IconName }; }) },
  { title: "จัดการ", items: [{ label: "ตั้งค่า", icon: "settings" as IconName }] },
  { title: "รีซอร์ส", items: [{ label: "ดูโปรไฟล์", icon: "eye" as IconName }] },
];
const tabs = ["ภาพรวม", "โปรไฟล์", "รูปลักษณ์", "ลิงก์", "เหรียญตรา", "วิดเจ็ต", "เพลง", "ช่องข้อความ"];
const stats = [
  { icon: "eye" as IconName, value: "1", label: "ยอดเข้าชม\nโปรไฟล์" },
  { icon: "link" as IconName, value: "0", label: "ลิงก์ทั้งหมด" },
  { icon: "shield" as IconName, value: "0", label: "เหรียญตรา" },
  { icon: "user" as IconName, value: "ฟรี", label: "แพ็กเกจ\nปัจจุบัน" },
];

export default function Home() {
  return <main className="shell"><aside className="sidebar"><div className="brand"><div className="brand-mark"><Icon name="sparkles" /></div><span>Fusions</span></div><nav className="nav">{navSections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.items.map((item) => <a className={item.active ? "nav-item active" : "nav-item"} href="#" key={item.label}><Icon name={item.icon} /><span>{item.label}</span>{item.active && <Icon className="chev" name="chevron" />}</a>)}</section>)}</nav><div className="account-card"><div className="avatar">👩🏽‍💼</div><div><strong>pxom</strong><span>แพ็กเกจฟรี</span></div><Icon name="logout" /></div></aside><section className="content"><header className="topbar"><div className="title"><span><Icon name="chart" size={31} /></span><h1>Overview</h1></div><button className="premium"><Icon name="gem" /> อัปเกรด Premium</button></header><div className="tabs">{tabs.map((tab, i) => <button className={i === 0 ? "active" : ""} key={tab}>{tab}</button>)}</div><section className="stats-grid">{stats.map((stat) => <article className="stat" key={stat.label}><div className="stat-icon"><Icon name={stat.icon} size={34} /></div><div><strong>{stat.value}</strong><p>{stat.label}</p></div><Icon className="corner" name="external" /></article>)}</section><section className="dashboard-grid"><article className="badges panel"><div className="panel-head"><h3><Icon name="shield" size={31} /> เหรียญตราจำนวนจำกัด</h3><a href="#">ดูทั้งหมด</a></div><p>สะสม badge พิเศษจำนวนจำกัด</p><div className="empty"><Icon name="shield" size={26} /> ยังไม่มี Badges – โปรดได้เลย!</div><div className="progress-label">0 / 10 เหรียญตรา</div><div className="progress"><span /></div></article><aside className="side-panels"><article className="discord panel"><div className="discord-logo">☯</div><div><h3>เข้าร่วม Discord ของเรา</h3><p>discord.gg</p></div><button>☯ เข้าร่วม Discord</button></article><article className="profile panel"><h3><Icon name="eye" /> โปรไฟล์ของคุณ</h3><p>fusions.info/<strong>pxom</strong></p><button>ดูโปรไฟล์ <Icon name="external" /></button></article></aside></section></section></main>;
}
