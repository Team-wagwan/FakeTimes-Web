interface Feature {
    category: string;
    title: string;
    description1?: string;
    description2?: string;
    description3?: string;
}

interface DesignSystem {
    title: string;
    colorPalette: string;
    semanticColors: string;
    typography: string;
    etc: string;
}

interface Skills {
    title: string;
}

interface Locale {
    intro: string;
    intro2?: string;
    intro3?: string;
    features: Feature[];
    designSystem: DesignSystem;
    skills: Skills;
    button: string;
}

export const locales: Record<"ko" | "en", Locale> = {
    ko: {
        intro: "친구들을 가짜 정보로 골탕먹이고 싶지 않으신가요?",
        intro2: "내가 직접 뉴스를 써보는 건 어떤가요?",
        intro3: "FakeTimes와 함께라면 가능합니다!",
        features: [
            {
                category: "메인 화면",
                title: "가짜 뉴스, 간단하게 만들어요!",
                description1: "FakeTimes를 이용하면 누구나 손쉽게 가짜 뉴스를 만들고 공유할 수 있어요.",
                description2: "유머, 풍자, 친구들과의 장난까지!",
                description3: "FakeTimes로 직접 기자가 되어보세요."
            },
            {
                category: "뉴스 공유",
                title: "공유도 간편하게!",
                description1: "AI를 이용해 만든 뉴스를 웹 뷰에서 확인할 수 있어요.",
                description2: "진짜보다 더 진짜 같은 뉴스 페이지.",
                description3: "링크를 공유해서 친구들을 속여보세요!"
            }
        ],
        designSystem: {
            title: "🎨 디자인 시스템",
            colorPalette: "컬러 팔레트",
            semanticColors: "시맨틱 컬러",
            typography: "타이포그래피",
            etc: "기타 요소"
        },
        skills: {
            title: "🔧 FakeTimes는 다음 기술로 제작되었습니다!"
        },
        button: "언어 변경 (EN)"
    },
    en: {
        intro: "Want to prank your friends with fake news?",
        intro2: "How about writing your own news?",
        intro3: "With FakeTimes, it's possible!",
        features: [
            {
                category: "Main Screen",
                title: "Create fake news easily!",
                description1: "With FakeTimes, anyone can quickly create and share fake news.",
                description2: "Humor, satire, and playful pranks!",
                description3: "Become a journalist with FakeTimes."
            },
            {
                category: "Share News",
                title: "Sharing made simple!",
                description1: "View AI-generated news in a web format.",
                description2: "A news page that looks even more real than real news.",
                description3: "Share the link and fool your friends!"
            }
        ],
        designSystem: {
            title: "🎨 Design System",
            colorPalette: "Color Palette",
            semanticColors: "Semantic Colors",
            typography: "Typography",
            etc: "Miscellaneous"
        },
        skills: {
            title: "🔧 FakeTimes was built using these technologies!"
        },
        button: "Change Language (KO)"
    }
};