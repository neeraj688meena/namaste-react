import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2237635&lng=75.8809701&restaurantId=${resId}`;

      const response = await fetch(apiUrl);

      const data = await response.json();
      console.log("resinfo--", data);

      setResInfo(data);
    } catch (error) {
      console.log("Fetch failed:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
