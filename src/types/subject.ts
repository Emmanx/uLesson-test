export interface ICardStyle {
  icon: string;
  color: string;
  pattern: string;
  patternPosition: { [x: string]: string };
}

export interface ICardStyles {
  Mathematics: ICardStyle;
  Physics: ICardStyle;
  Chemistry: ICardStyle;
  Biology: ICardStyle;
  English: ICardStyle;
}

export interface ILesson {
  id: number;
  name: string;
  icon: string;
  media_url: string;
  subject_id: number;
  chapter_id: number;
}

export interface IChapter {
  id: number;
  name: string;
  lessons: ILesson[];
}

export interface ISubject {
  id: number;
  name: keyof ICardStyles;
  icon: string;
  chapters: IChapter[];
}

export interface ISubjectsRes {
  status: string;
  message: string;
  subjects: ISubject[];
}
