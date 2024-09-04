const cardContainer = document.querySelector(".card");
const productCard = ({ title, img, price, desc }) => {
    return `
        <div class="w-full max-w-sm border rounded-lg text-white relative rounded-t-lg overflow-hidden">
            <a href="#">
            <div class="bg-white mb-3">
            <img class="w-full h-[220px] object-contain" src="${img}" alt="" />
            </div>
            </a>
            <div class="px-5 pb-5 flex flex-col gap-5">
                <a href="#"><h5 class="text-2xl font-semibold line-clamp-1">${title}</h5></a>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold">$${price}</span>
                    <a href="#" class="text-white bg-blue-700 outline-none font-medium rounded-lg text-sm px-5 py-3 text-center">Add to cart</a>
                </div>
                <p class="line-clamp-2">${desc}</p>
            </div>
        </div>
        `;
};

const productCardSkeleton = () => {
    return `
        <div class="w-full max-w-sm border rounded-lg text-white relative rounded-t-lg overflow-hidden animate-pulse">
            <div class="bg-gray-600 mb-3 h-[220px] w-full"></div>
            <div class="px-5 pb-5 flex flex-col gap-5">
                <div class="h-8 bg-gray-600 rounded w-3/4"></div>
                <div class="flex items-center justify-between">
                    <div class="h-6 bg-gray-600 rounded w-1/4"></div>
                    <div class="h-10 bg-gray-600 rounded w-1/3"></div>
                </div>
                <div class="h-12 bg-gray-600 rounded w-full"></div>
            </div>
        </div>
    `;
};



let productList = [];

const renderData = (data, container, fun) => {
    container.innerHTML = `${data.map(fun).join("")}`;
};


const fetchDataByApi = async () => {

    renderData([1,1,1,1],cardContainer,productCardSkeleton)
    let { data } = await axios.get("https://66d70f85006bfbe2e64fa810.mockapi.io/products");
    productList = data
    renderData(data, cardContainer, productCard);

};

fetchDataByApi()

const form = document.querySelector("form");
const searchProducts = document.querySelector(".inp");
const Submit = (e)=>{
  e.preventDefault();
  searchProducts.reset();
}
form.addEventListener("submit", Submit);





// let titles = ["apple","banana","mango"];
// // let inputValue = "t";
// let title = "na";
// let filterArr = titles.filter(item=>item.toLowerCase().includes(title.toLowerCase()));
// console.log(filterArr);
// // let match = title.includes(inputValue);
// console.log(match);
