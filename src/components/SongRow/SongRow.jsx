import { useDispatch } from "react-redux";
import s from "./SongRow.module.scss";
import { setCurrentSong, setIsPlayingSong, setIsPlay } from "../../store/songsListSlice/songsListSlice";

export const SongRow = ({ songName, artistName, trackNumber, file }) => {
    const dispatch = useDispatch()
    const playSong = () => {
        dispatch(setIsPlayingSong(true));
        dispatch(setIsPlay(true));
        dispatch(setCurrentSong({
            songName,
            artistName,
            trackNumber,
            file
        }));
    }

    return (
        <div className={s.songRow} onClick={playSong}>
            <p>{trackNumber}</p>
            <p>{songName}</p>
            <p>{artistName}</p>
            <p>{file}</p>
        </div>
    )
}