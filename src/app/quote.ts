export class Quote {
    showDetail: boolean
    postDate!: Date
    upVote: number
    downVote: number
    constructor(public id:number, public quote: string, public author: string, public publisher: string) {
        this.showDetail = false
        this.postDate = new Date()
        this.upVote= 0
        this.downVote= 0
    }
}
