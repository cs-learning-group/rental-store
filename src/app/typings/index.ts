interface Product {
    name:string;
    id:string;
    price:number;
    category?:string[];
    details?:string;
    reviews?:Review[];
    version?:string;

    color?:string;
    quantity:number;
    inStock:boolean;
    // storeDetail:Seller[];
}

interface Review {
    id:string;
    reviewerId:string;
    /**
     * Target Id can be either productId or sellerId for which review is given.
    */
   targetId:string;
   message:string;
   rating:number;
   CT: string;
   UT:string;
   image?:string[]
}


interface User {
    id:string;
    roleId:string[];
    name:string;
    firstName:string;
    lastName:string;
    emailId?:string;
    countryCode:string;
    phone:number;
    gender:string;
    password:string;
    profileImg?:string;
    address:Address;
}

// interface Seller {
//     sellerName:string;
//     shopName:string;
//     shopId:number;
//     shopDiscription:string;
//     shopReview:string;
//     shopAddress:Address;
//     sellerProfile: User;
// }


interface Address {
    id:string;
    locality:string;
    locality2?:string;
    landMark?:string;
    city?:string;
    state?:string;
    country:string;
    pinCode:number;
    // location:string;
    // address:string;
}


// interface Delivery {
//     deliveryProfile:User;
// }

// interface Helpline {
//     helplineNumber:number;
//     helplineEmail:string;
// }

interface Complaint {
    tokenId:number;
    problemType:string;
    date:string;
    complaintStatus:string; 
    problemDescription:string;
}

interface Stock {
    id:string;
    productId:string;
    storeId:string;
    quantity:number;
}
