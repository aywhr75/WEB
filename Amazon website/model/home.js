const home=
{
    fakeDB:[],

    init()
    {
        this.fakeDB.push({title:'CellPhones & Accessaries',img:`/img/cell.jpg`});
    
        this. fakeDB.push({title:'Shop deals in Tools',img:`/img/tool.jpg`});
    
        this.fakeDB.push({title:'TV & Home Theatre',img:`/img/tv.jpg`});

        this.fakeDB.push({title:'Furniture',img:`/img/home.jpg`});
    },
    getAllSection(){
        return this.fakeDB;
    }
}
home.init();
module.exports=home;