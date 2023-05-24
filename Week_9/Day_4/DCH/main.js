// Daily Challenge : Creating Objects

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all  ${this.time} of ${this.title}`)
    }

}
let films = new Video("Titanic", "Tom", "2:45")
console.log(films)
films.watch()
let films2 = new Video('The Super Mario Bros', 'Anna', '1:55')
films2.watch()
let films3 = new Video('John Wick: Chapter 4', 'Alex', '2:55')
films3.watch()

let arr = []

let arrNew = []
arr.push(films)
arr.push(films2)
arr.push(films3)

console.log(arr)

