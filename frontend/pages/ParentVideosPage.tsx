import React, { useEffect, useMemo, useState } from 'react';

type VideoItem = {
  id: string;
  title: string;
  summary?: string;
  url?: string; // page url or embed url
  src?: string; // direct video src (mp4)
};

const toYouTubeEmbed = (url: string) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube.com') && u.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${u.searchParams.get('v')}`;
    }
    if (u.hostname === 'youtu.be') {
      return `https://www.youtube.com/embed/${u.pathname.replace('/', '')}`;
    }
    return url;
  } catch {
    return url;
  }
};

const fetchVideos = async (): Promise<VideoItem[]> => {
  const base = (import.meta.env.VITE_PARENT_VIDEOS_API ?? '').toString().trim();
  const url = base ? `${base.replace(/\/$/, '')}/videos?topic=puberty-parenting` : '';
  try {
    if (!url) throw new Error('Missing API');
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const items: any[] = Array.isArray(data) ? data : (Array.isArray(data?.items) ? data.items : []);
    return items.map((it, idx) => ({
      id: String(it.id ?? idx + 1),
      title: String(it.title ?? `Video ${idx + 1}`),
      summary: it.summary ?? '',
      url: it.embedUrl ? String(it.embedUrl) : (it.url ? toYouTubeEmbed(String(it.url)) : undefined),
      src: it.src ?? undefined,
    }));
  } catch {
    return [
      { id: 'pv4', title: 'Nói chuyện với con về giáo dục giới tính', summary: 'Khi nào bắt đầu? Ngôn ngữ phù hợp độ tuổi.', url: toYouTubeEmbed('https://www.youtube.com/watch?v=xaptICIVXrY') },
      { id: 'pv5', title: 'Tuổi dậy thì – hướng dẫn cha mẹ đồng hành', summary: 'PGS.TS Trần Thành Nam, Viện Tâm Lý Việt Pháp.', url: toYouTubeEmbed('https://www.youtube.com/watch?v=iX-bWZeLgCs') },
      { id: 'pv6', title: 'Lắng nghe con ở độ tuổi vị thành niên', summary: 'PGS.TS Trần Thành Nam, cách lắng nghe hiệu quả.', url: toYouTubeEmbed('https://www.youtube.com/watch?v=OaUbqpsxgXc') },
      { id: 'pv7', title: 'Độ tuổi phù hợp để giáo dục giới tính cho con', summary: 'Giáo dục giới tính sớm cho trẻ.', url: toYouTubeEmbed('https://www.youtube.com/watch?v=zjOhWsCNIXQ') },
      { id: 'pv8', title: 'Giáo dục giới tính cho trẻ – bảo vệ bản thân', summary: 'Cùng con trưởng thành VTV.', url: toYouTubeEmbed('https://www.youtube.com/watch?v=EQ8gwWjbwEA') },
      { id: 'pv9', title: 'Giáo dục giới tính hiệu quả cho trẻ', summary: 'PGS.TS Trần Thành Nam, Viện Tâm Lý Việt Pháp.', url: toYouTubeEmbed('https://www.youtube.com/watch?v=lY8S_dF_4jQ') },
    ];
  }
};

export const ParentVideosPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const active = useMemo(() => videos.find(v => v.id === activeId) ?? videos[0], [videos, activeId]);

  useEffect(() => {
    let mounted = true;
    fetchVideos().then(items => {
      if (!mounted) return;
      setVideos(items);
      if (items.length > 0) setActiveId(items[0].id);
    });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <aside className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-900/5 dark:shadow-[0_0_18px_rgba(15,23,42,0.35)] p-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Đồng hành cùng con tuổi dậy thì</h2>
        <p className="text-sm text-slate-500 dark:text-slate-300 mb-4">Video chia sẻ từ các chuyên gia và bậc phụ huynh khác</p>
        <div className="divide-y divide-slate-200 dark:divide-slate-700 -mx-4">
          {videos.length === 0 && (
            <div className="p-4 text-sm text-slate-500 dark:text-slate-400">Đang tải mục lục…</div>
          )}
          {videos.map((it) => (
            <button
              key={it.id}
              onClick={() => setActiveId(it.id)}
              className={`w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${active?.id === it.id ? 'bg-slate-100 dark:bg-slate-700/60' : ''}`}
            >
              <div className="font-semibold text-slate-900 dark:text-white">{it.title}</div>
              {it.summary && <div className="text-sm text-slate-500 dark:text-slate-300 mt-1">{it.summary}</div>}
            </button>
          ))}
        </div>
      </aside>

      <section className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-900/5 dark:shadow-[0_0_18px_rgba(15,23,42,0.35)] p-6">
        {active ? (
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{active.title}</h1>
            {active.src ? (
              <video controls className="w-full rounded-xl border border-slate-200 dark:border-slate-700" src={active.src} />
            ) : active.url ? (
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <iframe src={active.url} title={active.title} className="w-full h-[60vh]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ) : (
              <div className="text-slate-500 dark:text-slate-400">Không tìm thấy nguồn video.</div>
            )}
          </div>
        ) : (
          <div className="text-slate-500 dark:text-slate-400">Chọn video ở khung bên trái để bắt đầu xem.</div>
        )}
      </section>
    </div>
  );
};
