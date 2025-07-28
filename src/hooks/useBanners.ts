import { getAllBanners } from "@/api/services/banners";
import { useEffect, useState } from "react";

export const useBanners = () => {
  const [banners, setBanners] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBanners = async () => {
    try {
      const response = await getAllBanners();

      if (response.status == 200) {
        setBanners(response.data);
      } else {
      }
    } catch (error) {
      console.log(`BANNERS ERROR : ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return { banners, loading };
};
