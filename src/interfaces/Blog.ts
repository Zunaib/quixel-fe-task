export interface IBlog {
  id: string;
  title: string;
  imageURL: string;
  content: string;
}

export interface IAddBlogForm {
  blog: IBlog,
  saveBlogHandler: () => void,
  setBlog: (e: any) => void,
}

export interface IBlogCard {
  id: string;
  title: string;
  imageURL: string;
  content: string;
  onClick: (id: string) => void;
}

export type BlogParams = {
  id: string;
};