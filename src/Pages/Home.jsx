import { useNavigate } from "react-router-dom"
import ProductSmall from "../Components/ProductSmall"
import Caraousel from "../Components/sliders/Caraousel"
import SmallCaraousel from "../Components/sliders/SmallCaraousel"


const Home = () => {

  const navigator = useNavigate()

  const productData = [
    {
      title: "Man's Fashion",
      data: [
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
      ]
    },

    {
      title: "Women's Fashion",
      data: [
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
        {
          Name: "Shoes",
          Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Image: "https://readymadeui.com/images/product9.webp",
          RealPrice: "100",
          DiscountedPrice: "200",
        },
      ]
    },
  ]

  return (

    

    <div className="w-full mt-[10vh] ">

      <Caraousel />

      {/* small caraousels gallery */}
      <div className=" py-3 flex flex-col gap-y-10 ">
        {
          productData?.map(categoryDets => (
            <div className="h-auto px-3">

              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900"> {categoryDets?.title} </h2>
                <button onClick={()=>navigator("/product")} class="flex hover:underline items-center text-indigo-700  py-2 px-1  rounded">
                  <span>
                    View More
                  </span>
                  <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>

              <SmallCaraousel products={categoryDets?.data} />
            </div>
          ))
        }
      </div>



    </div>
  )
}

export default Home