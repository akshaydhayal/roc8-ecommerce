export default function userCategoriesPage() {
  return (
    <div className="flex justify-center">
      <div className="mt-10 h-[658px] w-[576px] rounded-2xl border border-[#C1C1C1]">
        <p className="mt-10 text-center text-[32px] font-semibold">
          Please mark your interests!
        </p>
        <p className="text-4 mt-6 text-center font-normal">
          We will keep you notified.
        </p>

        <div className="mt-9 px-[60px]">
          <p className="text-xl font-medium">My saved interests!</p>
          <div className="mt-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-6 w-6 rounded-lg" />
              <p className="text-base font-normal">Shoes</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-6 w-6 rounded-lg" />
              <p className="text-base font-normal">Men T-shirts</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-6 w-6 rounded-lg" />
              <p className="text-base font-normal">Makeup</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-6 w-6 rounded-lg" />
              <p className="text-base font-normal">Jewellery</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-6 w-6 rounded-lg" />
              <p className="text-base font-normal">Women T-shirts</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-6 w-6 rounded-lg" />
              <p className="text-base font-normal">Furniture</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xl font-medium text-[#ACACAC] mt-16">
          1   2   3   4<span className="text-black">5</span> 6 7 ...
        </p>
      </div>
    </div>
  );
}
