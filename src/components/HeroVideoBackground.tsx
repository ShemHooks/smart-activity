"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_DURATION = 7000;
const FADE_DURATION = 1200;

type Props = {
  videos: string[];
};

export default function HeroVideoBackground({ videos }: Props) {
  const [active, setActive] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const transitionRef = useRef(false);

  useEffect(() => {
    if (videos.length < 2) return;

    const interval = window.setInterval(() => {
      if (transitionRef.current) return;

      transitionRef.current = true;

      setActive((current) => {
        const next = (current + 1) % videos.length;
        setIncoming(next);
        return current;
      });
    }, VIDEO_DURATION);

    return () => window.clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    if (incoming === null) return;

    const nextVideo = videoRefs.current[incoming];

    if (nextVideo) {
      nextVideo.currentTime = 0;
      void nextVideo.play().catch(() => {});
    }

    const timeout = window.setTimeout(() => {
      const previous = videoRefs.current[active];
      previous?.pause();

      setActive(incoming);
      setIncoming(null);
      transitionRef.current = false;
    }, FADE_DURATION);

    return () => window.clearTimeout(timeout);
  }, [incoming, active]);

  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      void firstVideo.play().catch(() => {});
    }

    return () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  return (
    <div className="hero-video-slider" aria-hidden="true">
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          className={`hero-slide-video ${
            index === active ? "is-active" : ""
          } ${index === incoming ? "is-incoming" : ""}`}
          src={src}
          muted
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          loop
        />
      ))}
    </div>
  );
}
