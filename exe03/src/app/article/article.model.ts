export class Article {
  private title: string;
  private link: string;
   votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes++;
  }
  voteDown() {
    this.votes--;
  }
  getNormalizeURL(): string {
    try {
      let url = this.link;
      if ( url.startsWith('http')) {
      url = url.substr(7);
      }
      return url;
    } catch (err) {
      return null;
    }
  }
}
