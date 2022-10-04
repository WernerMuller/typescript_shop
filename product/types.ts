export interface Product {
data: [{
    _id: string,
    title: string,
    price: number,
    category: {
        _id: string,
        name: string,
        slug: string
    }
}],
status: number,
message: string
}

export interface singleProduct {
    
    _id: string,
    title: string,
    price: number,
    category: {
        _id: string,
        name: string,
        slug: string
    }

}