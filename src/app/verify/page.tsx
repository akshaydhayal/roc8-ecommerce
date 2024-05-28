export default function verifyEmailPage() {
  return (
    <div className="flex justify-center">
      <div className="mb-8 mt-10 h-[453px] w-[576px] rounded-2xl border border-[#C1C1C1]">
        <p className="mt-10 text-center text-[32px] font-semibold">
          Verify your email
        </p>
        <div className="flex justify-center">
          <p className="mb-11 mt-8 w-[334px] text-center text-base font-normal">
            Enter the 8 digit code you have received on
            <span className="text-base font-medium"> swa***@gmail.com</span>
          </p>
        </div>

        {/* <div className="flex flex-col gap-8 px-[60px]"> */}
        <div className="flex flex-col gap-[7px] px-[60px]">
          <p className="text-base font-normal">Code</p>
          <div className="flex gap-3">
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
            <input
              type="text"
              className="h-12 w-12 rounded-lg border border-[#C1C1C1] text-center"
            />
          </div>
        </div>
        {/* </div> */}

        <div className="w-full px-[60px]">
          <button className="mt-10 w-full rounded-lg bg-black px-[147px] py-[18px] text-base font-medium text-white ">
            VERIFY
          </button>
        </div>
      </div>
    </div>
  );
}
