export interface Post {
  kind:string;
  data:{
    title:string;
    thumbnail:string;
    permalink:string;
  }
}

export interface Posts {
  kind:string;
  data:{ 
    children: Post[]}
 

}

