import s from './App.module.scss';
import MusicUploadForm from './components/MusicUploadForm/MusicUploadForm';
import { PlayingSong } from './components/PlayingSong/PlayingSong';
import { SongList } from './components/SongLIst/SongList';

const App = () => {
  return (
    <div className={s.app}>
      <MusicUploadForm />
      <SongList />
      <PlayingSong />
    </div>
  );
}

export default App;
