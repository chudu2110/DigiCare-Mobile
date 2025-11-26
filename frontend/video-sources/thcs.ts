export const getThcsSections = (lessonId: number, title: string) => {
  const VIDEO_MAP: Record<number, string> = {
    1: 'https://www.youtube.com/watch?v=zBJk6jd-0dw',
    2: 'https://www.youtube.com/watch?v=SzgNh_Tcu7E',
    3: 'https://www.youtube.com/watch?v=mRoicF1QVL4&t=13s',
    4: 'https://www.youtube.com/watch?v=O7qGyjNa5KY',
    5: 'https://www.youtube.com/watch?v=3FoxSqsrfPs',
    6: 'https://www.youtube.com/watch?v=ypbUC-Y9Km0',
    7: 'https://www.youtube.com/watch?v=l1mjuJFa-K0',
  };
  const src = VIDEO_MAP[lessonId] || 'https://www.youtube.com/watch?v=TFIozvEqGqY&list=PLwxCHpnspQtM1Yk7QHRdLgF4uiorHIMjm';
  return [
    { id: `s1-${lessonId}`, title: 'Giới thiệu', kind: 'video', durationLabel: '2 phút', src },
    { id: `s2-${lessonId}`, title: 'Kiến thức nền tảng', kind: 'foundation', durationLabel: '6 phút', readingId: lessonId===1 ? 'thcs-bai1' : undefined },
    { id: `s3-${lessonId}`, title: 'Câu hỏi nhanh', kind: 'quick', durationLabel: '4 phút' },
  ] as const;
};
