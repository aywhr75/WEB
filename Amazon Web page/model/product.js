const products=
{

    fakeDB:[],

    init()
    {
        this.fakeDB.push({title:'Samsung Galaxy Fold SM-F907N',
        description:`Single Sim 512GB 12GB RAM(GSM Only, No CDMA) Factory Unlocked No Warranty - International Version (Cosmos Black)`,
        price:`CDN$3,086.14`, img:`img/phone1.png`, lanking:`#1`});
    
         this. fakeDB.push({title:'Galaxy S6 Edge Case',description:`Obliq [Dual Poly Bumper] [Gold,Silver,and Black] 
         Thin Slim Fit Bumper Armor Scratch Resist Polycarbonate Finish Dual Layered Heavy Duty Hard Protection 
         Hybrid High Quality Cover (for Samsung Galaxy S6 Edge) `,price:`CDN$12.99`, img:`/img/case1.png`, lanking:`#2`});
    
        this.fakeDB.push({title:'JBL Flip 4 Waterproof Portable Bluetooth Speaker (Black)by JBL',
        description:`Wirelessly connect up to 2 smartphones or tablets to the speaker and take turns playing impressive stereo sound`,
        price:`CDN$ 119.99`, img:`/img/speak1.png`, lanking:`#3`});

        this.fakeDB.push({title:'Phone Charger 5Pack',
        description:`3FT 3FT 6FT 6FT 10FT Nylon Braided USB Charging & Syncing Cable 
        Compatible with Phone 11 Pro Max 11 Pro 11 XS MAX XR X 8 8 Plus 7 7 Plus 6s 6s Plus 6 6 Plus and More`,
        price:`CDN$ 14.99`, img:`/img/cab1.png`, lanking:`#4`});

        this.fakeDB.push({title:'Apple MMEF2AM/A',
        description:`AirPods Wireless Bluetooth Headset for iPhones with iOS 10 or Later White`,
        price:`CDN$242.72`, img:`/img/airp.jpg`, lanking:`#5`});

        this.fakeDB.push({title:'Samsung Gear S2 Smartwatch',
        description:`Function meets style with elegant curves and premium finishes`,
        price:`CDN$ 486.66`, img:`/img/smartwat.jpg`, lanking:`#6`});

    },
    getAllProducts()
    {
        return this.fakeDB;
    }
}
products.init();
module.exports=products;