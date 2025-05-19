import { useCallback, useEffect, useState } from 'react'
import Config from '../../helpers/Config'
import { useOutletContext } from 'react-router-dom';
import { useProductStore } from '../../utils/productStore';
import axios from 'axios';

const titles = "Dashboard";

const Dashboard = () => {


  // TODO: Getting favorites from the Gobal session
  const { FAVORITES } = useProductStore();

  const { setPageTitle } = useOutletContext();
  const baseUrl = Config[0].BASE_URL;
  const [expectedIncome, setExpectedIncome] = useState(0);
  const [PRODUCT_LIST, setPRODUCT_LIST] = useState([])
  const [CATEGORY_LIST, setCATEGORY_LIST] = useState([]);

 

  // TODO Set the page title dynamically
  useEffect(() => {
    setPageTitle(titles);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle]);


  // TODO:  Fetching Data from the api
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/products`);
      const rawList = response.data;
      const validProducts = rawList.filter(
        (item) => typeof item === 'object' && !Array.isArray(item) && item.price && item.category && item.rating
      );

      const totalExpectedIncome = validProducts.reduce(
        (sum, product) => sum + Number(product.price),
        0
      );

      setExpectedIncome(totalExpectedIncome.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }));
      setPRODUCT_LIST(validProducts);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [baseUrl, setPRODUCT_LIST, setExpectedIncome]);



  // TODO: Getting the catgories for the dropdown from the api
  const fetchCategories = useCallback(() => {
    axios.get(`${baseUrl}/categories`)
      .then(res => {
        const options = res.data
        setCATEGORY_LIST(options);
      })
      .catch(err => {
        console.error('Failed to fetch categories:', err);
      });
  }, [baseUrl, setCATEGORY_LIST]);

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, [fetchData, fetchCategories]);


  return (
    <div className="content">

      {/* Start Content*/}
      <div className="container-fluid">

        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box" >
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="#">{Config[0].BRAND_NAME}</a></li>
                  <li className="breadcrumb-item active">{titles}</li>
                </ol>
              </div>
              <h4 className="page-title">{titles}</h4>
            </div>
          </div>
        </div>
        {/* end page title */}

        <div className="row">
          <div className="col-12">
            <div className="card widget-inline">
              <div className="card-body p-0">
                <div className="row g-0">

                  <div className="col-sm-6 col-lg-3">
                    <div className="card rounded-0 shadow-none m-0 bg-success-lighten">
                      <div className="card-body text-center">
                        <i className=" ri-pie-chart-2-line text-muted font-24" />
                        <h3><span>{PRODUCT_LIST.length}</span></h3>
                        <p className="text-muted font-15 mb-0">Total Products</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card rounded-0 shadow-none m-0 border-start border-primary bg-primary-lighten">
                      <div className="card-body text-center">
                        <i className="ri-list-check-2 text-muted font-24" />
                        <h3><span>{CATEGORY_LIST.length}</span></h3>
                        <p className="text-muted font-15 mb-0">Total Categories</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card rounded-0 shadow-none m-0 border-start border-danger bg-danger-lighten">
                      <div className="card-body text-center">
                        <i className="ri-star-line text-muted font-24" />
                        <h3><span>{FAVORITES.length}</span></h3>
                        <p className="text-muted font-15 mb-0">Your Favorites</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card rounded-0 shadow-none m-0 border-start border-info bg-info-lighten">
                      <div className="card-body text-center">
                        <i className="ri-line-chart-line text-muted font-24" />
                        <h3><span>GHS{expectedIncome}</span> <i className="mdi mdi-arrow-up text-success" /></h3>
                        <p className="text-muted font-15 mb-0">Expected Income</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard