import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css'; // 确保引入CSS文件
import {
    AiFillAudio,
    AiFillStepBackward,
    AiFillStepForward,
    AiOutlinePauseCircle,
    AiOutlinePlayCircle
} from "react-icons/ai";

function MusicPlayer() {

    const [songIndex, setSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    const [volume, setVolume] = useState(0.5);
    const [isVolumeVisible, setIsVolumeVisible] = useState(false);
    const volumeContainerRef = useRef(null);

    const songs = [
        { title: '杜王町早上好', src: 'https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/music_bed/%E6%9D%9C%E7%8E%8B%E7%94%BA%E6%97%A9%E4%B8%8A%E5%A5%BD.mp3', cover: 'https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/images-bed/%E6%9D%9C%E7%8E%8B%E7%94%BA%E6%97%A9%E4%B8%8A%E5%A5%BD.png' },
        { title: '黑帮摇', src: 'https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/music_bed/%E9%BB%91%E5%B8%AE%E6%91%87.mp3', cover: 'https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/images-bed/%E9%BB%91%E5%B8%AE%E6%91%87.png' },
        { title: '黄金之风处刑曲', src: 'https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/music_bed/%E9%BB%84%E9%87%91%E4%B9%8B%E9%A3%8E_%E5%A4%84%E5%88%91%E6%9B%B2.mp3', cover: 'https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/images-bed/%E9%BB%84%E9%87%91%E4%B9%8B%E9%A3%8E_%E5%A4%84%E5%88%91%E6%9B%B2.png' },

    ];

    const currentSong = songs[songIndex];

    useEffect(() => {
        // 添加全局点击事件监听器
        const handleClickOutside = (event) => {
            if (
                volumeContainerRef.current &&
                !volumeContainerRef.current.contains(event.target)
            ) {
                setIsVolumeVisible(false); // 隐藏音量控制条
            }
        };

        document.addEventListener('click', handleClickOutside);

        // 清理事件监听器
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
            audioRef.current.volume = volume;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentSong]);

    useEffect(() => {
        const song = audioRef.current;
        if (isPlaying && song) {
            song.play();
        } else if (!isPlaying && song) {
            song.pause();
        }
        const musicInfoElement = document.querySelector(".music-info");
        if (musicInfoElement) {
            musicInfoElement.style.zIndex = isPlaying ? "10" : "-10"; // 根据状态切换 z-index
        }

    }, [isPlaying]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleSongEnd = () => {
        nextSong();
        // 自动切换到下一首
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const handleProgressChange = (event) => {
        if (progressBarRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const offsetX = event.clientX - rect.left; // 获取点击位置相对于进度条容器的距离
            const width = rect.width; // 获取进度条容器的宽度
            const time = (offsetX / width) * duration; // 计算新的播放时间
            setCurrentTime(time);
            audioRef.current.currentTime = time; // 更新音频的当前时间
        }
    };

    const updateCurrentTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const prevSong = () => {
        setIsPlaying(false); // 暂停当前歌曲
        setSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
        setIsPlaying(true);
    };

    const nextSong = () => {
        setIsPlaying(false); // 暂停当前歌曲
        setSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
        setIsPlaying(true);
    };




    return (
        <div className="music-body">
            <div className={`music-container ${isPlaying ? 'play' : ''}`}>
                <div className="img-container">
                    <img src={currentSong.cover} alt={`${currentSong.title} Cover`}/>
                </div>

                <div className="music-info">
                    <h4>{currentSong.title}</h4>
                    <div className="progress-container" ref={progressBarRef} onClick={handleProgressChange}>
                        <div className="progress" style={{width: `${(currentTime / duration) * 100}%`  }}></div>
                    </div>
                </div>

                <div className="volume-container" ref={volumeContainerRef}>
                    {/* 按钮 */}
                    <button
                        className="volume-toggle"
                        onClick={(e) => {
                            e.stopPropagation(); // 阻止事件冒泡
                            setIsVolumeVisible(!isVolumeVisible);
                        }}
                    >
                        <AiFillAudio />
                    </button>

                    {/* 垂直音量控制条 */}
                    <div
                        className={`volume-control ${isVolumeVisible ? 'visible' : ''}`}
                    >
                        <input
                            type="range"
                            id="volumeControl"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}

                            style={{
                                writingMode: 'bt-lr', /* 垂直方向 */
                                height: '100px', /* 设置高度 */
                                width: '4px', /* 设置宽度 */
                                backgroundColor: '#0decfc',
                                borderRadius: '5px',
                                outline: 'none',
                                appearance: 'slider-vertical', /* 使滑块垂直显示 */
                                transform: 'rotate(360deg)', /* 调整方向为从上到下 */
                                marginTop: '2px'
                            }}
                        />
                    </div>
                </div>

                <div className="navigation">
                    <button className="action-btn" onClick={prevSong}>
                        <AiFillStepBackward />
                    </button>
                    <button className="action-btn action-btn-big" onClick={togglePlayPause}>
                        {isPlaying ? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}
                    </button>
                    <button className="action-btn" onClick={nextSong}>
                        <AiFillStepForward />
                    </button>
                </div>
                <audio
                    ref={audioRef}
                    src={currentSong.src}
                    onTimeUpdate={updateCurrentTime}
                    onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                    onEnded={handleSongEnd}

                />
            </div>

        </div>
    );
}

export default MusicPlayer;