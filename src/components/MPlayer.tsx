"use client"
import React, { useEffect, useRef } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function MPlayer() {
    const playerRef = useRef<H5AudioPlayer | null>(null);
    useEffect(()=>{
        const audio1 = playerRef.current?.audio.current;
        if(audio1){
            audio1.loop = true;
            console.log("audio started");

        }

    },[])
    // const handleEnd = ()=>{
    //     const audio = playerRef.current?.audio.current;
    //     if(audio) {
    //         audio.currentTime = 0;
    //         audio.play();
    //     }
    // }
  return (
    <div className="w-full">
      {/* <audio controls autoPlay className='w-full rounded-md'>
            <source src='./musics/song.mp3' type='audio/mp3'/>
        </audio> */}
      <H5AudioPlayer
        src="./musics/song.mp3"
        autoPlay={true}
        showJumpControls={false}
        customAdditionalControls={[]}
        layout="horizontal"
        style={{ borderRadius: ".5rem", backgroundColor: "#1f2937" }}
        // onEnded={handleEnd}
      />
    </div>
  );
}

export default MPlayer;
