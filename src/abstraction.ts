// OOP - Abstraction (Like Sarangsho or Sharmormo in Bangla )

// idea
// implementation pore korbo


/*
    1. interface
    2. abstract class
*/


// interface >> contract / agreement

/*
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log('Playing music...');
    } 
    pause(): void {
        console.log('Pausing music...');
    }
    stop(): void {
        console.log('Stopping music...');
    }
}

const myMusicPlayer = new MusicPlayer(); //instance
myMusicPlayer.play();
myMusicPlayer.pause();
myMusicPlayer.stop();
*/

// --------------------------------------------------------------
// abstract class >> contract + partial implementation

//idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

//implementation
class SubrotoMusicPlayer extends MediaPlayer {
    play(): void {
        console.log('Playing music...');
    } 
    pause(): void {
        console.log('Pausing music...');
    }
    stop(): void {
        console.log('Stopping music...');  
    }
}

// SubrotoMusicPlayer.play(); // error

const subrotoMusicPlayer = new SubrotoMusicPlayer();
subrotoMusicPlayer.play();
subrotoMusicPlayer.pause();
subrotoMusicPlayer.stop();