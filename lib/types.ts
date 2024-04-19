
export type Images ={
    id:string
    url:string
  }
  
  export type Technologies = {
    id:string
    label:string;
    value:string;
    icon:string;
    url:string
    version:string;
  }

 export type Task = {
      id: string;
      date:string;
      priority:string;
      title: string
      description: string
      technologies: Technologies[],
      isFinished: Boolean,
      images:Images [],
    }  

export type TaskCategoryRecordType = {
    [key: string]: Task[];
  }