export function  filterData  (searchInput, allRestaurants) {
    const filterData = allRestaurants.filter((restaurants) =>
      restaurants.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
  };
  