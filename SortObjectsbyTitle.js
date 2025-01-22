function SortObjectsbyTitle(arr){
   return arr.sort((a,b)=>{
    if(a.title-b.title){
        return -1;
    }else{
        return 1;
    }
    return 0;
   });

   
}


var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'zockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
var res=SortObjectsbyTitle(library);
console.log(res);