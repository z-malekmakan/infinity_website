"use client";
import { Repeat, Repeat1 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function MPlayer() {
  const playerRef = useRef<any>(null);

  const handleEnd = () => {
    const audio = playerRef.current?.audio.current;
    if (audio) {
        try {
          audio.currentTime = 0;
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch((err: any) => {
              console.warn("Auto-replay blocked", err);
            });
          }
        } catch (err) {
          console.log("error replaying", err);
        }
    }
  };


  return (
    <div className="w-full">
      <Repeat size={20} />
      <H5AudioPlayer
        ref={playerRef}
        src="./musics/Idealism-Both-of-Us.mp3"
        autoPlay={true}
        showJumpControls={false}
        customAdditionalControls={[]}
        layout="horizontal"
        style={{ borderRadius: ".5rem", backgroundColor: "#1f2937" }}
        onEnded={handleEnd}
      />
    </div>
  );
}

export default MPlayer;
