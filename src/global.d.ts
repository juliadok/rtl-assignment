interface Articles {
  description: string;
  bundelItems: Article[];
  label: string;
  title: string;
}

interface Article {
  id: number;
  urlAlias: string;
  afbeelding: ArticleImage;
  chapeau: string;
  titel: string;
  lead: string;
}

interface ArticleImage {
  afbeelding: string;
}

interface Rating {
  id: number;
  rating2: number;
}

type Ratings = Rating[];
