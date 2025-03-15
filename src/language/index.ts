interface Feature {
    category: string;
    title: string;
    description1?: string;
    description2?: string;
    description3?: string;
}

interface Locale {
    intro: string;
    intro2?: string;
    intro3?: string;
    features: Feature[];
    button: string;
}

export const locales: Record<"ko" | "en", Locale> = {
    ko: {
        intro: "친구들을 가짜 정보로 골탕먹이고 싶지 않으신가요?",
        intro2: "내가 직접 뉴스를 써보는건요?",
        intro3: "FakeTimes와 함께라면 가능해요!",
        features: [
            {
                category: "메인 화면",
                title: "가짜 뉴스, 간단하게 만들어요!",
                description1: "FakeTimes를 이용하면 누구나 손쉽게 가짜 뉴스를 생성하고, 공유할 수 있어요.",
                description2: "유머, 풍자, 친구들과 장난까지!",
                description3: "FakeTimes로 직접 기자가 되어 보세요."
            },
            {
                category: "뉴스 공유",
                title: "공유도 간편하게!",
                description1: "AI를 이용해 만든 뉴스를 웹 뷰에서 확인할 수 있어요.",
                description2: "진짜보다 더 진짜 같은 뉴스 페이지.",
                description3: "링크를 공유해서 친구들을 속여봐요!"
            }
        ],
        button: "언어 변경 (EN)"
    },
    en: {
        intro: "Don't you want to prank your friends with fake news?",
        intro2: "How about creating your own news?",
        intro3: "With FakeTimes, it's possible!",
        features: [
            {
                category: "Main Screen",
                title: "Create fake news easily!",
                description1: "With FakeTimes, anyone can effortlessly create and share fake news.",
                description2: "Humor, satire, and playful pranks!",
                description3: "Step into the role of a journalist with FakeTimes."
            },
            {
                category: "Share News",
                title: "Sharing made simple!",
                description1: "View AI-generated news in a web view.",
                description2: "A news page that looks more real than reality.",
                description3: "Share the link and fool your friends!"
            }
        ],
        button: "Change Language (KO)"
    }
};