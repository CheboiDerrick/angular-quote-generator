export class Quote {
    showDetail: boolean
    postDate!: Date
    upVote: number
    downVote: number
    constructor(public quote: string, public author: string, public publisher: string) {
        this.showDetail = false
        this.postDate = new Date()
        this.upVote= 5
        this.downVote= 3
    }
}
