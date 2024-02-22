export default interface ArtPiece {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  date_end: number;
  artist_title: string;
  artist_display: string;
  dimensions: string;
  department_title: string;
}

interface Thumbnail {
  alt_text: string;
  lqip: string;
}
