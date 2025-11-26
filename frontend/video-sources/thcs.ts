export const getThcsSections = (lessonId: number, title: string) => {
  return [
    { id: `s1-${lessonId}`, title: 'Giới thiệu', kind: 'video', durationLabel: '2 phút', src: 'https://www.youtube.com/watch?v=TFIozvEqGqY&list=PLwxCHpnspQtM1Yk7QHRdLgF4uiorHIMjm' },
    { id: `s2-${lessonId}`, title: 'Kiến thức nền tảng', kind: 'foundation', durationLabel: '6 phút' },
    { id: `s3-${lessonId}`, title: 'Câu hỏi nhanh', kind: 'quick', durationLabel: '4 phút' },
  ] as const;
};
