import { useEffect, useState } from "react";

const useBrowserAgent = () => {
  const [isSafari, setSafari] = useState(false);

  useEffect(() => {
    const isSafari = navigator.vendor === "apple Computer, Inc";
    setSafari(isSafari);
  }, []);

  return { isSafari };
};

export default useBrowserAgent;
