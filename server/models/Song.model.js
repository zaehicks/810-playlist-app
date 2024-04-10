import getId from "../utils/getId.js";

/* 
This class provides an interface for managing Fellow data. 
Instances of this class can't do much really. They just store data.

The class itself provides static methods for CRUD actions on 
the collection of fellows.
*/
class Song {
  static #all = [];

  constructor(name) { // Create
    this.id = getId();
    this.name = name;

    Song.#all.push(this);
  }

  static list() { // Get all
    return [...Song.#all];
  }

  static find(id) { // Get one
    return Song.#all.find((song) => song.id === id);
  }

  static editName(id, newName) { // Update
    const song = Song.find(id);
    if (!song) return null;
    song.name = newName;
    return song;
  }

  static delete(id) { // Delete
    const songIndex = Song.#all.findIndex((song) => song.id === id);
    if (songIndex < 0) return null;

    Song.#all.splice(songIndex, 1);
    return true;
  }

  static deleteAll() { // Delete All
    if (!Song.#all.length) return null;

    Song.#all.length = 0;
    return Song.#all;
  }
}

export default Song;