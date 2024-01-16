interface ProjectObjectData{
    id: number;
    likes: any[];
    views: number;
    bookmarks: boolean;
    title: string;
    subTitle: string;
    topic: string;
    technologyStack: string[];
    writer: string;
    createdDate: string;
}

/** 프로젝트 객체 더미 데이터 */

export const DummyData:ProjectObjectData[] = [
    {
        id: 1,
        likes: [123, true],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "소셜네트워크",
        technologyStack: ['React','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 2,
        likes: [123, true],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "여행",
        technologyStack: ['SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 3,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "금융",
        technologyStack: ['React'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 4,
        likes: [123, false],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "교육",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 5,
        likes: [123, false],
        views: 453,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "패션",
        technologyStack: ['React','Java'],
        writer: '닉네임',
        createdDate: '2023-11-17'
    },
    {
        id: 6,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "게임",
        technologyStack: ['Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 7,
        likes: [123, false],
        views: 695,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "부동산",
        technologyStack: ['React','Node.js','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-05-10'
    },
    {
        id: 8,
        likes: [16, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "부동산",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-08-10'
    },
    {
        id: 9,
        likes: [453, true],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','Java'],
        writer: '닉네임',
        createdDate: '2023-09-10'
    },
    {
        id: 10,
        likes: [123, false],
        views: 234,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "금융",
        technologyStack: ['React','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 11,
        likes: [1233, false],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "스포츠",
        technologyStack: ['TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2022-12-15'
    },
    {
        id: 12,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "여행",
        technologyStack: ['React','Node.js','TypeScript'],
        writer: '닉네임',
        createdDate: '2023-11-10'
    },
    {
        id: 13,
        likes: [13, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2022-12-10'
    },
    {
        id: 14,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "이커머스",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-15'
    },
    {
        id: 15,
        likes: [13, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "여행",
        technologyStack: ['React','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
]


/** 인기 프로젝트 객체 더미 데이터 */

export const PopularityDummyData:ProjectObjectData[] = [
    {
        id: 1,
        likes: [123, true],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-01'
    },
    {
        id: 2,
        likes: [123, true],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-11-10'
    },
    {
        id: 3,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2022-12-10'
    },
    {
        id: 4,
        likes: [123, false],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-01-10'
    },
    {
        id: 5,
        likes: [123, false],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-13'
    },
    {
        id: 6,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-12'
    },
    {
        id: 7,
        likes: [92, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2024-01-10'
    },
    {
        id: 8,
        likes: [667, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 9,
        likes: [23, true],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 10,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 11,
        likes: [124, false],
        views: 123,
        bookmarks: false,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 12,
        likes: [13, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 13,
        likes: [123, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 14,
        likes: [125, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
    {
        id: 15,
        likes: [1231, false],
        views: 123,
        bookmarks: true,
        title: "GETCODE 프로젝트 제목",
        subTitle: "GETCODE 프로젝트 내용 한줄 프로젝트 소개",
        topic: "웹 포트폴리오",
        technologyStack: ['React','Node.js','TypeScript','SpringBoot','Java'],
        writer: '닉네임',
        createdDate: '2023-12-10'
    },
]
