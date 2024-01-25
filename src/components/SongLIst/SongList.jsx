import { useSelector } from "react-redux"
import s from "./SongList.module.scss"
import { SongRow } from "../SongRow/SongRow";
import { AddAllButton } from "../AddAllButton/AddAllButton";
import { PlayAllButton } from "../PlayAllButton/PlayAllButton";

export const SongList = () => {
    const { songsList } = useSelector(state => state.songsListSlice);

    return (
        <div className={s.songList}>
            <h2>Songs List</h2>
            <div className={s.actions}>
                <AddAllButton />
                <PlayAllButton />
            </div>
            <div className={s.content}>
                {
                    songsList.map(elm => <SongRow key={elm.trackNumber} songName={elm.songName} artistName={elm.artistName} trackNumber={elm.trackNumber} file={elm.file} />)
                }
            </div>
        </div>
    )
}