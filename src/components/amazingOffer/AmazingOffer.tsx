//! Components

import AdvertisingBanner from "./AdvertisingBanner";
import CountdownBadge from "./CountDownBadge";

function AmazingOffer() {
  //! Date
  const end = new Date();
  end.setDate(end.getDate() + 2);
  end.setHours(23, 59, 59, 999);

  //! JSX
  return (
    <>
      <div className="container m-auto flex justify-between items-center gap-4 mb-6 lg:mb-10 lg:mt-40 px-4">
        <p className="text-site font-semibold pb-2 lg:text-3xl">
          پیشنهاد شگفت انگیز
        </p>
        <div className="hidden lg:block flex-1 border-t border-dotted border-site" />
        <CountdownBadge endAt={end} />
      </div>
      <AdvertisingBanner />
    </>
  );
}

export default AmazingOffer;
