export interface Post {
    title:string;
    thumbnail:string;
    permalink:string;
    
}

export interface Posts {
  modhash: string;
  dist: number;
  children: Post[]

}
