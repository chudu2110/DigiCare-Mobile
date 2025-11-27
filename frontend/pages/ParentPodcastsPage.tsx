import React, { useEffect, useMemo, useState } from 'react';

type PodcastItem = {
  id: string;
  title: string;
  summary?: string;
  url?: string;
  src?: string;
};

const toSpotifyEmbed = (url: string) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes('open.spotify.com')) {
      if (u.pathname.startsWith('/episode/')) {
        const id = u.pathname.split('/').pop() || '';
        return `https://open.spotify.com/embed/episode/${id}`;
      }
      if (u.pathname.startsWith('/show/')) {
        const id = u.pathname.split('/').pop() || '';
        return `https://open.spotify.com/embed/show/${id}`;
      }
    }
    return url;
  } catch {
    return url;
  }
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

const toEmbed = (url: string) => {
  const yt = toYouTubeEmbed(url);
  if (yt !== url) return yt;
  const sp = toSpotifyEmbed(url);
  return sp;
};

const fetchPodcasts = async (): Promise<PodcastItem[]> => {
  const base = (import.meta.env.VITE_PARENT_PODCASTS_API ?? '').toString().trim();
  const url = base ? `${base.replace(/\/$/, '')}/podcasts?topic=curiosity-case-study` : '';
  try {
    if (!url) throw new Error('Missing API');
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const items: any[] = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
    return items.map((it, idx) => ({
      id: String(it.id ?? idx + 1),
      title: String(it.title ?? `Podcast ${idx + 1}`),
      summary: it.summary ?? '',
      url: it.embedUrl ? String(it.embedUrl) : it.url ? toEmbed(String(it.url)) : undefined,
      src: it.src ?? undefined,
    }));
  } catch {
    return [
      { id: 'pp1', title: 'Đừng ngại nói với con về tình dục - TS. Phạm Thị Thúy | Cởi Mở S4EP8', summary: 'Trao đổi cởi mở về giáo dục giới tính với con.', url: toEmbed('https://www.youtube.com/watch?v=3t5KzQHT7no') },
      { id: 'pp2', title: 'Podcast YouTube #2', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/i1amntbk-H8?si=0hG1pmz6teOSwOrP') },
      { id: 'pp3', title: 'Podcast YouTube #3', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/GAaomMkbhxw?si=vPjGwO3DVkg0wLNm') },
      { id: 'pp4', title: 'Podcast YouTube #4', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/TEgJVkINhUk?si=6Plw4zIyfRCoX1Dv') },
      { id: 'pp5', title: 'Podcast YouTube #5', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/40FPJr_xJ-4?si=W42VKAGECPiy2yqN') },
      { id: 'pp6', title: 'Podcast YouTube #6', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/R4096RhE0Xk?si=E0DA9nbiLQKjr7iB') },
      { id: 'pp7', title: 'Podcast YouTube #7', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/kyJK254XsrA?si=NtOqWU2qYLVlzqR9') },
      { id: 'pp8', title: 'Podcast YouTube #8', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/PdyeifvPTG4?si=5N8Kk4cwOIpakiMx') },
      { id: 'pp9', title: 'Podcast YouTube #9', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/ex06rGG4CNE?si=nip7eIBAw1kwuQS8') },
      { id: 'pp10', title: 'Podcast YouTube #10', summary: 'Chia sẻ từ chuyên gia và phụ huynh.', url: toEmbed('https://youtu.be/V4xTQolcR8s?si=saNLKy4DXtIS0tMV') },
    ];
  }
};

export const ParentPodcastsPage: React.FC = () => {
  const [podcasts, setPodcasts] = useState<PodcastItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const active = useMemo(() => podcasts.find(p => p.id === activeId) ?? podcasts[0], [podcasts, activeId]);

  const getYouTubeWatchUrl = (url: string) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtube.com')) {
        const vid = u.searchParams.get('v');
        if (vid) return `https://www.youtube.com/watch?v=${vid}`;
      }
      if (u.hostname === 'youtu.be') {
        const id = u.pathname.replace('/', '');
        if (id) return `https://www.youtube.com/watch?v=${id}`;
      }
      if (u.hostname.includes('youtube.com') && u.pathname.includes('/embed/')) {
        const id = u.pathname.split('/').pop() || '';
        if (id) return `https://www.youtube.com/watch?v=${id}`;
      }
    } catch {}
    return url;
  };

  const enhanceTitles = async (items: PodcastItem[]): Promise<PodcastItem[]> => {
    const updated: PodcastItem[] = [];
    for (const it of items) {
      let title = it.title;
      if ((!title || /^Podcast\b/i.test(title)) && it.url) {
        const watchUrl = getYouTubeWatchUrl(it.url);
        try {
          if (watchUrl.includes('youtube.com/watch')) {
            const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`, { headers: { 'Accept': 'application/json' } });
            if (res.ok) {
              const data = await res.json();
              if (data?.title && typeof data.title === 'string') {
                title = data.title;
              }
            }
          }
        } catch {}
      }
      updated.push({ ...it, title });
    }
    return updated;
  };

  useEffect(() => {
    let mounted = true;
    fetchPodcasts()
      .then(items => enhanceTitles(items))
      .then(items => {
        if (!mounted) return;
        setPodcasts(items);
        if (items.length > 0) setActiveId(items[0].id);
      });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <aside className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-900/5 dark:shadow-[0_0_18px_rgba(15,23,42,0.35)] p-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Case study: Con tò mò về tình dục</h2>
        <p className="text-sm text-slate-500 dark:text-slate-300 mb-4">Podcast phân tích tình huống thực tế từ chuyên gia</p>
        <div className="divide-y divide-slate-200 dark:divide-slate-700 -mx-4">
          {podcasts.length === 0 && (
            <div className="p-4 text-sm text-slate-500 dark:text-slate-400">Đang tải mục lục…</div>
          )}
          {podcasts.map((it) => (
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
              <audio controls className="w-full rounded-xl border border-slate-200 dark:border-slate-700" src={active.src} />
            ) : active.url ? (
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <iframe
                  src={toEmbed(active.url)}
                  title={active.title}
                  className="w-full h-[32rem]"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="text-slate-500 dark:text-slate-400">Không tìm thấy nguồn podcast.</div>
            )}
          </div>
        ) : (
          <div className="text-slate-500 dark:text-slate-400">Chọn podcast ở khung bên trái để bắt đầu nghe.</div>
        )}
      </section>
    </div>
  );
}
