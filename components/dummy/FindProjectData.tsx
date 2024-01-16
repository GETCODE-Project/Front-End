interface FindProjectObjectData{
    id: number;
    views: number;
    likes: any[];
    bookmarks: boolean;
    recruitStatus: boolean;
    topic: string[];
    recruitField: string[];
    writer: string;
    createdDate: string;
}

/** 프로젝트 모집 객체 더미 데이터 */

export const DummyData: FindProjectObjectData[] = [
    {
        id: 1,
        views: 1234,
        likes: [123, false],
        bookmarks: true,
        recruitStatus: true,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
    {
        id: 2,
        views: 1234,
        likes: [123, false],
        bookmarks: true,
        recruitStatus: false,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
    {
        id: 3,
        views: 1234,
        likes: [123, false],
        bookmarks: false,
        recruitStatus: false,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
    {
        id: 4,
        views: 1234,
        likes: [123, false],
        bookmarks: false,
        recruitStatus: true,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
    {
        id: 5,
        views: 1234,
        likes: [123, false],
        bookmarks: true,
        recruitStatus: false,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
    {
        id: 6,
        views: 1234,
        likes: [123, true],
        bookmarks: false,
        recruitStatus: false,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
    {
        id: 7,
        views: 1234,
        likes: [123, false],
        bookmarks: false,
        recruitStatus: true,
        topic: ['반응형','웹서비스'],
        recruitField: ['UX/UI','프론트엔드','백엔드','기획자','마케터','PM'],
        writer: '닉네임',
        createdDate: '2023-10-22',
    },
]