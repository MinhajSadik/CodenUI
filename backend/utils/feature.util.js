
class Features {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    static async pagination(resultPerPage) {
        const currentPage = Number(this.queryString.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}


export default Features;