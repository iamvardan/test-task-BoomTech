import { useDispatch, useSelector } from "react-redux"
import { setCurrentSong, setIsPlay, setIsPlayingSong } from "../../store/songsListSlice/songsListSlice";

export const PlayAllButton = () => {
    const dispatch = useDispatch();
    const { songsList } = useSelector(state => state.songsListSlice);

    const playAll = () => {
        dispatch(setCurrentSong(songsList[0]));
        dispatch(setIsPlayingSong(true));
        dispatch(setIsPlay(true));
        console.log('Play All');
    }
    return (
        <button onClick={playAll}>▶ Play all</button>
    )
}