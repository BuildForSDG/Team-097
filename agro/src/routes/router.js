/*
  TODO:
  Modified routing technique to allow for lazy loading -- done
*/

// Each object is a route with infromation to identify it. 

var routes = [
  {
    path: "/timeline",
    heading:"Timeline",
    name: "Timeline",
    //icon: "nc-icon nc-bullet-list-67",
    component: 'Social/Timeline',
    layout: "/dashboard"
  },
  {
    path: "/agronetworks",
    heading: "Agro-Networks",
    name: "Agro-Networks",
    //icon: "nc-icon nc-single-02",
    component:'AgroNetwork/AgroNetwork',
    layout: "/dashboard"
  },
  {
    path: '/agrocomodity',
    heading: "Agro Commodities",
    name: "Agro-Commodities",
    //icon: "nc-icon nc-single-02",
    component:'AgroComodity/AgroComodity',
    layout: "/dashboard"
  },
  {
    path: "/product",
    heading:"Product",
    name: "Product",
    //icon: "nc-icon nc-align-center",
    component: 'Ecommerce/Product',
    layout: "/dashboard"
  },
  {
    path: "/cart",
    heading:"Cart",
    name: "Cart",
    //icon: "nc-icon nc-cloud-upload-94",
    component: "Ecommerce/Cart",
    layout: "/dashboard"
  },
  {
    path: '/profile',
    heading: "Profile",
    name: "Profile",
    //icon: "nc-icon nc-single-02",
    component:'Profile/Profile',
    layout: "/dashboard"
  }
];
export default routes;
