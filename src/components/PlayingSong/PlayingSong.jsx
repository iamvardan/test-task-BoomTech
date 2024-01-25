import { useDispatch, useSelector } from "react-redux"
import s from "./PlayingSong.module.scss"
import { setIsPlayingSong, setIsPlay } from "../../store/songsListSlice/songsListSlice"
import gif from "../../assets/music-sounds.gif"

export const PlayingSong = () => {
    const dispatch = useDispatch();
    const { isPlayingSong, currentSong, isPlay } = useSelector(state => state.songsListSlice);

    return (
        <div className={isPlayingSong ? s.playingSong : `${s.playingSong} ${s.hidden}`}>
            <div className={s.info}>
                <h3>{currentSong?.songName}</h3>
                <p>{currentSong?.artistName}</p>
            </div>
            <div className={s.actions}>
                <button>{"<<"}</button>
                <button onClick={() => dispatch(setIsPlay(!isPlay))}>  {isPlay ? "| |" : "▶"} </button>
                <button>{">>"}</button>
            </div>
            <div className={s.tools}>
                <img src={gif} className={!isPlay ? `${s.hidden}` : ''} alt="gif" />
                <p>{currentSong?.file}</p>
                <p className={s.closeButtton} onClick={() => dispatch(setIsPlayingSong(false))}>✖</p>
            </div>
        </div>
    )
}