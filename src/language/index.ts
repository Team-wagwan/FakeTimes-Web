export interface Feature {
    category: string;
    title: string;
    description1?: string;
    description2?: string;
    description3?: string;
}

interface DesignSystem {
    title: string;
    description: string;
    colorPalette: string;
    semanticColors: string;
    typography: string;
    etc: string;
}

interface Skills {
    title: string;
}

export interface Locale {
    intro: string;
    intro2?: string;
    intro3?: string;
    featuresTitle: string;
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
        featuresTitle: "🚀 주요 기능",
        features: [
            {
                category: "메인 화면",
                title: "가짜 뉴스, 간단하게 만들어요!",
                description1: "FakeTimes를 이용하면 누구나 손쉽게 가짜 뉴스를 만들고 공유할 수 있어요.",
                description2: "유머, 풍자, 친구들과의 장난까지!",
                description3: "FakeTimes로 직접 기자가 되어보세요."
            },
            {
                category: "뉴스 정리",
                title: "나는 어떤걸 만들었을까?",
                description1: "가짜 뉴스를 만들었던걸 리스트를 통해 저장해요",
                description2: "만약 뉴스가 마음에 들었다면 클릭하여 링크를 복사하여 친구들에게 공유하세요!",
                description3: "링크를 공유해서 친구들을 속여보세요!"
            }
        ],
        designSystem: {
            title: "🎨 디자인 시스템",
            description: "FakeTimes의 디자인 시스템을 확인하세요. 색상, 타이포그래피, UI 요소들이 어떻게 구성되었는지 볼 수 있습니다.",
            colorPalette: "컬러 팔레트",
            semanticColors: "시맨틱 컬러",
            typography: "타이포그래피",
            etc: "기타 요소"
        },
        skills: {
            title: "🔧 FakeTimes는 이 기술들로 개발되었어요!"
        },
        button: "언어 변경 (EN)"
    },
    en: {
        intro: "Want to prank your friends with fake news?",
        intro2: "How about writing your own news?",
        intro3: "With FakeTimes, it's possible!",
        featuresTitle: "🚀 Key Features",
        features: [
            {
                category: "Main Screen",
                title: "Create fake news easily!",
                description1: "With FakeTimes, anyone can quickly create and share fake news.",
                description2: "Humor, satire, and playful pranks!",
                description3: "Become a journalist with FakeTimes."
            },
            {
                "category": "News Summary",
                "title": "What have I created?",
                "description1": "Save the fake news you created in a list.",
                "description2": "If you like a news article, click to copy the link and share it with your friends!",
                "description3": "Share the link and fool your friends!"
            }
        ],
        designSystem: {
            title: "🎨 Design System",
            description: "Check out FakeTimes' design system, including colors, typography, and UI elements.",
            colorPalette: "Color Palette",
            semanticColors: "Semantic Colors",
            typography: "Typography",
            etc: "Miscellaneous"
        },
        skills: {
            title: "🔧 FakeTimes was develop using these technologies!"
        },
        button: "Change Language (KO)"
    }
};