import axios from "@/utils/axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  `customer/products`,
  async (data) => {
  
    const response = await axios.get("products/list", {
      params: {
        name: data?.name,
        
  
      },
    });
    return response;
  }
);

export const getSingleProduct = createAsyncThunk(
  `customer/getSingleProduct`,
  async (id) => {
    const response = await axios.get(`products/find/${id}`);
    return response;
  }
);

export const addtocart = createAsyncThunk(
  `customer/addToCart`,
  async (data) => {
    const response = await axios.post(`carts/add`, data);
    return response;
  }
);

export const getcartData = createAsyncThunk(
  "customer/getcartData",
  async (data) => {
    const response = await axios.get(`carts/in-cart`);
    return response.data;
  }
);

export const RemoveFromCart = createAsyncThunk(
  "order/RemoveFromCart",
  async (data) => {
    const response = await axios.post(`carts/remove`, data);
    return response.data;
  }
);


export const getcategories = createAsyncThunk(
  "customer/getcategories",
  async (data) => {
    const response = await axios.get(`products/categories/list`);
    return response.data;
  }
);
export const getSingleCats = createAsyncThunk(
  `customer/getSingleCats`,
  async (id) => {
    const response = await axios.get(`products/list?category_id=${id}`);
    return response;
  }
);

//chekout

export const addtocheckout = createAsyncThunk(
  `customer/checkout`,
  async (data) => {
    const response = await axios.post(`checkout`, data);
    return response;
  }
);

export const verifyPayment = createAsyncThunk(
  `customer/verifyPayment`,
  async (data) => {
    const response = await axios.post(`checkout/verify`, {"reference": data});
    return response;
  }
);

export const orderHistory = createAsyncThunk(
  `customer/orderHistory`,
  async (data) => {
    const response = await axios.get(`orders/list`);
    return response;
  }
);



// export const contributorLogin = createAsyncThunk(
// 	`contributor/register`,
// 	async ({ createData, cateID }) => {
// 		return getCsrf().then(async () => {
// 			const response = await axios.post(
// 				`/account/contributor/categories/${cateID}/register-auth-user`,
// 				createData
// 			);
// 			return response;
// 		});
// 	}
// );

const initialState = {
  allproducts: {
    results: null,
    isLoading: true,
  },
  singleproducts: {
    results: null,
    isLoading: true,
  },

  addcart: {
    isLoading: false,
    results: null,
    success:false
  },

  getcart: {
    isLoading: false,
    results: null,
  },

  removecart: {
    isLoading: false,
    results: null,
  },

  getcats: {
    results: null,
    isLoading: true,
  },

  singlecats: {
    results: null,
    isLoading: true,
  },

  checkout: {
    results: null,
    isLoading: false,
    success: false,

  },
  verify: {
    results: null,
    isLoading: false,
  },
    getOrder: {
    results: null,
    isLoading: true,
  },

  search: {
    results: null,
    isLoading: true,
  },

};

export const productSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.allproducts.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.allproducts.isLoading = false;
        state.allproducts.results = payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.allproducts.isLoading = true;
      });

    //single products
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.singleproducts.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.singleproducts.isLoading = false;
        state.singleproducts.results = payload;
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.singleproducts.isLoading = true;
      });

    //add to cart
    builder
      .addCase(addtocart.pending, (state) => {
        state.addcart.isLoading = true;
        state.addcart.success = false;
      })
      .addCase(addtocart.fulfilled, (state, { payload }) => {
        state.addcart.isLoading = false;
        state.addcart.success = true;

        state.addcart.results = payload;

      })
      .addCase(addtocart.rejected, (state, { payload }) => {
        console.log(payload);
        state.addcart.isLoading = true;
        state.addcart.success = false;

      });

    //GET CART
    builder
      .addCase(getcartData.pending, (state) => {
        state.getcart.isLoading = true;
      })
      .addCase(getcartData.fulfilled, (state, { payload }) => {
        state.getcart.isLoading = false;
        state.getcart.results = payload;
      })
      .addCase(getcartData.rejected, (state) => {
        state.getcart.isLoading = true;
      });

    //remove to cart
    builder
      .addCase(RemoveFromCart.pending, (state) => {
        state.removecart.isLoading = true;
      })
      .addCase(RemoveFromCart.fulfilled, (state, { payload }) => {
        state.removecart.isLoading = false;
        state.removecart.results = payload;
      })
      .addCase(RemoveFromCart.rejected, (state) => {
        state.removecart.isLoading = true;
      });


      //categories
      builder
      .addCase(getcategories.pending, (state) => {
        state.getcats.isLoading = true;
      })
      .addCase(getcategories.fulfilled, (state, { payload }) => {
        state.getcats.isLoading = false;
        state.getcats.results = payload;
      })
      .addCase(getcategories.rejected, (state) => {
        state.getcats.isLoading = true;
      });

      builder
      .addCase(getSingleCats.pending, (state) => {
        state.singlecats.isLoading = true;
      })
      .addCase(getSingleCats.fulfilled, (state, { payload }) => {
        state.singlecats.isLoading = false;
        state.singlecats.results = payload;
      })
      .addCase(getSingleCats.rejected, (state) => {
        state.singlecats.isLoading = true;
      });

      builder
      .addCase(addtocheckout.pending, (state) => {
        state.checkout.isLoading = true;
        state.checkout.success = false;

      })
      .addCase(addtocheckout.fulfilled, (state, { payload }) => {
        state.checkout.isLoading = false;
        state.checkout.results = payload;
        state.checkout.success = true;

        
      })
      .addCase(addtocheckout.rejected, (state, { payload }) => {
        console.log(payload);
        state.checkout.isLoading = true;

      });

      builder
      .addCase(verifyPayment.pending, (state) => {
        state.verify.isLoading = true;

      })
      .addCase(verifyPayment.fulfilled, (state, { payload }) => {
        state.verify.isLoading = false;
        state.verify.results = payload;

      })
      .addCase(verifyPayment.rejected, (state, { payload }) => {
        console.log(payload);
        state.verify.isLoading = true;

      });
        builder
      .addCase(orderHistory.pending, (state) => {
        state.getOrder.isLoading = true;

      })
      .addCase(orderHistory.fulfilled, (state, { payload }) => {
        state.getOrder.isLoading = false;
        state.getOrder.results = payload;

      })
      .addCase(orderHistory.rejected, (state, { payload }) => {
        state.getOrder.isLoading = true;

      });

  },
});

export default productSlice.reducer;
