export interface RecordLabel {
    id: number;
    name: string;
    foundedYear: number;
    location: string;
    website: string;
  }
  
  export interface Singer {
    id: number;
    name: string;
    description: string;
    age: number;
    isActive: boolean;
    birthDate: string;
    imageUrl: string;
    genre: string;
    hitSongs: string[];
    recordLabel: RecordLabel;
  }
  