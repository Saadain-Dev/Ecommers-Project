const cardContainer = document.querySelector(".card");
const productCard = ({ title, img, price, desc }, index) => {
    return `
        <div class="w-full max-w-sm border rounded-lg text-white relative" data-index="${index}">
            <a href="#">
            <img class="p-8 rounded-t-lg w-full h-[200px] object-contain" src="${img}" alt="" />
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
const renderData = (data, container, fun) => {
    container.innerHTML = `${data.map(fun).join("")}`;
};


const fetchDataByApi = async () => {
    let { data } = await axios.get("https://66d70f85006bfbe2e64fa810.mockapi.io/products");
    renderData(data, cardContainer, productCard);

};

fetchDataByApi()







