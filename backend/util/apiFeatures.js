class apiFeatures
{
    constructor(query,querystr)
    {
        this.query=query;
        this.querystr=querystr;
    }

    search()
    {
        const keyword=this.querystr.keyword ? {
           name:{$regex:this.querystr.keyword,
            $options:"i"
           },
        }:{};
        console.log(this.querystr.keyword);
        console.log(keyword);
        this.query=this.query.find({...keyword});
        //console.log(this.query);
        return this;
    }

    filter()
    {
        const querycopy={...this.querystr}
        const remove=["keyword","page","limit"];
        remove.forEach((element) =>delete querycopy[element]);
        let querystr=JSON.stringify(querycopy);
        querystr=querystr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);
        this.query=this.query.find(JSON.parse(querystr));
        return this;
    }

    pagination(resultPerPage)
    {
        const currentPage=Number(this.querystr.page)||1;
        const skip=resultPerPage*(currentPage-1);
        this.query=this.query.limit(resultPerPage).skip(skip);
        return this;
    }
};

module.exports=apiFeatures;
