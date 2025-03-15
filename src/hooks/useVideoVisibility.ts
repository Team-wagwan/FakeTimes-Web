import { useEffect, useRef, useState } from "react";

const useVideoVisibility = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => observer.unobserve(video);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVisible) {
            video.play().catch(err => console.error("비디오 재생 오류:", err));
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isVisible]);

    return { videoRef };
};

export default useVideoVisibility;