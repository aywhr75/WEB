const bestsell=
{
    fakeDB:[],

    init()
    {
        this.fakeDB.push({img:`/img/best1.jpg`});

        this.fakeDB.push({img:`/img/best2.jpg`});

        this.fakeDB.push({img:`/img/best3.jpg`});

        this.fakeDB.push({img:`/img/best4.jpg`});

    },
    getAllSection(){
        return this.fakeDB;
    },
}
bestsell.init();
module.exports=bestsell;