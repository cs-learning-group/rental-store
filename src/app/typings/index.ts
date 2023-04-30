interface Product {
    prductName:string;
    productId:number;
    price:number;
    inStock:boolean;
    discount:number;
    color?:string;
    quantity:number;
    category:string;
    productDetails?:string;
    reviews?:string;
    version?:string;
    sellerDetail:Seller;
}

interface Seller {
    sellerName:string;
    shopName:string;
    shopId:number;
    shopDiscription:string;
    shopReview:string;
    shopAddress:Address;
    sellerProfile: User;
}

interface User {
    userName:string;
    role:string;
    userEmailId:string;
    userPhone:number;
    gender:string;
    userPassword:any;
    userProfileImg:string;
    purchasedItem?: Product;
    userAddress:Address;
}

interface Address {
    address:string;
    landMark:string;
    pinCode:number;
    state?:string;
    city?:string;
}

interface Admin {
    adminAuthentication:User;

}

interface StoreDetail {
    storeDetail: Seller;
}

interface Delivery {
    deliveryProfile:User;
}

interface Helpline {
    helplineNumber:number;
    helplineEmail:string;

}

interface Complaint {
    tokenId:number;
    problemType:string;
    date:string; 
    problemDescription:string;
}

interface Inventory {
    stocks:Product;
}
